import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Star, 
  MapPin,
  Phone,
  MessageCircle,
  Egg,
  Package,
  Truck
} from "lucide-react";
import marketplaceImage from "@/assets/marketplace.jpg";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products", count: 24 },
    { id: "chicks", name: "Chicks", count: 8 },
    { id: "layers", name: "Layers", count: 6 },
    { id: "eggs", name: "Eggs", count: 4 },
    { id: "feed", name: "Feed", count: 3 },
    { id: "manure", name: "Manure", count: 3 }
  ];

  const products = [
    {
      id: 1,
      name: "Day-Old Chicks (Broiler)",
      price: 45,
      originalPrice: 50,
      image: "/api/placeholder/300/200",
      seller: "Kiambu Poultry Farm",
      location: "Kiambu, Kenya",
      rating: 4.8,
      reviews: 124,
      category: "chicks",
      description: "Healthy day-old broiler chicks from certified hatchery",
      availability: "In Stock",
      phone: "+254701234567",
      featured: true
    },
    {
      id: 2,
      name: "Layer Pullets (16 weeks)",
      price: 450,
      image: "/api/placeholder/300/200",
      seller: "Nakuru Layers Ltd",
      location: "Nakuru, Kenya",
      rating: 4.9,
      reviews: 89,
      category: "layers",
      description: "Ready to lay pullets, vaccinated and healthy",
      availability: "In Stock",
      phone: "+254712345678"
    },
    {
      id: 3,
      name: "Fresh Farm Eggs (30 pieces)",
      price: 350,
      image: "/api/placeholder/300/200",
      seller: "Valley View Farm",
      location: "Eldoret, Kenya",
      rating: 4.7,
      reviews: 156,
      category: "eggs",
      description: "Fresh eggs from free-range chickens",
      availability: "In Stock",
      phone: "+254723456789"
    },
    {
      id: 4,
      name: "Starter Feed (50kg)",
      price: 2800,
      image: "/api/placeholder/300/200",
      seller: "AgriFeeds Kenya",
      location: "Nairobi, Kenya",
      rating: 4.6,
      reviews: 203,
      category: "feed",
      description: "High-quality starter feed for chicks 0-8 weeks",
      availability: "In Stock",
      phone: "+254734567890"
    },
    {
      id: 5,
      name: "Organic Chicken Manure (Bag)",
      price: 200,
      image: "/api/placeholder/300/200",
      seller: "Green Farm Organics",
      location: "Meru, Kenya",
      rating: 4.5,
      reviews: 67,
      category: "manure",
      description: "Well-composted organic chicken manure for gardens",
      availability: "In Stock",
      phone: "+254745678901"
    },
    {
      id: 6,
      name: "Kienyeji Chickens (Mature)",
      price: 800,
      image: "/api/placeholder/300/200",
      seller: "Heritage Poultry",
      location: "Machakos, Kenya",
      rating: 4.8,
      reviews: 92,
      category: "layers",
      description: "Indigenous chickens, fully grown and healthy",
      availability: "Limited Stock",
      phone: "+254756789012"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Smart Marketplace</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Buy and sell poultry products with confidence. From day-old chicks to mature layers, 
                fresh eggs to organic feed - everything you need for your poultry business.
              </p>
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="text-success border-success">
                  M-Pesa Integrated
                </Badge>
                <Badge variant="outline" className="text-warning border-warning">
                  Verified Sellers
                </Badge>
                <Badge variant="outline" className="text-accent border-accent">
                  Fast Delivery
                </Badge>
              </div>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={marketplaceImage}
                alt="Marketplace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "farm" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="transition-farm"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover-lift transition-farm farm-shadow">
              {product.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="default" className="bg-warning text-warning-foreground">
                    Featured
                  </Badge>
                </div>
              )}
              
              <div className="aspect-video rounded-t-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                  <Badge variant="outline" className={
                    product.availability === "In Stock" ? "text-success border-success" : "text-warning border-warning"
                  }>
                    {product.availability}
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-warning text-warning" />
                    <span className="text-sm ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="mb-4 line-clamp-2">
                  {product.description}
                </CardDescription>
                
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{product.seller}</span>
                  <span className="text-sm text-muted-foreground">• {product.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">KSh {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        KSh {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="farm" className="flex-1">
                    <ShoppingCart className="mr-2 w-4 h-4" />
                    Buy Now
                  </Button>
                  
                  <Button variant="outline" size="icon">
                    <a href={`tel:${product.phone}`}>
                      <Phone className="w-4 h-4" />
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="icon">
                    <a href={`https://wa.me/${product.phone.replace('+', '')}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Marketplace Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center farm-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-success" />
              </div>
              <CardTitle>Quality Assured</CardTitle>
              <CardDescription>
                All products are verified and quality-checked by our team
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center farm-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-warning" />
              </div>
              <CardTitle>M-Pesa Payment</CardTitle>
              <CardDescription>
                Secure and convenient mobile payments for all transactions
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center farm-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Fast Delivery</CardTitle>
              <CardDescription>
                Quick and reliable delivery to your location across Kenya
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Marketplace;