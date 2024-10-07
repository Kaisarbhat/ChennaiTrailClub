import React, { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const RegisterContent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    const stepFields = registerContent[step].fields || [];

    stepFields.forEach(field => {
      if (!formData[field.name] || formData[field.name].trim() === '') {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      // Submit form data
      console.log('Form submitted:', formData);
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'select':
        return (
          <select
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleInputChange}
            className="border border-inherit bg-transparent rounded-md w-full p-2 mt-2"
          >
            <option value="">---please choose an option---</option>
            {field.options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'radio':
        return (
          <div className="flex items-center space-x-4 text-[#070802]">
            {field.options.map((option, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                <input
                  type="radio"
                  name={field.name}
                  value={option}
                  checked={formData[field.name] === option}
                  onChange={handleInputChange}
                  className="mb-0"
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleInputChange}
            className="mt-2 w-full border border-solid p-2 rounded-md"
          />
        );
    }
  };

  const currentStepContent = registerContent[currentStep];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl text-[#070802] font-bold mb-6">
        {currentStepContent.title}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        {currentStepContent.fields && currentStepContent.fields.map((field, index) => (
          <div key={index}>
            <label className="block mb-1">{field.label}</label>
            {renderField(field)}
            {errors[field.name] && (
              <Alert variant="destructive" className="mt-2">
                <AlertDescription>{errors[field.name]}</AlertDescription>
              </Alert>
            )}
          </div>
        ))}
        <div className="flex justify-between mt-6">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
            >
              Previous
            </button>
          )}
          {currentStep < registerContent.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

// Define the structure of your form content here
const registerContent = [
  {
    key: "1",
    title: "Personal Details",
    fields: [
      { name: "runningCategory", label: "Select your Running Category", type: "select", options: ["30KM (INR 1800)", "60KM (INR 2200)"] },
      { name: "firstName", label: "First Name", type: "text" },
      { name: "lastName", label: "Last Name", type: "text" },
      { name: "mobile", label: "Mobile", type: "tel" },
      { name: "email", label: "Email", type: "email" },
      { name: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Prefer Not To Say"] },
      { name: "dateOfBirth", label: "Date of Birth", type: "date" },
      { name: "tShirtSize", label: "Select Your T-shirt Size", type: "select", options: ["XS (33)", "S (35)", "M (38)", "L (41)", "XL (44)", "2XL(47)", "3XL(51)", "4XL(54)"] },
      { name: "city", label: "City", type: "text" },
      { name: "state", label: "State/Province/Region", type: "select", options: ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"] },
    ],
  },
  {
    key: "2",
    title: "Other Details",
    fields: [
      { name: "bloodGroup", label: "Blood Group", type: "select", options: ["B-", "B+", "O-", "O+", "A-", "A+", "AB-", "AB+"] },
      { name: "bibName", label: "Name on BIB", type: "text" },
      { name: "runningClub", label: "Running Club you are part of", type: "select", options: ["CTC", "20Cube Sprinters", "Addida Runners - Bengaluru"] },
      { name: "emergencyContactName", label: "Emergency Contact Name", type: "text" },
      { name: "emergencyContactRelation", label: "Emergency Contact Relation", type: "select", options: ["Spouse", "Parent", "Sibling", "Relative", "Child", "Friend", "Guardian"] },
      { name: "emergencyContactNumber", label: "Emergency Contact Number", type: "tel" },
    ],
  },
  {
    key: "3",
    title: "Medical Questions",
    fields: [
      { name: "cardiovascularDisease", label: "Do you suffer from cardiovascular disease?", type: "radio", options: ["Yes", "No"] },
      { name: "medicalSupervision", label: "Have you been advised by doctor to engage in Physical activity only under medical supervision?", type: "radio", options: ["Yes", "No"] },
      { name: "pregnancyRisk", label: "Pregnant Women: Has this or any previous pregnancy been defined as being at risk?", type: "radio", options: ["Yes", "No"] },
      { name: "asthma", label: "Have you been diagnosed with asthma?", type: "radio", options: ["Yes", "No"] },
      { name: "dizziness", label: "Have you lost balance due to Dizziness?", type: "radio", options: ["Yes", "No"] },
      { name: "chestPain", label: "Do you suffer from Chest Pain (At Rest / Daily Activity / Physical Activity)?", type: "radio", options: ["Yes", "No"] },
      { name: "chronicIllness", label: "Do you suffer from any chronic illness not mentioned above, which limits you from Physical activities?", type: "radio", options: ["Yes", "No"] },
      { name: "otherMedicalConditions", label: "If any other specific medical conditions, please mention below:", type: "text" },
    ],
  },
  {
    key: "4",
    title: "Qualification & Waiver Form",
    fields: [
      { name: "timingCertificates", label: "Link to timing certificates/runner profile to demonstrate your qualification to Jawadhu Hills Ultra (races run after 01-Feb-2023)", type: "url" },
      { name: "waiverAcknowledgement", label: "I acknowledge the waiver form", type: "checkbox" },
      { name: "joinClub", label: "Join Our Chennai Trail Club", type: "checkbox" },
    ],
  },
];

export default RegisterContent;