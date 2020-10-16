import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2ff5d826 = () => interopDefault(import('..\\pages\\layout\\index.vue' /* webpackChunkName: "" */))
const _71e217db = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "" */))
const _2a986250 = () => interopDefault(import('..\\pages\\article\\index.vue' /* webpackChunkName: "" */))
const _454a46a9 = () => interopDefault(import('..\\pages\\editor\\index.vue' /* webpackChunkName: "" */))
const _4586967a = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "" */))
const _14bc1b43 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "" */))
const _0250619f = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _2ff5d826,
    children: [{
      path: "",
      component: _71e217db,
      name: "home"
    }, {
      path: "/article/:slug",
      component: _2a986250,
      name: "article"
    }, {
      path: "/editor/:slug?",
      component: _454a46a9,
      name: "editor"
    }, {
      path: "/login",
      component: _4586967a,
      name: "login"
    }, {
      path: "/register",
      component: _4586967a,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _14bc1b43,
      name: "profile"
    }, {
      path: "/settings",
      component: _0250619f,
      name: "settings"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
