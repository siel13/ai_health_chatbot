"use client";

import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { Menu, X, Send, Settings } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { collection, addDoc, getDocs } from "firebase/firestore";
import chatData from "@/lib/chatData";


export default function ChatInterface() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hey, nice to meet you! I'm Chatbot Name, your friendly virtual health assistant. I can help you analyze symptoms, give health tips, and provide general wellness advice. Feel free to ask me anything!",
    },
  ]);
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchChatHistory = async () => {
      if (!user?.uid) return;
  
      try {
        const querySnapshot = await getDocs(collection(db, "users", user.uid, "chats"));
        const history = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setChatHistory(history);
      } catch (error) {
        console.error("Failed to fetch chat history:", error);
      }
    };
  
    fetchChatHistory();
  }, [user?.uid]);

  // ✅ Save chat history to localStorage every time it updates
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("Current user:", currentUser);
      setUser(currentUser);
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
        console.log("User data from Firestore:", data); // ITO YUNG DEBUG
        setUserData(data);
      } else {
        console.log("No such document!");
      }
    }
  });
  return () => unsubscribe();
}, []);

const findAnswer = (input) => {
  const lowerInput = input.toLowerCase();
  const match = chatData.find((entry) =>
    lowerInput.includes(entry.question.toLowerCase())
  );

  if (match) {
    const answerText = match.answer.text;
    const citations = match.answer.citations
    .map((cite, index) => `(${index + 1}) ${cite.text} — ${cite.source}`)
    .join("\n");
    return { answer: answerText, citations };
  }

  return { answer: "I'm sorry, I don't understand that yet.", citations: "" };
};

const sendMessage = () => {
  if (input.trim() === "") return;

  // Get bot response based on user input
  const { answer, citations } = findAnswer(input);
  setMessages([
    ...messages,
    { sender: "user", text: input },
    { sender: "bot", 
      text: `${answer}${citations ? `\n\nSources:\n${citations}` : ""}`,
    }, 
  ]);
  setInput("");

  // Optionally, you can also save citations to the message if needed
};


  const handleNewChat = async () => {
    if (messages.length > 1) {
      // Get the title from first user message or fallback
      const titleMessage = messages.find((msg) => msg.sender === "user");
      const title = titleMessage?.text.slice(0, 30) || "Untitled Chat";

      const newChat = {
        title,
        timestamp: new Date(),
        messages: [...messages],
      };

      setChatHistory([...chatHistory, newChat]);

    // ✅ Save to Firestore
    if (user) {
      try {
        await addDoc(collection(db, "users", user.uid, "chats"), newChat);
      } catch (error) {
        console.error("Error saving chat:", error);
      }
    }
  }

    // Reset messages with only the welcome bot message
    setMessages([
      {
        sender: "bot",
        text: "Hey, nice to meet you! I'm Chatbot Name, your friendly virtual health assistant. I can help you analyze symptoms, give health tips, and provide general wellness advice. Feel free to ask me anything!",
      },
    ]);
  };

  return (
    <div className="relative h-screen flex bg-green-100">
      {/* Sidebar */}
      <div
        className={`absolute inset-y-0 left-0 w-64 bg-blue-200 shadow-md p-4 transition-transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="flex justify-between items-center border-b pb-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Image
                src={userData?.avatarUrl || "/profile-icon.png"}
                width={24}
                height={24}
                alt="Profile"
                className="rounded-full"
              />
            </div>
            <h2 className="text-sm font-semibold text-black">
              {userData ? userData.nickname || `${userData.firstName} ${userData.lastName}` : "Loading..."}
            </h2>
          </div>
          <div className="mt-2 flex items-center space-x-3">
            <div className="cursor-pointer" onClick={() => router.push("/settings")}>
             <Settings size={23} className="text-gray-500" />
            </div>
            <button onClick={() => setMenuOpen(false)} className="md:hidden">
             <X size={20} />
            </button>
        </div>
      </div>

       {/* chat history section */}
       <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-600">Chat History</h3>
          <ul className="mt-2 text-sm px-3 py-1 rounded-md w-full bg-[#CFFFE5] text-gray-500 space-y-1">
            {chatHistory.map((chat, index) => (
              <li key={index} className="py-1 truncate">{chat.title}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Chat Screen */}
      <div className="flex flex-col flex-1 h-full">
        <div className="flex items-center justify-between p-4 bg-[#CFFFE5] shadow-md">
          {/* Left section: Menu + Icon + App Name */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-neutral-800"
            >
              <Menu size={24} />
            </button>
            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
              <Image
                src="/chatbot logo.png"
                alt="Chatbot Icon"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
            <h1 className="text-lg font-semibold text-black"> Vitalis</h1>
          </div>

          {/* ✅ New Chat button with save feature */}
          <button onClick={handleNewChat}>
            <Image
              src="/newchat.png"
              width={30}
              height={30}
              alt="New Chat"
            />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => {
            const isFirstBotMessage = msg.sender === "bot" && index === 0;

            return (
              <div
                key={index}
                className={
                  isFirstBotMessage
                    ? "flex flex-col items-center my-5"
                    : `flex items-start space-x-2 my-2 ${
                        msg.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`
                }
              >
                {msg.sender === "bot" &&
                  (isFirstBotMessage ? (
                    <div className="w-full flex justify-center mb-10">
                      <div className="w-40 h-40 bg-blue-200 rounded-full flex items-center justify-center">
                        <Image
                          src="/chatbot logo.png"
                          alt="Chatbot Icon"
                          width={160}
                          height={160}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                      <Image
                        src="/chatbot logo.png"
                        alt="Chatbot Icon"
                        width={24}
                        height={24}
                      />
                    </div>
                  ))}

                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-gray-100 text-black border border-gray-300 shadow"
                      : "bg-gray-100 text-black border border-gray-300 shadow"
                  }`}
                >
                  {msg.sender === "bot" ? (
  <>
    {/* Handle bullet points as a list */}
    {msg.text.split("Sources:")[0].split("\n").map((line, idx) => {
      if (line.trim().startsWith("-")) {
        return (
          <ul key={idx} className="list-disc list-inside text-sm text-black">
            <li>{line.replace(/^-\s*/, "")}</li>
          </ul>
        );
      } else if (line.trim()) {
        return <p key={idx} className="text-sm text-black">{line.trim()}</p>;
      }
      return null;
    })}

    {/* Display sources in pink container if they exist */}
    {msg.text.includes("Sources:") && (
      <div className="mt-2 p-2 bg-pink-100 border-l-4 border-pink-400 rounded text-sm article-container">
        <p className="font-semibold text-pink-800 mb-1">Sources:</p>
        <ul className="list-decimal list-inside text-pink-900">
          {msg.text
            .split("Sources:")[1]
            .trim()
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((cite, idx) => (
              <li key={idx}>{cite}</li>
            ))}
        </ul>
      </div>
    )}
  </>
) : (
  // for user messages
  msg.text.split("\n").map((line, idx) => <p key={idx}>{line}</p>)
)}

                </div>
              </div>
            );
          })}
        </div>
        

        {/* Input Box */}
        <div className="p-4 bg-white flex items-center">
          <input
            type="text"
            placeholder="Message..."
            className="flex-1 p-2 border rounded-lg text-black"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {input.trim() !== "" && (
            <button
              onClick={sendMessage}
              className="ml-2 text-gray-500 hover: text-gray-500"
            >
              <Send size={28} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

