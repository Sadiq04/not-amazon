export default {
   addProduct: ({ commit }, newProduct) => {
      commit("appendProduct", newProduct)
   },
   deleteProduct: ({ commit }, index) => {
      commit("removeProduct", index)
   }
}