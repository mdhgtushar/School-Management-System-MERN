import React from "react";

const magazineArticles = [
  {
    id: 1,
    title: "Noteworthy Technology Acquisitions 2021",
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    description: "A look at the most significant technology acquisitions of the year and their impact on the industry.",
    link: "#",
  },
  {
    id: 2,
    title: "Student Innovations: Science Fair Highlights",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "Discover the creative projects and scientific breakthroughs from our annual science fair.",
    link: "#",
  },
  {
    id: 3,
    title: "Interview: Principal's Vision for the Future",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    description: "An exclusive interview with our principal on the school's mission and upcoming initiatives.",
    link: "#",
  },
  {
    id: 4,
    title: "Alumni Success Stories",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    description: "Celebrating the achievements of our alumni in various fields around the world.",
    link: "#",
  },
  {
    id: 5,
    title: "Art & Culture: Student Gallery",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "A showcase of outstanding artwork and cultural projects by our talented students.",
    link: "#",
  },
  {
    id: 6,
    title: "Sports Update: Champions of the Year",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Highlights from our sports teams' victories and memorable moments this season.",
    link: "#",
  },
];

const Magazine = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 pb-12">
      <div className="bg-green-100 border-b-4 border-green-400 py-8 px-4 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-2 uppercase tracking-wide">Z.M. International School Magazine</h2>
        <p className="text-lg text-green-700 mb-4">Inspiring Stories, Achievements, and School Life</p>
        <a href="#" className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded shadow hover:bg-green-700 transition">Submit Your Story</a>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {magazineArticles.map((article) => (
            <div key={article.id} className="bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
              <a href={article.link} className="block">
                <img
                  className="w-full h-48 object-cover"
                  src={article.image}
                  alt={article.title}
                />
              </a>
              <div className="p-6 flex flex-col flex-1">
                <a href={article.link}>
                  <h5 className="text-gray-900 hover:text-green-600 font-bold text-xl mb-2 transition-colors duration-200">
                    {article.title}
                  </h5>
                </a>
                <p className="text-gray-700 mb-4 flex-1">{article.description}</p>
                <a
                  href={article.link}
                  className="mt-auto inline-block px-5 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition text-sm uppercase tracking-wide"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Magazine;
