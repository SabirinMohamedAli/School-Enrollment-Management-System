import React from 'react';
import image from '../images/2.jpg'; // Import your images
import ajay from '../images/4.jpg';

const App = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center bg-blue-600 text-white p-4 sticky top-0 z-50">
        <div className="text-2xl font-bold">SmartEnroll</div>
        <ul className="flex gap-8">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#courses" className="hover:underline">Courses</a></li>
          <li><a href="#instructors" className="hover:underline">Instructors</a></li>
          <li><a href="/login" className="hover:underline">Login</a></li>

         
        </ul>
      </nav>

      {/* Main Section */}
      <div className="flex items-center justify-between p-12 gap-8">
        {/* Qeybta qoraalka */}
        <div className="text-section max-w-lg ml-8 leading-tight">
          <h1 className="text-8xl font-bold mb-4 ml-9">Take your career to <br /> the next level.</h1>
          <p className="text-2xl mb-6">With indispensable courses</p>
          <div className="flex mt-6">
            <button className="bg-orange-500 px-10 py-4 rounded-xl font-bold hover:bg-gray-800 text-white mr-4 text-lg">
              Exams
            </button>
            <button className="bg-transparent px-10 py-4 rounded-xl font-bold hover:bg-gray-800 hover:text-white text-gray-800 text-lg">
              Our Courses
            </button>
          </div>
        </div>

        {/* Qeybta sawirka */}
        <div className="image-section w-[800px] h-[600px]">
          <img className="w-full h-full object-cover rounded-xl shadow-lg" src={image} alt="Career" />
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-gray-50" id="about">
        <h2 className="text-6xl mb-8 text-center font-bold text-gray-800">About Us</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
          {/* Sawirka */}
          <div>


            
            <img
              className="w-full h-[500px] object-cover rounded-xl shadow-lg mr-[30px]"
              src={ajay}
              alt="School Environment"
            />
          </div>

          {/* Qoraalka */}
          <div className="text-left">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Welcome to Our School
            </h1>
            <h2 className='text-orange-500 text-4xl'> Where Learning Meets Excellence</h2>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              Our school is dedicated to providing a nurturing environment where students can excel academically, socially, and personally.
            </p>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              Join us on this exciting journey of discovery and transformation.
            </p>
            <div className="mt-8 text-center">
              <button className="bg-orange-500 px-8 py-4 rounded-xl text-white font-bold hover:bg-orange-600 transition">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="text-center py-12 bg-gray-100">
        <h2 className="text-3xl mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl">Student Enrollment</h3>
            <p className="text-sm mt-4">Seamless student registration and management.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl">Course Management</h3>
            <p className="text-sm mt-4">Organized courses and class schedules.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl">Notifications</h3>
            <p className="text-sm mt-4">Stay updated with the latest announcements.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
