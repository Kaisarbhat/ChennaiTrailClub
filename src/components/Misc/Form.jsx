import React, { useState } from "react";
import ChangePassword from "./changePassword";

const Form = ({ type, isLogin, isSignup }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    if (isSignup) {
      if (!formData.confirmPassword) {
        tempErrors.confirmPassword = "Both passwords are required";
        isValid = false;
      } else if (formData.confirmPassword !== formData.password) {
        tempErrors.confirmPassword = "Passwords do not match";
        isValid = false;
      }
    }
    if (!formData.username.trim()) {
      tempErrors.username = "Username is required";
      isValid = false;
    } else if (formData.username.length < 3) {
      tempErrors.username = "Username must be at least 3 characters";
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
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
    setIsSubmitting(true);
    setApiError("");

    if (validateForm()) {
      try {
        // Convert form data to URLSearchParams
        const formBody = new URLSearchParams();
        for (const key in formData) {
          formBody.append(key, formData[key]);
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/${type}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formBody,
          }
        );

        if (!response.ok) {
          const errorData = await response.text();
          throw new Error(errorData || `${type} failed`);
        }

        const data = await response.json();

        setFormData({ username: "", password: "" });
        // Handle successful login here (e.g., store token, redirect)
        localStorage.setItem("jwt", data.access_token);
        window.location.href = "/admin/dashboard";
      } catch (error) {
        console.error(`${type} error:`, error);
        setApiError(
          error.message || `An error occurred during ${type}. Please try again.`
        );
      }
    }

    setIsSubmitting(false);
  };

  return (
    <div className="w-[800px] mx-auto p-8  bg-gray-300 rounded shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {apiError && (
          <div className="p-3 mb-4 text-sm text-red-500 bg-red-100 rounded">
            {apiError}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium mb-1">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your username"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-500">{errors.username}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>
        {isSignup && (
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              id="password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Re enter your password"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {type === "SignUp"
            ? isSubmitting
              ? "Signing Up"
              : "SignUp"
            : isSubmitting
            ? "Logging In"
            : "Login"}
        </button>
      </form>
      {/* //Additional details for login page  */}
      {isLogin && (
        <div className="mt-6 flex  justify-between space-x-4 text-blue-600">
          <button> Create an Account</button>
          <button onClick={togglePopUp}> Change Password</button>
        </div>
      )}
      {isPopUpOpen && (
        <ChangePassword isOpen={isPopUpOpen} onClose={togglePopUp} />
      )}
      {isSignup && (
        <div>
          <span>Already have an account? </span>
          <button> Login</button>
        </div>
      )}
    </div>
  );
};

export default Form;
