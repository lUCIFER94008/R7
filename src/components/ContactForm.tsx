import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-black/20 px-4 py-3 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-black transition-colors duration-300"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-black/20 px-4 py-3 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-black transition-colors duration-300"
          placeholder="your.email@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full border border-black/20 px-4 py-3 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-black transition-colors duration-300 resize-none"
          placeholder="Your message..."
        />
      </div>
      <button
        type="submit"
        className="flex items-center gap-2 bg-black text-white px-8 py-3 hover:bg-black/80 transition-all duration-300 w-full sm:w-auto justify-center"
      >
        <Send className="size-4" />
        Send Message
      </button>
    </form>
  );
}