import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-12 h-12 border-4 border-[#fd4b5c] border-t-transparent rounded-full animate-spin"></div>
      <span className="ml-4 text-[#fd4b5c] text-lg font-medium">
        Cargando...
      </span>
    </div>
  );
};

export default LoadingSpinner;
