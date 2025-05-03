"use client";

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

export default function EditProfile() {
  const [user, setUser] = useState(null);
  const [nickname, setNickname] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const router = useRouter();

  const avatarList = Array.from({ length: 10 }, (_, i) => `/avatars/avatar-${i + 1}.png`);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
    if (currentUser) {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.avatarUrl) {
          setSelectedAvatar(data.avatarUrl);
        }
        if (data.nickname) {
          setNickname(data.nickname);
        }
      }
    }
  });
  return () => unsubscribe();
}, []);

// 🖱 Handle avatar selection + save to Firestore
const handleAvatarSelect = async (url) => {
  setSelectedAvatar(url);
  if (user) {
    const docRef = doc(db, "users", user.uid);
    await updateDoc(docRef, {
      avatarUrl: url,
    });
  }
};

const handleSaveProfile = async () => {
  if (user) {
    const docRef = doc(db, "users", user.uid);
    await updateDoc(docRef, {
      nickname,
      avatarUrl: selectedAvatar,
    });

    // Optional: also update Firebase Auth profile displayName
    await updateProfile(user, {
      displayName: nickname,
    });

    alert("Profile updated!");
  }
};

return (
  <div className="min-h-screen bg-green-100 text-black p-4">
    {/* Header */}
    <div className="flex items-center justify-center p-4 border-b border-gray-300 relative">
      <button onClick={() => router.back()} className="absolute left-2">
        <ArrowLeft size={20} />
      </button>
      <h2 className="text-lg font-semibold text-gray-800">Profile</h2>
    </div>

    {/* Profile Avatar Preview */}
    <div className="flex justify-center mb-4 p-6">
      <div className="w-40 h-40 bg-gray-200 rounded-full overflow-hidden border-4 border-blue-400">
        <Image
          src={selectedAvatar || "/profile-icon.png"}
          alt="Selected Avatar"
          width={160}
          height={160}
          className="object-cover"
        />
      </div>
    </div>

    {/* Nickname */}
    <div className="mb-6 px-4">
      <label className="text-sm font-medium">Nickname</label>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        className="mt-1 w-full p-2 rounded-md border border-gray-300 bg-white text-gray-700"
      />
    </div>

    {/* Avatar Selection Grid */}
    <div className="px-4">
      <h3 className="text-sm font-medium mb-2">Choose your Avatar</h3>
      <div className="grid grid-cols-5 gap-4">
        {avatarList.map((avatar, index) => (
          <div
            key={index}
            className={`cursor-pointer rounded-full overflow-hidden border-4 ${
              selectedAvatar === avatar ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => handleAvatarSelect(avatar)}
          >
            <Image src={avatar} alt={`Avatar ${index + 1}`} width={80} height={80} />
          </div>
        ))}
      </div>
    </div>

    {/* Save Button */}
    <div className="px-4 mt-6">
        <button
          onClick={handleSaveProfile}
          className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold"
        >
          Save Changes
        </button>
      </div>
  </div>
);
}