"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Shield, Award, CheckCircle } from "lucide-react";

const footerLinks = {
  products: [
    { label: "Surgical Instruments", href: "/surgical" },
    { label: "Dental Instruments", href: "/dental" },
    { label: "Shop All Products", href: "/shop" },
    { label: "Bulk Orders", href: "/contact" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Quality Standards", href: "#" },
    { label: "Certifications", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "FAQs", href: "#" },
    { label: "Shipping Info", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Track Order", href: "#" },
  ],
};

const certifications = [
  { icon: Shield, label: "FDA Registered" },
  { icon: Award, label: "CE Certified" },
  { icon: CheckCircle, label: "ISO 9001:2015" },
  { icon: CheckCircle, label: "ISO 13485" },
];

export function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white">
      {/* Certifications Bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 justify-center"
              >
                <cert.icon className="w-6 h-6 text-[#c53030]" />
                <span className="font-medium">{cert.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">SHARP</span>
                <span className="text-[#c53030]">MEDICAL</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Premium surgical and dental instrument distributor serving healthcare 
              professionals across the USA. FDA registered with CE & ISO certifications.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#c53030]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#c53030]" />
                <span>sales@sharpmedical.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#c53030]" />
                <span>USA Nationwide Distribution</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Sharp Medical Supply. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
