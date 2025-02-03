import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '../types'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])

  const fetchProducts = async () => {
    try {
      const response = await fetch("src/shop-items.json")
      products.value = await response.json()
    } catch (error) {
      console.error("Failed to load products:", error)
    }
  }

  return { products, fetchProducts }
})
