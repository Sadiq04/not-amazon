<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Product name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          placeholder="Enter the name of the Product"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Product type:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.type"
          placeholder="Enter the type of Product"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Price:" label-for="input-3">
        <b-form-input
          type="number"
          min="0"
          id="input-3"
          v-model="form.price"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Seller name:"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="form.seller"
          type="text"
          placeholder="Enter your username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Available Stock:" label-for="input-5">
        <b-form-input
          type="number"
          min="1"
          id="input-5"
          v-model="form.stock"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Product image link:" label-for="input-2" description= "You can't put it your own image file because I'm not smart enough for that yet">
        <b-form-input
          id="input-6"
          v-model="form.image"
          placeholder="(Optional)"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "addProduct",
    data() {
      return {
         form: {
           name: "",
           type: "",
           price: null,
           seller: "",
           stock: null,
           image: ""
         }
      }
    },
    methods: {
        ...mapActions([
            "addProduct"
        ]),
        onSubmit() {
           const { name, type, price, seller, stock, image } = this.form
           const newProduct = {
               name,
               type,
               price,
               seller,
               stock,
               image,
               deletable: true,
               buyable: false,
           }
           this.addProduct(newProduct)
           this.form = {
           name: "",
           type: "",
           price: null,
           seller: "",
           stock: null,
           image: ""
           }

        }
    }
}
</script>
