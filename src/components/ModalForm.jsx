// ModalForm.js

import React, { useState } from "react";

const ModalForm = ({ showModal, closeModal }) => {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
    });
    // Close the modal
    closeModal();
  };

  return (
    <div
      className={`${
        showModal ? "fixed" : "hidden"
      } inset-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center`}
    >
      <div className="bg-white p-8 rounded-md max-w-md">
        <h2 className="text-2xl font-bold mb-4">Modal Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="field1" className="block text-sm font-medium text-gray-700">
              Field 1
            </label>
            <input
              type="text"
              id="field1"
              name="field1"
              value={formData.field1}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          {/* Repeat the above block for the remaining fields (field2 to field5) */}
          {/* ... */}
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
