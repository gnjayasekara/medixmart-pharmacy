"use client"

import { useState } from "react"
import { ProtectedRoute } from "@/components/protected-route"
import { ProductTable } from "@/components/admin/product-table"
import { AddProductForm } from "@/components/admin/add-product-form"
import { EditProductForm } from "@/components/admin/edit-product-form"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import type { Product } from "@/types/product"

export default function AdminProductsPage() {
  const [isAddingProduct, setIsAddingProduct] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard - Products</h1>

        {!isAddingProduct && !editingProduct && (
          <Button onClick={() => setIsAddingProduct(true)} className="mb-4">
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Product
          </Button>
        )}

        {isAddingProduct && <AddProductForm onCancel={() => setIsAddingProduct(false)} />}

        {editingProduct && <EditProductForm product={editingProduct} onCancel={() => setEditingProduct(null)} />}

        {!isAddingProduct && !editingProduct && <ProductTable onEdit={setEditingProduct} />}
      </div>
    </ProtectedRoute>
  )
}

