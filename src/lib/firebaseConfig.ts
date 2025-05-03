import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8-6I_29oNdw5PdHzScfbId_lHN6tvPcM",
  authDomain: "ai-health-chatbot-65c7d.firebaseapp.com",
  projectId: "ai-health-chatbot-65c7d",
  storageBucket: "ai-health-chatbot-65c7d.appspot.com",
  messagingSenderId: "796477113775",
  appId: "1:796477113775:web:482afd8ab5f15aa257db5a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
