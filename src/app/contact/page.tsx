'use client';

import { useState } from 'react';
import styles from "./page.module.css";
import { showToast } from '../components/Toast';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailRequired, setEmailRequired] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    // Validate email if required
    if (emailRequired && !email.trim()) {
      showToast('Please enter your email address', 'error');
      return;
    }

    // Validate message
    if (!message.trim()) {
      showToast('Please enter a message', 'error');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate async operation (2 second delay)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would typically send the message to a backend service
      console.log('Message sent:', { email: emailRequired ? email : 'anonymous', message });

      // Show success toast
      showToast('Message sent successfully! I\'ll get back to you soon.', 'success');

      // Reset form
      setEmail('');
      setMessage('');
    } catch (error) {
      showToast('Failed to send message. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1>Get in Touch</h1>
          <p>Have a question or project in mind? I'd love to hear from you. Reach out anytime!</p>
        </div>

        {/* Section 1: Message Form */}
        <section className={styles.section}>
          <h2>Send me a Message</h2>
          
          <div className={styles.formSection}>
            {/* Email Input with Toggle */}
            <div className={styles.emailGroup}>
              <div className={styles.emailInputWrapper}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!emailRequired}
                  className={`${styles.input} ${!emailRequired ? styles.disabled : ''}`}
                />
              </div>
              
              <div className={styles.toggleLabel}>
                <input
                  type="checkbox"
                  checked={emailRequired}
                  onChange={(e) => setEmailRequired(e.target.checked)}
                  className={styles.checkbox}
                />
                <span className={styles.toggleText}>Reply via email</span>
              </div>
            </div>

            {/* Message Textarea */}
            <textarea
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.textarea}
              rows={6}
            />

            {/* Send Button */}
            <button
              onClick={handleSendMessage}
              disabled={isLoading}
              className={`${styles.sendButton} ${isLoading ? styles.loading : ''}`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </section>

        {/* Section 2: Contact Details */}
        <section className={styles.section}>
          <h2>Contact Details</h2>
          
          <div className={styles.contactGrid}>
            <a href="mailto:alwin.baby.official@gmail.com" className={styles.contactCard}>
              <h3>Email</h3>
              <p className={styles.contactLink}>
                alwin.baby.official@gmail.com
              </p>
            </a>

            <a href="tel:+491551094294" className={styles.contactCard}>
              <h3>Phone</h3>
              <p className={styles.contactLink}>
                +49 15510 942947
              </p>
            </a>

            <a href="https://wa.me/919446356648" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <h3>WhatsApp</h3>
              <p className={styles.contactLink}>
                +91 9446 35 6648
              </p>
            </a>

            <a href="https://maps.google.com/?q=17+Wedringerstraße+39124+Magdeburg+Germany" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <h3>Address</h3>
              <p className={styles.contactText}>
                17 Wedringerstraße <br/>
                39124 Magdeburg <br/>
                Germany
              </p>
            </a>
          </div>
        </section>

        {/* Section 3: Social Accounts */}
        <section className={styles.section}>
          <h2>Connect with Me</h2>
          
          <div className={styles.socialGrid}>
            <a
              href="https://github.com/alwin-baby0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >
              <div className={styles.socialIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/alwin-baby"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >
              <div className={styles.socialIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.732-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.047-8.794 0-9.714h3.554v1.377c.43-.664 1.195-1.61 2.91-1.61 2.124 0 3.713 1.395 3.713 4.396v5.551zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.768-1.71 1.959-1.71 1.19 0 1.917.757 1.944 1.71 0 .951-.754 1.71-1.988 1.71zm1.581 11.597H3.635V9.738h3.283v10.714zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </div>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://twitter.com/alwin_baby"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >
              <div className={styles.socialIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.974 6.807H2.882l7.432-8.49H1.85l5.05-5.739h6.344m-4 10.575h1.822L13.586 19h-1.822l-3.622-9.18z" />
                </svg>
              </div>
              <span>X</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
