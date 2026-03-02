import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-[900px] mx-auto px-8">
          <h1 className="text-4xl font-bold text-[#0A2540] mb-6">Privacy Policy</h1>

          <p className="text-[#425466] leading-relaxed mb-4">
            This Privacy Policy describes how we collect, use, and protect your information when you use our website.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A2540] mt-10 mb-3">Information We Collect</h2>
          <p className="text-[#425466] leading-relaxed mb-4">
            We may collect information you submit through forms (such as your name, email address, and message content) as well as basic
            usage data (such as pages visited and device/browser information).
          </p>

          <h2 className="text-2xl font-semibold text-[#0A2540] mt-10 mb-3">How We Use Information</h2>
          <p className="text-[#425466] leading-relaxed mb-4">
            We use collected information to respond to inquiries, provide services, improve the site experience, and maintain security.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A2540] mt-10 mb-3">Data Sharing</h2>
          <p className="text-[#425466] leading-relaxed mb-4">
            We do not sell your personal information. We may share information with service providers only to operate the website and
            deliver our services, subject to appropriate safeguards.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A2540] mt-10 mb-3">Contact</h2>
          <p className="text-[#425466] leading-relaxed mb-8">
            If you have questions about this policy, please contact us using the information on the website.
          </p>

          <a href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
            Back to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
