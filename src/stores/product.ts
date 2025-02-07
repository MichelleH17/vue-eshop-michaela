import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '../types'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])
  const cartItems = ref<{ product: Product; quantity: number }[]>([])
  const orders = ref<{ id: number; date: string; items: { productId: number; quantity: number }[] }[]>([])
  // [[{productId, quantity}], [{productId, quantity}], ...]

  const fetchProducts = async () => {
    try {
      const response = await fetch('src/shop-items.json')
      products.value = await response.json()
    } catch (error) {
      console.error('Failed to load products:', error)
    }
  }

  const addItem = (product: Product) => {
    const itemInCart = cartItems.value.find((item) => item.product.id === product.id)
    if (itemInCart) {
      itemInCart.quantity++
    } else {
      cartItems.value.push({ product, quantity: 1 })
    }
  }

  const removeItem = (product: Product) => {
    cartItems.value = cartItems.value.filter((item) => item.product.id !== product.id)
  }

  const increaseQuantity = (product: Product) => {
    const itemInCart = cartItems.value.find((item) => item.product.id === product.id)
    if (itemInCart) {
      itemInCart.quantity++
    }
  }

  const decreaseQuantity = (product: Product) => {
    const itemInCart = cartItems.value.find((item) => item.product.id === product.id)
    if (itemInCart && itemInCart.quantity > 1) {
      itemInCart.quantity--
    }
  }

  const isAdded = (productId: number) => {
    return cartItems.value.some((item) => item.product.id === productId)
  }

  const getQuantity = (productId: number) => {
    const item = cartItems.value.find((item) => item.product.id === productId)
    return item ? item.quantity : 0
  }

  const getTotalPriceForProduct = (productId: number) => {
    const item = cartItems.value.find((item) => item.product.id === productId)
    return item ? item.product.price * item.quantity : 0
  }

  const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.product.price * item.quantity, 0)
  })

  const totalItems = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  })

  const createOrder = () => {
    const order =  {
      id: orders.value.length + 1,
      date: new Date().toISOString(),
      items: cartItems.value.map(item => ({
        productId: item.product.id,
        quantity: item.quantity,
    }))
    }
    orders.value.push(order)
  }

  const clearCart = () => {
    cartItems.value = []
  }

  const getProductDetails = (productId: number) => {
    const product = products.value.find(product => product.id === productId)
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
      const product = products.value.find(product => product.id === item.productId)
      return total + (product ? product.price * item.quantity : 0)
    }, 0)
  }

  return {
    products,
    fetchProducts,
    orders,
    cartItems,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    isAdded,
    getQuantity,
    getTotalPriceForProduct,
    totalPrice,
    totalItems,
    createOrder,
    clearCart,
    getProductDetails,
    calculateTotalPrice,
  }
}, {
  persist: true
})
