import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef();

  const showToast = (type, title, message) => {
    window.clearTimeout(toastTimer.current);
    setToast({ type, title, message });
    toastTimer.current = window.setTimeout(() => setToast(null), 5200);
  };

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    const emailConfig = {
      serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      receiverEmail: import.meta.env.VITE_APP_EMAILJS_RECEIVER_EMAIL,
      publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    };
    if (Object.values(emailConfig).some((value) => !value)) {
      showToast(
        "error",
        "Message not sent",
        "The contact form is temporarily unavailable. Please try again shortly.",
      );
      return;
    }
    setLoading(true);

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: form.name,
          to_name: "Maaz",
          from_email: form.email,
          reply_to: form.email,
          to_email: emailConfig.receiverEmail,
          message: form.message,
        },
        emailConfig.publicKey,
      );
      setForm({ name: "", email: "", message: "" });
      showToast(
        "success",
        "Message received",
        "Thanks for reaching out. I’ll get back to you as soon as possible.",
      );
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      showToast(
        "error",
        "Couldn’t send that",
        "Something interrupted the connection. Your message is still here—please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {createPortal(
        <AnimatePresence>
          {toast && (
            <motion.aside
              className={`contact-toast contact-toast--${toast.type}`}
              initial={{ opacity: 0, y: -18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 430, damping: 32 }}
              role={toast.type === "error" ? "alert" : "status"}
              aria-live="polite"
            >
              <div className="contact-toast__icon" aria-hidden="true">
                {toast.type === "success" ? "✓" : "!"}
              </div>
              <div className="contact-toast__copy">
                <span>
                  {toast.type === "success"
                    ? "Transmission complete"
                    : "Transmission failed"}
                </span>
                <strong>{toast.title}</strong>
                <p>{toast.message}</p>
              </div>
              <button
                type="button"
                onClick={() => setToast(null)}
                aria-label="Dismiss notification"
              >
                ×
              </button>
              <motion.i
                className="contact-toast__timer"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 5.2, ease: "linear" }}
              />
            </motion.aside>
          )}
        </AnimatePresence>,
        document.body,
      )}
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.9] bg-black-100 p-8 rounded-2xl contact-panel"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                autoComplete="name"
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                autoComplete="email"
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                minLength={10}
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? (
                <>
                  <span
                    className="contact-button__spinner"
                    aria-hidden="true"
                  />
                  Sending message
                </>
              ) : (
                "Send message"
              )}
            </button>
            <a
              className="resume-download"
              href="/Maaz-Bukhari.pdf"
              download="Maaz-Bukhari.pdf"
            >
              <span>Download my resume</span>
              <i>↓</i>
            </a>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] contact-art"
        >
          <div className="contact-orbit">
            <div className="contact-core">
              LET'S
              <br />
              <em>TALK</em>
              <span>↗</span>
            </div>
          </div>
          <p>Have an idea worth making?</p>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
