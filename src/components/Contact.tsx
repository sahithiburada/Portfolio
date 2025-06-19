import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Folder, Send, Phone, Mail, MapPin, Linkedin,
  Github, Heart, Star, MessageCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [hoveredContact, setHoveredContact] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const contactMethods = [
    {
      label: "Email",
      value: "buradasahithikumari@gmail.com",
      color: "bg-gradient-to-br from-pink-400 to-rose-500",
      icon: Mail,
      description: "Drop me a line anytime!"
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/sahithikumari/",
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
      icon: Linkedin,
      description: "Let's connect professionally"
    },
    {
      label: "GitHub",
      value: "https://github.com/sahithiburada",
      color: "bg-gradient-to-br from-gray-700 to-gray-900",
      icon: Github,
      description: "Check out my code"
    },
    {
      label: "Resume",
      value: "https://drive.google.com/drive/folders/1FwKGmbdMDvUAz9cf6j-qQRHgLpCF7N0_?usp=sharing",
      color: "bg-gradient-to-br from-amber-400 to-orange-500",
      icon: Folder,
      description: "View my resume here"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      'service_cor5loh',
      'template_gxw8yw3',
      templateParams,
      'CugqeOr9UoAEdd9gg'
    ).then(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowSuccess(false), 3000);
    }).catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-20 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8 text-gray-800 font-poppins">
          Contact Me
          <div className="text-center mt-4">
            <div className="inline-block w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
          </div>
        </h2>

        <p className="text-center text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's start a conversation!
        </p>

        {/* Icons Row */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          {contactMethods.map((contact, index) => (
            <a
              key={index}
              href={contact.label === "Email" ? `mailto:${contact.value}` : contact.value}
              target={contact.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center transition-transform hover:scale-110"
            >
              <div
                className={`${contact.color} w-14 h-14 rounded-full flex items-center justify-center shadow-lg`}
              >
                <contact.icon size={24} className="text-white" />
              </div>
              <span className="text-sm text-gray-700 mt-2 font-medium">{contact.label}</span>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 rounded-3xl p-8 shadow-2xl border-4 border-white/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-rose-200/20 to-pink-200/20 rounded-full transform -translate-x-24 translate-y-24"></div>

          <div className="relative z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl relative border-2 border-white/50">
              <div className="absolute -top-4 left-8 w-24 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-t-xl flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-white">Message</span>
              </div>

              {showSuccess && (
                <div className="absolute inset-0 bg-green-500 rounded-3xl flex items-center justify-center z-20 animate-fade-in">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart size={32} className="text-white" fill="currentColor" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                    <p>Thanks for reaching out. I'll get back to you soon!</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all duration-300 bg-white/70"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all duration-300 bg-white/70"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all duration-300 bg-white/70"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all duration-300 resize-none bg-white/70"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-white shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-2xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 max-w-2xl mx-auto">
            <p className="text-gray-600 font-poppins italic text-lg">
              "Let's create something amazing together!"
            </p>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-rose-200 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Contact;
