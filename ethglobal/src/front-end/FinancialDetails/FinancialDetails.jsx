import React from "react";
import { Link } from "react-router-dom";
import "./FinancialDetails.css"; // Assuming you have your CSS file for styling

const FinancialDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="Artisan Logo"
            className="object-contain"
            width={32}
            height={32}
          />
          <span className="text-xl font-semibold">Artisan</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link to="#features" className="text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link to="#about" className="text-gray-600 hover:text-gray-900">
            About Us
          </Link>
          <Link to="#product" className="text-gray-600 hover:text-gray-900">
            Product
          </Link>
          <Link to="#blog" className="text-gray-600 hover:text-gray-900">
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="btn-ghost">Login</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="relative">
          {/* Main Content */}
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-6">
              Let's give some
              <span className="inline-flex items-center">
                Holograph
              </span>
            </h1>
            <p className="text-gray-600 mb-8">
              What normal people can't do, art could change and involve programs.
            </p>
            <button className="btn-primary rounded-full px-8 py-6">
              Buy Now
            </button>
          </div>

          {/* Holographic Image */}
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <div className="relative h-full">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Holographic Shape"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                width={400}
                height={400}
              />

              {/* Floating Shapes */}
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src="/placeholder.svg?height=80&width=80"
                  alt={`Floating Shape ${i}`}
                  width={80}
                  height={80}
                  className={`absolute animate-float-${i} rounded-lg`}
                  style={{
                    top: `${20 * i}%`,
                    right: `${10 * i}%`,
                    animation: `float ${2 + i * 0.5}s infinite ease-in-out alternate`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Creators */}
        <div className="mt-16">
          <h3 className="text-lg font-medium mb-4">Recent Creators</h3>
          <div className="flex items-center gap-6">
            {[
              { name: "Catherine Turner", role: "UI Designer" },
              { name: "Rachel Aguilar", role: "3D Artist" },
              { name: "Jane Kennedy", role: "UX Artist" },
            ].map((creator, i) => (
              <div key={i} className="flex items-center gap-2">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt={creator.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{creator.name}</p>
                  <p className="text-sm text-gray-500">{creator.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinancialDetails;
