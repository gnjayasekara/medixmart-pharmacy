"use client";

// components/ui/PrescriptionForm.tsx
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

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log("Submitted prescription data:", prescriptionData);
  };

  return (
    <div className="bg-green-50 py-8 px-6 md:px-12 lg:px-24 rounded-lg shadow-lg max-w-5xl mx-auto mt-8 relative">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Prescription Upload</h2>
        <p className="text-lg text-gray-500">Please fill out the form to upload prescription details.</p>
      </div>

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

        {/* Upload Prescription File */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload Prescription File</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button type="submit" className="mt-6 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Submit Prescription
          </Button>
        </div>
      </form>

      {/* Image in the bottom-right corner of the form */}
      <div className="absolute top-2 left-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YCjhELNo_7jENmkpTmgVSAsKEzYlrLzLbQ&s" // You can add your own image here
          alt="Medical Form Illustration"
          className="w-20 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default PrescriptionForm;
