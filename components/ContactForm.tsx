"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { AlertCircle, CheckCircle } from "lucide-react";

const GoogleReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ContactForm() {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [captchaKey, setCaptchaKey] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!siteKey) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured yet. Please email contact@vanshiv.com."
      );
      return;
    }

    if (!recaptchaToken) {
      setStatus("error");
      setErrorMessage("Please complete the reCAPTCHA verification.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setRecaptchaToken(null);
      setCaptchaKey((k) => k + 1);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
      setRecaptchaToken(null);
      setCaptchaKey((k) => k + 1);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <div className="relative z-10 flex flex-col items-center justify-center py-10 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-green-400" />
        <h3 className="mb-2 text-xl font-bold text-white">Message sent</h3>
        <p className="max-w-sm text-sm text-gray-400 font-secondary">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-[10px] tracking-wider text-gray-500 uppercase"
          >
            First Name <span className="text-purple-400">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className="w-full border-b border-gray-700 bg-transparent py-2 text-sm text-gray-300 transition-colors outline-none focus:border-purple-500"
            placeholder="John"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block text-[10px] tracking-wider text-gray-500 uppercase"
          >
            Last Name <span className="text-purple-400">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="w-full border-b border-gray-700 bg-transparent py-2 text-sm text-gray-300 transition-colors outline-none focus:border-purple-500"
            placeholder="Doe"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[10px] tracking-wider text-gray-500 uppercase"
          >
            Email Address <span className="text-purple-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full border-b border-gray-700 bg-transparent py-2 text-sm text-gray-300 transition-colors outline-none focus:border-purple-500"
            placeholder="john@example.com"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-[10px] tracking-wider text-gray-500 uppercase"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full border-b border-gray-700 bg-transparent py-2 text-sm text-gray-300 transition-colors outline-none focus:border-purple-500"
            placeholder="+1 (555) 000-0000"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-[10px] tracking-wider text-gray-500 uppercase"
        >
          Message <span className="text-purple-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="w-full resize-none border-b border-gray-700 bg-transparent py-2 text-sm text-gray-300 transition-colors outline-none focus:border-purple-500"
          placeholder="Tell us about your project..."
          disabled={isSubmitting}
        />
      </div>

      {siteKey ? (
        <div className="flex justify-start overflow-x-auto">
          <GoogleReCAPTCHA
            key={captchaKey}
            sitekey={siteKey}
            theme="dark"
            onChange={(token) => setRecaptchaToken(token)}
            onExpired={() => setRecaptchaToken(null)}
          />
        </div>
      ) : (
        <p className="text-xs text-amber-400/90 font-secondary">
          reCAPTCHA is not configured. Add NEXT_PUBLIC_RECAPTCHA_SITE_KEY to
          your environment.
        </p>
      )}

      {status === "error" && errorMessage && (
        <div className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !siteKey}
        className="w-full rounded-lg bg-purple-500 py-4 font-bold text-white shadow-lg transition-all outline-none hover:shadow-purple-500/25 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
