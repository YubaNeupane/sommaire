import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900">Sommaire</h2>
          <p className="text-sm text-gray-500 mt-1">
            AI-powered tool to instantly summarize your PDFs with precision and
            clarity.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:text-gray-900 transition text-rose-500"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="hover:text-blue-500 transition text-rose-500"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="mailto:support@summaire.ai"
            className="hover:text-gray-900 transition text-rose-500"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} Sommaire. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
