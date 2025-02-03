import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '../types'

export const useProductStore = defineStore('product', () => {
  const products = ref([] as Product[])

  const fetchProducts = async () => {
    try {
      const response = await fetch("/shop-item.json")
      products.value = await response.json()
    } catch (error) {
      console.error("Failed to load products:", error)
    }
  }

  return { products, fetchProducts }
})
