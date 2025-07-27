import React, { useState, useEffect, useRef } from "react";
import site_settings from "../Site";
import parse from 'html-react-parser';

// A more feature-rich, self-contained Teacher Card for demonstration purposes
const TeacherCard = ({ name, subject, imageUrl, quote }) => (
  <div className="bg-gray-50 p-4 border-2 border-green-200 flex flex-col items-center text-center transition-colors duration-200 hover:bg-green-50">
    <img
      src={imageUrl}
      alt={name}
      className="w-28 h-28 object-cover border-2 border-green-300 mb-3 block mx-auto"
    />
    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
    <p className="text-md text-green-700 mb-2">{subject}</p>
    <p className="text-sm text-gray-600 italic leading-snug">"{quote}"</p>
    <button className="mt-4 px-5 py-2 bg-green-600 text-white font-semibold border-2 border-green-700 hover:bg-green-700 transition-all duration-200 text-sm uppercase tracking-wide">
      View Profile
    </button>
  </div>
);

// Simple, self-contained carousel for hero section
const heroSlides = [
  {
    image: "https://www.shutterstock.com/image-vector/back-school-chalk-doodle-style-260nw-2478758625.jpg",
    headline: "Empowering Minds",
    subtext: "Discover Excellence in Education at Z.M. International School",
    button: "Explore Our Programs",
  },
  {
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80",
    headline: "Innovative Learning",
    subtext: "Where every child is encouraged to reach their full potential.",
    button: "Meet Our Faculty",
  },
  {
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80",
    headline: "A Vibrant Community of Learners",
    subtext: "Join a school that values creativity, diversity, and growth.",
    button: "Join Us Today",
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const slideCount = heroSlides.length;

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current, slideCount]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
  const next = () => setCurrent((prev) => (prev + 1) % slideCount);

  return (
    <div className="relative w-full h-96 overflow-hidden border-b-4 border-green-400 mb-12 rounded">
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-700 bg-opacity-65 flex items-center justify-center">
            <div className="text-center text-white p-8 max-w-2xl mx-auto backdrop-filter backdrop-blur-sm border-2 border-white">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight uppercase tracking-wider">{slide.headline}</h1>
              <p className="text-xl md:text-2xl mb-8 font-light">{slide.subtext}</p>
              <button className="px-12 py-4 bg-green-600 text-white text-lg font-bold border-2 border-white hover:bg-green-700 transition-all duration-300 uppercase tracking-wide">
                {slide.button}
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* Carousel Controls */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-green-800 bg-opacity-60 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-900 transition z-20">
        &#8592;
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-800 bg-opacity-60 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-900 transition z-20">
        &#8594;
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full border-2 border-white ${idx === current ? 'bg-green-400' : 'bg-white bg-opacity-60'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


const Home = () => {
  const language = 'en';

  if (!site_settings.pages.home.view) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 border border-gray-300">
        <p className="text-xl text-gray-700 p-4 border border-gray-400">This page is unavailable.</p>
      </div>
    );
  }

  // Sample data for sections to make them "feature-full"
  const recentNotices = [
    { id: 1, title: "School will be closed on Friday for Staff Training", date: "July 28, 2025", category: "Holiday" },
    { id: 2, title: "Annual Sports Day on 25th August - Register Now!", date: "August 25, 2025", category: "Event" },
    { id: 3, title: "New admission for Class 1 open soon! Early bird discounts available.", date: "September 1, 2025", category: "Admission" },
    { id: 4, title: "Parent-Teacher Conference Sign-ups Now Open", date: "August 5, 2025", category: "Meeting" },
  ];

  const upcomingEvents = [
    { id: 1, title: "Annual Science Fair", date: "October 15, 2025", time: "9:00 AM - 3:00 PM", description: "Showcasing innovative student projects and scientific discoveries from our bright minds." },
    { id: 2, title: "School Play: 'The Magic Tree'", date: "November 2, 2025", time: "6:00 PM - 8:00 PM", description: "Join us for a captivating performance by our talented drama club. Tickets available at the school office." },
    { id: 3, title: "Winter Festival Celebration", date: "December 10, 2025", time: "4:00 PM - 7:00 PM", description: "A joyous evening of festive fun, music, and performances by students and staff. All are welcome!" },
  ];

  const principalSpeechContent = `
    <p class="mb-3">
      "It is with immense pleasure that I welcome you to Z.M. International School, a place where innovation meets education, and every child is encouraged to reach their full potential. Our dedicated staff, comprehensive curriculum, and supportive environment are designed to foster academic excellence, critical thinking, and a lifelong love for learning. We prioritize holistic development, ensuring our students are not only academically strong but also socially responsible and emotionally intelligent. Our commitment to excellence is unwavering, and we continuously strive to provide the best possible educational experience for every student who walks through our doors."
    </p>
    <p>
      "We believe in nurturing well-rounded individuals who are prepared to face the challenges of the future with confidence and integrity. Our vision is to empower students to become compassionate, creative, and confident global citizens. Thank you for considering Z.M. International School for your child's educational journey. We look forward to welcoming you to our vibrant community and partnering with you in shaping a bright future."
    </p>
    <p class="mb-3">
      It is with immense pleasure that I welcome you to Z.M. International School. Our commitment to excellence is unwavering, and we continuously strive to provide the best possible educational experience for every student who walks through our doors."
    </p>
  `;

  return (
    <div className="w-full mx-auto"> {/* Main container with a subtle background */}

      {/* Hero Section - Carousel */}
      <HeroCarousel />

      <div className="max-w-7xl mx-auto"> {/* Centered content with generous padding */}

        {/* Recent Notices Section */}
        <section className="mb-12 border-2 border-gray-200 bg-white">
          <div className="bg-gray-100 p-5 border-b-2 border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">Recent Notices</h2>
            <a href="/notices" className="text-green-600 font-semibold hover:underline text-md md:text-lg transition-colors duration-200">
                View All Notices <span className="ml-1">&raquo;</span>
            </a>
          </div>
          <ul className="divide-y divide-gray-100 p-6">
            {recentNotices.map((notice) => (
              <li key={notice.id} className="p-4 transition-colors duration-200 hover:bg-gray-50 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <span className="font-bold text-green-700 mr-2">{notice.date}:</span>
                    <span className="text-gray-800">{notice.title}</span>
                  </div>
                  <span className="text-sm text-gray-600 mt-2 sm:mt-0 px-3 py-1 border border-gray-300 bg-gray-100 font-medium uppercase tracking-tight">
                    {notice.category}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Principal's Message Section */}
        {site_settings.pages.home.blocks.principal_speech && (
          <section className="mb-12 bg-white">
            <div className="bg-gray-100 p-5 border-b-2 border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">{site_settings.blocks.principal_speech.title_1[language]}</h2>
            </div>
            <div className="flex flex-col md:flex-row py-8 gap-8 items-start">
              <div className="md:w-1/3 flex-shrink-0 border-2 border-gray-200 p-4 bg-gray-50 text-center">
                <img className="w-full h-auto object-cover border-2 border-green-300 mb-5 block mx-auto" src="https://mlis.edu.bd/wp-content/uploads/2022/12/pr2.jpg" alt="Principal" />
                <h3 className="text-xl font-bold text-gray-900 leading-tight">Z.M. INTERNATIONAL SCHOOL</h3>
                <p className="text-lg text-gray-700 mt-2">Principal</p>
                <p className="text-sm text-gray-500 mt-3 italic">"Leading with Vision & Dedication"</p>
              </div>
              <div className="md:w-2/3 text-gray-800 leading-relaxed p-5 bg-gray-50 border-2 border-gray-200">
                {parse(principalSpeechContent)}
                <button className="mt-6 px-7 py-3 bg-gray-700 text-white font-semibold border-2 border-gray-800 hover:bg-gray-800 transition-all duration-200 text-md uppercase tracking-wide">
                  Read Full Message
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Quick Stats Section */}
        <section className="mb-12 bg-white">
          <div className="bg-gray-100 p-5 border-b-2 border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">Our Strengths at a Glance</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            <div className="bg-gray-50 p-6 text-center border-2 border-green-200 flex flex-col items-center transition-colors duration-200 hover:bg-green-100">
              <span className="text-green-600 text-6xl mb-4">&#127891;</span> {/* Book icon */}
              <div className="text-5xl font-bold text-green-700 mb-2">120+</div>
              <div className="text-lg text-gray-700 font-medium">Students Enrolled</div>
            </div>
            <div className="bg-gray-50 p-6 text-center border-2 border-green-200 flex flex-col items-center transition-colors duration-200 hover:bg-green-100">
              <span className="text-green-600 text-6xl mb-4">&#128100;</span> {/* Teacher icon */}
              <div className="text-5xl font-bold text-green-700 mb-2">18+</div>
              <div className="text-lg text-gray-700 font-medium">Experienced Teachers</div>
            </div>
            <div className="bg-gray-50 p-6 text-center border-2 border-green-200 flex flex-col items-center transition-colors duration-200 hover:bg-green-100">
              <span className="text-yellow-600 text-6xl mb-4">&#127891;</span> {/* Graduation Cap icon (kept yellow for contrast/diversity) */}
              <div className="text-5xl font-bold text-yellow-700 mb-2">8+</div>
              <div className="text-lg text-gray-700 font-medium">Diverse Classes</div>
            </div>
          </div>
        </section>

        {/* Featured Teachers Section */}
        {site_settings.pages.home.blocks.featured_teacher_list && (
          <section className="mb-12 bg-white">
            <div className="bg-gray-100 p-5 border-b-2 border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">{site_settings.blocks.featured_teacher_list.title_1[language]}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
              <TeacherCard
                name="Ms. Emily Brown"
                subject="English Literature"
                imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
                quote="Inspiring creativity and a lifelong love for reading and storytelling."
              />
              <TeacherCard
                name="Mr. David Lee"
                subject="Physics & Robotics"
                imageUrl="https://randomuser.me/api/portraits/men/33.jpg"
                quote="Making complex scientific concepts exciting and accessible through hands-on experiments."
              />
              <TeacherCard
                name="Dr. Sarah Chen"
                subject="Biology & Environmental Science"
                imageUrl="https://randomuser.me/api/portraits/women/67.jpg"
                quote="Fostering deep curiosity about the natural world and promoting ecological awareness."
              />
            </div>
            <div className="text-center p-5 border-t-2 border-gray-200 bg-gray-100">
              <a href="/teachers" className="text-green-600 font-semibold hover:underline text-md md:text-lg transition-colors duration-200">
                Meet Our Full Faculty <span className="ml-1">&raquo;</span>
              </a>
            </div>
          </section>
        )}

        {/* Upcoming Events Section */}
        <section className="mb-12 bg-white">
          <div className="bg-gray-100 p-5 border-b-2 border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">Upcoming Events</h2>
            <a href="/events" className="text-green-600 font-semibold hover:underline text-md md:text-lg transition-colors duration-200">
              View Full Calendar <span className="ml-1">&raquo;</span>
            </a>
          </div>
          <ul className="divide-y divide-gray-100 py-6">
            {upcomingEvents.map((event) => (
              <li key={event.id} className="p-4 transition-colors duration-200 hover:bg-gray-50 cursor-pointer border mb-2">
                <div className="flex items-start mb-2">
                  <span className="text-2xl text-green-600 mr-4 flex-shrink-0 mt-1">&#128197;</span> {/* Calendar icon */}
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{event.title}</h3>
                    <p className="text-sm text-gray-600">
                      <strong className="text-gray-700">Date:</strong> {event.date} | <strong className="text-gray-700">Time:</strong> {event.time}
                    </p>
                  </div>
                </div>
                <p className="ml-10 text-gray-700 leading-snug">{event.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* School Features Section */}
        {site_settings.pages.home.blocks.features && (
          <section className="mb-12 bg-white">
            <div className="bg-gray-100 p-5 border-b-2 border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">{site_settings.blocks.features.title_1[language]}</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
              {site_settings.blocks.features.description_1[language].map((data, index) => (
                <li key={index} className="p-5 border-2 border-gray-200 bg-gray-50 flex items-start transition-colors duration-200 hover:bg-gray-100">
                  <span className="text-green-600 text-3xl mr-4 flex-shrink-0 mt-1">&#10003;</span> {/* Checkmark icon */}
                  <p className="leading-relaxed text-gray-800">{parse(data)}</p>
                </li>
              ))}
              <li className="p-5 border-2 border-gray-200 bg-gray-50 flex items-start transition-colors duration-200 hover:bg-gray-100">
                <span className="text-green-600 text-3xl mr-4 flex-shrink-0 mt-1">&#128187;</span> {/* Computer icon */}
                <p className="leading-relaxed text-gray-800"><strong>State-of-the-Art Labs:</strong> Fully equipped science and computer labs provide immersive, hands-on learning experiences for all students.</p>
              </li>
              <li className="p-5 border-2 border-gray-200 bg-gray-50 flex items-start transition-colors duration-200 hover:bg-gray-100">
                <span className="text-yellow-600 text-3xl mr-4 flex-shrink-0 mt-1">&#127941;</span> {/* Sports icon (kept yellow for contrast/diversity) */}
                <p className="leading-relaxed text-gray-800"><strong>Extensive Sports Facilities:</strong> Promoting physical fitness and teamwork with our expansive fields, courts, and dedicated coaching staff.</p>
              </li>
            </ul>
          </section>
        )}

        {/* Quick Links Section */}
        <section className="mb-8 bg-white">
          <div className="bg-gray-100 p-5 border-b-2 border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">Explore Our School</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
            <a href="/teachers" className="bg-green-500 text-white p-6 text-center font-bold border-2 border-green-600 hover:bg-green-600 transition-colors duration-200 block uppercase tracking-wide text-lg">
              <span className="text-4xl block mb-2">&#128100;</span>Teachers
            </a>
            <a href="/students" className="bg-lime-500 text-white p-6 text-center font-bold border-2 border-lime-600 hover:bg-lime-600 transition-colors duration-200 block uppercase tracking-wide text-lg"> {/* Changed to lime-green for variety */}
              <span className="text-4xl block mb-2">&#127891;</span>Students
            </a>
            <a href="/admissions" className="bg-teal-500 text-white p-6 text-center font-bold border-2 border-teal-600 hover:bg-teal-600 transition-colors duration-200 block uppercase tracking-wide text-lg"> {/* Changed to teal for variety */}
              <span className="text-4xl block mb-2">&#127892;</span>Admissions
            </a>
            <a href="/contact" className="bg-yellow-500 text-white p-6 text-center font-bold border-2 border-yellow-600 hover:bg-yellow-600 transition-colors duration-200 block uppercase tracking-wide text-lg">
              <span className="text-4xl block mb-2">&#128222;</span>Contact Us
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;