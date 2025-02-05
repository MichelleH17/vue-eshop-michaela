import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '../types'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])
  const cartItems = ref<{ product: Product; quantity: number }[]>([])

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

  return {
    products,
    fetchProducts,
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
  }
})
