import path from "path";
import url from "url";

import "@babel/polyfill";
import "es6-promise/auto";
import AsyncComputed from "vue-async-computed";
import BootstrapVue from "bootstrap-vue";
import bs58 from "bs58";
import pMap from "p-map";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "leaflet/dist/leaflet.css";

import Catalog from "./components/Catalog.vue";
import Item from "./components/Item.vue";

Vue.use(AsyncComputed);
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuex);

const CATALOG_URL =
  process.env.CATALOG_URL ||
  "https://s3-us-west-2.amazonaws.com/radiant-nasa-iserv/iserv.json";

const makeRelative = uri => {
  const rootURI = url.parse(CATALOG_URL);
  const localURI = url.parse(uri);

  if (rootURI.hostname !== localURI.hostname) {
    return uri;
  }

  return path.relative(path.dirname(rootURI.pathname), localURI.pathname);
};

/**
 * Generate a slug (short, URL-encodable string) for a URI.
 *
 * @param {String} uri URI to generate a slug for.
 * @returns Base58-encoded relative path to the root catalog.
 */
const slugify = uri => bs58.encode(Buffer.from(makeRelative(uri)));

const resolve = (href, base = CATALOG_URL) => new URL(href, base).toString();

const main = async () => {
  const routes = [
    {
      path: "/item/:path*",
      component: Item,
      props: route => {
        let urls = [CATALOG_URL];

        if (route.params.path != null) {
          urls = urls.concat(
            route.params.path
              .split("/")
              .map(s => resolve(bs58.decode(s).toString()))
          );
        }

        let center = null;

        if (route.hash != "") {
          center = route.hash.slice(1).split("/");
        }

        return {
          ancestors: urls,
          center,
          fullscreen: route.query.fullscreen === "true",
          path: route.path,
          resolve,
          slugify,
          url: urls.slice(-1).pop()
        };
      }
    },
    {
      path: "/:path*",
      component: Catalog,
      props: route => {
        let urls = [CATALOG_URL];

        if (route.params.path != null) {
          urls = urls.concat(
            route.params.path
              .split("/")
              .map(s => resolve(bs58.decode(s).toString()))
          );
        }

        return {
          ancestors: urls,
          path: route.path,
          resolve,
          slugify,
          url: urls.slice(-1).pop()
        };
      }
    }
  ];

  const store = new Vuex.Store({
    state: {
      entities: {},
      loading: {}
    },
    getters: {
      getEntity: state => uri => state.entities[uri]
    },
    mutations: {
      LOADING(state, url) {
        state.loading = {
          ...state.loading,
          [url]: true
        };
      },
      LOADED(state, { entity, url }) {
        state.entities = {
          ...state.entities,
          [url]: entity
        };

        state.loading = {
          ...state.loading,
          [url]: false
        };
      }
    },
    actions: {
      async load({ commit, state }, url) {
        if (state.entities[url] != null || state.loading[url] === true) {
          // already loading / loaded
          return;
        }

        commit("LOADING", url);

        const entity = await (await fetch(url)).json();

        commit("LOADED", { entity, url });
      }
    },
    strict: process.env.NODE_ENV !== "production"
  });

  const router = new VueRouter({
    base: process.env.PATH_PREFIX || "/",
    mode: "history",
    routes
  });

  router.beforeEach(async (to, from, next) => {
    // pre-load all known entities
    if (to.params.path != null) {
      const urls = [CATALOG_URL].concat(
        to.params.path
          .split("/")
          .reverse()
          .map(p => resolve(bs58.decode(p).toString()))
      );

      await pMap(urls, store.dispatch.bind(store, "load"), {
        concurrency: 10
      });
    } else {
      await store.dispatch("load", CATALOG_URL);
    }

    return next();
  });

  new Vue({
    el: "#app",
    router,
    store,
    template: `<router-view />`
  });
};

main();
