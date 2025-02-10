"use client";

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
