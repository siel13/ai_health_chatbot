"use client";

import { useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ArrowLeft, User, LogOut } from "lucide-react";
import { auth, db } from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";


export default function SettingsPage() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const auth = getAuth();
    await signOut(auth);
    router.push("/"); // Redirect to home or login
  };

  return (
    <div className="min-h-screen bg-[#B5E3E3] p-4 text-black">
      {/* Header */}
      <div className="flex items-center space-x-2 border-white pb-2">
        <button onClick={() => router.back()}>
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-semibold">Settings</h1>
      </div>

      {/* Profile */}
      <div className="mt-6 flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full overflow-hidden">
       <Image
          src={userData?.avatarUrl || "/profile-icon.png"}
          width={40}
          height={40}
          alt="Avatar"
          className="rounded-full"
        />
      </div>
        <p className="text-base font-medium">
          {user ? user.displayName || "User" : "Loading..."}
        </p>
      </div>



      {/* Edit Profile */}
      <div
        className="mt-4 bg-green-100 px-4 py-2 rounded-md flex items-center space-x-2 cursor-pointer hover:bg-green-200 transition"
        onClick={() => router.push("/edit-profile")}
      >
        <User size={18} />
        <span className="text-sm font-medium">Edit Profile</span>
      </div>

      {/* Sign Out */}
      <div
        className="mt-6 flex items-center space-x-2 text-red-500 cursor-pointer hover:underline"
        onClick={handleSignOut}
      >
        <LogOut size={18} />
        <span className="text-sm font-medium">Sign out</span>
      </div>
    </div>
  );
}

