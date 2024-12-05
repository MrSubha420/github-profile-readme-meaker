import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-6">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} README Generator. All rights reserved.</p>
      </div>
    </footer>
  );
}
