import Link from "next/link"
import { Facebook, MapPin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer>
      <div className="container mx-auto py-8 px-6"
        style={{
            backgroundColor: "hsl(var(--primary))",
            color: "hsl(var(--primary-foreground))",
          }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are a company dedicated to providing excellent services and products to our customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-emerald-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm hover:text-emerald-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-emerald-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-emerald-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm flex items-center">
              <a
                href="https://maps.app.goo.gl/62U1BTsjApAGMtiRA"
                className="flex items-center font-bold hover:underline"
                style={{ color: "hsl(var(--primary-foreground))" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={20} className="mr-2" />
                123 Main St, Anytown, USA 12345
              </a>
            </p>
            <p className="text-sm">Email: 
              <a href="mailto:
                medixmartpharmacy@gmail.com"
                className="ml-2 font-bold hover:underline"
                style={{ color: "hsl(var(--primary-foreground))" }}
                target="_blank"
                rel="noopener noreferrer">
                medixmartpharmacy@gmail.com
              </a>
              </p>
            <p className="text-sm">Phone: 
              <a
                href="https://wa.me/+94756982000"
                className="ml-2 font-bold hover:underline"
                style={{ color: "hsl(var(--primary-foreground))" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                +(94) 75 698 2000
              </a>
            </p>
            
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/people/Medixmart-Pharmacy/61555057421907/" 
              className="text-white hover:text-emerald-200"
              target="_blank"
              rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/@nipunathukorala2" 
              className="text-white hover:text-emerald-200"
              target="_blank"
              rel="noopener noreferrer">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-emerald-600 text-center">
          <p className="text-sm">&copy; 2025 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

