import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/jt@theunitedrepublic.com.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organisation: formData.organisation,
          phone: formData.phone,
          message: formData.message,
          _subject: `Website enquiry from ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setFormData({
        name: "",
        email: "",
        organisation: "",
        phone: "",
        message: "",
      });
      alert("Thanks for your enquiry. Your message has been sent.");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was a problem sending your enquiry. Please email jt@theunitedrepublic.com.au directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const projectTypes = [
    "Strategic diagnostic and problem definition",
    "Communications or campaign strategy development",
    "Brand or positioning strategy",
    "Behaviour change program planning",
    "Multi-stakeholder engagement strategy",
    "Agency briefing and partner identification",
    "Strategic oversight and implementation guidance",
    "Post-campaign evaluation and refinement",
  ];

  return (
    <>
      <Section className="pt-32 pb-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-8">Contact</h1>
          <p className="text-xl text-[#B8C9C6] leading-relaxed">
            Let's talk about your challenge and how The United Republic can help.
          </p>
        </div>
      </Section>

      <Section background="grey">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <h2 className="text-3xl mb-6">Send us an enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#C8D7D4] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#00796B] focus:ring-2 focus:ring-[#00796B]/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#C8D7D4] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#00796B] focus:ring-2 focus:ring-[#00796B]/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="organisation" className="block text-sm font-medium text-[#C8D7D4] mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#00796B] focus:ring-2 focus:ring-[#00796B]/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#C8D7D4] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#00796B] focus:ring-2 focus:ring-[#00796B]/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#C8D7D4] mb-2">
                    Tell us about your challenge *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#00796B] focus:ring-2 focus:ring-[#00796B]/20 outline-none transition-colors resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send enquiry"}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <h2 className="text-2xl mb-6">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#00796B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a
                      href="mailto:jt@theunitedrepublic.com.au"
                      className="text-[#00796B] hover:underline"
                    >
                      jt@theunitedrepublic.com.au
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#00796B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+61407744388" className="text-[#00796B] hover:underline">
                      +61 407 744 388
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#081517]">
              <h3 className="text-xl mb-4">Typical projects we support</h3>
              <ul className="space-y-3">
                {projectTypes.map((type, index) => (
                  <li key={index} className="text-[#C8D7D4] text-sm leading-relaxed pl-4 border-l-2 border-[#00796B]">
                    {type}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-[#00796B] text-white border-none">
              <p className="text-lg leading-relaxed">
                We work with organisations that need strategic clarity before they invest in execution and want support to make sure that clarity carries through to delivery.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
