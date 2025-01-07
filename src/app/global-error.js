'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Something Went Wrong</h1>
          <p className="text-gray-600">An unexpected error occurred.</p>
          {process.env.NODE_ENV === 'development' && (
            <p className="text-sm text-gray-500 mt-2">
              Error Details: {error.message}
            </p>
          )}
          <button
            onClick={reset}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
