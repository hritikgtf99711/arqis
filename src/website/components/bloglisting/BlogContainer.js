"use client"
import React, { useState, useRef, useEffect } from "react";
import CommonHeading from '@/website/utils/CommonHeading'
import BlogCard from "./BlogCard";
import BlogDetailContainer from "./blogDetail/BlogDetailContainer";
import gsap from "gsap";

export default function BlogContainer({blogsData}) {
  const [openModal, setOpenModal] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [selectedBlogData, setSelectedBlogData] = useState();
  const modalRef = useRef(null);

  const openBlogModal = (blog) => {
    document.querySelector("header").classList.add("hidden");
    document.querySelector("body").classList.add("active");
    setShouldRender(true);
    setSelectedBlogData(blog);
    setOpenModal(true);
  };

  const closeBlogModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (openModal && shouldRender && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, x: "100%" },
        { opacity: 1, x: 0, duration: 1, ease: "ease.out" }
      );
    } else if (!openModal && shouldRender && modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        x: "100%",
        duration: 0.5,
        ease: "ease.in",
        onComplete: () => {
          document.querySelector("header").classList.remove("hidden");
          document.querySelector("body").classList.remove("active");
          setShouldRender(false);
        },
      });
    }
  }, [openModal, shouldRender]);

  return (
    <>
      <div 
        className="2xl:max-w-[1520px] xl:max-w-[1280px] mx-[auto] lg:pb-0 pb-[60px] lg:pt-0 !pt-[40px] parallax"
        style={{ display: shouldRender ? "none" : "block" }}
      >
        <CommonHeading customClass="fade-up" heading="The Arqis Edit" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-20 mt-[35px] lg:pb-0 pb-[60px]">
          {blogsData.map((blog, index) => (
            <div key={index} className="col-span-1 cursor-pointer">
              <BlogCard
                image={blog.image}
                heading={blog.title}
                index={index}
                onClick={() => openBlogModal(blog)}
              />
            </div>
          ))}
          <ul className="lg:hidden flex justify-end gap-2">
            <li>
              <a href="">1 |</a>
            </li>
            <li>
              <a href="">2 |</a>
            </li>
            <li>
              <a href="">3 |</a>
            </li>
            <li>
              <a href="">4 </a>
            </li>
          </ul>
        </div>
      </div>

      {shouldRender && (
        <div ref={modalRef} className="w-[100%]">
          <BlogDetailContainer
            isOpen={openModal}
            blogData={selectedBlogData}
            setOpenModal={setOpenModal}
            onClose={closeBlogModal}
          />
        </div>
      )}
    </>
  );
}