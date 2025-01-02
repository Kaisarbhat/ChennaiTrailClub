"use client";
const { X } = require("lucide-react");
import { useState, useEffect } from "react";
const ChangePassword = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  const [data, setData] = useState({
    username: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    oldPassword: "",
    ewPassword: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!data.username.trim()) {
      tempErrors.username = "Username is required";
      isValid = false;
    } else if (formData.username.length < 3) {
      tempErrors.username = "Username must be at least 3 characters";
      isValid = false;
    }

    if (!data.oldPassword) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (data.oldPassword.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }
    if (!data.newPassword) {
      tempErrors.newPassword = "New Password is required";
      isValid = false;
    } else if (data.newPassword.length < 6) {
      tempErrors.newPassword = "Password must be at least 6 characters";
      isValid = false;
    }
    if (!data.confirmPassword) {
      tempErrors.confirmPassword = "Confirm Password is required";
      isValid = false;
    } else if (data.newPassword.length < 6) {
      tempErrors.password = "Confirm must be at least 6 characters";
      isValid = false;
    } else if (data.newPassword !== data.confirmPassword) {
      tempErrors.confirmPassword = "Both the passwords should match";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };
  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    if (apiError) {
      setApiError("");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const admin = "k4151r";
    setIsSubmitting(true);
    if (validateForm()) {
      const req = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/update/${admin}`
      );
      if (!req.ok) throw new Error("failed to update admin");
      else {
        window.href("/admin");
      }
    }
    setIsSubmitting(false);
  };
  return (
    <div className=" bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="w-full flex-col  p-6 text-black bg-slate-500 z-10 rounded-lg shadow-lg">
        <div className="flex items-center justify-end">
          <button onClick={onClose}>
            <X size={35} />
          </button>
        </div>
        <form className="space-y-3">
          <div className="flex flex-col items-start w-full justify-between">
            <label htmlFor="username">Username </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={data.username}
              onChange={(e) => handleInputChange(e)}
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-500">{errors.username}</p>
            )}
          </div>
          <div className="flex flex-col items-start w-full justify-between">
            <label htmlFor="oldPassword">Old Password</label>
            <input
              type="text"
              name="oldPassword"
              placeholder="Old Password"
              value={data.oldPassword}
              onChange={(e) => handleInputChange(e)}
            />
            {errors.oldPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.oldPassword}</p>
            )}
          </div>
          <div className="flex flex-col items-start w-full justify-between">
            {" "}
            <label htmlFor="oldPassword">New Password</label>
            <input
              type="text"
              name="newPassword"
              placeholder="New Password"
              value={data.newPassword}
              onChange={(e) => handleInputChange(e)}
            />
            {errors.newPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.newPassword}</p>
            )}
          </div>
          <div className="flex flex-col items-start w-full justify-between">
            {" "}
            <label htmlFor="oldPassword">Confirm New Password</label>
            <input
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={data.confirmPassword}
              onChange={(e) => handleInputChange(e)}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleSubmit}
              className="border border-solid border-black px-10 py-2 rounded-md font-bold bg-blue-700 text-white"
            >
              {isSubmitting ? "Updating" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ChangePassword;
