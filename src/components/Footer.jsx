import React from "react";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center space-x-6">
          <p className="text-center">
            &copy; 2024 SPR Design. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
