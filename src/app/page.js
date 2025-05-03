"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import router for navigation
import { motion } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter(); // Initialize router

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      router.push("/onboarding"); // Redirect to onboarding screen
    }, 3000); // Splash screen visible for 3 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-green-200">
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/chatbot logo.png"
            alt="Chatbot Logo"
            width={150}
            height={150}
          />
        </motion.div>
      ) : null}
    </div>
  );
}
