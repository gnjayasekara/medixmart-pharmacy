"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"

type Product = {
  id: string
  name: string
  description: string
  price: number
  category: string
}

type ProductTableProps = {
  onEdit: (product: Product) => void
}

export function ProductTable({ onEdit }: ProductTableProps) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchProducts = async () => {
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      setProducts([
        { id: "1", name: "Baby Diapers", description: "Ultra-soft diapers", price: 19.99, category: "baby" },
        { id: "2", name: "Digital Thermometer", description: "Fast readings", price: 12.99, category: "medical" },
        { id: "3", name: "Pain Relief Tablets", description: "Fast-acting", price: 8.99, category: "otc" },
      ])
    }
    fetchProducts()
  }, [])

  const handleDelete = (id: string) => {
    // In a real application, this would be an API call
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>${product.price.toFixed(2)}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>
              <Button variant="ghost" size="sm" onClick={() => onEdit(product)}>
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => handleDelete(product.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

