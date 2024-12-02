import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="m-4 rounded-lg">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm sm:text-center">
            2024{" "}
            <a href="https://sharadamarasinha.com/" className="hover:underline">
              Sharada Marasinha
            </a>
            . All Rights Reserved.
          </span>
          <ul className="mt-3 flex flex-wrap items-center text-sm font-medium sm:mt-0">
            <li>
              <a href="#about" className="me-4 hover:underline md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="me-4 hover:underline md:me-6">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="me-4 hover:underline md:me-6">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
