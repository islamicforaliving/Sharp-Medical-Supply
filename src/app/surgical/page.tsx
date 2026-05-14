"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Award,
  Microscope,
  Bone,
  Heart,
  Brain,
  Eye,
  Ear
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    icon: "✂️",
    title: "General Surgery",
    description: "Essential instruments for routine and complex surgical procedures including scalpels, scissors, forceps, and clamps.",
    products: ["Scalpels & Blades", "Surgical Scissors", "Forceps & Clamps", "Needle Holders", "Retractors"],
  },
  {
    icon: "🦴",
    title: "Orthopedic",
    description: "Specialized tools for bone and joint surgical procedures with heavy-duty construction.",
    products: ["Bone Cutting Forceps", "Orthopedic Drills", "Chisels & Gouges", "Bone Holding Clamps", "Saws & Wire Cutters"],
  },
  {
    icon: "❤️",
    title: "Cardiovascular",
    description: "Precision instruments for heart and vascular surgery requiring the highest accuracy.",
    products: ["Vascular Clamps", "Cardiac Forceps", "Needle Holders", "Retractors", "Dilators"],
  },
  {
    icon: "🧠",
    title: "Neurosurgery",
    description: "Micro-precision instruments for brain and nerve procedures with delicate handling.",
    products: ["Brain Spatulas", "Cranial Rongeurs", "Nerve Hooks", "Micro Scissors", "Elevators"],
  },
  {
    icon: "👁️",
    title: "Ophthalmic",
    description: "Delicate instruments for eye surgery and procedures requiring extreme precision.",
    products: ["Ophthalmic Forceps", "Eye Scissors", "Speculums", "Needle Holders", "Chalazion Instruments"],
  },
  {
    icon: "👃",
    title: "ENT Surgery",
    description: "Specialized tools for ear, nose, and throat procedures.",
    products: ["ENT Forceps", "Nasal Speculums", "Tonsil Instruments", "Ear Instruments", "Laryngeal Mirrors"],
  },
];

const features = [
  {
    icon: Shield,
    title: "FDA Registered",
    description: "All instruments meet US FDA requirements for medical devices"
  },
  {
    icon: Award,
    title: "German Steel",
    description: "Premium 410/420 grade stainless steel construction"
  },
  {
    icon: CheckCircle,
    title: "CE Certified",
    description: "European conformity standards compliance"
  },
  {
    icon: Microscope,
    title: "Precision Crafted",
    description: "12-point quality inspection on every instrument"
  },
];

export default function SurgicalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a365d] via-[#234876] to-[#1a365d] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-[#c53030]/10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Link href="/" className="text-blue-200 hover:text-white">Home</Link>
              <span className="text-blue-300">/</span>
              <span>Surgical Instruments</span>
            </div>
            
            <Badge className="bg-[#c53030] hover:bg-[#9b2c2c] mb-6">
              FDA Registered
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Surgical Instruments
            </h1>
            
            <p className="text-xl text-blue-100 mb-8">
              Premium-quality surgical instruments crafted with precision and durability. 
              Our products meet international standards, ensuring reliability and safety 
              in every procedure.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/shop">
                <Button 
                  size="lg" 
                  className="bg-[#c53030] hover:bg-[#9b2c2c] text-white"
                >
                  Shop Surgical
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-[#1a365d]"
                >
                  Request Catalog
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[#c53030]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-[#c53030]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a365d]">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              Surgical Instrument Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive range of surgical instruments, each designed 
              for specific procedures and crafted to the highest standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-[#1a365d] to-[#2c5282] flex items-center justify-center">
                  <motion.span 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-7xl"
                  >
                    {category.icon}
                  </motion.span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a365d] mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {category.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {category.products.map((product) => (
                      <li key={product} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#c53030]" />
                        {product}
                      </li>
                    ))}
                  </ul>
                  <Link href="/shop">
                    <Button className="w-full bg-[#1a365d] hover:bg-[#c53030] transition-colors">
                      View Products
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-[#1a365d] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-[#c53030] hover:bg-[#9b2c2c] mb-4">
                Quality Assurance
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quality You Can Trust
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Every surgical instrument from Sharp Medical Supply undergoes a rigorous 
                12-point quality inspection process. From raw material selection to final 
                packaging, we ensure each tool meets the highest international standards.
              </p>
              
              <div className="space-y-4">
                {[
                  "German-compliant manufacturing standards",
                  "100% stainless steel construction",
                  "Passivation treatment for corrosion resistance",
                  "Laser-etched markings for traceability",
                  "Sterilization-ready packaging",
                  "Full CE, ISO 9001, and FDA compliance",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-3">🏆</div>
                    <div className="text-[#1a365d] font-bold text-2xl">FDA</div>
                    <div className="text-gray-600">Registered</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-3">✓</div>
                    <div className="text-[#1a365d] font-bold text-2xl">CE</div>
                    <div className="text-gray-600">Certified</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-3">📋</div>
                    <div className="text-[#1a365d] font-bold text-2xl">ISO</div>
                    <div className="text-gray-600">9001:2015</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-3">🔬</div>
                    <div className="text-[#1a365d] font-bold text-2xl">12</div>
                    <div className="text-gray-600">Point Check</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#c53030] to-[#9b2c2c] rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Request Surgical Catalog
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Get our complete surgical instrument catalog with detailed specifications, 
              pricing, and bulk order options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-[#c53030] hover:bg-gray-100"
                >
                  Download Catalog
                </Button>
              </Link>
              <Link href="/shop">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-[#c53030]"
                >
                  Shop Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
