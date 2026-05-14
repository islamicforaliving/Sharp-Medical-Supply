"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Star, 
  CheckCircle,
  ArrowRight,
  Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { id: "all", name: "All Products", count: 2000 },
  { id: "surgical", name: "Surgical Instruments", count: 800 },
  { id: "dental", name: "Dental Instruments", count: 1200 },
];

const subcategories = {
  surgical: [
    "General Surgery",
    "Orthopedic",
    "Cardiovascular",
    "Neurosurgery",
    "Ophthalmic",
    "ENT",
  ],
  dental: [
    "Diagnostic",
    "Extraction Forceps",
    "Surgical",
    "Restorative",
    "Orthodontic",
    "Periodontal",
  ],
};

// Sample products data
const products = [
  {
    id: 1,
    name: "Premium Surgical Scalpel Handle #3",
    category: "surgical",
    subcategory: "General Surgery",
    price: 24.99,
    rating: 4.9,
    reviews: 128,
    image: "✂️",
    badge: "Bestseller",
    inStock: true,
    description: "German stainless steel surgical scalpel handle, autoclavable",
  },
  {
    id: 2,
    name: "Mayo Hegar Needle Holder 6\"",
    category: "surgical",
    subcategory: "General Surgery",
    price: 45.99,
    rating: 4.8,
    reviews: 96,
    image: "🔧",
    badge: null,
    inStock: true,
    description: "Tungsten carbide inserts, precision engineered",
  },
  {
    id: 3,
    name: "Allis Tissue Forceps 6x7 Teeth",
    category: "surgical",
    subcategory: "General Surgery",
    price: 38.50,
    rating: 4.7,
    reviews: 84,
    image: "🔩",
    badge: null,
    inStock: true,
    description: "Premium tissue grasping forceps",
  },
  {
    id: 4,
    name: "Bone Cutting Forceps 7\"",
    category: "surgical",
    subcategory: "Orthopedic",
    price: 89.99,
    rating: 4.9,
    reviews: 52,
    image: "🦴",
    badge: "Premium",
    inStock: true,
    description: "Heavy-duty orthopedic cutting instrument",
  },
  {
    id: 5,
    name: "Dental Mirror #5 Front Surface",
    category: "dental",
    subcategory: "Diagnostic",
    price: 12.99,
    rating: 4.8,
    reviews: 215,
    image: "🔍",
    badge: "Popular",
    inStock: true,
    description: "Rhodium coated front surface mirror",
  },
  {
    id: 6,
    name: "Dental Explorer #23/17A",
    category: "dental",
    subcategory: "Diagnostic",
    price: 8.99,
    rating: 4.7,
    reviews: 178,
    image: "🦷",
    badge: null,
    inStock: true,
    description: "Double-ended diagnostic explorer",
  },
  {
    id: 7,
    name: "Upper Universal Extraction Forceps #150",
    category: "dental",
    subcategory: "Extraction Forceps",
    price: 34.99,
    rating: 4.9,
    reviews: 142,
    image: "🔧",
    badge: "Bestseller",
    inStock: true,
    description: "Standard pattern for upper anterior teeth",
  },
  {
    id: 8,
    name: "Lower Universal Extraction Forceps #151",
    category: "dental",
    subcategory: "Extraction Forceps",
    price: 34.99,
    rating: 4.8,
    reviews: 136,
    image: "🔧",
    badge: null,
    inStock: true,
    description: "Standard pattern for lower anterior teeth",
  },
  {
    id: 9,
    name: "Dental Elevator #301",
    category: "dental",
    subcategory: "Surgical",
    price: 28.50,
    rating: 4.7,
    reviews: 98,
    image: "🦷",
    badge: null,
    inStock: true,
    description: "Straight elevator for tooth extraction",
  },
  {
    id: 10,
    name: "Orthodontic Bird Beak Pliers",
    category: "dental",
    subcategory: "Orthodontic",
    price: 42.99,
    rating: 4.8,
    reviews: 76,
    image: "🪝",
    badge: null,
    inStock: true,
    description: "Light wire forming pliers",
  },
  {
    id: 11,
    name: "Curette Gracey #1/2",
    category: "dental",
    subcategory: "Periodontal",
    price: 22.99,
    rating: 4.6,
    reviews: 89,
    image: "🌿",
    badge: null,
    inStock: true,
    description: "Area-specific periodontal curette",
  },
  {
    id: 12,
    name: "Amalgam Carrier Regular",
    category: "dental",
    subcategory: "Restorative",
    price: 18.99,
    rating: 4.7,
    reviews: 112,
    image: "🦷",
    badge: null,
    inStock: true,
    description: "Double-ended amalgam carrier",
  },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#1a365d] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Shop Medical Instruments
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Browse our catalog of 2000+ FDA registered, CE & ISO certified 
              surgical and dental instruments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shop Interface */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={selectedCategory === cat.id ? "bg-[#c53030] hover:bg-[#9b2c2c]" : ""}
                  >
                    {cat.name}
                    <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                      {cat.count}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-[#c53030]" />
                  <h3 className="font-semibold text-lg">Filters</h3>
                </div>

                {selectedCategory !== "all" && (
                  <div className="mb-6">
                    <h4 className="font-medium mb-3 text-gray-700">
                      Subcategories
                    </h4>
                    <div className="space-y-2">
                      {subcategories[selectedCategory as keyof typeof subcategories]?.map((sub) => (
                        <label key={sub} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded border-gray-300 text-[#c53030]" />
                          <span className="text-gray-600">{sub}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="font-medium mb-3 text-gray-700">Certifications</h4>
                  <div className="space-y-2">
                    {["FDA Registered", "CE Certified", "ISO 9001", "ISO 13485"].map((cert) => (
                      <label key={cert} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300 text-[#c53030]" />
                        <span className="text-gray-600">{cert}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">All products in stock</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} products
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Sort by:</span>
                  <select className="border rounded-lg px-3 py-2">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Rated</option>
                  </select>
                </div>
              </div>

              <motion.div 
                layout
                className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <span className="text-6xl">{product.image}</span>
                          {product.badge && (
                            <Badge className="absolute top-3 left-3 bg-[#c53030] hover:bg-[#9b2c2c]">
                              {product.badge}
                            </Badge>
                          )}
                          <div className="absolute top-3 right-3">
                            <Badge variant="secondary" className="text-xs">
                              {product.subcategory}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-5">
                          <div className="flex items-center gap-1 mb-2">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{product.rating}</span>
                            <span className="text-sm text-gray-500">({product.reviews})</span>
                          </div>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-[#c53030] transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-2xl font-bold text-[#1a365d]">
                                ${product.price}
                              </span>
                              <span className="text-sm text-gray-500">/each</span>
                            </div>
                            <Button
                              onClick={() => addToCart(product.id)}
                              className="bg-[#c53030] hover:bg-[#9b2c2c]"
                            >
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Add
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your search or filters
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#1a365d] to-[#2c5282] rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Need a Custom Quote?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Bulk orders, institutional pricing, or custom instrument requests. 
              Our sales team is ready to help.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-[#1a365d] hover:bg-gray-100"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
