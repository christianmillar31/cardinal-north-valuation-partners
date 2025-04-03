import Link from "next/link"
import { ArrowRight, Building, Mail, MapPin, Phone, ShieldCheck, LineChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardinalLogo } from "@/components/cardinal-logo"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CardinalLogo className="h-10 w-10 text-red-600" />
            <span className="font-bold text-xl">Cardinal North Valuation</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link href="#services" className="font-medium hover:text-red-600 transition-colors">
              Services
            </Link>
            <Link href="#team" className="font-medium hover:text-red-600 transition-colors">
              Our Team
            </Link>
            <Link href="#about" className="font-medium hover:text-red-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="font-medium hover:text-red-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-red-600 hover:bg-red-700">Get a Quote</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Expert Valuation Services for Your Business
              </h1>
              <p className="text-lg text-gray-600">
                Cardinal North Valuation provides accurate, reliable business valuation services to help you make
                informed decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-red-600 hover:bg-red-700">Our Services</Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Business valuation experts"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Valuation Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive valuation services tailored to your specific needs, ensuring accurate assessments
                for any situation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Building className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Business Valuation</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analysis of your business's worth for sales, mergers, acquisitions, or strategic
                  planning.
                </p>
                <Link href="#" className="text-red-600 flex items-center gap-2 font-medium hover:underline">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <ShieldCheck className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Risk & Insurance</h3>
                <p className="text-gray-600 mb-4">
                  Expert assessment of business risks and insurance needs to protect your assets and operations.
                </p>
                <Link href="#" className="text-red-600 flex items-center gap-2 font-medium hover:underline">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <LineChart className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Sustainability & Audit</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive sustainability consulting and financial audit services to ensure compliance and growth.
                </p>
                <Link href="#" className="text-red-600 flex items-center gap-2 font-medium hover:underline">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Meet Our Founders</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                With decades of combined experience, our founding team brings expertise, integrity, and precision to
                every valuation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Patrick Millar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Patrick Millar</h3>
                <p className="text-gray-600 mb-4">Founder & Managing Partner</p>
                <p className="text-gray-600">
                  With 40 years of experience in business valuation, risk and insurance, and finance, Patrick leads our
                  strategic direction and client relationships.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Michael Millar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Michael Millar, CPA</h3>
                <p className="text-gray-600 mb-4">Co-Founder & Sustainability Director</p>
                <p className="text-gray-600">
                  As a Certified Public Accountant, Michael specializes in sustainability consulting and audit services,
                  helping businesses achieve both financial and environmental goals.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Nicholas Millar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Nicholas Millar, CPA</h3>
                <p className="text-gray-600 mb-4">Co-Founder & Financial Director</p>
                <p className="text-gray-600">
                  Nicholas specializes in audit and Financial Planning & Analysis (FP&A), ensuring our clients receive
                  comprehensive financial insights and strategic guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Cardinal North Valuation team"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About Cardinal North Valuation</h2>
              <p className="text-gray-600">
                Founded by Patrick, Michael, and Nicholas Millar, Cardinal North Valuation brings decades of combined
                experience to every client engagement. Our team of certified valuation experts is committed to
                delivering accurate, defensible valuations that stand up to scrutiny.
              </p>
              <p className="text-gray-600">
                We understand that each business is unique, which is why we take a personalized approach to every
                valuation project. Our methodologies are rigorous, our analysis is thorough, and our reports are clear
                and comprehensive.
              </p>
              <Button className="bg-red-600 hover:bg-red-700">Learn More About Us</Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about our valuation services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=64&width=64"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-gray-600">CEO, TechStart Inc.</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The Millar team at Cardinal North provided us with a thorough and well-documented valuation that was
                  crucial for our recent funding round. Their expertise and attention to detail made all the
                  difference."
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=64&width=64"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-gray-600">Owner, Chen Manufacturing</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "When it came time to sell my family business, I needed a valuation I could trust. Patrick and his
                  brothers were professional, responsive, and delivered a valuation that helped us negotiate from a
                  position of strength."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ready to get started? Contact us today for a consultation about your valuation needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Our Office</h4>
                    <p className="text-gray-600">
                      123 Business Avenue, Suite 400
                      <br />
                      Thousand Oaks, CA 91360
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-gray-600">(805) 555-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-gray-600">info@cardinalnorthvaluation.com</p>
                  </div>
                </div>
              </div>

              <form className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <input id="first-name" className="w-full px-3 py-2 border rounded-md" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <input id="last-name" className="w-full px-3 py-2 border rounded-md" type="text" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input id="email" className="w-full px-3 py-2 border rounded-md" type="email" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <input id="phone" className="w-full px-3 py-2 border rounded-md" type="tel" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    How can we help?
                  </label>
                  <textarea id="message" className="w-full px-3 py-2 border rounded-md min-h-[120px]"></textarea>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CardinalLogo className="h-6 w-6 text-red-400" />
                <span className="font-bold text-lg">Cardinal North Valuation</span>
              </div>
              <p className="text-gray-400">Providing expert valuation services with integrity and precision.</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Business Valuation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Risk & Insurance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Sustainability Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Audit & FP&A
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Cardinal North Valuation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
