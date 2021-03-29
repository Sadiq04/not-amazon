import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Store from "../views/Store.vue";
import Product from "../components/Product.vue";
import About from "../views/About.vue";
import AddProduct from "../components/addProduct";
import GibCreditCardInformation from "../components/gibCreditCardInformation";

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/store",
    name: "Store",
    component: Store,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/addProduct",
    name: "AddProduct",
    component: AddProduct
  },
  {
    path: "/gibCreditCardInformation",
    name: "GibCreditCardInformation",
    component: GibCreditCardInformation
  },
];

const router = new VueRouter({
  routes,
});

export default router;
