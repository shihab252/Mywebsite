import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  // Default testimonials
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Emily Johnson",
      rating: 5,
      text: "The service was exceptional! The team went above and beyond to meet our expectations. I couldn't be happier with the results and would highly recommend them to anyone.",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      text: "Great experience overall! The attention to detail was impressive, and the final product was delivered on time. There’s always room for improvement, but I’m very satisfied.",
    },
    {
      id: 3,
      name: "Sarah Thompson",
      rating: 5,
      text: "Absolutely outstanding! Their professionalism, expertise, and dedication to quality are unmatched. This was by far the best experience I’ve had with any company in this field.",
    },
    {
      id: 4,
      name: "David Rodriguez",
      rating: 5,
      text: "I’m beyond impressed with the level of care and effort they put into their work. The communication was seamless, and they delivered exactly what I envisioned. Highly recommended!",
    },
    {
      id: 5,
      name: "Lisa Patel",
      rating: 4,
      text: "The team was great to work with and very responsive to our needs. The project turned out well, though there were minor delays. Still, I would definitely work with them again.",
    },
  ]);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    text: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) {
      alert("Please fill out all fields!");
      return;
    }
    // Add new testimonial
    setTestimonials([
      ...testimonials,
      { ...formData, id: testimonials.length + 1, rating: parseInt(formData.rating) },
    ]);
    // Reset form
    setFormData({ name: "", rating: 5, text: "" });
  };

  return (
    <div id="testimonials" className="py-10 bg-gray-100 relative">
      <h1 className="text-center text-2xl lg:text-4xl font-bold">
        What Our Customers Say
      </h1>

      <div className="max-w-6xl mx-auto py-10 px-5">
        {/* Swiper Section */}
        <Swiper
          style={{
            "--swiper-pagination-color": "#EF4444",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4 h-64"
                style={{ minHeight: "16rem" }}
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fill={i < item.rating ? "#FFD700" : "#D1D5DB"} // Gold for filled stars, gray for empty stars
                    />
                  ))}
                </div>
                <p className="py-3 flex-grow">{item.text}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-red-500 text-lg">
                      {item.name}
                    </h3>
                    <p className="text-sm mt-1">Verified Customer</p>
                  </div>
                  <Quote className="text-red-400" />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination my-10 gap-1 relative"></div>
        </Swiper>

        {/* Form Section */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg"
              required
            />
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg"
            >
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
            <textarea
              name="text"
              placeholder="Your Testimonial"
              value={formData.text}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
