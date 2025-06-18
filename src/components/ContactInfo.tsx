
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => (
  <Card className="bg-zenblock-soft-mint">
    <CardContent className="p-8 space-y-6">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-zenblock-white p-2">
          <Phone className="w-6 h-6 text-zenblock-electric-blue" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zenblock-primary-text">Phone</h3>
          <p className="text-zenblock-secondary-text">+91 9059392738</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-zenblock-white p-2">
          <Mail className="w-6 h-6 text-zenblock-electric-blue" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zenblock-primary-text">Email</h3>
          <p className="text-zenblock-secondary-text">info@zenblocklabs.com</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-zenblock-white p-2">
          <MapPin className="w-6 h-6 text-zenblock-electric-blue" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zenblock-primary-text">Address</h3>
          <p className="text-zenblock-secondary-text">Hyderabad, India</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-zenblock-white p-2">
          <MessageCircle className="w-6 h-6 text-zenblock-electric-blue" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zenblock-primary-text">Support</h3>
          <p className="text-zenblock-secondary-text">Available 24/7</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ContactInfo;
