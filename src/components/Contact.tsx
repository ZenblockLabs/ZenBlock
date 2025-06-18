import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, X, AlertCircle } from "lucide-react";

// Mock ContactInfo component for demo
const ContactInfo = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Get in Touch</h3>
      <p className="text-gray-600">Contact us for pharmaceutical supply chain solutions.</p>
    </div>
  </div>
);

// Tailwind class to ensure placeholder text is dark grey
const PLACEHOLDER_STYLE = "placeholder:text-[#222]";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setShowErrorModal(true);
      return;
    }

    setIsSubmitting(true);

    // Simulate email sending for demo
    setTimeout(() => {
      console.log("Email sent successfully!");
      setShowSuccessModal(true);
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setIsSubmitting(false);
    }, 2000);

    // Your actual emailjs code would go here:
    /*
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
        alert("Failed to send email. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    */
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  if (isSubmitting) {
    return (
      <section id="contact" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-800 text-lg">
              Sending your message...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="contact" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help. Get in touch with our team to discuss your
              pharmaceutical supply chain needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-white">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className={`bg-green-50 border-none text-gray-800 ${PLACEHOLDER_STYLE}`}
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={`bg-green-50 border-none text-gray-800 ${PLACEHOLDER_STYLE}`}
                    />
                    <Input
                      type="text"
                      name="company"
                      placeholder="Your Company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className={`bg-green-50 border-none text-gray-800 ${PLACEHOLDER_STYLE}`}
                    />
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className={`bg-green-50 border-none text-gray-800 resize-none ${PLACEHOLDER_STYLE}`}
                    />
                    <Button
                      onClick={handlesubmit}
                      className="w-full bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Message Sent Successfully!
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Thank you for reaching out! We've received your message and will get back to you within 24 hours.
              </p>
              
              {/* OK Button */}
              <div className="flex justify-end">
                <Button
                  onClick={closeModal}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-md font-medium transition-colors"
                >
                  OK
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Required Fields Missing
                </h3>
              </div>
              <button
                onClick={closeErrorModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Please fill in all required fields (Name, Email, and Message) before submitting your request.
              </p>
              
              {/* OK Button */}
              <div className="flex justify-end">
                <Button
                  onClick={closeErrorModal}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-md font-medium transition-colors"
                >
                  OK
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;