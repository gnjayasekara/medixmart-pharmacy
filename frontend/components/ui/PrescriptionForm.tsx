"use client";

// components/ui/PrescriptionForm.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "./button"; // Use ShadCN Button component (Ensure ShadCN is correctly installed)

interface PrescriptionData {
  patientName: string;
  doctorName: string;
  prescriptionDetails: string;
  file: File | null;
  patientAddress: string; // New field for patient's address
  patientPhone: string; // New field for patient's phone number
}

const PrescriptionForm: React.FC = () => {
  const [prescriptionData, setPrescriptionData] = useState<PrescriptionData>({
    patientName: "",
    doctorName: "",
    prescriptionDetails: "",
    file: null,
    patientAddress: "", // Initialize address
    patientPhone: "", // Initialize phone number
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
          Patient Name
        </label>
        <input
          type="text"
          id="patientName"
          name="patientName"
          value={prescriptionData.patientName}
          onChange={handleInputChange}
          placeholder="Enter patient's name"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">
          Doctor Name
        </label>
        <input
          type="text"
          id="doctorName"
          name="doctorName"
          value={prescriptionData.doctorName}
          onChange={handleInputChange}
          placeholder="Enter doctor's name"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      
      <div>
        <label htmlFor="patientAddress" className="block text-sm font-medium text-gray-700">
          Patient Address
        </label>
        <input
          type="text"
          id="patientAddress"
          name="patientAddress"
          value={prescriptionData.patientAddress}
          onChange={handleInputChange}
          placeholder="Enter patient's address"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="patientPhone" className="block text-sm font-medium text-gray-700">
          Patient Phone Number
        </label>
        <input
          type="tel"
          id="patientPhone"
          name="patientPhone"
          value={prescriptionData.patientPhone}
          onChange={handleInputChange}
          placeholder="Enter patient's phone number"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="prescriptionDetails" className="block text-sm font-medium text-gray-700">
          Prescription Details
        </label>
        <textarea
          id="prescriptionDetails"
          name="prescriptionDetails"
          value={prescriptionData.prescriptionDetails}
          onChange={handleInputChange}
          placeholder="Enter prescription details"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="file" className="block text-sm font-medium text-gray-700">
          Upload Prescription File
        </label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>


      

      <Button type="submit" className="mt-4">
        Submit Prescription
      </Button>
    </form>
  );
};

export default PrescriptionForm;
