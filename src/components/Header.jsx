import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">README Generator</h1>
        <img src="https://via.placeholder.com/150x50" alt="Logo" className="h-10" />
      </div>
    </header>
  );
}
