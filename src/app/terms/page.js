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
        <h1 className="text-2xl font-bold">Terms of Service</h1>
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
            Welcome to Vitalis, an AI-driven virtual health assistant designed to provide health-related guidance and symptom analysis. By creating an account and using our services, you agree to the following Terms of Service. Please read them carefully before proceeding.
          </p>
        </div>

        {/* Acceptance of Terms */}
        <div>
          <h2 className="font-semibold">Acceptance of Terms</h2>
          <p>
            By accessing or using Vitalis, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, please do not use our service.
          </p>
        </div>

        {/* Eligibility */}
        <div>
          <h2 className="font-semibold">Eligibility</h2>
          <p>
            To use our services, you must be at least 13 years old. If you are under 18, you must obtain consent from a parent or legal guardian. You are also required to provide accurate and complete information during registration and ensure that your account is used solely by you and not shared with others.
          </p>
        </div>

        {/* Account Registration and Security */}
        <div>
          <h2 className="font-semibold">Account Registration and Security</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials. Any unauthorized use of your account should be reported immediately. We reserve the right to suspend or terminate accounts found in violation of these terms, particularly in cases of fraudulent or harmful activities.
          </p>
        </div>

        {/* Use of Service */}
        <div>
          <h2 className="font-semibold">Use of Service</h2>
          <p>
          You agree to use Vitalis responsibly and ethically. When using our services, you must not:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Provide false or misleading information.</li>
            <li>Attempt to hack, disrupt, or exploit the system.</li>
            <li>Use the chatbot for unauthorized purposes, including medical emergencies or illegal activities.</li>
          </ul>
        </div>

        {/* Health Disclaimer */}
        <div>
          <h2 className="font-semibold">Health Disclaimer</h2>
          <p>
          Vitalis is not a licensed medical professional and does not provide medical diagnosis or treatment. Any health-related information provided by the chatbot is for informational purposes only and should not be considered a substitute for professional medical advice. Always consult a licensed healthcare provider for serious health concerns.
          </p>
        </div>

        {/* Privacy and Data Handling */}
        <div>
          <h2 className="font-semibold">Privacy and Data Handling</h2>
          <p>
          Your privacy is important to us. Personal data collected during your use of the platform will be handled in accordance with our Privacy Policy. Non-personal data may be collected to improve the performance and functionality of the chatbot. Personal health information will not be shared with third parties without your explicit consent unless required by law.
          </p>
        </div>

        {/* Changes to Terms */}
        <div>
          <h2 className="font-semibold">Changes to Terms</h2>
          <p>
          We reserve the right to modify these Terms of Service at any time. Significant changes will be communicated through email or in-app notifications. Your continued use of the service after updates indicates acceptance of the revised terms.
          </p>
        </div>

        {/* Account Suspension or Termination */}
        <div>
          <h2 className="font-semibold">Account Suspension or Termination</h2>
          <p>
          We may suspend or terminate your account if you violate these terms, engage in fraudulent or harmful activities, or if required by law or security concerns.
          </p>
        </div>

        {/* Content and Service Limitations */}
        <div>
          <h2 className="font-semibold">Content and Service Limitations</h2>
          <p>
          By using our services, you understand and agree that:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>The chatbot&apos;s output may not always be accurate or reliable.</li>
            <li>We do not guarantee uninterrupted service availability.</li>
            <li>The chatbot should not be used for urgent medical conditions.</li>
          </ul>
        </div>

        
        {/* Contact Us */}
        <div>
          <h2 className="font-semibold">Contact Us</h2>
          <p>
          For any questions or concerns regarding these Terms of Service, please contact us at:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>[Contact Information]</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
