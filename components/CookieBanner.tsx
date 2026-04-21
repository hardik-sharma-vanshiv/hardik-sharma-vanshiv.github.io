"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getCookie("user_consent_preferences");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const getCookie = (name: string) => {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
    return null;
  };

  const setCookie = (value: string) => {
    const date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = `user_consent_preferences=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`;
  }

  const generateConsentId = () => {
    return 'id_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const handleAccept = () => {
    const consentString = `consentid:${generateConsentId()},consent:yes,action:yes,necessary:yes,functional:yes,analytics:yes,performance:yes,advertisement:yes`;
    setCookie(consentString);
    setShowBanner(false);
  };
  
  const handleReject = () => {
    const consentString = `consentid:${generateConsentId()},consent:no,action:yes,necessary:yes,functional:no,analytics:no,performance:no,advertisement:no`;
    setCookie(consentString);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="m-6 rounded-xl border fixed bottom-0 left-0 right-0 bg-white shadow-[0_-10px_30px_rgba(0,0,0,0.1)] border-t border-gray-100 p-4 md:p-6 z-50 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex-1 max-w-4xl mx-auto md:mx-0">
        <h3 className="text-gray-900 font-bold mb-2 text-xl">We value your privacy</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>
      </div>
      <div className="flex gap-4 w-full md:w-auto shrink-0 justify-center">
        <button 
          onClick={handleReject}
          className="px-6 py-3 text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex-1 md:flex-none"
        >
          Reject All
        </button>
        <button 
          onClick={handleAccept}
          className="px-6 py-3 text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors flex-1 md:flex-none shadow-[0_0_15px_rgba(168,85,247,0.3)]"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
