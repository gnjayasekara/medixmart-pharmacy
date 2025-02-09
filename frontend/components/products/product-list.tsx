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
  image?: string
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
  categoryName: string
  products: Array<{
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  }>;
}

// Fetch the products by category with the correct response type
async function fetchProducts(categoryName: string): Promise<Product[]> {
  const url =
    categoryName === "all"
      ? "http://localhost:8084/api/products/all"
      : `http://localhost:8084/api/products/category/${categoryName}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`)
    }
  
  // We cast the response data to ProductApiResponse[]
  const data: ProductApiResponse[] = await response.json()

  // Map the response to the Product type
  return data.map((product) => ({
    id: product.id.toString(),
    name: product.drugName,
    description: product.drugDescription,
    price: product.drugPrice,
    image: product.image || "/placeholder.svg", // Use placeholder if no image
  }))
} catch (error) {
  console.error("Error fetching products:", error)
  return []
}
}

export function ProductList({ categoryName }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchProducts(categoryName)
      .then(setProducts)
      .finally(() => setLoading(false))
  }, [categoryName]) 

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
