import React, { useState, useRef } from "react";
import CommonHeading from "@/app/utils/CommonHeading";
import BlogCard from "./BlogCard";
import Modals from "@/app/utils/Modals";
import BlogContent from "./blogDetail/BlogContent";
import BlogImage from "./blogDetail/BlogImage";
const blogData = [
  {
    image: "/assets/blog/blog_1.jpg",
    heading: "How Modern Flats in Noida Are Adopting Sustainable Living?",
  },
  {
    image: "/assets/blog/blog_1.jpg",
    heading: "Top Tips for First-Time Home Buyers in 2025",
  },
  {
    image: "/assets/blog/blog_1.jpg",
    heading: "The Future of Urban Living: Smart Homes",
  },
];

export default function BlogContainer() {
  const [hoveredSlide, setHoveredSlide] = useState(null);

  const scrollableRef = useRef(null);

  const close = () => setHoveredSlide(null);

  return (
    <div className="container   lg:pb-0 pb-[60px] lg:pt-0 !pt-[40px] parallax" >
      <CommonHeading
        customClass="fade-up"
        heading="The Arqis Edit"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-20 mt-[35px]">
        {blogData.map((blog, index) => (
          <div key={index} className="col-span-1 cursor-pointer">
            <BlogCard
              image={blog.image}
              heading={blog.heading}
              index={index}
              setHoveredSlide={setHoveredSlide}
         
            />
          </div>
        ))}
      </div>

          <Modals
            scrollableRef={scrollableRef}
            SelectedLogo={<BlogImage selectedImage={blogData[hoveredSlide]?.image} />}
            MediaContent={<BlogContent />}
            hoveredSlide={hoveredSlide}
            onClose={close}
            
            centerDragVia={true}
          />
     
    </div>
  );
}
