<template>
   <div style="text-align: right">
    <img style="float: left; max-width: 35%; max-height: 265px" v-bind:src='products[this.$route.params.id]["image"]'>
    <h1>Product: {{ products[this.$route.params.id]["name"] }} </h1>
    <h1>Type: {{ products[this.$route.params.id]["type"] }} </h1>
    <h1>Cost: {{ products[this.$route.params.id]["price"] }}$ </h1>
    <h1>Seller: {{ products[this.$route.params.id]["seller"] }} </h1>
    <h1>Stock: {{ products[this.$route.params.id]["stock"] }} </h1>
     <router-link to="/store"><button class="btn btn-primary" v-if='products[this.$route.params.id]["deletable"]' @click="removeData">Remove Item</button></router-link>
     <router-link to="/gibCreditCardInformation"><button class="btn btn-primary" v-if='products[this.$route.params.id]["buyable"]'>Buy</button></router-link>
   </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
  data() {
    return {
     index: this.$route.params.id,
     fields: ["name", "type", "price", "seller", "stock"],
    }
  },
  computed: {
     ...mapState([
       "products"
    ])
  },
  methods: {
    ...mapActions([
      "deleteProduct"
    ]),
    removeData() {
       this.deleteProduct(this.index)
    }
  }
}
</script>
