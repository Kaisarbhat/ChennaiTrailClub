'use client';
import React from 'react';

export const withErrorHandling = (WrappedComponent) => {
  return function WithErrorHandling(props) {
    try {
      return <WrappedComponent {...props} />;
    } catch (error) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Something Went Wrong</h1>
          <p className="text-gray-600">An unexpected error occurred.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Retry
          </button>
        </div>
      );
    }
  };
};
