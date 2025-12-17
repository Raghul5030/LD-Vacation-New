import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Loader } from './components/Loader';
import { SEO } from './components/SEO';
import { FloatingLeadForm } from './components/FloatingLeadForm';
import { generateDestinationDetails, generatePlaceDetails } from './services/geminiService';
import { STATES_DATA, APP_NAME, CONTACT_PHONE, COIMBATORE_PACKAGES } from './constants';
import { GeneratedContent, LoadState } from './types';

// --- Shared Layout Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NavBar = () => (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3 group">
        {/* Custom Logo Image */}
        <div className="relative w-12 h-12 flex-shrink-0">
          <img src="/images/logo.jpg" alt="LD Vacation Logo" className="w-full h-full object-contain" />
        </div>
        <span className="text-xl font-bold text-slate-800 tracking-tight font-serif uppercase">LD Vacation</span>
      </Link>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
        <Link to="/packages" className="hover:text-teal-700 transition-colors">Packages</Link>
        {STATES_DATA.map(state => (
          <Link key={state.id} to={`/state/${state.id}`} className="hover:text-teal-700 transition-colors">
            {state.name}
          </Link>
        ))}
      </div>
      <a
        href={`https://wa.me/${CONTACT_PHONE.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span>{CONTACT_PHONE}</span>
      </a>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-12">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <img src="/images/logo.jpg" alt="LD Vacation Logo" className="w-10 h-10 object-contain rounded-full" />
          <h3 className="text-xl font-bold text-white font-serif uppercase tracking-wider">{APP_NAME}</h3>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          Coimbatore-based travel agency dedicated to offering budget-friendly and memorable travel experiences across South India.
        </p>
        <div className="text-sm text-slate-400 mb-4">
          <p className="font-semibold text-slate-300">Visit Us:</p>
          <p>Airport Road, Coimbatore,</p>
          <p>Tamil Nadu, India</p>
        </div>
        <p className="text-sm text-teal-400 font-semibold">Beaches • Hill Stations • Temples</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
          <li><Link to="/packages" className="hover:text-teal-400 transition-colors">Tour Packages</Link></li>
          {STATES_DATA.map(s => (
            <li key={s.id}><Link to={`/state/${s.id}`} className="hover:text-teal-400 transition-colors">{s.name}</Link></li>
          ))}
          <li><Link to="/privacy-policy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
          <li><Link to="/terms-conditions" className="hover:text-teal-400 transition-colors">Terms & Conditions</Link></li>
          <li><Link to="/sitemap" className="hover:text-teal-400 transition-colors">Sitemap</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Why LD Vacation?</h4>
        <ul className="space-y-2 text-sm">
          <li>✅ Affordable Packages</li>
          <li>✅ Expert Local Guides</li>
          <li>✅ 24/7 Support</li>
          <li>✅ Custom Trip Planning</li>
        </ul>
        <div className="mt-6 space-y-3">
          <a href={`https://wa.me/${CONTACT_PHONE.replace(/[^0-9]/g, '')}`} className="block w-full bg-teal-700 hover:bg-teal-600 text-white py-2 px-4 rounded text-center transition-colors">
            WhatsApp: {CONTACT_PHONE}
          </a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs flex flex-col md:flex-row justify-between items-center gap-4">
      <span>© {new Date().getFullYear()} LD Vacation. All rights reserved.</span>
      <span className="text-slate-500">Designed for the perfect getaway.</span>
    </div>
  </footer>
);

// --- Page Views ---

// Reusable Package Card Component
const PackageCard: React.FC<{ pkg: typeof COIMBATORE_PACKAGES[0] }> = ({ pkg }) => (
  <Link to={`/package/${pkg.id}`} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all border border-slate-100 flex flex-col group h-full">
    <div className="h-48 overflow-hidden relative">
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
        {pkg.duration}
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">{pkg.title}</h3>
      <div className="text-teal-700 font-bold text-xl mb-4">{pkg.price}</div>
      <ul className="space-y-2 mb-6 flex-1">
        {pkg.features.slice(0, 3).map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            {feature}
          </li>
        ))}
      </ul>
      <span
        className="block w-full text-center bg-slate-100 group-hover:bg-teal-700 group-hover:text-white text-slate-700 font-bold py-3 rounded-lg transition-colors shadow-sm"
      >
        View Details
      </span>
    </div>
  </Link>
);

