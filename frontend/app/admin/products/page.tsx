/*"use client"

import { useState } from "react"
import { ProtectedRoute } from "@/components/protected-route"
import { ProductTable } from "@/components/admin/product-table"
import { AddProductForm } from "@/components/admin/add-product-form"
import { EditProductForm } from "@/components/admin/edit-product-form"
import { Button } from "@/components/ui/button"
import { FileText, PlusCircle } from "lucide-react"
import type { Product } from "@/types/product"
import router from "next/router"

export default function AdminProductsPage() {
  const [isAddingProduct, setIsAddingProduct] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const handleViewPrescriptions = () => {
    router.push("api/prescription/admin/prescription")
  }
  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard </h1>

        {!isAddingProduct && !editingProduct && (
          <>
          <Button onClick={() => setIsAddingProduct(true)} className="mb-4">
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Product
          </Button>


<Button onClick={handleViewPrescriptions} className="mb-4">
              <FileText className="mr-2 h-4 w-4" /> View All Prescriptions
            </Button>
            </>
        )}

<br/>
        




        {isAddingProduct && <AddProductForm onCancel={() => setIsAddingProduct(false)} />}

        {editingProduct && <EditProductForm product={editingProduct} onCancel={() => setEditingProduct(null)} />}

        {!isAddingProduct && !editingProduct && <ProductTable onEdit={setEditingProduct} />}
      </div>
    </ProtectedRoute>
  )
}

*/





"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ProtectedRoute } from "@/components/protected-route";
import { ProductTable } from "@/components/admin/product-table";
import { AddProductForm } from "@/components/admin/add-product-form";
import { EditProductForm } from "@/components/admin/edit-product-form";
import { Button } from "@/components/ui/button";
import { FileText, PlusCircle } from "lucide-react";
import type { Product } from "@/types/product";

export default function AdminProductsPage() {
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [prescriptions, setPrescriptions] = useState([]);
  const [viewingPrescriptions, setViewingPrescriptions] = useState(false);

  // Fetch prescriptions
  useEffect(() => {
    if (viewingPrescriptions) {
      fetch("http://localhost:8084/api/prescription/admin/prescription")
        .then((response) => response.json())
        .then((data) => setPrescriptions(data))
        .catch((error) => console.error("Error fetching prescriptions:", error));
    }
  }, [viewingPrescriptions]);

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {!isAddingProduct && !editingProduct && !viewingPrescriptions && (
          <>
            <Button onClick={() => setIsAddingProduct(true)} className="mb-4"  style={{ marginRight: "8px" }}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Product
            </Button>
            <Button
              onClick={() => setViewingPrescriptions(true)}
              className="mb-4"
            >
              <FileText className="mr-2 h-4 w-4" /> View All Prescriptions
            </Button>
          </>
        )}

        {isAddingProduct && (
          <AddProductForm onCancel={() => setIsAddingProduct(false)} />
        )}

        {editingProduct && (
          <EditProductForm
            product={editingProduct}
            onCancel={() => setEditingProduct(null)}
          />
        )}

        {!isAddingProduct && !editingProduct && !viewingPrescriptions && (
          <ProductTable onEdit={setEditingProduct} />
        )}

        {viewingPrescriptions && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Prescriptions List</h2>
            <Button
              onClick={() => setViewingPrescriptions(false)}
              className="mb-4"
            >
              Back to Dashboard
            </Button>
            <ul className="space-y-4">
              {prescriptions.map((prescription: any) => (
                <li
                  key={prescription.id}
                  className="border p-4 rounded shadow-md"
                >
                  <p>
                    <strong>Patient Name:</strong> {prescription.patientName}
                  </p>
                  <p>
                    <strong>Doctor Name:</strong> {prescription.doctorName}
                  </p>
                  <p>
                    <strong>Details:</strong> {prescription.prescriptionDetails}
                  </p>
                  <p>
                    <strong>Address:</strong> {prescription.patientAddress}
                  </p>
                  <p>
                    <strong>Phone:</strong> {prescription.patientPhone}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(prescription.createdDate).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
