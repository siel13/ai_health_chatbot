'use client'

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TermsOfService() {
    const router = useRouter();

  return (
    <div className="min-h-screen bg-green-100 px-6 py-8 text-sm text-gray-800">
    {/* Header */}
    <div>
        <button onClick={() => router.back()} className="mr-15">
          <ArrowLeft className="text-gray-700" />
        </button>
      <div className="mt-2 flex justify-center">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
      </div>
    </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 text-sm">
        

        {/* Welcome */}
        </div>

      {/* Last Update */}
      <p className="text-xs text-gray-600 mb-4">Last Update:</p>

      {/* Sections */}
      <div className="space-y-6">
        {/* Welcome */}
        <div>
          <p>
            Welcome to Vitalis! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when using our AI-Driven Chatbot for Virtual Health Assistance and Symptom Analysis.
          </p>
        </div>

        {/* Information We Collect */}
        <div>
          <h2 className="font-semibold">Information We Collect</h2>
          <p>
          We only collect the necessary information to provide and improve our services. The types of data we collect include:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>User Input Data: When you interact with our chatbot, we collect the text input you provide, including health-related inquiries and symptoms.</li>
            <li>Account Information (if applicable): If you create an account, we collect basic details such as your name, email address, and password.</li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div>
          <h2 className="font-semibold">How We Use Your Information</h2>
          <p>
          We use the collected information to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Provide accurate health-related responses based on chatbot interactions.</li>
            <li>Improve the AI model and enhance user experience.</li>
            <li>Ensure the security and reliability of our services.</li>
          </ul>
        </div>

        {/* Data Security */}
        <div>
          <h2 className="font-semibold">Data Security</h2>
          <p>
          We implement appropriate security measures to protect your data. Your information is stored securely and is not shared with third parties without your consent, except as required by law.
          </p>
        </div>

        {/* Third-Party Services */}
        <div>
          <h2 className="font-semibold">Third-Party Services</h2>
          <p>
          Our app does not currently integrate with third-party tracking services or external advertisers.
          </p>
        </div>

        {/* Your Rights */}
        <div>
          <h2 className="font-semibold">Your Rights</h2>
          <p>
          You have the right to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Access, update, or delete your data.</li>
            <li>Opt-out of data collection features in future updates.</li>
          </ul>
          <p>
          For any requests, contact us at [Insert Contact Email]
          </p>
        </div>

        {/* Changes to This Policy */}
        <div>
          <h2 className="font-semibold">Changes to This Policy</h2>
          <p>
          We may update this Privacy Policy from time to time. Any changes will be communicated through app updates or notifications.
          </p>
        </div>
      </div>
    </div>
  );
}
