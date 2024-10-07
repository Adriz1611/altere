"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { About } from "@/app/components/About";
import FoodRecyclingSlider from "@/app/components/Chain";
import Cursor from "./components/Cursor";
import MarqueeSection from "@/app/components/Marquee";
import ContactUs from "./components/ContactUS";

// Define motion variants for animations
const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 200 }, // Start off-screen to the right
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

export default function Home() {
  return (
    <main className="py-3 overflow-hidden">
      <Cursor />
      <section
        id="home"
        className="pt-20 flex flex-col lg:flex-row justify-between items-center px-8 md:px-20 lg:px-60 py-20 relative h-screen mt-4 md:mt-8"
      >
        {/* Apply motion to text */}
        <motion.h1
          className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold w-full md:w-3/4 lg:w-2/4 font-heading leading-tight md:leading-[75px] lg:leading-[89px] text-black"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          It&apos;s all about<br />
          Circularity 
        </motion.h1>

        {/* Animate the background image to enter from the right */}
        <motion.div
          className="absolute inset-0 z-[-1]"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            src="/hero-bg.jpg"
            alt="Waste Management Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="object-cover"
          />
        </motion.div>
      </section>

      <section id="about" className="pt-20 min-h-screen flex flex-col items-center w-full justify-center">
        <About />
      </section>

      <section id="food-recycling" className="pt-20">
        <FoodRecyclingSlider />
      </section>

      <section id="impact" className="pt-20">
        <MarqueeSection />
      </section>

      <section id="contact" className="pt-20">
        <ContactUs />
      </section>
    </main>
  );
}
