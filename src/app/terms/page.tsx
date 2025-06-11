import { MainLayout } from "@/components/templates/MainLayout";

export default function Terms() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-white/10">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Terms and Conditions
          </h1>
          
          <div className="text-sm text-white/60 mb-8">
            Last updated: May 22, 2025
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/80">
              Welcome to Challengers, a platform that allows users to create and participate in
              challenges with friends and build a community around activities such as exercise,
              reading, and more. By accessing or using our application ("App"), you agree to be bound
              by these Terms and Conditions ("Terms"). If you do not agree with these Terms, please
              do not use the App.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-white/80">
              These Terms govern your use of the Challengers App and any related services. By
              creating an account, accessing, or using the App, you confirm that you have read,
              understood, and agree to these Terms and our Privacy Policy. You also agree to
              our zero-tolerance policy for objectionable content and abusive behavior, as
              outlined in Section 5. We may update these Terms from time to time, and we will notify
              you of significant changes through the App or via email. Continued use of the App after
              such changes constitutes your acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Eligibility</h2>
            <p className="text-white/80">To use the App, you must:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Be at least 16 years old. We require age verification during registration to ensure
                compliance with our ethical standards.</li>
              <li>Provide accurate and complete information during account creation.</li>
              <li>Not use the App if you are barred from doing so under applicable laws.</li>
            </ul>
            <p className="text-white/80 mt-4">
              If we discover that a user is under 16, their account may be suspended or
              terminated without notice.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Account Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li><span className="font-medium text-white">Account Creation:</span> You must provide accurate information when creating an
                account, including your name, email address, and age.</li>
              <li><span className="font-medium text-white">Account Security:</span> You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your account. Notify us
                immediately at challengercontacto@gmail.com if you suspect unauthorized use of your
                account.</li>
              <li><span className="font-medium text-white">Account Deletion:</span> You may request the permanent deletion of your account by
                contacting us at challengercontacto@gmail.com. Once deleted, your data cannot be
                recovered.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Use of the App</h2>
            <p className="text-white/80">You agree to use the App in accordance with these Terms and all applicable laws.
            Specifically, you agree:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>To create and participate in challenges in a respectful and lawful manner.</li>
              <li>Not to post or share content that is vulgar, offensive, defamatory, discriminatory,
                or otherwise violates our Community Guidelines (see Section 5).</li>
              <li>Not to engage in any activity that disrupts, damages, or interferes with the App's
                functionality or security.</li>
              <li>Not to use the App for commercial purposes without our prior written consent.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Community Guidelines and Content Moderation</h2>
            <p className="text-white/80">
              We are committed to maintaining a safe, respectful, and positive community for all users.
              We have a zero-tolerance policy for objectionable content (e.g., vulgar, offensive,
              defamatory, discriminatory, or unlawful material) and abusive users. To achieve
              this:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li><span className="font-medium text-white">Content Filtering:</span> All user-generated content (e.g., photos, descriptions,
                comments) is subject to automated and manual filtering to detect and prevent
                objectionable material.</li>
              <li><span className="font-medium text-white">Reporting Objectionable Content:</span> You may report content or users that violate
                these Terms or our Community Guidelines using the in-app reporting tools. We
                will review and act on all reports within 24 hours, including removing
                objectionable content and suspending or terminating the accounts of users who
                post such content.</li>
              <li><span className="font-medium text-white">Blocking Abusive Users:</span> You may block any user engaging in abusive or
                inappropriate behavior using the in-app blocking feature, which prevents further
                interaction from that user.</li>
              <li><span className="font-medium text-white">Content and Account Removal:</span> We reserve the right to remove any content or
                suspend/terminate accounts that violate these Terms or our Community
                Guidelines, including any behavior deemed abusive or harmful to the community.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li><span className="font-medium text-white">Your Content:</span> By posting content on the App, you grant us a non-exclusive,
                worldwide, royalty-free license to use, display, and distribute your content solely
                for the purpose of operating the App (e.g., displaying challenge photos, progress,
                or leaderboards). You retain ownership of your content.</li>
              <li><span className="font-medium text-white">App Content:</span> All App content, including text, graphics, logos, and software, is
                protected by intellectual property laws. You may not copy, modify, or distribute
                this content without prior written permission.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Prohibited Conduct</h2>
            <p className="text-white/80">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Post or share content that is unlawful, harmful, or violates the rights of others.</li>
              <li>Post objectionable content or engage in abusive behavior, including but not
                limited to harassment, bullying, or posting vulgar, offensive, or
                discriminatory material.</li>
              <li>Use automated tools (e.g., bots, scrapers) to access or collect data from the App.</li>
              <li>Attempt to hack, disrupt, or bypass the App's security measures.</li>
              <li>Impersonate another person or misrepresent your affiliation with any entity.</li>
              <li>Engage in harassment, bullying, or other harmful behavior toward other users.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Termination</h2>
            <p className="text-white/80">
              We may suspend or terminate your account or access to the App at our discretion,
              including for violations of these Terms, fraudulent activity, or behavior that harms the App
              or its users. You may terminate your account at any time by contacting us at
              challengercontacto@gmail.com.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Disclaimers</h2>
            <p className="text-white/80">
              The App is provided "as is" without warranties of any kind, whether express or implied,
              including warranties of merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
            <p className="text-white/80 mt-4">
              We do not guarantee that the App will be uninterrupted, error-free, or free from viruses
              or other harmful components.
            </p>
            <p className="text-white/80 mt-4">
              You use the App at your own risk, and we are not responsible for any injuries, losses, or
              damages resulting from your participation in challenges or use of the App.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80 mt-4">
              <li><span className="font-medium text-white">Explicit Content:</span> We strive to filter user-generated content to prevent explicit,
                offensive, or inappropriate material. However, we cannot guarantee that all
                content will be free from explicit elements. We are not responsible for any explicit
                content that may be viewed by users, including those under 16 years old, who
                access the App in violation of our age requirement.</li>
              <li><span className="font-medium text-white">Dangerous Challenges:</span> Users are solely responsible for the challenges they
                create or participate in. We are not liable for any injuries, damages, or losses
                resulting from participation in challenges, including those that may be considered
                dangerous or unsafe. You participate in challenges at your own risk and should
                exercise caution and judgment when engaging in any activities through the App.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Limitation of Liability</h2>
            <p className="text-white/80">
              To the fullest extent permitted by law, the operators of the App shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use of the App,
              including but not limited to loss of data, profits, or goodwill.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Changes to These Terms</h2>
            <p className="text-white/80">
              We may update these Terms to reflect changes in our practices or legal requirements.
              We will notify you of significant changes through the App or via email. Your continued
              use of the App after such changes constitutes your acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">12. Contact Us</h2>
            <p className="text-white/80">
              For questions or concerns about these Terms, please contact us at{' '}
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