/*"use client";

import { useState, useEffect } from "react";
import { ProtectedRoute } from "@/components/protected-route";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table"; // Replace with your table component if available.
import type { Prescription } from "@/types/prescription";

export default function AdminPrescriptionsPage() {
  const [prescriptions, setPrescriptions] = useState<Prescription[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8084/api/prescription/all-prescription", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prescriptions");
      }

      const data: Prescription[] = await response.json();
      setPrescriptions(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
 


  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard - Prescriptions</h1>

        <Button onClick={fetchPrescriptions} className="mb-4">
          Refresh Prescription Details
        </Button>

        {loading && <p>Loading prescriptions...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {prescriptions && prescriptions.length > 0 ? (
          <Table className="w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient Name</th>
                <th>Doctor Name</th>
                <th>Prescription Details</th>
                <th>Patient Address</th>
                <th>Patient Phone</th>
                <th>Created Date</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((prescription) => (
                <tr key={prescription.id}>
                  <td>{prescription.id}</td>
                  <td>{prescription.patientName}</td>
                  <td>{prescription.doctorName}</td>
                  <td>{prescription.prescriptionDetails}</td>
                  <td>{prescription.patientAddress}</td>
                  <td>{prescription.patientPhone}</td>
                  <td>{new Date(prescription.createdDate).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>No prescriptions available.</p>
        )}
      </div>
    </ProtectedRoute>
  );
}
*/"use client";

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
  const router = useRouter();
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
              <PlusCircle className="mr-2 h-4 w-4"  /> Add New Product
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
