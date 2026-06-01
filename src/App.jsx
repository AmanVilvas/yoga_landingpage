import React, { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Sticky Premium Header */}
      <header className="sticky top-0 z-50 bg-warmIvory/90 backdrop-blur-md border-b border-sageLight transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sageLight text-sageDark border border-sageMedium/30 transition-transform group-hover:rotate-12 duration-500">
              <i className="fa-solid fa-seedling text-lg"></i>
            </span>
            <div>
              <span className="font-serif-title text-xl font-bold tracking-wide text-sageDark block leading-none">YogaWithMegha</span>
              <span className="text-[10px] tracking-[0.15em] uppercase text-accentGold font-semibold block mt-1">Women-Only Sanctuary</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-sageDark/90">
            <a href="#about" className="hover:text-accentGold transition-colors">About Megha</a>
            <a href="#how-it-works" className="hover:text-accentGold transition-colors">How It Works</a>
            <a href="#programs" className="hover:text-accentGold transition-colors">Programs</a>
            <a href="#benefits" className="hover:text-accentGold transition-colors">Benefits</a>
            <a href="#faqs" className="hover:text-accentGold transition-colors">FAQs</a>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden sm:block">
            <a href="https://wa.me/919034961137?text=Hi%20Megha!%20I'm%20interested%20in%20booking%20a%20free%20trial%20yoga%20session.%20Could%20you%20share%20the%20details?" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-flex items-center space-x-2 bg-sageDark hover:bg-[#2A3B2F] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
              <i className="fa-brands fa-whatsapp text-lg text-[#25D366]"></i>
              <span>Book Free Trial</span>
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            id="mobile-menu-btn" 
            className="md:hidden p-2 text-sageDark focus:outline-none" 
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div id="mobile-menu" className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-warmIvory border-b border-sageLight transition-all duration-300`}>
          <div className="px-4 pt-2 pb-6 space-y-3 shadow-inner">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 text-sageDark hover:bg-sageLight rounded-lg transition-all">About Megha</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 text-sageDark hover:bg-sageLight rounded-lg transition-all">How It Works</a>
            <a href="#programs" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 text-sageDark hover:bg-sageLight rounded-lg transition-all">Programs</a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 text-sageDark hover:bg-sageLight rounded-lg transition-all">Benefits</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 text-sageDark hover:bg-sageLight rounded-lg transition-all">FAQs</a>
            <div className="pt-2">
              <a href="https://wa.me/919034961137?text=Hi%20Megha!%20I'm%20interested%20in%20booking%20a%20free%20trial%20yoga%20session.%20Could%20you%20share%20the%20details?" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="w-full text-center flex items-center justify-center space-x-2 bg-sageDark hover:bg-[#2A3B2F] text-white px-5 py-3 rounded-full text-sm font-medium shadow-md transition-all">
                <i className="fa-brands fa-whatsapp text-lg text-[#25D366]"></i>
                <span>Book Free Trial on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-warmIvory via-[#FAF6F0] to-softBeige pt-8 pb-16 md:py-24 overflow-hidden">
        {/* Leaf/Aesthetic Accents background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 text-sageMedium text-6xl transform rotate-45"><i className="fa-solid fa-leaf"></i></div>
          <div className="absolute bottom-10 right-12 text-sageMedium text-7xl transform -rotate-12"><i className="fa-solid fa-leaf"></i></div>
          <div className="absolute top-1/2 right-1/4 text-accentGold text-5xl transform rotate-90"><i className="fa-solid fa-spa"></i></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-sageLight text-sageDark border border-sageMedium/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
                <i className="fa-solid fa-shield-halved text-xs"></i>
                <span>100% Women-Only Safe Space</span>
              </div>

              <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl text-sageDark font-semibold leading-tight sm:leading-none">
                Online Yoga Classes <br className="hidden sm:inline" />
                <span className="text-accentGold italic">for Women Only</span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Join live Zoom yoga sessions designed to help women feel fitter, calmer, and more flexible from the comfort of home. Beginner-friendly classes, personal attention, and live community.
              </p>

              {/* Features badging inside hero */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                <span className="inline-flex items-center text-xs text-sageDark bg-white/80 border border-sageLight px-3.5 py-1.5 rounded-full shadow-sm">
                  <i className="fa-solid fa-circle text-[6px] text-[#25D366] mr-2"></i> Live Zoom Sessions
                </span>
                <span className="inline-flex items-center text-xs text-sageDark bg-white/80 border border-sageLight px-3.5 py-1.5 rounded-full shadow-sm">
                  <i className="fa-solid fa-feather text-sageMedium mr-2"></i> Beginner-Friendly
                </span>
                <span className="inline-flex items-center text-xs text-sageDark bg-white/80 border border-sageLight px-3.5 py-1.5 rounded-full shadow-sm">
                  <i className="fa-solid fa-video-slash text-rose-400 mr-2"></i> No Recorded Feeds (100% Live)
                </span>
              </div>

              {/* CTA Button Area */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="https://wa.me/919034961137?text=Hi%20Megha!%20I'm%20interested%20in%20booking%20a%20free%20trial%20yoga%20session.%20Could%20you%20share%20the%20details?" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="pulse-btn w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-sageDark hover:bg-[#2D3E31] text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <i className="fa-brands fa-whatsapp text-xl text-[#25D366]"></i>
                  <span>Book Free Trial on WhatsApp</span>
                </a>
                <a href="#how-it-works" className="text-sm font-semibold text-sageDark hover:text-accentGold flex items-center gap-1.5 transition-colors group">
                  Learn how it works <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="pt-4 flex items-center justify-center lg:justify-start space-x-6 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <i className="fa-solid fa-star text-amber-400"></i>
                  <i className="fa-solid fa-star text-amber-400"></i>
                  <i className="fa-solid fa-star text-amber-400"></i>
                  <i className="fa-solid fa-star text-amber-400"></i>
                  <i className="fa-solid fa-star text-amber-400"></i>
                  <span className="font-medium text-sageDark ml-1">4.9/5 Student Rating</span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <div>
                  <span>150+ Women Enrolled</span>
                </div>
              </div>
            </div>

            {/* Right Visual Area */}
            <div className="lg:col-span-5 relative">
              {/* Elegant frame styling for the image */}
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                {/* Background Gold Blob */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-accentGold/20 to-sageLight/40 rounded-[3rem] blur-2xl opacity-70"></div>
                
                {/* Main Frame */}
                <div className="relative bg-white p-3.5 rounded-[2.5rem] shadow-2xl border border-sageLight/50">
                  <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" 
                       alt="Tranquil woman practicing restorative yoga at home" 
                       className="rounded-[2rem] w-full h-[450px] object-cover shadow-inner"
                       onError={(e) => { e.target.src = 'https://placehold.co/800x1000/F5EFE6/3A4F3F?text=Women+Online+Yoga' }} />
                  
                  {/* Small overlay card 1 */}
                  <div className="absolute bottom-8 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-sageLight max-w-[210px] hidden sm:block animate-bounce-slow">
                    <div className="flex items-start gap-2.5">
                      <span className="p-2 bg-sageLight text-sageDark rounded-full text-xs">
                        <i className="fa-solid fa-heart"></i>
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-sageDark">Comfortable Home Space</p>
                        <p className="text-[10px] text-gray-500 mt-0.5">Camera guidance, secure environment.</p>
                      </div>
                    </div>
                  </div>

                  {/* Small overlay card 2 */}
                  <div className="absolute top-12 -right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-sageLight max-w-[190px] hidden sm:block">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block animate-pulse"></span>
                      <div>
                        <p className="text-xs font-semibold text-sageDark">Live Zoom Class</p>
                        <p className="text-[10px] text-gray-500">Every batch is personalized</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 bg-white border-y border-sageLight/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accentGold">Gentle, Personal & Friendly</span>
            <h2 className="font-serif-title text-3xl sm:text-4xl text-sageDark font-semibold mt-2">Who is this for?</h2>
            <div className="h-1 w-20 bg-accentGold mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 text-sm sm:text-base mt-4 font-light">
              Whether you have never touched a yoga mat, or struggle to find a fitness routine that fits your lifestyle.
            </p>
          </div>

          {/* Audience Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* Card 1: Beginners */}
            <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-sageLight/50 shadow-sm hover:shadow-md hover:border-accentGold/30 transition-all duration-300 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-sageLight text-sageDark flex items-center justify-center text-xl mb-5">
                <i className="fa-solid fa-star"></i>
              </div>
              <h3 className="font-serif-title text-lg font-bold text-sageDark">Beginners</h3>
              <p className="text-xs text-gray-500 text-center mt-3 font-light leading-relaxed">
                Never done yoga? Learn the fundamentals step-by-step with supportive, slowly paced instruction.
              </p>
            </div>

            {/* Card 2: Working Women */}
            <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-sageLight/50 shadow-sm hover:shadow-md hover:border-accentGold/30 transition-all duration-300 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-sageLight text-sageDark flex items-center justify-center text-xl mb-5">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h3 className="font-serif-title text-lg font-bold text-sageDark">Working Women</h3>
              <p className="text-xs text-gray-500 text-center mt-3 font-light leading-relaxed">
                Squeeze in a stress-busting, posture-improving session to undo the damage of desk jobs and long sitting hours.
              </p>
            </div>

            {/* Card 3: Homemakers */}
            <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-sageLight/50 shadow-sm hover:shadow-md hover:border-accentGold/30 transition-all duration-300 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-sageLight text-sageDark flex items-center justify-center text-xl mb-5">
                <i className="fa-solid fa-house"></i>
              </div>
              <h3 className="font-serif-title text-lg font-bold text-sageDark">Homemakers</h3>
              <p className="text-xs text-gray-500 text-center mt-3 font-light leading-relaxed">
                Take an hour out just for yourself to stretch out muscle tightness, revitalize your body, and calm your mind.
              </p>
            </div>

            {/* Card 4: Mothers */}
            <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-sageLight/50 shadow-sm hover:shadow-md hover:border-accentGold/30 transition-all duration-300 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-sageLight text-sageDark flex items-center justify-center text-xl mb-5">
                <i className="fa-solid fa-baby-carriage"></i>
              </div>
              <h3 className="font-serif-title text-lg font-bold text-sageDark">Mothers</h3>
              <p className="text-xs text-gray-500 text-center mt-3 font-light leading-relaxed">
                Reclaim your strength, energy, and flexibility after childbirth in a secure, non-judgmental environment.
              </p>
            </div>

          </div>

          {/* Footer for this section */}
          <p className="mt-8 text-sageDark font-medium text-sm sm:text-base italic">
            “No previous yoga experience needed. Start comfortably from where you are.”
          </p>

        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-softBeige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accentGold">Simple & Hassle-Free</span>
            <h2 className="font-serif-title text-3xl sm:text-4xl text-sageDark font-semibold mt-2">How It Works</h2>
            <div className="h-1 w-16 bg-accentGold mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
            
            {/* Connector Line for Desktop */}
            <div className="hidden md:block absolute top-[68px] left-[12%] right-[12%] h-0.5 bg-dashed bg-sageMedium/30 border-t-2 border-dashed border-sageMedium/40 -z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-sageMedium/40 text-sageDark flex items-center justify-center font-serif-title text-xl font-bold mb-4 shadow-sm group-hover:bg-sageLight transition-colors duration-300">
                1
              </div>
              <h3 className="text-base font-bold text-sageDark">Message on WhatsApp</h3>
              <p className="text-xs text-gray-500 mt-2 max-w-[200px] leading-relaxed font-light">
                Click any booking button to connect directly with Megha on WhatsApp.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-sageMedium/40 text-sageDark flex items-center justify-center font-serif-title text-xl font-bold mb-4 shadow-sm group-hover:bg-sageLight transition-colors duration-300">
                2
              </div>
              <h3 className="text-base font-bold text-sageDark">Book Your Trial</h3>
              <p className="text-xs text-gray-500 mt-2 max-w-[200px] leading-relaxed font-light">
                Confirm your slot details and schedule your free beginner live class.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-sageMedium/40 text-sageDark flex items-center justify-center font-serif-title text-xl font-bold mb-4 shadow-sm group-hover:bg-sageLight transition-colors duration-300">
                3
              </div>
              <h3 className="text-base font-bold text-sageDark">Receive the Link</h3>
              <p className="text-xs text-gray-500 mt-2 max-w-[200px] leading-relaxed font-light">
                We send a direct Zoom access link right onto your phone ahead of time.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-sageMedium/40 text-sageDark flex items-center justify-center font-serif-title text-xl font-bold mb-4 shadow-sm group-hover:bg-sageLight transition-colors duration-300">
                4
              </div>
              <h3 className="text-base font-bold text-sageDark">Start Live Yoga</h3>
              <p className="text-xs text-gray-500 mt-2 max-w-[200px] leading-relaxed font-light">
                Log in from home, unmute, set up your space, and begin your wellness routine!
              </p>
            </div>

          </div>

          {/* Interactive Pre-filled WhatsApp Class Planner Widget */}
          <WidgetComponent />

        </div>
      </section>

      {/* Class Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accentGold">Your Wellness Journey</span>
            <h2 className="font-serif-title text-3xl sm:text-4xl text-sageDark font-semibold mt-2">Class Benefits</h2>
            <div className="h-1 w-16 bg-accentGold mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 text-sm mt-3 font-light">Every online session is carefully structured to prioritize physical safety, joint health, and profound mental quiet.</p>
          </div>

          {/* Benefits Grid (6 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Benefit 1 */}
            <div className="p-6 rounded-2xl bg-warmIvory border border-sageLight/40 hover:border-accentGold/30 transition-all shadow-sm hover:shadow-md flex items-start gap-4">
              <span className="p-3.5 bg-[#E8EFE9] text-sageDark rounded-xl text-lg">
                <i className="fa-solid fa-child"></i>
              </span>
              <div>
                <h3 className="font-serif-title font-bold text-sageDark text-base">Improve Flexibility</h3>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed font-light">
                  Gently expand your range of motion, relieve hip tightness, and release stiff neck and back pain from home.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 rounded-2xl bg-warmIvory border border-sageLight/40 hover:border-accentGold/30 transition-all shadow-sm hover:shadow-md flex items-start gap-4">
              <span className="p-3.5 bg-[#E8EFE9] text-sageDark rounded-xl text-lg">
                <i className="fa-solid fa-wind"></i>
              </span>
              <div>
                <h3 className="font-serif-title font-bold text-sageDark text-base">Reduce Stress</h3>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed font-light">
                  Unwind deep mental pressure using breathing protocols, mindful movement, and deep meditative rest.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 rounded-2xl bg-warmIvory border border-sageLight/40 hover:border-accentGold/30 transition-all shadow-sm hover:shadow-md flex items-start gap-4">
              <span className="p-3.5 bg-[#E8EFE9] text-sageDark rounded-xl text-lg">
                <i className="fa-solid fa-dumbbell"></i>
              </span>
              <div>
                <h3 className="font-serif-title font-bold text-sageDark text-base">Build Strength</h3>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed font-light">
                  Enhance core stability, arm power, and spine posture using progressive, step-by-step holds.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="p-6 rounded-2xl bg-warmIvory border border-sageLight/40 hover:border-accentGold/30 transition-all shadow-sm hover:shadow-md flex items-start gap-4">
              <span className="p-3.5 bg-[#E8EFE9] text-sageDark rounded-xl text-lg">
                <i className="fa-solid fa-calendar-check"></i>
              </span>
              <div>
                <h3 className="font-serif-title font-bold text-sageDark text-base">Stay Consistent</h3>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed font-light">
                  Classes are structured in live sessions to build long-term accountability, helping you practice reliably.
                </p>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="p-6 rounded-2xl bg-warmIvory border border-sageLight/40 hover:border-accentGold/30 transition-all shadow-sm hover:shadow-md flex items-start gap-4">
              <span className="p-3.5 bg-[#E8EFE9] text-sageDark rounded-xl text-lg">
                <i className="fa-solid fa-house-user"></i>
              </span>
              <div>
                <h3 className="font-serif-title font-bold text-sageDark text-base">Practice From Home</h3>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed font-light">
                  No heavy commutes or strict gym timetables. Just layout your mat and join the video link smoothly.
                </p>
              </div>
            </div>

            {/* Benefit 6 */}
            <div className="p-6 rounded-2xl bg-warmIvory border border-sageLight/40 hover:border-accentGold/30 transition-all shadow-sm hover:shadow-md flex items-start gap-4">
              <span className="p-3.5 bg-[#E8EFE9] text-sageDark rounded-xl text-lg">
                <i className="fa-solid fa-venus"></i>
              </span>
              <div>
                <h3 className="font-serif-title font-bold text-sageDark text-base">Women-Only Safe Space</h3>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed font-light">
                  Enjoy an atmosphere designed purely for women. Share issues, connect with mates, and grow in confidence.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* About Megha Section */}
      <section id="about" className="py-16 md:py-24 bg-gradient-to-tr from-warmIvory via-[#FAF6F0] to-sageLight/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Profile Image / Design Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm">
                {/* Background Accent Rings */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accentGold/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-sageMedium/20 rounded-full blur-xl"></div>
                
                {/* Profile Card Stack */}
                <div className="relative bg-white p-4 rounded-[2.5rem] shadow-xl border border-sageLight/70">
                  <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800" 
                       alt="Megha - Yoga Teacher Smiling" 
                       className="rounded-[1.8rem] w-full h-[400px] object-cover"
                       onError={(e) => { e.target.src = 'https://placehold.co/800x1000/E8EFE9/3A4F3F?text=Megha+Yoga+Instructor' }} />
                  
                  {/* Small dynamic counter on picture */}
                  <div className="absolute bottom-8 right-8 bg-white px-4 py-2 rounded-xl shadow-md border border-sageLight text-center">
                    <span className="block font-serif-title font-bold text-sageDark text-lg leading-tight">5+ Years</span>
                    <span className="block text-[9px] uppercase tracking-wide text-gray-500 font-semibold">Of Teaching</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-accentGold">The Heart & Soul</span>
              <h2 className="font-serif-title text-3xl sm:text-4xl text-sageDark font-semibold">About Megha</h2>
              <div className="h-1 w-20 bg-accentGold rounded-full"></div>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                Hello! I am Megha, a certified yoga instructor dedicated to bringing premium, accessible, and live wellness to women across all stages of life. 
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                My practice focuses on helping you build a healthy, structured, and consistent routine. Each class is structured to prioritize joint alignment, mental peace, and gentle strength building. Unlike pre-recorded portals where you feel left out, my **live interactive Zoom sessions** ensure you get corrected, aligned, and motivated every single second.
              </p>

              {/* Simple trust quotes/bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-3 text-sm text-sageDark">
                  <i className="fa-solid fa-certificate text-accentGold text-lg"></i>
                  <span className="font-medium">Certified Yoga Alliance</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-sageDark">
                  <i className="fa-solid fa-heart text-accentGold text-lg"></i>
                  <span className="font-medium">Beginner-Friendly Specialist</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-sageDark">
                  <i className="fa-solid fa-handshake-angle text-accentGold text-lg"></i>
                  <span className="font-medium">Focused Personal Attention</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-sageDark">
                  <i className="fa-solid fa-hourglass-start text-accentGold text-lg"></i>
                  <span className="font-medium">Gentle & Paced Progression</span>
                </div>
              </div>

              {/* CTA on About */}
              <div className="pt-4">
                <a href="https://wa.me/919034961137?text=Hi%20Megha!%20I've%20read%20about%20your%20classes%20and%20would%20love%20to%20book%20a%20free%20trial%20session.%20Please%20let%20me%20know%20how%20to%20join." 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center space-x-2 bg-sageDark hover:bg-[#2A3B2F] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md transition-all">
                  <i className="fa-brands fa-whatsapp text-lg text-[#25D366]"></i>
                  <span>Chat with Megha</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Programs & Classes Section */}
      <section id="programs" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accentGold">Choose Your Alignment</span>
            <h2 className="font-serif-title text-3xl sm:text-4xl text-sageDark font-semibold mt-2">Our Programs</h2>
            <div className="h-1 w-16 bg-accentGold mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 text-sm mt-3 font-light">Find the program that best matches your lifestyle and goal. Ask details about any batch on WhatsApp.</p>
          </div>

          {/* Program Cards (3 Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Program 1 */}
            <div className="bg-warmIvory rounded-3xl p-8 border border-sageLight hover:border-accentGold/30 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sageLight text-sageDark flex items-center justify-center text-lg">
                  <i className="fa-solid fa-spa"></i>
                </div>
                <h3 className="font-serif-title text-2xl font-bold text-sageDark">Beginner Yoga</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  A relaxed, gentle pace designed exclusively for people holding absolute zero experience. Learn deep postures, gentle stretches, and base breathing habits without feel pressured.
                </p>
                
                <div className="pt-2 border-t border-sageLight space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <i className="fa-regular fa-clock text-accentGold"></i>
                    <span>60-Minute Sessions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <i className="fa-regular fa-star text-accentGold"></i>
                    <span>Slow Pace / High Care</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a href="https://wa.me/919034961137?text=Hi%20Megha!%20I'm%20interested%20in%20your%20'Beginner%20Yoga'%20program.%20Could%20you%20share%20the%20available%20slots%20and%20details?" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="w-full inline-flex items-center justify-center space-x-2 bg-sageLight hover:bg-sageMedium hover:text-white text-sageDark py-3 rounded-full text-xs font-bold transition-all">
                  <i className="fa-brands fa-whatsapp text-base"></i>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Program 2 (Featured Program) */}
            <div className="bg-white rounded-3xl p-8 border-2 border-accentGold transition-all shadow-md hover:shadow-2xl flex flex-col justify-between relative transform -translate-y-1">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accentGold text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow">
                Most Popular
              </div>

              <div className="space-y-4 pt-2">
                <div className="w-12 h-12 rounded-2xl bg-[#E8EFE9] text-sageDark flex items-center justify-center text-lg">
                  <i className="fa-solid fa-person-running"></i>
                </div>
                <h3 className="font-serif-title text-2xl font-bold text-sageDark">Flexibility & Fitness</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Dynamic, energizing sequences designed to build leaner strength, increase absolute body range of motion, and target stubborn abdominal fat while staying incredibly safe.
                </p>
                
                <div className="pt-2 border-t border-sageLight space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <i className="fa-regular fa-clock text-accentGold"></i>
                    <span>60-Minute Sessions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <i className="fa-solid fa-bolt text-accentGold"></i>
                    <span>Active Pace / Weight Care</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a href="https://wa.me/919034961137?text=Hi%20Megha!%20I'm%20interested%20in%20your%20'Flexibility%20%26%20Fitness'%20program.%20Could%20you%20share%20the%20available%20slots%20and%20details?" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="w-full inline-flex items-center justify-center space-x-2 bg-sageDark hover:bg-[#2A3B2F] text-white py-3 rounded-full text-xs font-bold transition-all shadow-md">
                  <i className="fa-brands fa-whatsapp text-base text-[#25D366]"></i>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Program 3 */}
            <div className="bg-warmIvory rounded-3xl p-8 border border-sageLight hover:border-accentGold/30 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sageLight text-sageDark flex items-center justify-center text-lg">
                  <i className="fa-solid fa-moon"></i>
                </div>
                <h3 className="font-serif-title text-2xl font-bold text-sageDark">Stress Relief Yoga</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Slow, deep Restorative yoga, pranayama, and guided deep sleep meditation. Built purposefully for calming busy working minds, settling sleep cycles, and eliminating body anxiety.
                </p>
                
                <div className="pt-2 border-t border-sageLight space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <i className="fa-regular fa-clock text-accentGold"></i>
                    <span>60-Minute Sessions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <i className="fa-regular fa-face-smile text-accentGold"></i>
                    <span>Slow, Meditative Rest</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a href="https://wa.me/919034961137?text=Hi%20Megha!%20I'm%20interested%20in%20your%20'Stress%20Relief%20Yoga'%20program.%20Could%20you%20share%20the%20available%20slots%20and%20details?" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="w-full inline-flex items-center justify-center space-x-2 bg-sageLight hover:bg-sageMedium hover:text-white text-sageDark py-3 rounded-full text-xs font-bold transition-all">
                  <i className="fa-brands fa-whatsapp text-base"></i>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-softBeige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accentGold">Kind Words from Our Sangha</span>
            <h2 className="font-serif-title text-3xl sm:text-4xl text-sageDark font-semibold mt-2">Love & Stories</h2>
            <div className="h-1 w-16 bg-accentGold mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-sageLight/50 flex flex-col justify-between">
              <div>
                {/* Stars */}
                <div className="flex space-x-1 text-amber-400 text-xs mb-4">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-xs text-gray-600 italic leading-relaxed font-light">
                  "I was highly skeptical about doing yoga online. I thought I would be ignored, but Megha constantly kept an eye on my posture through the screen. My chronic back ache is entirely gone in just 3 months. She holds massive patience for beginners!"
                </p>
              </div>
              <div className="pt-6 border-t border-sageLight/50 mt-6 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-sageLight text-sageDark flex items-center justify-center">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div>
                   <p className="text-sm font-bold text-sageDark">Client Name</p>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </section>
    </>
  );
}

// Subcomponent for the interactive booking widget
function WidgetComponent() {
  const [focus, setFocus] = useState("Improving overall flexibility & stiffness");
  const [slot, setSlot] = useState("Morning");
  
  const generateMessage = () => {
    return `Hi Megha! I'm interested in booking a free trial yoga class. I am looking forward to ${focus} during the ${slot} slot. Please share the Zoom details!`;
  };

  const handleBook = () => {
    const text = encodeURIComponent(generateMessage());
    window.open(`https://wa.me/919034961137?text=${text}`, '_blank');
  };

  return (
    <div className="mt-16 max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-sageLight/60">
      <div className="text-center mb-6">
        <span className="inline-block bg-[#E8EFE9] text-[#3A4F3F] text-xs font-bold px-3 py-1 rounded-full mb-2">Interactive Tool</span>
        <h3 className="font-serif-title text-xl sm:text-2xl text-sageDark font-semibold">Customize Your WhatsApp Booking Message</h3>
        <p className="text-xs text-gray-500 mt-1">Select your routine preferences to generate a personalized booking message before clicking.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="focus-select" className="block text-xs font-semibold text-sageDark mb-1.5">What is your primary focus area?</label>
          <select 
            id="focus-select" 
            value={focus}
            onChange={(e) => setFocus(e.target.value)}
            className="w-full bg-warmIvory border border-sageLight rounded-xl px-4 py-2.5 text-sm text-sageDark focus:ring-1 focus:ring-accentGold focus:outline-none"
          >
            <option value="Improving overall flexibility & stiffness">Improve Flexibility</option>
            <option value="Reducing stress & daily anxiety">Reduce Stress</option>
            <option value="Building core & overall physical strength">Build Strength</option>
            <option value="Weight management & calorie burn">Weight Management</option>
            <option value="Daily consistent wellness">Daily Consistency</option>
          </select>
        </div>

        <div>
          <label htmlFor="slot-select" className="block text-xs font-semibold text-sageDark mb-1.5">Preferred Slot (Live Zoom)</label>
          <select 
            id="slot-select" 
            value={slot}
            onChange={(e) => setSlot(e.target.value)}
            className="w-full bg-warmIvory border border-sageLight rounded-xl px-4 py-2.5 text-sm text-sageDark focus:ring-1 focus:ring-accentGold focus:outline-none"
          >
            <option value="Morning">Morning (7:30 AM - 8:30 AM)</option>
            <option value="Late Morning">Late Morning (10:00 AM - 11:00 AM)</option>
            <option value="Evening">Evening (5:30 PM - 6:30 PM)</option>
            <option value="Late Evening">Late Evening (7:00 PM - 8:00 PM)</option>
          </select>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-sageLight/50 border border-sageMedium/30">
        <p className="text-xs font-semibold text-sageDark mb-1">Message Preview:</p>
        <p id="msg-preview" className="text-xs text-gray-600 italic">"{generateMessage()}"</p>
      </div>

      <div className="mt-6 text-center">
        <button 
          id="generator-btn" 
          onClick={handleBook}
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-sageDark hover:bg-[#2A3B2F] text-white px-8 py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all text-sm"
        >
          <i className="fa-brands fa-whatsapp text-lg text-[#25D366]"></i>
          <span>Book Selected Slot via WhatsApp</span>
        </button>
      </div>
    </div>
  );
}

export default App;
