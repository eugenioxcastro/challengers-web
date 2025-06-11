import { MainLayout } from "@/components/templates/MainLayout";

export default function PrivacyPolicy() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-white/10">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Privacy Policy
          </h1>
          
          <div className="text-sm text-white/60 mb-8">
            Last updated: May 22, 2025
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/80">
              Welcome to Challenger! We are committed to protecting your privacy and ensuring a
              safe and enjoyable experience in our community-driven app. This Privacy Policy
              explains how we collect, use, protect, and share your personal information when you use
              our application.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-white/80">We collect the following types of information to provide and improve our services:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li><span className="font-medium text-white">Account Information:</span> Your name, email address, age, and other details
                provided during registration. We require users to confirm they are at least 16
                years old to comply with our ethical standards.</li>
              <li><span className="font-medium text-white">User-Generated Content:</span> Photos, descriptions, metrics, and other content
                related to the challenges you create or participate in.</li>
              <li><span className="font-medium text-white">Usage Data:</span> Information about how you interact with the app, such as challenge
                participation, app navigation, and engagement with features like leaderboards.</li>
              <li><span className="font-medium text-white">Device Data:</span> Information about your device, including operating system, device
                type, and settings, to optimize app performance.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-white/80">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Provide and enhance the app's functionality, including enabling challenge
                creation and participation.</li>
              <li>Display challenge progress, leaderboards, and community interactions.</li>
              <li>Send notifications about app activity, such as challenge updates or community
                interactions.</li>
              <li>Ensure the safety and integrity of our platform by monitoring content and
                preventing fraud.</li>
              <li>Respond to user reports about inappropriate content or behavior within 24 hours.</li>
              <li>Improve the app through analytics and performance insights.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-white/80">We do not share personal information with third parties, except in the following cases:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li><span className="font-medium text-white">Service Providers:</span> We work with external service providers for hosting, storage, and data analysis.</li>
              <li><span className="font-medium text-white">Legal Requirements:</span> We may disclose information if required by law or to protect our rights.</li>
              <li><span className="font-medium text-white">Community Interactions:</span> Certain information, such as challenge progress and leaderboards, may be visible to other users.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Security Measures</h2>
            <p className="text-white/80">We take reasonable measures to protect personal information from unauthorized access, alteration, and loss.</p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. User Rights</h2>
            <p className="text-white/80">Users can:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Access, correct, or delete their information from the app's settings.</li>
              <li>Request complete account and data deletion by emailing <a href="mailto:challengercontacto@gmail.com" className="text-[#ffcb30] hover:text-[#ffcb30]/80"> challengercontacto@gmail.com</a>.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Policy Updates</h2>
            <p className="text-white/80">We may update this policy in the future. We will notify users about significant changes through the app or email.</p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Contact Us</h2>
            <p className="text-white/80">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data
              practices, please contact us at{' '}
              <a 
                href="mailto:challengercontacto@gmail.com" 
                className="text-[#ffcb30] hover:text-[#ffcb30]/80 underline"
              >
                challengercontacto@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 