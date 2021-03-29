export default {
   appendProduct: (state, newProduct) => {
       state["products"].push(newProduct)
   },
   removeProduct: (state, index) => {
       state["products"].splice(index, 1)
   }
}