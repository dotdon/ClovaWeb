import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* CTA Section */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

