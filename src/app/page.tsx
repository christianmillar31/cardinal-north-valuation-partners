import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building, Mail, MapPin, Phone, ShieldCheck, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardinalLogo from "@/components/cardinal-logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src="/images/cardinal-logo.png"
                  alt="Cardinal North Logo"
                  width={150}
                  height={40}
                  priority
                />
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-gray-900">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900">
                Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Professional</span>
                  <span className="block text-red-600">Valuation Services</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Expert business valuation and financial advisory services for informed decision-making.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Valuation Solutions
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Service 1 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Business Valuation</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Comprehensive analysis and valuation of businesses for various purposes.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Financial Advisory</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Strategic financial guidance and planning for businesses.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">M&A Support</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Expert support for mergers, acquisitions, and business transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
