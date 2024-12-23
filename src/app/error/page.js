import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Error Loading The Page</h1>
      <p className="text-gray-600">{error}</p>
    </div>
  );
};

export default ErrorPage;
