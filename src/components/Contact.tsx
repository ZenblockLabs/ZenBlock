import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import emailjs from "@emailjs/browser";
import ContactInfo from "./ContactInfo";

// Tailwind class to ensure placeholder text is dark grey
const PLACEHOLDER_STYLE = "placeholder:text-[#222]";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false); // For required fields error
  const [emailJsError, setEmailJsError] = useState(false); // For actual EmailJS sending errors

  const handlesubmit = (e) => {
    e.preventDefault();

    // Check for required fields before attempting to send email
    if (!name || !email || !message) {
      setShowErrorModal(true); // This will trigger the "Please fill all required fields" modal
      return;
    }

    setIsSubmitting(true);
    setEmailJsError(false); // Reset any previous EmailJS error

    // --- YOUR ACTUAL EMAILJS CODE GOES HERE ---
    const serviceID = 'service_f0wpovg'
    const templateID = 'template_5bzcqpr'
    const publicKey = 'F8ptJ0I7OpktorsD-'

    const templateParams = {
      from_name: name,
      from_email: email,
      company: company,
      to_name: "ZenBlock Team",
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent!", response.status, response.text);
        setShowSuccessModal(true);
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setEmailJsError(true); // Set state for EmailJS error
      })
      .finally(() => {
        setIsSubmitting(false);
      });

    // --- END OF ACTUAL EMAILJS CODE ---

    // Remove or comment out the setTimeout simulation once EmailJS is active
    /*
    setTimeout(() => {
      console.log("Email sent successfully!");
      setShowSuccessModal(true);
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setIsSubmitting(false);
    }, 2000);
    */
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
    setEmailJsError(false); // Also reset EmailJS error when closing this modal
  };

  if (isSubmitting) {
    return (
      <section id="contact" className="py-20 bg-zenblock-soft-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zenblock-electric-blue mb-4"></div>
            <p className="text-zenblock-primary-text text-lg">
              Sending your message...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-zenblock-soft-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
            We're here to help. Get in touch with our team to discuss your
            pharmaceutical supply chain needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-zenblock-white">
              <CardContent className="p-8">
                <form onSubmit={handlesubmit} className="space-y-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={`bg-zenblock-soft-mint border-none text-zenblock-primary-text ${PLACEHOLDER_STYLE}`}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`bg-zenblock-soft-mint border-none text-zenblock-primary-text ${PLACEHOLDER_STYLE}`}
                  />
                  <Input
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className={`bg-zenblock-soft-mint border-none text-zenblock-primary-text ${PLACEHOLDER_STYLE}`}
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className={`bg-zenblock-soft-mint border-none text-zenblock-primary-text resize-none ${PLACEHOLDER_STYLE}`}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-zenblock-electric-blue text-zenblock-white hover:bg-zenblock-electric-blue/90"
                    disabled={isSubmitting} // Keep this disabled while submitting
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full relative">
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              Message Sent!
            </h3>
            <p className="text-gray-700 mb-6">
              Thank you for reaching out. We will get back to you shortly.
            </p>
            <Button
              onClick={closeModal}
              className="bg-zenblock-electric-blue text-white hover:bg-zenblock-electric-blue/90"
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Error Modal (for required fields OR EmailJS general error) */}
      {(showErrorModal || emailJsError) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full relative">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              Oops! Something went wrong.
            </h3>
            <p className="text-gray-700 mb-6">
              {showErrorModal
                ? "Please fill in all the required fields (Name, Email, Message)."
                : "Failed to send your message. Please try again later."}
            </p>
            <Button
              onClick={closeErrorModal}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;