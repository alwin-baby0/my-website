'use client';

import { useState } from 'react';
import styles from "./page.module.css";
import { showToast } from '../components/Toast';
import { EnvelopeIcon, PhoneIcon, WhatsappIcon, LocationIcon, GithubIcon, LinkedinIcon, XIcon } from '../components/icons';

// API Gateway endpoint and API Key
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT!;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// Rate limiting: 15 seconds between messages
const COOLDOWN_MS = 15000;

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailRequired, setEmailRequired] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleSendMessage = async () => {
    // Rate limit check
    const now = Date.now();
    if (now - lastSubmitTime < COOLDOWN_MS) {
      const remainingSeconds = Math.ceil((COOLDOWN_MS - (now - lastSubmitTime)) / 1000);
      showToast(`Kindly wait ${remainingSeconds} second(s) before sending another message`, 'warning');
      return;
    }

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
    setLastSubmitTime(now);

    try {
      const endpoint = `${API_ENDPOINT}/contact/send-email`
      
      // Build headers with API key if available
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      if (API_KEY) {
        headers['x-api-key'] = API_KEY;
      }
      
      // Call API Gateway endpoint
      const response = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          email: emailRequired ? email : '',
          message: message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Show success toast
        showToast('Message sent successfully! I\'ll get back to you soon.', 'success');

        // Reset form
        setEmail('');
        setMessage('');
      } else {
        // Show error from API
        const errorMessage = data.error || 'Failed to send message. Please try again.';
        showToast(errorMessage, 'error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
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
              <EnvelopeIcon size={24} color="var(--text-primary)" className={styles.contactCardIcon} />
              <div>
                <h3>Email</h3>
                <p className={styles.contactLink}>
                  alwin.baby.official@gmail.com
                </p>
              </div>
            </a>

            <a href="tel:+4915510942947" className={styles.contactCard}>
              <PhoneIcon size={24} color="var(--text-primary)" className={styles.contactCardIcon} />
              <div>
                <h3>Phone</h3>
                <p className={styles.contactLink}>
                  +49 15510 942947
                </p>
              </div>
            </a>

            <a href="https://wa.me/919446356648" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <WhatsappIcon size={24} color="var(--text-primary)" className={styles.contactCardIcon} />
              <div>
                <h3>WhatsApp</h3>
                <p className={styles.contactLink}>
                  +91 9446 35 6648
                </p>
              </div>
            </a>

            <a href="https://maps.google.com/?q=17+Wedringerstraße+39124+Magdeburg+Germany" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <LocationIcon size={24} color="var(--text-primary)" className={styles.contactCardIcon} />
              <div>
                <h3>Address</h3>
                <p className={styles.contactText}>
                  17 Wedringerstraße <br/>
                  39124 Magdeburg <br/>
                  Germany
                </p>
              </div>
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
              <GithubIcon size={24} color="currentColor" className={styles.socialIcon} />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/alwinbabyofficial"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >
              <LinkedinIcon size={24} color="currentColor" className={styles.socialIcon} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://twitter.com/alwin_baby"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >
              <XIcon size={24} color="currentColor" className={styles.socialIcon} />
              <span>X</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
