import React, { useState } from 'react';

// Importing assets
import imgHero from './assets/330A5622.JPG';
import imgCoach from './assets/330A5560.JPG';
import imgBenefits from './assets/330A5601.JPG';
import imgSmallBatch from './assets/330A5594.JPG';
import imgHowItWorks from './assets/330A5603.JPG';
import imgPricing from './assets/330A5563.JPG';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappNumber = "919034961137";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const whatsappMessage = (text) => `${whatsappLink}?text=${encodeURIComponent(text)}`;

  const stickyMessage = "A women-only online yoga program to help you build flexibility, toning, confidence, and a healthy daily habit — in just 20 minutes a day.";

  return (
    <div className="font-sans bg-warmIvory text-sageDark overflow-x-hidden selection:bg-accentGold/30">
      
      {/* Top Banner Message */}
      <div className="bg-sageDark text-warmIvory text-center py-2 px-4 text-xs tracking-wide font-medium">
        {stickyMessage}
      </div>

      {/* Sticky Premium Header */}
      <header className="sticky top-0 z-50 bg-warmIvory/90 backdrop-blur-md border-b border-sageLight transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sageLight text-sageDark border border-sageMedium/30 transition-transform group-hover:rotate-12 duration-500">
              <i className="fa-solid fa-seedling text-lg"></i>
            </span>
            <div>
              <span className="font-serif text-xl font-bold tracking-wide text-sageDark block leading-none">YogaWithMegha</span>
              <span className="text-[10px] tracking-[0.15em] uppercase text-accentGold font-semibold block mt-1">Women-Only</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-sageDark/90">
            <a href="#who-this-is-for" className="hover:text-accentGold transition-colors">For You</a>
            <a href="#how-it-works" className="hover:text-accentGold transition-colors">How It Works</a>
            <a href="#benefits" className="hover:text-accentGold transition-colors">Benefits</a>
            <a href="#about-coach" className="hover:text-accentGold transition-colors">Coach</a>
            <a href="#pricing" className="hover:text-accentGold transition-colors">Pricing</a>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden sm:block">
            <a href={whatsappMessage("Hi Megha! I'm interested in joining the 20-Minute Online Yoga Batch for Women.")} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-flex items-center space-x-2 bg-sageDark hover:bg-[#2A3B2F] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
              <i className="fa-brands fa-whatsapp text-lg text-[#25D366]"></i>
              <span>Join Next Batch</span>
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden p-2 text-sageDark focus:outline-none" 
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} md:hidden bg-warmIvory border-b border-sageLight transition-all duration-300 overflow-hidden`}>
          <div className="px-4 pt-2 pb-6 space-y-3 shadow-inner">
            <a href="#who-this-is-for" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 text-sageDark hover:bg-sageLight rounded-lg transition-all font-medium">For You</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 text-sageDark hover:bg-sageLight rounded-lg transition-all font-medium">How It Works</a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 text-sageDark hover:bg-sageLight rounded-lg transition-all font-medium">Benefits</a>
            <a href="#about-coach" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 text-sageDark hover:bg-sageLight rounded-lg transition-all font-medium">About Coach</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 text-sageDark hover:bg-sageLight rounded-lg transition-all font-medium">Pricing</a>
            <div className="pt-2">
              <a href={whatsappMessage("Hi Megha! I'm interested in joining the 20-Minute Online Yoga Batch for Women.")} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="w-full text-center flex items-center justify-center space-x-2 bg-sageDark hover:bg-[#2A3B2F] text-white px-5 py-3 rounded-full text-sm font-medium shadow-md transition-all">
                <i className="fa-brands fa-whatsapp text-lg text-[#25D366]"></i>
                <span>Join on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-warmIvory via-[#FAF6F0] to-softBeige pt-12 pb-20 md:py-24 overflow-hidden">
        {/* Aesthetic Accents */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 text-sageMedium text-6xl transform rotate-45 blur-[2px]"><i className="fa-solid fa-leaf"></i></div>
          <div className="absolute bottom-10 right-12 text-sageMedium text-7xl transform -rotate-12 blur-[2px]"><i className="fa-solid fa-leaf"></i></div>
          <div className="absolute top-1/2 right-1/4 text-accentGold text-5xl transform rotate-90 blur-[1px]"><i className="fa-solid fa-spa"></i></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-sageLight/80 backdrop-blur-sm text-sageDark border border-sageMedium/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
                <i className="fa-solid fa-shield-heart text-accentGold"></i>
                <span>Only 20 Women Per Batch</span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-sageDark font-semibold leading-[1.1]">
                20-Minute <br />
                <span className="text-accentGold italic">Online Yoga</span> <br />
                for Women
              </h1>

              <p className="text-gray-600 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Build flexibility, tone your body, and create a healthy daily habit from home — with a female coach in a small women-only batch.
              </p>

              {/* Key Points */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                <span className="inline-flex items-center text-sm text-sageDark bg-white/90 border border-sageLight px-4 py-2 rounded-full shadow-sm font-medium">
                  <i className="fa-regular fa-calendar-check text-accentGold mr-2"></i> 5 days a week
                </span>
                <span className="inline-flex items-center text-sm text-sageDark bg-white/90 border border-sageLight px-4 py-2 rounded-full shadow-sm font-medium">
                  <i className="fa-solid fa-video text-accentGold mr-2"></i> 30-min live Zoom
                </span>
                <span className="inline-flex items-center text-sm text-sageDark bg-white/90 border border-sageLight px-4 py-2 rounded-full shadow-sm font-medium">
                  <i className="fa-solid fa-venus text-accentGold mr-2"></i> Women-only
                </span>
                <span className="inline-flex items-center text-sm text-sageDark bg-white/90 border border-sageLight px-4 py-2 rounded-full shadow-sm font-medium">
                  <i className="fa-solid fa-indian-rupee-sign text-accentGold mr-2"></i> ₹1000/month
                </span>
              </div>

              {/* CTA Area */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-sageDark hover:bg-[#2D3E31] text-white px-8 py-4 rounded-full text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <span>Join the Next Batch</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a href={whatsappMessage("Hi Megha! I'd like to know more about the online yoga classes.")} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-sageDark border border-sageLight px-8 py-4 rounded-full text-base font-semibold shadow-md transition-all duration-300">
                  <i className="fa-brands fa-whatsapp text-xl text-[#25D366]"></i>
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                <div className="absolute -inset-4 bg-gradient-to-tr from-accentGold/30 to-sageLight/50 rounded-[3rem] blur-2xl opacity-70"></div>
                
                <div className="relative bg-white p-3 rounded-[2.5rem] shadow-2xl border border-white/50">
                  <img src={imgHero} 
                       alt="Women practicing yoga at home" 
                       className="rounded-[2rem] w-full h-[500px] object-cover" />
                  
                  {/* Floating element */}
                  <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-sageLight hidden md:block animate-bounce-slow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#E8EFE9] flex items-center justify-center text-sageDark">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-sageDark">Female Coach</p>
                        <p className="text-xs text-gray-500">Personalized Guidance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Who This Is For */}
      <section id="who-this-is-for" className="py-20 bg-white border-y border-sageLight/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accentGold">Is this for me?</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-sageDark font-semibold mt-2">This program is perfect for you if:</h2>
            <div className="h-1 w-20 bg-accentGold mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'fa-bed', text: 'You feel stiff or inactive' },
              { icon: 'fa-compass', text: 'You want to start yoga but don’t know where to begin' },
              { icon: 'fa-stopwatch', text: 'You don’t have time for long workouts' },
              { icon: 'fa-child-reaching', text: 'You want a toned and flexible body' },
              { icon: 'fa-calendar-check', text: 'You want to build a healthy habit' },
              { icon: 'fa-chalkboard-user', text: 'You prefer learning from a female coach' },
              { icon: 'fa-shield-halved', text: 'You want a women-only comfortable space' },
            ].map((item, idx) => (
              <div key={idx} className="bg-warmIvory p-6 rounded-2xl border border-sageLight hover:border-accentGold/40 transition-colors shadow-sm flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white text-sageDark shadow-sm flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-sageDark group-hover:text-white transition-colors">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <p className="text-sageDark font-medium text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What You Get */}
      <section className="py-20 bg-softBeige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-sageMedium/20 to-transparent rounded-[3rem] blur-xl"></div>
              <img src={imgPricing} alt="Yoga setup" className="relative rounded-[2rem] shadow-xl w-full h-[500px] object-cover border-4 border-white" />
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-accentGold">The Offer</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-sageDark font-semibold mt-2 mb-8">What's Included</h2>
              
              <div className="bg-white rounded-3xl shadow-lg border border-sageLight overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    <tr className="border-b border-sageLight bg-warmIvory/50 hover:bg-warmIvory transition-colors">
                      <th className="py-4 px-6 text-sm font-semibold text-sageDark w-1/3">Live Classes</th>
                      <td className="py-4 px-6 text-sm text-gray-600">5 days a week</td>
                    </tr>
                    <tr className="border-b border-sageLight hover:bg-warmIvory transition-colors">
                      <th className="py-4 px-6 text-sm font-semibold text-sageDark">Class Duration</th>
                      <td className="py-4 px-6 text-sm text-gray-600">30-minute Zoom slot</td>
                    </tr>
                    <tr className="border-b border-sageLight bg-warmIvory/50 hover:bg-warmIvory transition-colors">
                      <th className="py-4 px-6 text-sm font-semibold text-sageDark">Practice Time</th>
                      <td className="py-4 px-6 text-sm text-gray-600">20 minutes yoga</td>
                    </tr>
                    <tr className="border-b border-sageLight hover:bg-warmIvory transition-colors">
                      <th className="py-4 px-6 text-sm font-semibold text-sageDark">Support</th>
                      <td className="py-4 px-6 text-sm text-gray-600">5-minute doubts/corrections</td>
                    </tr>
                    <tr className="border-b border-sageLight bg-warmIvory/50 hover:bg-warmIvory transition-colors">
                      <th className="py-4 px-6 text-sm font-semibold text-sageDark">Batch Type</th>
                      <td className="py-4 px-6 text-sm text-gray-600">Women-only</td>
                    </tr>
                    <tr className="border-b border-sageLight hover:bg-warmIvory transition-colors">
                      <th className="py-4 px-6 text-sm font-semibold text-sageDark">Coach</th>
                      <td className="py-4 px-6 text-sm text-gray-600">Female yoga coach</td>
                    </tr>
                    <tr className="border-b border-sageLight bg-warmIvory/50 hover:bg-warmIvory transition-colors">
                      <th className="py-4 px-6 text-sm font-semibold text-sageDark">Batch Size</th>
                      <td className="py-4 px-6 text-sm text-gray-600">Less than 20 women</td>
                    </tr>
                    <tr className="hover:bg-warmIvory transition-colors">
                      <th className="py-5 px-6 text-lg font-bold text-sageDark">Fees</th>
                      <td className="py-5 px-6 text-lg font-bold text-accentGold">₹1000/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. How Each Class Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accentGold">Structure</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-sageDark font-semibold mt-2">How Each Class Works</h2>
            <div className="h-1 w-20 bg-accentGold mx-auto mt-6 mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Every class is simple and beginner-friendly. No heavy workout. No pressure. Just 20 minutes of guided movement to help you feel flexible, active, and confident.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-sageLight -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 bg-warmIvory p-8 rounded-3xl border border-sageLight shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-sageLight text-accentGold flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-sm">
                5<span className="text-xs ml-0.5 font-sans font-medium text-sageDark">m</span>
              </div>
              <h3 className="text-xl font-bold text-sageDark mb-2">Warm-up</h3>
              <p className="text-sm text-gray-500">Gentle breathing and preparation</p>
            </div>

            <div className="relative z-10 bg-sageDark p-8 rounded-3xl shadow-xl text-center transform md:-translate-y-4 hover:-translate-y-6 transition-transform duration-300">
              <div className="w-20 h-20 rounded-full bg-white border-4 border-sageMedium text-accentGold flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-md">
                20<span className="text-sm ml-0.5 font-sans font-medium text-sageDark">m</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Practice</h3>
              <p className="text-sm text-warmIvory/80">Guided active yoga movement</p>
            </div>

            <div className="relative z-10 bg-warmIvory p-8 rounded-3xl border border-sageLight shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-sageLight text-accentGold flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-sm">
                5<span className="text-xs ml-0.5 font-sans font-medium text-sageDark">m</span>
              </div>
              <h3 className="text-xl font-bold text-sageDark mb-2">Cool Down</h3>
              <p className="text-sm text-gray-500">Relaxation + doubts support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Benefits Section */}
      <section id="benefits" className="py-20 bg-sageDark text-warmIvory relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={imgBenefits} alt="Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accentGold">The Result</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mt-2 mb-6">In this program, we focus on:</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              'Flexibility', 'Body toning', 'Better posture', 'Healthy daily routine',
              'Feeling active', 'Confidence', 'Stress relief', 'Consistency'
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-colors">
                <i className="fa-solid fa-check text-accentGold mb-3 text-xl"></i>
                <h3 className="text-lg font-medium">{benefit}</h3>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-2xl sm:text-3xl font-serif italic text-accentGold leading-relaxed">
              "The goal is not perfection. The goal is showing up for yourself every day."
            </p>
          </div>
        </div>
      </section>

      {/* 6. Why Small Batch? */}
      <section className="py-20 bg-warmIvory border-y border-sageLight/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accentGold">Premium Experience</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-sageDark font-semibold mt-2 mb-6">Why only 20 women per batch?</h2>
              <p className="text-lg text-gray-600 mb-8 font-light">
                Because we want every participant to feel seen, guided, and supported. In a massive crowd, it's easy to hide. In a small batch, we grow together.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Notice your movement',
                  'Answer doubts',
                  'Give corrections',
                  'Keep you accountable',
                  'Make you feel comfortable'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-sageLight shadow-sm">
                    <span className="w-8 h-8 rounded-full bg-sageLight text-sageDark flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-eye text-sm"></i>
                    </span>
                    <span className="font-medium text-sageDark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-bl from-accentGold/20 to-sageLight/40 rounded-[3rem] blur-xl"></div>
              <img src={imgSmallBatch} alt="Small batch yoga focus" className="relative rounded-[2rem] shadow-2xl w-full h-[550px] object-cover" />
            </div>

          </div>
        </div>
      </section>

      {/* 7. About the Coach */}
      <section id="about-coach" className="py-20 bg-softBeige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-sageLight/50">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-[400px] md:h-auto relative">
                <img src={imgCoach} alt="Coach Megha" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-accentGold">Your Guide</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-sageDark font-semibold mt-2 mb-6">Hi, I’m Megha.</h2>
                <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                  <p>
                    I created this 20-minute yoga habit program for women who want to feel flexible, active, and confident without spending hours on fitness. 
                  </p>
                  <p>
                    My classes are simple, beginner-friendly, and designed to help you stay consistent from home. My approach is calm, habit-based, and focused on creating a safe, women-only space.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-sageLight">
                  <h4 className="text-sm font-bold text-sageDark mb-4 uppercase tracking-wider">My Approach</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-sageLight text-sageDark text-xs rounded-full font-medium">Beginner-friendly</span>
                    <span className="px-3 py-1 bg-sageLight text-sageDark text-xs rounded-full font-medium">Calm & Paced</span>
                    <span className="px-3 py-1 bg-sageLight text-sageDark text-xs rounded-full font-medium">Women-only</span>
                    <span className="px-3 py-1 bg-sageLight text-sageDark text-xs rounded-full font-medium">Habit-based</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Monthly Plan / Pricing & 9. Batch Timings */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-white to-warmIvory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accentGold">Simple & Transparent</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-sageDark font-semibold mt-2">Start Your Journey</h2>
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl border border-sageLight/50 p-8 sm:p-12 relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 bg-accentGold text-white text-xs font-bold px-6 py-2 rounded-bl-2xl">
              Limited Seats
            </div>
            
            <h3 className="text-xl text-gray-500 font-medium mb-4">Monthly Membership</h3>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <span className="text-3xl font-bold text-sageDark">₹</span>
              <span className="text-6xl font-serif text-sageDark font-bold">1000</span>
              <span className="text-xl text-gray-500 font-light mt-4">/month</span>
            </div>

            <div className="max-w-sm mx-auto text-left space-y-4 mb-10">
              {[
                '5 live classes per week',
                '30-minute Zoom slot',
                'Women-only batch',
                'Female coach',
                'Doubt support',
                'Small batch under 20 women'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <i className="fa-solid fa-circle-check text-accentGold text-xl"></i>
                  <span className="text-sageDark font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a href={whatsappMessage("Hi Megha! I want to reserve my spot for the ₹1000/month yoga batch.")} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-block w-full sm:w-auto bg-sageDark hover:bg-[#2D3E31] text-white px-12 py-5 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 mb-6">
              Reserve My Spot
            </a>
            
            <p className="text-sm text-red-500 font-medium">
              Limited seats per batch. Once 20 seats are filled, the next batch will open later.
            </p>
          </div>

          {/* Batch Timings */}
          <div className="mt-16 bg-sageLight/30 rounded-3xl p-8 border border-sageMedium/20">
            <h3 className="font-serif text-2xl text-sageDark font-semibold mb-6">Available Batches</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center border border-sageLight">
                <span className="font-bold text-sageDark"><i className="fa-regular fa-sun text-accentGold mr-2"></i> Morning Batch</span>
                <span className="bg-sageLight px-3 py-1 rounded-lg text-sm font-semibold">10:30 AM</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center border border-sageLight">
                <span className="font-bold text-sageDark"><i className="fa-regular fa-moon text-accentGold mr-2"></i> Evening Batch</span>
                <span className="bg-sageLight px-3 py-1 rounded-lg text-sm font-semibold">7:00 PM</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6 italic">
              New batch timings will be shared on WhatsApp if you prefer other slots.
            </p>
          </div>

        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="py-20 bg-white border-t border-sageLight/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-sageDark font-semibold">Common Questions</h2>
            <div className="h-1 w-16 bg-accentGold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-6">
            {[
              { q: "Is this beginner-friendly?", a: "Yes. The program is designed for beginners and women who want to start slowly." },
              { q: "Do I need yoga experience?", a: "No. You can start even if you have never done yoga before." },
              { q: "Where are classes conducted?", a: "Classes are live on Zoom." },
              { q: "How many people are in one batch?", a: "Less than 20 women per batch." },
              { q: "How long is each class?", a: "Each slot is 30 minutes, including 20 minutes of yoga practice and doubt support." },
              { q: "What is the fee?", a: "₹1000 per month." },
              { q: "Who takes the class?", a: "A female yoga coach." },
              { q: "What if I miss a class?", a: "Recordings/support availability depends on your active plan. We encourage daily live attendance to build the habit." },
            ].map((faq, idx) => (
              <div key={idx} className="bg-warmIvory p-6 rounded-2xl border border-sageLight hover:shadow-md transition-shadow">
                <h4 className="font-bold text-sageDark text-lg mb-2 flex items-start gap-3">
                  <span className="text-accentGold mt-0.5"><i className="fa-solid fa-circle-question"></i></span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 pl-8 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. WhatsApp CTA & Final Message */}
      <section className="py-24 bg-sageDark text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 text-6xl text-white transform rotate-12"><i className="fa-solid fa-leaf"></i></div>
          <div className="absolute bottom-10 right-20 text-8xl text-white transform -rotate-45"><i className="fa-solid fa-seedling"></i></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-serif text-3xl sm:text-5xl text-warmIvory font-bold mb-8 leading-tight">
            Ready to build a healthy daily habit?
          </h2>
          
          <a href={whatsappMessage("Hi Megha! I'm ready to join the next yoga batch. Let's get started!")} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="inline-flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20B958] text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mb-12">
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            <span>Message on WhatsApp</span>
          </a>

          <div className="border-t border-white/20 pt-10">
            <p className="text-lg sm:text-xl text-warmIvory/90 font-light italic leading-relaxed">
              {stickyMessage}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warmIvory py-8 border-t border-sageLight text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="w-8 h-8 rounded-full bg-sageLight text-sageDark flex items-center justify-center">
            <i className="fa-solid fa-seedling text-sm"></i>
          </span>
          <span className="font-serif font-bold text-sageDark">YogaWithMegha</span>
        </div>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} YogaWithMegha. All Rights Reserved. <br className="sm:hidden"/> 
          <span className="hidden sm:inline"> | </span> 
          A safe, women-only online wellness space.
        </p>
      </footer>
    </div>
  );
}

export default App;
