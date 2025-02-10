import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useProductStore } from './product'

export const useOrderStore = defineStore('order', () => {
  const productStore = useProductStore()
  const orders = ref<{ id: number; date: string; items: { productId: number; quantity: number }[] }[]>([])
  // [[{productId, quantity}], [{productId, quantity}], ...]

  const createOrder = () => {
    const order =  {
      id: orders.value.length + 1,
      date: new Date().toISOString(),
      items: productStore.cartItems.map(item => ({
        productId: item.product.id,
        quantity: item.quantity,
    }))
    }
    orders.value.push(order)
  }

  const getProductDetails = (productId: number) => {
    const product = productStore.products.find(product => product.id === productId)
    if (product) {
      return {
        picture: product.picture,
        name: product.name,
        price: product.price
      }
    }
    return null
  }

  const calculateTotalPrice = (items: { productId: number; quantity: number }[]) => {
    return items.reduce((total, item) => {
      const product = productStore.products.find(product => product.id === item.productId)
      return total + (product ? product.price * item.quantity : 0)
    }, 0)
  }

  return {
    orders,
    createOrder,
    getProductDetails,
    calculateTotalPrice,
  }
}, {
  persist: true
})
