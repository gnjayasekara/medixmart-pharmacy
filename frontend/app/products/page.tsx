"use client"

import { useState } from "react"
import { ProductCategories } from "@/components/products/product-categories"
import { ProductList } from "@/components/products/product-list"

const categories = [
  { id: "baby", name: "Baby Products" },
  { id: "medical", name: "Medical Devices" },
  { id: "otc", name: "Over-the-Counter" },
  { id: "personal", name: "Personal Care" },
  { id: "vitamins", name: "Vitamins & Supplements" },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <ProductCategories
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        <div className="md:w-3/4">
          <ProductList categoryId={selectedCategory} />
        </div>
      </div>
    </div>
  )
}
