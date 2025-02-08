"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Product = {
  id: string
  name: string
  description: string
  price: number
  category: string
}

type EditProductFormProps = {
  product: Product
  onCancel: () => void
}

export function EditProductForm({ product, onCancel }: EditProductFormProps) {
  const [name, setName] = useState(product.name)
  const [description, setDescription] = useState(product.description)
  const [price, setPrice] = useState(product.price.toString())
  const [category, setCategory] = useState(product.category)

  useEffect(() => {
    setName(product.name)
    setDescription(product.description)
    setPrice(product.price.toString())
    setCategory(product.category)
  }, [product])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would be an API call to update the product
    console.log("Updating product:", { id: product.id, name, description, price, category })
    onCancel()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Product Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input id="price" type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select value={category} onValueChange={setCategory} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="baby">Baby Products</SelectItem>
            <SelectItem value="medical">Medical Devices</SelectItem>
            <SelectItem value="otc">Over-the-Counter</SelectItem>
            <SelectItem value="personal">Personal Care</SelectItem>
            <SelectItem value="vitamins">Vitamins & Supplements</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Update Product</Button>
      </div>
    </form>
  )
}

