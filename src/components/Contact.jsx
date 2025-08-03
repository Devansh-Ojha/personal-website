import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const contacts = [
    {
      icon: <FaGithub />,
      href: "https://github.com/Devansh-Ojha",
      label: "GitHub",
    },
    {
      icon: <MdEmail />,
      href: "mailto:devanshojha0505@berkeley.edu",
      label: "Email",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/devansh-ojha",
      label: "LinkedIn",
    },
    {
      icon: <FaXTwitter />,
      href: "https://x.com/Devanshojha05",
      label: "X",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-transparent"
    >
      <h2 className="text-3xl font-bold mb-6">CONTACT</h2>

      <p className="text-lg text-center text-gray-700 max-w-xl mb-8">
        I'm always open to new opportunities, collaborations, or just a good conversation.
        Feel free to reach out to me.
        
      </p>

      <div className="flex gap-6">
        {contacts.map(({ icon, href, label }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-600 hover:text-blue-600 text-[2rem] transition duration-300 transform hover:scale-110"
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
