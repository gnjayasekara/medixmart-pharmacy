"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

type ProductListProps = {
  categoryId: string
}

// This is a mock function to simulate fetching products from an API
async function fetchProductsByCategory(categoryId: string): Promise<Product[]> {
  // In a real application, this would be an API call
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay

  // Mock data
  const products: Record<string, Product[]> = {
    baby: [
      {
        id: "b1",
        name: "Baby Diapers",
        description: "Ultra-soft diapers for sensitive skin",
        price: 19.99,
        image: "/placeholder.svg?height=200&width=200&text=Baby+Diapers",
      },
      {
        id: "b1",
        name: "Baby Diapers",
        description: "Ultra-soft diapers for sensitive skin",
        price: 19.99,
        image: "/placeholder.svg?height=200&width=200&text=Baby+Diapers",
      },
      {
        id: "b1",
        name: "Baby Diapers",
        description: "Ultra-soft diapers for sensitive skin",
        price: 19.99,
        image: "/placeholder.svg?height=200&width=200&text=Baby+Diapers",
      },
      {
        id: "b2",
        name: "Baby Wipes",
        description: "Gentle, fragrance-free wipes",
        price: 5.99,
        image: "/placeholder.svg?height=200&width=200&text=Baby+Wipes",
      },
    ],
    medical: [
      {
        id: "m1",
        name: "Digital Thermometer",
        description: "Fast and accurate temperature readings",
        price: 12.99,
        image: "/placeholder.svg?height=200&width=200&text=Thermometer",
      },
      {
        id: "m2",
        name: "Blood Pressure Monitor",
        description: "Easy-to-use home BP monitor",
        price: 49.99,
        image: "/placeholder.svg?height=200&width=200&text=BP+Monitor",
      },
    ],
    otc: [
      {
        id: "o1",
        name: "Pain Relief Tablets",
        description: "Fast-acting pain relief",
        price: 8.99,
        image: "/placeholder.svg?height=200&width=200&text=Pain+Relief",
      },
      {
        id: "o2",
        name: "Cough Syrup",
        description: "Soothes throat and suppresses cough",
        price: 7.99,
        image: "/placeholder.svg?height=200&width=200&text=Cough+Syrup",
      },
    ],
    personal: [
      {
        id: "p1",
        name: "Toothpaste",
        description: "Fluoride toothpaste for cavity protection",
        price: 3.99,
        image: "/placeholder.svg?height=200&width=200&text=Toothpaste",
      },
      {
        id: "p2",
        name: "Shampoo",
        description: "Nourishing shampoo for all hair types",
        price: 6.99,
        image: "/placeholder.svg?height=200&width=200&text=Shampoo",
      },
    ],
    vitamins: [
      {
        id: "v1",
        name: "Multivitamin",
        description: "Daily multivitamin for adults",
        price: 15.99,
        image: "/placeholder.svg?height=200&width=200&text=Multivitamin",
      },
      {
        id: "v2",
        name: "Vitamin C",
        description: "Immune system support",
        price: 9.99,
        image: "/placeholder.svg?height=200&width=200&text=Vitamin+C",
      },
    ],
  }

  return products[categoryId] || []
}

export function ProductList({ categoryId }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchProductsByCategory(categoryId)
      .then(setProducts)
      .finally(() => setLoading(false))
  }, [categoryId])

  if (loading) {
    return <div>Loading products...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.id}>
          <CardContent className="p-4">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

