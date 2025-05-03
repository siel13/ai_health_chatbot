"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig"; 

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [unverifiedUser, setUnverifiedUser] = useState(null);
  const [resendMessage, setResendMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
       await auth.signOut(); // Sign them out
      setUnverifiedUser(user);
      setError("Please verify your email before logging in.");
      setLoading(false);
      return; // Stop here
    }

      router.push("/chat"); // Redirect to home screen after successful login
    } catch (err) {
      setError("Invalid email or password.");
    }

    setLoading(false);
  };

  const handleResendVerification = async () => {
    if (unverifiedUser) {
      try {
        await sendEmailVerification(unverifiedUser);
        setResendMessage("Verification email sent! Please check your inbox.");
      } catch (error) {
        console.error(error);
        setResendMessage("Failed to resend verification email. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#CFFFE5] relative overflow-hidden px-6 pt-6">
      {/* Rounded Top Background */}
       <div className="absolute top-0 left-0 w-full h-[45%] bg-[#B0E0E6] rounded-b-[20%] z-0"></div>
      {/* Image and Welcome */}
      <div className="relative z-10 mt-2 flex flex-row items-center justify-center gap-0">
  <h1 className="text-2xl font-bold text-black ml-15">Welcome back!</h1>
  <img src="https://i.imgur.com/BwKqZUJ.png" alt="Chatbot mascot" className="w-40 h-40" />
</div>

      {/* Login Card/Form */}
      <div className="relative z-10 w-full max-w-xs mt-2">
        

        <h2 className="text-2xl font-bold text-black mb-5">Login</h2>
        <form onSubmit={handleLogin} className="bg-transparent">

          <input
            type="email"
            placeholder="email@domain.com"
            className="mb-3 px-3 py-2 rounded-md w-full bg-white text-black placeholder-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-3 px-3 py-2 border rounded-md w-full bg-white text-black placeholder-gray-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-md"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Continue"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-black">
          Don’t have an account?{" "}
          <a href="/registration" className="font-semibold underline">
            Create account
          </a>
        </p>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        {unverifiedUser && (
          <div className="text-center mb-3">
            <button
              onClick={handleResendVerification}
              className="text-sm text-blue-600 underline"
            >
              Resend verification email
            </button>
            {resendMessage && <p className="text-green-600 mt-1">{resendMessage}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
