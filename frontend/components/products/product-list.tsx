"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Define the structure of the product response from the backend
type ProductApiResponse = {
  id: number
  drugName: string
  drugDescription: string
  drugPrice: number
  drugSKU: string
  generic: string
  packSize: number
}

// Frontend Product type
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

// Fetch the products by category with the correct response type
async function fetchProductsByCategory(categoryName: string): Promise<Product[]> {
  const response = await fetch(`http://localhost:8084/api/products/category/${categoryName}`)
  if (!response.ok) {
    console.error("Error fetching products:", response.statusText)
    return []
  }
  
  // We cast the response data to ProductApiResponse[]
  const data: ProductApiResponse[] = await response.json()

  // Map the response to the Product type
  return data.map((product) => ({
    id: product.id.toString(),
    name: product.drugName,
    description: product.drugDescription,
    price: product.drugPrice,
    image: "/placeholder.svg", // If there's no image field in the response, use a placeholder
  }))
}

export function ProductList({ categoryId }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (categoryId) {
      setLoading(true)
      fetchProductsByCategory(categoryId)
        .then(setProducts)
        .finally(() => setLoading(false))
    }
  }, [categoryId]) // Trigger the fetch when categoryId changes

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
            <p className="text-lg font-bold mt-2">Rs.{product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Check availability</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
