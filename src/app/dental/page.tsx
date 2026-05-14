"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Award,
  Sparkles,
  Search,
  Wrench,
  Scissors,
  Leaf
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    icon: "🔍",
    title: "Diagnostic Instruments",
    description: "Essential tools for dental examination and diagnosis including mirrors, explorers, and probes.",
    products: ["Mouth Mirrors", "Explorers & Probes", "Periodontal Probes", "Cotton Pliers", "Articulating Paper Holders"],
  },
  {
    icon: "🔧",
    title: "Extraction Forceps",
    description: "Precision forceps for safe and effective tooth extraction procedures.",
    products: ["Upper Forceps", "Lower Forceps", "Wisdom Tooth Forceps", "Root Forceps", "Specialty Forceps"],
  },
  {
    icon: "✂️",
    title: "Surgical Instruments",
    description: "Specialized tools for oral and maxillofacial surgery.",
    products: ["Elevators", "Surgical Curettes", "Scalpels & Blades", "Needle Holders", "Surgical Scissors"],
  },
  {
    icon: "🦷",
    title: "Restorative Instruments",
    description: "Tools for fillings, crowns, and restorative dental procedures.",
    products: ["Carvers", "Pluggers & Condensers", "Plastic Instruments", "Amalgam Carriers", "Matrix Retainers"],
  },
  {
    icon: "🪝",
    title: "Orthodontic Pliers",
    description: "Specialized pliers for orthodontic procedures and wire work.",
    products: ["Bird Beak Pliers", "Distal End Cutters", "Ligature Cutters", "Band Removing Pliers", "Bracket Holding Pliers"],
  },
  {
    icon: "🌿",
    title: "Periodontal Instruments",
    description: "Tools for gum treatment and periodontal procedures.",
    products: ["Scalers & Curettes", "Periotomes", "Gingivectomy Knives", "Periodontal Files", "Pocket Markers"],
  },
];

const features = [
  {
    icon: Shield,
    title: "FDA Registered",
    description: "All dental instruments meet US FDA requirements"
  },
  {
    icon: Award,
    title: "Premium Steel",
    description: "Japanese & German grade stainless steel"
  },
  {
    icon: Sparkles,
    title: "Mirror Finish",
    description: "Easy sterilization and corrosion resistance"
  },
  {
    icon: CheckCircle,
    title: "Ergonomic Design",
    description: "Reduced hand fatigue during procedures"
  },
];

export default function DentalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a365d] via-[#234876] to-[#1a365d] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#c53030]/10 rounded-full blur-3xl"
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
              <span>Dental Instruments</span>
            </div>
            
            <Badge className="bg-[#c53030] hover:bg-[#9b2c2c] mb-6">
              FDA Registered
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Dental Instruments
            </h1>
            
            <p className="text-xl text-blue-100 mb-8">
              High-quality dental instruments designed for precision, comfort, and 
              long-lasting performance. Each tool is crafted from premium stainless 
              steel to meet international dental standards.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/shop">
                <Button 
                  size="lg" 
                  className="bg-[#c53030] hover:bg-[#9b2c2c] text-white"
                >
                  Shop Dental
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
              Dental Instrument Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive range of dental instruments, designed for 
              every aspect of modern dental practice.
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
                Dental Quality Standards
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Precision for Every Procedure
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Every dental instrument from Sharp Medical Supply is crafted to meet 
                the demanding requirements of modern dentistry. Our instruments provide 
                the precision, balance, and durability that dental professionals need 
                for optimal patient outcomes.
              </p>
              
              <div className="space-y-4">
                {[
                  "Ergonomic handle designs for reduced hand fatigue",
                  "Mirror-finish polishing for easy sterilization",
                  "Hardened tips for extended sharpness",
                  "Corrosion-resistant passivation treatment",
                  "CE Mark and ISO 13485 certified",
                  "FDA registered for US market",
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
                    <div className="text-gray-600">13485</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-3">🦷</div>
                    <div className="text-[#1a365d] font-bold text-2xl">1200+</div>
                    <div className="text-gray-600">Products</div>
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
              Request Dental Catalog
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Get our complete dental instrument catalog with detailed specifications, 
              pricing, and bulk order options for your practice.
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
