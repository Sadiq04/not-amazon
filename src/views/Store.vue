<template>
  <div class="store">
    <b-table table-variant="secondary" bordered hover :items="products" :fields="fields">
       <template #cell(name)="data">
        <router-link :to="`product/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
   </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  data() {
    return {
     fields: ["name", "type", "price", "seller", "stock"],
    }
  },
  computed: {
     ...mapState([
       "products"
    ])
  },

}
</script>
