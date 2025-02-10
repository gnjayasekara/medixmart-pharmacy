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
  image: string
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
      : `http://localhost:8084/api/products/category/${categoryName}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data: ProductApiResponse[] = await response.json();

    // Fetch images separately
    const productsWithImages = await Promise.all(
      data.map(async (product) => {
        let base64Image = "";
        try {
          const imageResponse = await fetch(
            `http://localhost:8084/api/products/image/${product.id}`
          );
          if (imageResponse.ok) {
            base64Image = await imageResponse.text(); // Get Base64 string
          }
        } catch (error) {
          console.error(`Error fetching image for product ${product.id}:`, error);
        }

        return {
          id: product.id.toString(),
          name: product.drugName,
          description: product.drugDescription,
          price: product.drugPrice,
          image: base64Image ? `data:image/jpeg;base64,${base64Image}` : "/placeholder.svg",
        };
      })
    );

    return productsWithImages;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <CardContent className="p-4 flex-grow">
            <div className="aspect-square w-full mb-4 overflow-hidden rounded-md">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
            <p className="text-lg font-bold mt-2">Rs.{product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full">Check availability</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
