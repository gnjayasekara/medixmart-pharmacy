import Image from 'next/image';
import Link from 'next/link'
import { Home, ShoppingBasket, Info, Phone, Menu, Search, ClipboardPlus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export function Navbar() {
    return (
      <header>
      {/* Top Bar */}
      <div className="p-1"
      style={{
        backgroundColor: "hsl(var(--primary))",
        color: "hsl(var(--primary-foreground))",
      }}>
        <div className="ml-2 container mx-auto flex  items-center">
        <Image
              src="/whatsapp-logo.png"
              alt="WhatsApp Logo"
              width={20} 
              height={20} 
            />
        <a
          href="https://wa.me/+94756982000"
          className="ml-2 font-bold hover:underline"
          style={{ color: "hsl(var(--primary-foreground))" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          +(94) 75 698 2000
        </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="p-5"
        style={{
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
        }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold flex items-center">
          <Image
              src="/medixmart-logo.png"
              alt="Medixmart Logo"
              width={80} 
              height={80} 
            />
            
            <span className="text-xl font-bold ml-5 font-serif">MEDIXMART PHARMACY</span>
          </Link>
            <div className="hidden md:flex space-x-4">
                <SearchBar />
            </div>
          
        </div>
      </nav>
      {/* Bottom Bar */}
      <div
  className="p-2 flex items-center justify-between"
        style={{
            backgroundColor: "hsl(var(--secondary))",
            color: "hsl(var(--secondary-foreground))",
        }}
        >
        {/* Left: Navigation Items for Larger Screens */}
        <div className="hidden md:flex space-x-4">
            <NavItems />
        </div>

        {/* Center: Upload Prescriptions (Always Visible) */}
        <div>
            <UploadPrescriptions />
        </div>

        {/* Right: Sheet for Smaller Screens */}
        <Sheet>
            <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
            </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[200px] sm:w-[300px]">
            <div className="flex flex-col space-y-4 mt-4">
                <SearchBar />
                <NavItems />
            </div>
            </SheetContent>
        </Sheet>
        </div>

      </header>
    );
  }
  
  function NavItems() {
    return (
      <>
        <Button asChild variant="ghost" className="hover:text-[hsl(var(--primary))]">
          <Link href="/">
            <Home className="ml-2 h-4 w-4" /> Home
          </Link>
        </Button>
        <Button asChild variant="ghost" className="hover:text-[hsl(var(--primary))]">
          <Link href="/products">
            <ShoppingBasket className="ml-2 h-4 w-4" /> Products
          </Link>
        </Button>
        <Button asChild variant="ghost" className="hover:text-[hsl(var(--primary))]">
          <Link href="/about">
            <Info className="ml-2 h-4 w-4" /> About
          </Link>
        </Button>
        <Button asChild variant="ghost" className="hover:text-[hsl(var(--primary))]">
          <Link href="/contact">
            <Phone className="ml-2 h-4 w-4" /> Contact
          </Link>
        </Button>
      </>
    );
  }

  function SearchBar() {
    return (
      <div className="relative">
        <Input
          type="search"
          placeholder="Search products..."
          className="pl-8 pr-2 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary-foreground))]"
          style={{ 
            backgroundColor: "hsl(var(--secondary))",
            color: "hsl(var(--secondary-foreground))",
            borderColor: "hsl(var(--primary))"
          }}
        />
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[hsl(var(--secondary-foreground))]" />
      </div>
    )
  }

  function UploadPrescriptions() {
    return (
      <div className="flex justify-end">
        <Button asChild variant="ghost" className="hover:text-[hsl(var(--primary))]">
          <Link href="/upload-prescriptions" className="flex items-center">
            <ClipboardPlus className="ml-5 h-4 w-4" />
            Upload Prescriptions
          </Link>
        </Button>
      </div>
    );
  }
