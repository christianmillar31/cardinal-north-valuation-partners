import Link from "next/link";
import { ArrowRight, Building, Mail, MapPin, Phone, ShieldCheck, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardinalLogo from "@/components/cardinal-logo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <CardinalLogo />
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Professional Valuation Services
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Expert business valuation and financial advisory services for informed decision-making.
                </p>
              </div>
              <div className="space-x-4">
                <Button>
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
