"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/onboarding1.png",
    title: "Welcome To VITALIS",
    description: "Where You Get Reliable Medical Guidance Anytime, Anywhere.",
  },
  {
    id: 2,
    image: "/onboarding2.png",
    title: "AI-Powered Guidance, Not a Diagnosis",
    description:
      "Our app offers probable insights based on your symptoms. For safety, consult with healthcare professionals for accurate diagnosis and treatment.",
  },
  {
    id: 3,
    image: "/onboarding3.png",
    title: "Skip the Wait, Get Answers Now!",
    description:
      "Receive immediate medical guidance without long queues or unreliable online searches.",
  },
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  // Kapag lumampas sa huling slide, lumipat sa login
  useEffect(() => {
    if (currentIndex >= slides.length) {
      router.push("/login");
    }
  }, [currentIndex, router]);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleSkip = () => {
    router.push("/login"); // Skip onboarding
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#CFFFE5] relative px-5">
      
      {/* Curved Light Blue Background */}
    <div className="absolute top-0 left-0 w-full h-[50%] bg-[#B0E0E6] rounded-b-[20%] z-0"></div>

      {/* Skip Button */}
      <button onClick={handleSkip} className="absolute top-5 right-5 text-gray-600 z-20">
        Skip
      </button>

      {/* Slide Content */}
      {currentIndex < slides.length && (
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <Image
            src={slides[currentIndex].image}
            alt="Onboarding"
            width={400}
            height={400}
            className="relative z-10 mt-[-240px]"
          />
          <h2 className="text-lg font-bold mt-20 text-black">
            {slides[currentIndex].title}
          </h2>
          <p className="text-gray-600">{slides[currentIndex].description}</p>
        </motion.div>
      )}

      {/* Indicators */}
      <div className="flex mt-10 space-x-2 absolute bottom-26">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Next Button */}
      {currentIndex < slides.length && (
        <button
          onClick={handleNext}
          className="absolute bottom-24 right-5 bg-blue-500 text-white p-2 rounded-full"
        >
          →
        </button>
      )}
    </div>
  );
}
