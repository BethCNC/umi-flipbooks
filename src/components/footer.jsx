import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name
        </div>
        <div className="flex space-x-4">
          <a
            href="https://your-privacy-policy-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="https://your-terms-and-conditions-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 