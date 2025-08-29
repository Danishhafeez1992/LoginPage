<template>
  <body class="bg-gray-50 text-gray-800">
    <!-- Hero Section -->
    <section class="bg-indigo-600 text-white text-center py-20">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Welcome to MyWebsite</h2>
      <p class="text-lg mb-8">We build modern solutions to help you succeed online.</p>
      <a
        href="#services"
        class="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
      >
        Learn More
      </a>
    </section>

    <!-- About Section -->
    <section
      id="about"
      class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center"
    >
      <img src="https://via.placeholder.com/500x350" alt="About Us" class="rounded-xl shadow-md" />
      <div>
        <h3 class="text-2xl font-bold mb-4">About Us</h3>
        <p class="text-gray-600 mb-4">
          We are a creative agency dedicated to building innovative websites, apps, and digital
          solutions. Our team is passionate about technology and design, delivering high-quality
          experiences for clients worldwide.
        </p>
        <a href="#services" class="text-indigo-600 font-semibold hover:underline">Read More →</a>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h3 class="text-2xl font-bold mb-10">Our Services</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 shadow-md rounded-xl hover:shadow-lg transition">
            <h4 class="text-xl font-semibold mb-3">🌐 Web Development</h4>
            <p class="text-gray-600">
              Custom websites built with modern frameworks and responsive design.
            </p>
          </div>
          <div class="p-6 shadow-md rounded-xl hover:shadow-lg transition">
            <h4 class="text-xl font-semibold mb-3">📱 Mobile Apps</h4>
            <p class="text-gray-600">
              Cross-platform apps for Android & iOS to reach your customers everywhere.
            </p>
          </div>
          <div class="p-6 shadow-md rounded-xl hover:shadow-lg transition">
            <h4 class="text-xl font-semibold mb-3">🎨 UI/UX Design</h4>
            <p class="text-gray-600">
              Beautiful, user-friendly designs to enhance digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="bg-gray-100 py-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h3 class="text-2xl font-bold mb-10">What Our Clients Say</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-md">
            <p class="text-gray-600 mb-4">
              “Fantastic service! The website they built exceeded our expectations.”
            </p>
            <h4 class="font-bold">- Sarah, CEO</h4>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <p class="text-gray-600 mb-4">
              “Professional, creative, and reliable team. Highly recommend.”
            </p>
            <h4 class="font-bold">- James, Startup Founder</h4>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <p class="text-gray-600 mb-4">
              “Our app launch was smooth and successful thanks to their expertise.”
            </p>
            <h4 class="font-bold">- Ayesha, Product Manager</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Preview -->
    <section id="blog" class="max-w-7xl mx-auto px-6 py-16">
      <h3 class="text-2xl font-bold text-center mb-10">Latest Blog Posts</h3>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/400x250" class="w-full" alt="Blog 1" />
          <div class="p-6">
            <h4 class="font-semibold mb-2">5 Web Design Trends in 2025</h4>
            <p class="text-gray-600 mb-4">
              Stay ahead with these modern design trends shaping the web.
            </p>
            <a href="#" class="text-indigo-600 hover:underline">Read More →</a>
          </div>
        </div>
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/400x250" class="w-full" alt="Blog 2" />
          <div class="p-6">
            <h4 class="font-semibold mb-2">How to Build an App</h4>
            <p class="text-gray-600 mb-4">
              Step-by-step guide to creating your first mobile app successfully.
            </p>
            <a href="#" class="text-indigo-600 hover:underline">Read More →</a>
          </div>
        </div>
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/400x250" class="w-full" alt="Blog 3" />
          <div class="p-6">
            <h4 class="font-semibold mb-2">Boost Your Business Online</h4>
            <p class="text-gray-600 mb-4">
              Essential digital strategies to grow your business in 2025.
            </p>
            <a href="#" class="text-indigo-600 hover:underline">Read More →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Call-to-Action -->
    <section class="bg-indigo-600 text-white text-center py-16">
      <h3 class="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
      <p class="mb-6">Let’s work together and bring your ideas to life.</p>
      <a
        href="#contact"
        class="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100"
      >
        Contact Us
      </a>
    </section>

    <!-- Footer -->
    <footer id="contact" class="bg-gray-900 text-gray-300 py-10">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h4 class="font-bold text-lg mb-4">MyWebsite</h4>
          <p class="text-gray-400">Building digital solutions that inspire growth.</p>
        </div>
        <div>
          <h4 class="font-bold text-lg mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white">Home</a></li>
            <li><a href="#about" class="hover:text-white">About</a></li>
            <li><a href="#services" class="hover:text-white">Services</a></li>
            <li><a href="#blog" class="hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-lg mb-4">Contact</h4>
          <p>Email: info@mywebsite.com</p>
          <p>Phone: +123 456 789</p>
        </div>
      </div>
      <div class="text-center mt-8 text-gray-500">© 2025 MyWebsite. All Rights Reserved.</div>
    </footer>
  </body>
</template>

<script setup></script>
