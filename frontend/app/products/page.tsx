"use client"

import { ProductCategories } from '@/components/products/product-categories';
import { ProductList } from '@/components/products/product-list';
import { useState, useEffect } from 'react';

const categories = [
  { id: "all", name: "All Products" },
  { id: "baby products", name: "Baby Products" },
  { id: "antibiotics", name: "Antibiotics" },
  { id: "otc", name: "Over-the-Counter" },
  { id: "personal", name: "Personal Care" },
  { id: "vitamins", name: "Vitamins & Supplements" },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all") 
  const [products, setProducts] = useState([]) 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const url =
          selectedCategory === "all"
            ? "http://localhost:8084/api/products/all"
            : `http://localhost:8084/api/products/category/${selectedCategory}`

        const response = await fetch(url)
        const data = await response.json()

        setProducts(
          data.map((product: { id: number; drugName: string; drugDescription: string; drugPrice: number }) => ({
            id: product.id.toString(),
            name: product.drugName,
            description: product.drugDescription,
            price: product.drugPrice,
            image: "/placeholder.svg", // Placeholder image
          }))
        )
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [selectedCategory])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <ProductCategories
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={(categoryName) => setSelectedCategory(categoryName)}
          />
        </div>
        <div className="md:w-3/4">
          <ProductList categoryName={selectedCategory} products={products} /> {/* Pass name and products here */}
        </div>
      </div>
    </div>
  )
}
