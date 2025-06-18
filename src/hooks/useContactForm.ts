
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

// EmailJS credentials -- replace with your own
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

// Zapier webhook - you can set your Zap URL here, leave empty to skip
const ZAPIER_WEBHOOK_URL = ""; // e.g., "https://hooks.zapier.com/hooks/catch/XXX/YYY/"

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Handles form submission: send to Zapier webhook and EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Send data to Zapier webhook (if URL provided)
    if (ZAPIER_WEBHOOK_URL) {
      try {
        await fetch(ZAPIER_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          mode: "no-cors", // allows fetch even if Zapier doesn't send CORS headers
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString()
          })
        });
        toast({
          title: "Zapier Webhook Triggered",
          description: "Your message was also sent to Zapier for further automation.",
          className: "bg-zenblock-soft-mint border-zenblock-pharma-green text-zenblock-primary-text",
        });
      } catch (err) {
        toast({
          title: "Zapier Webhook Failed",
          description: "We couldn't trigger the Zapier automation. Email delivery will still be attempted.",
          className: "bg-yellow-100 border-yellow-700 text-yellow-800",
        });
      }
    }

    // 2. Send with EmailJS as normal
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "Thank you for contacting us. We will get back to you at info@zenblocklabs.com.",
            className: "bg-zenblock-soft-mint border-zenblock-pharma-green text-zenblock-primary-text",
          });
          setFormData({ name: "", email: "", company: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast({
            title: "Failed to Send",
            description: "Sorry, something went wrong. Please try again later or email us directly at info@zenblocklabs.com.",
            className: "bg-red-100 border-red-500 text-red-700",
          });
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};
