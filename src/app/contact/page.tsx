"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  FileText,
  Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    description: "Mon-Fri 8am-6pm EST"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["sales@sharpmedical.com", "support@sharpmedical.com"],
    description: "We reply within 24 hours"
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["USA Nationwide Distribution"],
    description: "Fast shipping to all 50 states"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8AM - 6PM EST"],
    description: "Weekend support available"
  },
];

const inquiryTypes = [
  { value: "", label: "Select inquiry type" },
  { value: "quote", label: "Request a Quote" },
  { value: "catalog", label: "Request Catalog" },
  { value: "bulk", label: "Bulk Order Inquiry" },
  { value: "product", label: "Product Question" },
  { value: "account", label: "Account/Order Status" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a365d] via-[#234876] to-[#1a365d] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#c53030]/20 rounded-full blur-3xl"
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
              <span>Contact</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            
            <p className="text-xl text-blue-100">
              Have questions about our products or need a custom quote? 
              Our team is here to help you find the perfect instruments for your practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-[#c53030]/10 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-7 h-7 text-[#c53030]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a365d] mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-700 font-medium">
                    {detail}
                  </p>
                ))}
                <p className="text-gray-500 text-sm mt-2">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-[#c53030]" />
                  <h2 className="text-2xl font-bold text-[#1a365d]">
                    Send us a Message
                  </h2>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-green-700">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company/Practice
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Medical Practice"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c53030] focus:border-transparent"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your needs..."
                        required
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#c53030] hover:bg-[#9b2c2c] h-12 text-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#1a365d] mb-6">
                  Quick Actions
                </h2>
                <div className="space-y-4">
                  <Link href="/shop">
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#c53030]/10 rounded-xl flex items-center justify-center">
                            <Package className="w-6 h-6 text-[#c53030]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#1a365d]">
                              Browse Products
                            </h3>
                            <p className="text-gray-500 text-sm">
                              View our full catalog online
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#c53030] group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#c53030]/10 rounded-xl flex items-center justify-center">
                          <FileText className="w-6 h-6 text-[#c53030]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#1a365d]">
                            Download Catalog
                          </h3>
                          <p className="text-gray-500 text-sm">
                            Get our complete product catalog
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#c53030] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-[#1a365d] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Our Certifications</h3>
                <div className="space-y-3">
                  {[
                    "FDA Registered Medical Device Distributor",
                    "CE Mark Certified Products",
                    "ISO 9001:2015 Quality Management",
                    "ISO 13485 Medical Device Quality",
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-blue-100">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-[#c53030] to-[#9b2c2c] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-8 h-8" />
                  <h3 className="text-xl font-bold">Fast Response Time</h3>
                </div>
                <p className="text-red-100">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-[#1a365d] mb-2">
              Nationwide Distribution
            </h2>
            <p className="text-gray-600">
              Fast shipping to all 50 states
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a365d] to-[#2c5282] rounded-3xl p-12 text-center text-white"
          >
            <div className="text-6xl mb-6">🚚</div>
            <h3 className="text-3xl font-bold mb-4">
              Serving Healthcare Professionals Across America
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              From New York to California, Texas to Washington — we deliver premium 
              medical instruments to healthcare facilities in all 50 states.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                Same-Day Shipping Available
              </Badge>
              <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                Free Shipping on Orders $500+
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
