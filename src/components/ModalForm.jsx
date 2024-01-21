import React, { useState } from "react";
import logo from "../images/citi-logo.svg";

const ModalForm = ({ showModal, closeModal }) => {
  const [formData, setFormData] = useState({
    accName: "",
    recipentName: "",
    accNo: "",
    routingNo: "",
  });

  const [errors, setErrors] = useState({
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
    // Clear corresponding errors when input changes
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for all inputs filled
    const requiredFields = ["accName", "recipentName", "accNo", "routingNo"];
    let hasErrors = false;

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: "Fill this input fields",
        }));
        hasErrors = true;
      }
    });

    // Check for the length of accNo
    if (formData.accNo.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        accNo: "Account number should be at least 8 digits",
      }));
      hasErrors = true;
    }

    // Check for the length of routingNo
    if (formData.routingNo.length !== 9) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        routingNo: "Routing number should be 9 digits",
      }));
      hasErrors = true;
    }

    if (!hasErrors) {
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
    }
  };
  const handleClose = (e) => {
    closeModal();
  };
  return (
    <div
      className={`${
        showModal ? "fixed" : "hidden"
      } inset-0 w-full  h-full bg-black bg-opacity-50 flex items-center justify-center`}
    >
      <div className="bg-white p-8 rounded-md max-w-md">
        <img src={logo} alt="" className="mb-4 mt-[-1.5rem] h-12 w-12" />
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
              value={formData.accName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full capitalize"
            />
            <p className="text-red-500">{errors.accName}</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="recipentName"
              className="block text-sm font-medium text-gray-700"
            >
              Recipient Name
            </label>
            <input
              type="text"
              id="recipentName"
              name="recipentName"
              value={formData.recipentName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full capitalize"
            />
            <p className="text-red-500">{errors.recipentName}</p>
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
              value={formData.routingNo}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full capitalize"
            />
            <p className="text-red-500">{errors.routingNo}</p>
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
              value={formData.accNo}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full capitalize"
            />
            <p className="text-red-500">{errors.accNo}</p>
          </div>
          <div className="mt-4 flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              onClick={handleClose}
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
