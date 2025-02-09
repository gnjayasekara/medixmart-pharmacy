"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "./button"; // Ensure ShadCN Button component (Ensure ShadCN is correctly installed)

interface PrescriptionData {
  patientName: string;
  doctorName: string;
  prescriptionDetails: string;
  file: File | null;
  patientAddress: string;
  patientPhone: string;
}

const PrescriptionForm: React.FC = () => {
  const [prescriptionData, setPrescriptionData] = useState<PrescriptionData>({
    patientName: "",
    doctorName: "",
    prescriptionDetails: "",
    file: null,
    patientAddress: "",
    patientPhone: "",
  });

  const [error, setError] = useState<string>("");

  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPrescriptionData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file change
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrescriptionData((prev) => ({
      ...prev,
      file: e.target.files ? e.target.files[0] : null,
    }));
  };
/*
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("patientName", prescriptionData.patientName);
    formData.append("doctorName", prescriptionData.doctorName);
    formData.append("prescriptionDetails", prescriptionData.prescriptionDetails);
    formData.append("patientAddress", prescriptionData.patientAddress);
    formData.append("patientPhone", prescriptionData.patientPhone);
    if (prescriptionData.file) {
      formData.append("file", prescriptionData.file);
    }

    try {
      const response = await fetch("http://localhost:8084/api/prescription", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Prescription uploaded successfully!");
        setError(""); // Reset error on success
      } else {
        const errorMessage = await response.text();
        setError(`Failed to upload prescription: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error submitting prescription:", error);
      setError("Error uploading prescription.");
    }
  };*/
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("patientName", prescriptionData.patientName);
    formData.append("doctorName", prescriptionData.doctorName);
    formData.append("prescriptionDetails", prescriptionData.prescriptionDetails);
    formData.append("patientAddress", prescriptionData.patientAddress);
    formData.append("patientPhone", prescriptionData.patientPhone);
    if (prescriptionData.file) {
      formData.append("file", prescriptionData.file);
    }
  
    try {
      const response = await fetch("http://localhost:8084/api/prescription", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        alert("Prescription uploaded successfully!");
        setError(""); // Reset error on success
      } else {
        const errorMessage = await response.text();
        setError(`Failed to upload prescription: ${errorMessage}`);
        console.error('Error response:', errorMessage);  // Log error to the console
      }
    } catch (error) {
      console.error("Error submitting prescription:", error);
      setError("Error uploading prescription.");
    }
  };
  
  return (
    <div className="bg-green-50 py-8 px-6 md:px-12 lg:px-24 rounded-lg shadow-lg max-w-5xl mx-auto mt-8 relative">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Prescription Upload</h2>
        <p className="text-lg text-gray-500">Please fill out the form to upload prescription details.</p>
      </div>

      {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message */}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Patient Name */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">Patient Name</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={prescriptionData.patientName}
            onChange={handleInputChange}
            placeholder="Enter patient's name"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Doctor Name */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">Doctor Name</label>
          <input
            type="text"
            id="doctorName"
            name="doctorName"
            value={prescriptionData.doctorName}
            onChange={handleInputChange}
            placeholder="Enter doctor's name"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Patient Address */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <label htmlFor="patientAddress" className="block text-sm font-medium text-gray-700">Patient Address</label>
          <input
            type="text"
            id="patientAddress"
            name="patientAddress"
            value={prescriptionData.patientAddress}
            onChange={handleInputChange}
            placeholder="Enter patient's address"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Patient Phone */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <label htmlFor="patientPhone" className="block text-sm font-medium text-gray-700">Patient Phone Number</label>
          <input
            type="tel"
            id="patientPhone"
            name="patientPhone"
            value={prescriptionData.patientPhone}
            onChange={handleInputChange}
            placeholder="Enter patient's phone number"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Prescription Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <label htmlFor="prescriptionDetails" className="block text-sm font-medium text-gray-700">Prescription Details</label>
          <textarea
            id="prescriptionDetails"
            name="prescriptionDetails"
            value={prescriptionData.prescriptionDetails}
            onChange={handleInputChange}
            placeholder="Enter prescription details"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* File Upload */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload Prescription File</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
          Submit Prescription
        </Button>
      </form>
    </div>
  );
};

export default PrescriptionForm;
