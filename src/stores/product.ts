import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '../types'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])
  const cartItems = ref<{ product: Product, quantity: number }[]>([])

  const fetchProducts = async () => {
    try {
      const response = await fetch("src/shop-items.json")
      products.value = await response.json()
    } catch (error) {
      console.error("Failed to load products:", error)
    }
  }

  const addItem = (product: Product) => {
    const itemInCart = cartItems.value.find(item => item.product.id === product.id)
    if (itemInCart) {
      itemInCart.quantity++
    } else {
      cartItems.value.push({ product, quantity: 1 })
    }
  }

  const increaseQuantity = (product: Product) => {
    const itemInCart = cartItems.value.find(item => item.product.id === product.id)
    if (itemInCart) {
      itemInCart.quantity++
    }
  }

  const decreaseQuantity = (product: Product) => {
    const itemInCart = cartItems.value.find(item => item.product.id === product.id)
    if (itemInCart && itemInCart.quantity > 1) {
      itemInCart.quantity--
      }
    }


  return { products, fetchProducts, cartItems, addItem, increaseQuantity, decreaseQuantity }
})
