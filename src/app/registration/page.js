"use client";

import { useState } from "react";
import { auth, db } from "@/lib/firebaseConfig"; // make sure Firestore is exported from firebaseConfig
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      const strength = getPasswordStrength(value);
      setPasswordStrength(strength);
    }
  };

  const getPasswordStrength = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;

    if (isLongEnough && hasUpper && hasNumber && hasSymbol) return "Strong";
    if (password.length >= 6) return "Weak";
    return "Too short";
  };

  const isFormValid = () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < 8 || !hasUpper || !hasNumber || !hasSymbol) {
      setError("Password must be at least 8 characters long and include an uppercase letter, a number, and a symbol.");
      return false;
    }

    return true;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isFormValid()) return;

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Optionally save user details to Firestore
      const user = userCredential.user;
      await sendEmailVerification(user);

      console.log("Before saving to Firestore");
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        createdAt: new Date(),
      });
      console.log("After saving to Firestore");

      alert("Registration successful! Please check your email to verify your account.");
      router.push("/login");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-200 via-green-100 to-blue-100 px-6">
      <div className="w-full max-w-md mx-auto relative">
        {/* background design */}
        <div className="absolute -top-30 -left-10 w-110 h-[48%] bg-[#B0E0E6] rounded-b-[20%] z-2"></div>

        {/* back button */}
        <div className="flex items-start pt-6 pb-2 relative z-30">
          <button onClick={() => router.push("/login")} className="top-0 text-black">
            <ArrowLeft size={24} />
          </button>
        </div>

        {/* logo */}
        <div className="relative z-10 -mt-12 flex items-center justify-center">
          <img
            src="/vitalis.png"
            alt="Vitalis"
            className="w-100 h-60 md:w-24 md:h-24 object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-black mt-6">Create an account</h2>
        <p className="text-lg text-center text-gray-600">Fill out the form to create your account.</p>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <form className="mt-6 relative z-10" onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="inputStyle" />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="inputStyle" />
          <input type="email" name="email" placeholder="email@domain.com" onChange={handleChange} className="inputStyle" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="inputStyle" />
          {formData.password && (
            <p className={`text-sm ${passwordStrength === "Strong" ? "text-green-600" : "text-red-500"}`}>
              Password strength: {passwordStrength}
            </p>
          )}
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="inputStyle" />

          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-lg font-semibold mt-2"
            disabled={loading}
          >
            {loading ? "Registering..." : "Continue"}
          </button>
        </form>

        <p className="text-xs text-gray-600 text-center mt-4 relative z-10">
          By clicking continue, you agree to our
          <a href="/terms" className="text-black font-medium"> Terms of Service </a>
          and
          <a href="/privacy" className="text-black font-medium"> Privacy Policy</a>.
        </p>
      </div>

      <style jsx>{`
        .inputStyle {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 0.75rem;
          background-color: white;
          color: black;
          border-radius: 0.75rem;
          border: 1px solid #ccc;
          box-shadow: inset 0 2px 6px rgba(128, 128, 128, 0.4);
          outline: none;
        }
        .inputStyle:focus {
          border-color: #68d391;
          box-shadow: 0 0 0 2px #9ae6b4;
        }
      `}</style>
    </div>
  );
}
