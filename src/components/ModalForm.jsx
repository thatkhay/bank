// ModalForm.js

import React, { useState } from "react";

const ModalForm = ({ showModal, closeModal }) => {
  const [formData, setFormData] = useState({
    accName: "",
    recipentName: "",
    accNo: "",
    routingNo: "",
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
      accName: "",
      recipentName: "",
      accNo: "",
      routingNo: "",
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
            <label
              htmlFor="accName"
              className="block text-sm font-medium text-gray-700"
            >
             Account Name
            </label>
            <input
              type="text"
              id="accName"
              name="accName"
              value={formData.field1}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="recipentName"
              className="block text-sm font-medium text-gray-700"
            >
             Recipent Name
            </label>
            <input
              type="text"
              id="recipentName"
              name="recipentName"
              value={formData.field1}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="routingNo"
              className="block text-sm font-medium text-gray-700"
            >
             Routing Number
            </label>
            <input
              type="number"
              id="routingNo"
              name="routingNo"
              value={formData.field1}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="accNo"
              className="block text-sm font-medium text-gray-700"
            >
              Account Number
            </label>
            <input
              type="number"
              id="accNo"
              name="accNo"
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
