"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { fetchImages } from "./handleAsset";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import loaderGif from "../../../public/loader.gif";
import "./page.css";

const HeroSection = () => {
  const [images, setImages] = useState([]);
  const [imageInfo, setImageInfo] = useState([]); // State for additional image info
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageList = await fetchImages();
        setImages(imageList);
        const infoList = [
            "Social Awareness",
            "Society Awareness",
            "Women Empowerment",
            "Culture and Community",
        ];
        
        setImageInfo(infoList); 
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="hero">
      <div className="hero-in">
        {loading ? (
          <div className="global-loader">
            <Image
              src={loaderGif}
              alt="Loading"
              width={100}
              height={100}
              style={{ objectFit: "cover", margin: "auto" }}
            />
          </div>
        ) : (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="hero-in-slider">
                  <img
                    className="home-hero-images"
                    src={image.url}
                    alt={`Image ${index}`}
                  />
                  <div className="swiper-description">
                    <p>{image.description}</p>
                  </div>
                  {/* Add the one-liner info from the separate array */}
                  <div className="image-info">
                    <p>{imageInfo[index]}</p> {/* Accessing corresponding info */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