const Home = () => {
  return (
    <div>
      <SEO
        title="South India Tour Packages | Tamil Nadu, Kerala, Karnataka Travel Agency - LD Vacation"
        description="Book customized South India tour packages with LD Vacation. Specialists in Tamil Nadu, Kerala, and Karnataka tourism. Affordable family trips, honeymoon packages, and temple tours from Coimbatore."
        keywords="South India tour packages, travel agency Coimbatore, Tamil Nadu tourism, Kerala tour packages, Karnataka travel, honeymoon packages south india, temple tour packages, budget travel agent, LD Vacation"
      />
      <Hero
        title="Explore the Soul of South India"
        subtitle="Customized, budget-friendly packages for Tamil Nadu, Kerala, and Karnataka"
        imageUrl="/images/home-hero.jpg"
      />

      {/* SECTION: Packages near Coimbatore (Moved Above Destinations) */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 font-serif">Top Packages from Coimbatore</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Exclusive budget-friendly deals starting from Coimbatore. Perfect for weekend getaways and short trips.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COIMBATORE_PACKAGES.slice(0, 3).map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/packages" className="inline-block bg-teal-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-teal-800 transition-colors shadow-lg">
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: Destinations */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 font-serif">Choose Your Destination</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From the misty hills of Munnar to the ancient temples of Madurai, we curate the perfect itinerary for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STATES_DATA.map((state) => (
            <Link to={`/state/${state.id}`} key={state.id} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4]">
              <img
                src={`/images/states/${state.id}.jpg`}
                alt={state.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold mb-2 font-serif">{state.name}</h3>
                  <span className="inline-block bg-white/20 border border-white/30 px-3 py-1 rounded-full text-xs backdrop-blur-sm group-hover:bg-teal-600 group-hover:border-teal-600 transition-all">
                    {state.destinations.length} Destinations
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="/images/office.jpg" alt="LD Vacation Office" className="rounded-xl shadow-2xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 font-serif">About LD Vacation</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Welcome to LD Vacation, a Coimbatore-based travel agency dedicated to offering budget-friendly and memorable travel experiences.
              Whether you're planning a serene beach getaway, a refreshing hill station retreat, or a spiritual temple tour, we have the perfect package for you.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our mission is simple: to provide you with a hassle-free experience, complete with convenient transportation and comfortable stay options.
            </p>
            <a href={`https://wa.me/${CONTACT_PHONE.replace(/[^0-9]/g, '')}`} className="inline-block bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Plan My Trip
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const Packages = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Best Tour Packages from Coimbatore | Ooty, Munnar, Kodaikanal Trips"
        description="Explore affordable tour packages from Coimbatore. Weekend trips to Ooty, Valparai, Isha Yoga, Munnar, and Wayanad. Couple & Family packages available."
        keywords="tour packages from coimbatore, ooty tour package, munnar trip cost, kodaikanal packages for couple, valparai tour plan, coimbatore to isha yoga cab"
      />
      <Hero
        title="Our Exclusive Packages"
        subtitle="Curated trips starting from Coimbatore with private cab and accommodation"
        imageUrl="/images/destinations/munnar.jpg"
        heightClass="h-[40vh]"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COIMBATORE_PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PackageView = () => {
  const { packageId } = useParams();
  const pkg = COIMBATORE_PACKAGES.find(p => p.id === packageId);

  if (!pkg) return <div className="text-center p-8">Package not found</div>;

  const seoTitle = `${pkg.title} | ${pkg.duration} Package from Coimbatore - LD Vacation`;
  const seoDesc = `Book ${pkg.title} starting from Coimbatore. ${pkg.duration} trip including ${pkg.features.join(', ')}. Best price: ${pkg.price}.`;

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO title={seoTitle} description={seoDesc} keywords={`${pkg.title}, coimbatore tour package, ${pkg.duration} trip, LD Vacation packages`} />

      {/* Back Nav */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Link to="/packages" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Packages
          </Link>
        </div>
      </div>

      <Hero
        title={pkg.title}
        subtitle={`${pkg.duration} • Starting from Coimbatore`}
        imageUrl={pkg.image}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="md:col-span-2 space-y-10">

            {/* Description */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 font-serif border-b pb-2">Package Overview</h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">{pkg.description}</p>

              <div className="mt-6 flex flex-wrap gap-4">
                {pkg.features.map((feat, idx) => (
                  <span key={idx} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium border border-teal-100">
                    ✨ {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 font-serif border-b pb-2">Trip Itinerary</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {pkg.itinerary?.map((day, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-teal-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <span className="text-xs font-bold">{idx + 1}</span>
                    </div>
                    {/* Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">{day.day}</div>
                      </div>
                      <div className="text-teal-700 font-semibold mb-2">{day.title}</div>
                      <ul className="text-slate-600 text-sm space-y-1 list-disc pl-4">
                        {day.activities.map((act, i) => (
                          <li key={i}>{act}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Inclusions
                </h3>
                <ul className="space-y-2 text-sm text-green-900">
                  {pkg.inclusions?.map((inc, i) => <li key={i}>• {inc}</li>)}
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  Exclusions
                </h3>
                <ul className="space-y-2 text-sm text-red-900">
                  {pkg.exclusions?.map((exc, i) => <li key={i}>• {exc}</li>)}
                </ul>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-teal-100 sticky top-24">
              <div className="text-center mb-6">
                <p className="text-sm text-slate-500 mb-1">Package Cost</p>
                <div className="text-3xl font-bold text-teal-700">{pkg.price}</div>
                <p className="text-xs text-slate-400 mt-1">*Prices may vary based on season</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-sm p-3 bg-slate-50 rounded-lg">
                  <span className="text-slate-600">Duration</span>
                  <span className="font-semibold text-slate-900">{pkg.duration}</span>
                </div>
                <div className="flex justify-between items-center text-sm p-3 bg-slate-50 rounded-lg">
                  <span className="text-slate-600">Starting From</span>
                  <span className="font-semibold text-slate-900">Coimbatore</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${CONTACT_PHONE.replace(/[^0-9]/g, '')}?text=Hi, I am interested in booking the *${pkg.title}* package for ${pkg.price}. Please provide more details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white font-bold py-4 rounded-lg text-center hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Book via WhatsApp
              </a>
              <p className="text-xs text-center text-slate-400 mt-4">
                No payment required now. Chat to customize.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicy = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 bg-white my-8 rounded-xl shadow-sm min-h-[60vh]">
    <SEO
      title="Privacy Policy - LD Vacation | User Data Protection"
      description="Learn how LD Vacation collects, uses, and protects your personal data. Our Privacy Policy ensures secure travel booking and information safety."
      keywords="privacy policy, data protection, travel agency privacy, user data safety, LD Vacation policy"
    />
    {/* Back Navigation */}
    <div className="mb-6">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Back to Home
      </Link>
    </div>
    <h1 className="text-3xl font-bold mb-8 font-serif text-slate-800 border-b pb-4">Privacy Policy</h1>
    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">At LD Vacation, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by LD Vacation and how we use it.</p>

      <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Information We Collect</h3>
      <p className="mb-4">We collect information you provide directly to us when you inquire about a trip, including your name, phone number, and travel preferences.</p>

      <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">How We Use Your Information</h3>
      <p className="mb-4">We use the information we collect to:</p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>Provide, operate, and maintain our website and services</li>
        <li>Improve, personalize, and expand our tour packages</li>
        <li>Understand and analyze how you use our website</li>
        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
      </ul>

      <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Contact Us</h3>
      <p className="mb-4">If you have any questions about this Privacy Policy, you can contact us:</p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>By visiting this page on our website</li>
        <li>By phone number: {CONTACT_PHONE}</li>
        <li>By mail: Airport Road, Coimbatore, Tamil Nadu, India</li>
      </ul>
    </div>
  </div>
);

const TermsAndConditions = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 bg-white my-8 rounded-xl shadow-sm min-h-[60vh]">
    <SEO
      title="Terms & Conditions - LD Vacation | Booking & Cancellation Policy"
      description="Read LD Vacation's Terms and Conditions regarding tour bookings, payments, cancellations, and refunds for South India travel packages."
      keywords="terms and conditions, booking policy, cancellation rules, travel agency refund policy, tour package terms, LD Vacation"
    />
    {/* Back Navigation */}
    <div className="mb-6">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Back to Home
      </Link>
    </div>
    <h1 className="text-3xl font-bold mb-8 font-serif text-slate-800 border-b pb-4">Terms and Conditions</h1>
    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
      <p className="mb-4">Welcome to LD Vacation!</p>
      <p className="mb-4">These terms and conditions outline the rules and regulations for the use of LD Vacation's Website and Services.</p>

      <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Bookings and Payments</h3>
      <p className="mb-4">All bookings are subject to availability. A deposit may be required to confirm your reservation. Final payment terms will be discussed during the booking process. Prices are subject to change without prior notice until the booking is confirmed.</p>

      <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Cancellation Policy</h3>
      <p className="mb-4">Cancellations made 30 days prior to the trip may receive a partial refund. Cancellations made within 7 days of the trip are generally non-refundable. Specific policies vary by package and season.</p>

      <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Liability</h3>
      <p className="mb-4">LD Vacation acts as an agent for transport companies, hotels, and other contractors and shall not be held liable for any injury, damage, loss, delay, or irregularity that may be occasioned for any reason.</p>

      <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Jurisdiction</h3>
      <p className="mb-4">These terms and conditions are governed by the laws of India and any disputes will be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu.</p>
    </div>
  </div>
);

const Sitemap = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 bg-white my-8 rounded-xl shadow-sm min-h-[60vh]">
    <SEO
      title="Sitemap - LD Vacation | All Destinations & Tour Packages"
      description="Browse the complete sitemap of LD Vacation. Quickly find links to all states, tourist destinations, and sightseeing places in Tamil Nadu, Kerala, and Karnataka."
      keywords="sitemap, website map, travel destinations list, south india tourist places, site navigation, LD Vacation links"
    />
    <h1 className="text-3xl font-bold mb-8 font-serif text-slate-800 border-b pb-4">Sitemap</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-bold text-teal-800 mb-4">Main Pages</h2>
        <ul className="space-y-2 text-slate-600">
          <li><Link to="/" className="hover:text-teal-600 hover:underline">Home</Link></li>
          <li><Link to="/packages" className="hover:text-teal-600 hover:underline">Tour Packages</Link></li>
          <li><Link to="/privacy-policy" className="hover:text-teal-600 hover:underline">Privacy Policy</Link></li>
          <li><Link to="/terms-conditions" className="hover:text-teal-600 hover:underline">Terms & Conditions</Link></li>
          <li><Link to="/sitemap" className="hover:text-teal-600 hover:underline">Sitemap</Link></li>
        </ul>
        <h2 className="text-xl font-bold text-teal-800 mt-8 mb-4">Tour Packages</h2>
        <ul className="space-y-2 text-slate-600">
          {COIMBATORE_PACKAGES.map(pkg => (
            <li key={pkg.id}>
              <Link to={`/package/${pkg.id}`} className="hover:text-teal-600 hover:underline">{pkg.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {STATES_DATA.map(state => (
        <div key={state.id} className="mb-6">
          <h2 className="text-xl font-bold text-teal-800 mb-4">
            <Link to={`/state/${state.id}`} className="hover:underline">{state.name}</Link>
          </h2>
          <ul className="space-y-4 ml-4 border-l-2 border-slate-100 pl-4">
            {state.destinations.map(dest => (
              <li key={dest.id}>
                <Link to={`/destination/${state.id}/${dest.id}`} className="font-semibold text-slate-700 hover:text-teal-600 hover:underline block mb-1">
                  {dest.name}
                </Link>
                <ul className="ml-4 text-sm text-slate-500 space-y-1">
                  {dest.places.map(place => (
                    <li key={place.id}>
                      <Link to={`/place/${state.id}/${dest.id}/${place.id}`} className="hover:text-teal-600 hover:underline">
                        {place.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const StateView = () => {
  const { stateId } = useParams();
  const stateData = STATES_DATA.find(s => s.id === stateId);

  if (!stateData) return <div className="p-8 text-center">State not found</div>;

  const topDestinations = stateData.destinations.slice(0, 5).map(d => d.name).join(', ');
  const seoTitle = `${stateData.name} Tourism & Tour Packages ${new Date().getFullYear()} | LD Vacation`;
  const seoDesc = `Plan your ${stateData.name} trip with LD Vacation. Best tour packages for ${topDestinations}. Affordable hotels, sightseeing, and cab services in ${stateData.name}.`;
  const seoKeywords = `${stateData.name} tourism, ${stateData.name} tour packages, places to visit in ${stateData.name}, ${stateData.name} travel guide, best time to visit ${stateData.name}, family trip ${stateData.name}, south india tourism`;

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title={seoTitle}
        description={seoDesc}
        keywords={seoKeywords}
      />
      {/* Back Navigation */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </Link>
        </div>
      </div>

      <Hero
        title={stateData.name}
        subtitle={`Explore top destinations in ${stateData.name}`}
        imageUrl={`/images/states/${stateData.id}.jpg`}
        heightClass="h-[50vh]"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stateData.destinations.map(dest => (
            <Link key={dest.id} to={`/destination/${stateData.id}/${dest.id}`} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={`/images/destinations/${dest.id}.jpg`}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">{dest.name}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-1 line-clamp-3">{dest.description}</p>
                <span className="text-teal-700 text-sm font-bold self-start group-hover:translate-x-1 transition-transform flex items-center gap-1 uppercase tracking-wide">
                  Explore {dest.places.length} places &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const DestinationView = () => {
  const { stateId, destinationId } = useParams();
  const navigate = useNavigate();

  const stateData = STATES_DATA.find(s => s.id === stateId);
  const destination = stateData?.destinations.find(d => d.id === destinationId);

  // Initialize content with static details if available to avoid loaders
  const [content, setContent] = useState<GeneratedContent | null>(
    destination?.details || null
  );

  // If static details exist, we are already successful
  const [loading, setLoading] = useState<LoadState>(
    destination?.details ? LoadState.SUCCESS : LoadState.IDLE
  );

  useEffect(() => {
    if (!destination || !stateData || destination.details) return;

    const fetchData = async () => {
      setLoading(LoadState.LOADING);
      const result = await generateDestinationDetails(destination.name, stateData.name);
      setContent(result);
      setLoading(LoadState.SUCCESS);
    };

    fetchData();
  }, [destination, stateData]);

  if (!destination) return <div className="text-center p-8">Destination not found</div>;

  const placeNames = destination.places.slice(0, 5).map(p => p.name).join(', ');
  const seoTitle = `${destination.name} Tour Packages, ${stateData?.name} | Travel Guide & Sightseeing - LD Vacation`;
  const seoDesc = `Explore ${destination.name} in ${stateData?.name} with LD Vacation. Top attractions: ${placeNames}. Get best deals on hotels, resorts, and customized itineraries.`;
  const seoKeywords = `${destination.name} tourism, ${destination.name} tourist places, ${destination.name} hotels, how to reach ${destination.name}, ${destination.name} tour package, ${destination.name} honeymoon, visiting ${destination.name}`;

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title={seoTitle}
        description={seoDesc}
        keywords={seoKeywords}
      />
      {/* Back Navigation */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Link to={`/state/${stateId}`} className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to {stateData?.name}
          </Link>
        </div>
      </div>

      <Hero
        title={destination.name}
        subtitle={destination.description}
        imageUrl={`/images/destinations/${destination.id}.jpg`}
      />

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Main Content Area */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Left Col: Details */}
          <div className="md:col-span-2 space-y-12">

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2 font-serif">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg text-xl">ℹ️</span> About {destination.name}
              </h2>
              {loading === LoadState.LOADING ? <Loader /> : (
                <div className="prose text-slate-600 bg-white p-6 rounded-xl shadow-sm border border-slate-100 leading-relaxed whitespace-pre-line">
                  {content?.about}
                </div>
              )}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 font-serif">
                <span className="bg-green-100 text-green-600 p-2 rounded-lg text-xl">🗺️</span> Top Attractions
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {destination.places.map(place => (
                  <Link
                    key={place.id}
                    to={`/place/${stateId}/${destinationId}/${place.id}`}
                    className="group flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all hover:border-teal-200"
                  >
                    <img src={`/images/places/${place.id}.jpg`} alt={place.name} className="w-16 h-16 rounded-lg object-cover shadow-sm" />
                    <div>
                      <h4 className="font-bold text-slate-800 group-hover:text-teal-700 transition-colors">{place.name}</h4>
                      <span className="text-xs text-slate-400 uppercase tracking-wide font-semibold">View Details</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

          </div>

          {/* Right Col: Sticky Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 sticky top-24">
              <h3 className="font-bold text-lg mb-4 border-b pb-2 text-teal-900 font-serif">Travel Essentials</h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-semibold block text-slate-900 mb-1">🌤 Best Time to Visit</span>
                  <p className="text-slate-600">{content?.bestTime || "Loading..."}</p>
                </div>

                <div>
                  <span className="font-semibold block text-slate-900 mb-1">🚆 How to Reach</span>
                  <p className="text-slate-600 whitespace-pre-line">{content?.howToReach || "Loading..."}</p>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-bold text-teal-800 mb-2">The LD Advantage</h4>
                  <ul className="space-y-1 text-slate-600 text-xs">
                    <li>✓ Budget-friendly Stays</li>
                    <li>✓ Private Cabs included</li>
                    <li>✓ 24/7 Local Support</li>
                  </ul>
                </div>

                <button className="w-full bg-slate-800 text-white py-3 rounded-lg font-bold hover:bg-slate-700 transition-colors shadow-lg mt-4">
                  Get Custom Quote
                </button>
                <a href={`https://wa.me/${CONTACT_PHONE.replace(/[^0-9]/g, '')}`} className="block w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30 text-center">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const PlaceView = () => {
  const { stateId, destinationId, placeId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState<GeneratedContent | null>(null);
  const [loading, setLoading] = useState<LoadState>(LoadState.IDLE);

  const stateData = STATES_DATA.find(s => s.id === stateId);
  const destination = stateData?.destinations.find(d => d.id === destinationId);
  const place = destination?.places.find(p => p.id === placeId);

  useEffect(() => {
    if (!place || !destination) return;
    const fetchData = async () => {
      setLoading(LoadState.LOADING);
      const result = await generatePlaceDetails(place.name, destination.name);
      setContent(result);
      setLoading(LoadState.SUCCESS);
    };
    fetchData();
  }, [place, destination]);

  if (!place) return <div className="text-center p-8">Place not found</div>;

  const seoTitle = `${place.name}, ${destination?.name} - Timings, Entry Fee & Reviews - LD Vacation`;
  const seoDesc = `Complete guide to ${place.name} in ${destination?.name}. Find entry fees, opening timings, best time to visit, and history. Add ${place.name} to your travel itinerary.`;
  const seoKeywords = `${place.name} ${destination?.name}, ${place.name} timings, ${place.name} entry fee, ${place.name} history, ${place.name} reviews, places to visit near ${place.name}, ${destination?.name} tourism`;

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO
        title={seoTitle}
        description={seoDesc}
        keywords={seoKeywords}
      />
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Link to={`/destination/${stateId}/${destinationId}`} className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to {destination?.name}
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-64 md:h-96">
            <img
              src={`/images/places/${place.id}.jpg`}
              alt={place.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 pt-20">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">{place.name}</h1>
              <p className="text-white/90 mt-2 text-lg font-light">{destination?.name}, {stateData?.name}</p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {loading === LoadState.LOADING ? (
              <Loader />
            ) : (
              <div className="prose prose-lg max-w-none text-slate-600">
                {content?.placeDetails ? (
                  <div className="whitespace-pre-wrap">{content.placeDetails}</div>
                ) : (
                  <p>Information regarding {place.name} is currently being updated by our travel experts.</p>
                )}
              </div>
            )}

            <div className="mt-12 bg-teal-50 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-teal-100">
              <div>
                <h4 className="font-bold text-teal-900 text-xl">Want to visit {place.name}?</h4>
                <p className="text-teal-700 mt-1">Add this to your custom itinerary with LD Vacation.</p>
              </div>
              <a href={`https://wa.me/${CONTACT_PHONE.replace(/[^0-9]/g, '')}`} className="bg-teal-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-teal-800 transition-colors shadow-lg hover:shadow-xl whitespace-nowrap">
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/state/:stateId" element={<StateView />} />
            <Route path="/destination/:stateId/:destinationId" element={<DestinationView />} />
            <Route path="/place/:stateId/:destinationId/:placeId" element={<PlaceView />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/package/:packageId" element={<PackageView />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </main>
        <Footer />
        <FloatingLeadForm />
      </div>
    </Router>
  );
};

export default App;