"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Shield, 
  Award, 
  CheckCircle, 
  Truck, 
  Clock,
  Package,
  Users,
  Globe,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "2000+", label: "Products Available" },
  { number: "500+", label: "Healthcare Partners" },
  { number: "50+", label: "States Served" },
];

const features = [
  {
    icon: Shield,
    title: "FDA Registered",
    description: "Fully compliant with US FDA regulations for medical device distribution"
  },
  {
    icon: Award,
    title: "CE & ISO Certified",
    description: "All products meet European CE and ISO 9001:2015 quality standards"
  },
  {
    icon: Truck,
    title: "Fast USA Shipping",
    description: "Quick delivery across all 50 states with tracking provided"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service for all your inquiries"
  },
];

const categories = [
  {
    title: "Surgical Instruments",
    description: "Precision-crafted tools for general, orthopedic, cardiovascular, and specialized surgery.",
    image: "🏥",
    href: "/surgical",
    products: "800+ Products"
  },
  {
    title: "Dental Instruments",
    description: "High-quality dental tools for diagnostics, surgery, orthodontics, and periodontics.",
    image: "🦷",
    href: "/dental",
    products: "1200+ Products"
  }
];

const testimonials = [
  {
    quote: "Sharp Medical has been our go-to supplier for surgical instruments. The quality is exceptional and delivery is always on time.",
    author: "Dr. Sarah Mitchell",
    role: "Chief of Surgery",
    location: "Metropolitan Hospital, NY"
  },
  {
    quote: "As a dental practice owner, I need reliable instruments. Sharp Medical delivers premium quality at competitive prices.",
    author: "Dr. James Chen",
    role: "Dental Surgeon",
    location: "Chen Dental Group, CA"
  },
  {
    quote: "The FDA registration and certifications give us confidence. Excellent customer service and fast shipping.",
    author: "Lisa Rodriguez",
    role: "Procurement Manager",
    location: "Regional Medical Center, TX"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a365d] via-[#234876] to-[#1a365d] text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-[#c53030]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div variants={fadeInUp}>
                <Badge className="bg-[#c53030] hover:bg-[#9b2c2c] text-white mb-6 px-4 py-1.5 text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  FDA Registered Medical Device Distributor
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                Premium Surgical &{" "}
                <span className="text-[#fc8181]">Dental Instruments</span>
                {" "}for US Healthcare
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl"
              >
                CE & ISO certified medical instruments delivered nationwide. 
                Trusted by 500+ healthcare facilities across America for quality 
                they can depend on.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link href="/shop">
                  <Button 
                    size="lg" 
                    className="bg-[#c53030] hover:bg-[#9b2c2c] text-white px-8 py-6 text-lg group"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-[#1a365d] px-8 py-6 text-lg"
                  >
                    Request Quote
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4 mt-10"
              >
                {["FDA Registered", "CE Certified", "ISO 9001", "Fast Shipping"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">{badge}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hero Image/Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Visual */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
                >
                  <div className="text-8xl text-center mb-6">⚕️</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">✂️</div>
                      <div className="text-sm text-blue-200">Surgical</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">🦷</div>
                      <div className="text-sm text-blue-200">Dental</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">🔬</div>
                      <div className="text-sm text-blue-200">Precision</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">📦</div>
                      <div className="text-sm text-blue-200">Shipping</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-[#c53030] text-white px-4 py-2 rounded-lg shadow-xl"
                >
                  <div className="text-2xl font-bold">FDA</div>
                  <div className="text-xs">Registered</div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-white text-[#1a365d] px-4 py-2 rounded-lg shadow-xl"
                >
                  <div className="text-2xl font-bold">2000+</div>
                  <div className="text-xs">Products</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              Why Healthcare Professionals Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine premium quality instruments with exceptional service to support 
              your practice&apos;s success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-[#c53030]/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#c53030]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              Our Product Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive catalog of surgical and dental instruments, 
              all meeting the highest quality standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Link href={category.href}>
                  <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="h-64 bg-gradient-to-br from-[#1a365d] to-[#2c5282] flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-8xl relative z-10"
                      >
                        {category.image}
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-sm font-medium">
                          {category.products}
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-[#1a365d] mb-3 group-hover:text-[#c53030] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center text-[#c53030] font-semibold group-hover:gap-3 transition-all">
                        Explore Products
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Highlight */}
      <section className="py-20 bg-[#1a365d] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-[#c53030] hover:bg-[#9b2c2c] mb-4">
                US Market Focus
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Fully Certified for the US Healthcare Market
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                We maintain the highest standards of compliance and quality assurance 
                to serve American healthcare facilities with confidence.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Shield, title: "FDA Registered", desc: "Fully compliant with US FDA regulations" },
                  { icon: Award, title: "CE Mark Certified", desc: "European conformity standards met" },
                  { icon: CheckCircle, title: "ISO 9001:2015", desc: "Quality management system certified" },
                  { icon: CheckCircle, title: "ISO 13485", desc: "Medical device quality management" },
                ].map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <cert.icon className="w-6 h-6 text-[#fc8181]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{cert.title}</h4>
                      <p className="text-blue-200">{cert.desc}</p>
                    </div>
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
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-5xl mb-3">🏆</div>
                    <div className="text-[#1a365d] font-bold">FDA</div>
                    <div className="text-gray-600 text-sm">Registered</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-5xl mb-3">✓</div>
                    <div className="text-[#1a365d] font-bold">CE</div>
                    <div className="text-gray-600 text-sm">Certified</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-5xl mb-3">📋</div>
                    <div className="text-[#1a365d] font-bold">ISO</div>
                    <div className="text-gray-600 text-sm">9001:2015</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-5xl mb-3">🌟</div>
                    <div className="text-[#1a365d] font-bold">ISO</div>
                    <div className="text-gray-600 text-sm">13485</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what medical professionals across the USA say about working with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-[#1a365d]">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-[#c53030]">
                    {testimonial.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#c53030] to-[#9b2c2c] rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Upgrade Your Medical Supplies?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Join 500+ healthcare facilities across the USA. Get premium quality 
              instruments with fast shipping and exceptional service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/shop">
                <Button 
                  size="lg" 
                  className="bg-white text-[#c53030] hover:bg-gray-100 px-8 py-6 text-lg"
                >
                  <Package className="mr-2 w-5 h-5" />
                  Browse Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-[#c53030] px-8 py-6 text-lg"
                >
                  <Users className="mr-2 w-5 h-5" />
                  Speak to Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
