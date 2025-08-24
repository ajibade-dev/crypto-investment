import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

 const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Optional: trim leading spaces on some fields
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Double-check required fields (browser will also enforce "required")
    const { name, phone, email, subject, message } = formData;
    if (!name || !phone || !email || !subject || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSending(true);

    emailjs
  .send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    },
    PUBLIC_KEY
  )

      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl p-6 bg-white rounded-xl shadow mt-10">
      {/* Toast host */}
      <Toaster position="top-right" />

      <h2 className="text-2xl text-center md:text-4xl font-bold mb-6 font-heading text-[#222ad6]">Contact Us</h2>

      <form onSubmit={handleSubmit} className="grid gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="123-456-7890"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john.doe@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Inquiry about services"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSending}
          className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-white bg-[#222ad6] transition
          ${isSending ? "bg-blue-400 cursor-not-allowed" : "text-[#222ad6] hover:bg-blue-700"}`}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
