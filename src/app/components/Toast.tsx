'use client';

import { useEffect, useState } from 'react';
import styles from './Toast.module.css';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
}

// Global toast state manager
let toastListeners: ((messages: ToastMessage[]) => void)[] = [];
let toastMessages: ToastMessage[] = [];

export const showToast = (message: string, type: ToastType = 'info', duration: number = 3000) => {
  const id = Math.random().toString(36).substr(2, 9);
  const newMessage: ToastMessage = { id, message, type };
  
  toastMessages = [...toastMessages, newMessage];
  toastListeners.forEach(listener => listener([...toastMessages]));
  
  setTimeout(() => {
    toastMessages = toastMessages.filter(m => m.id !== id);
    toastListeners.forEach(listener => listener([...toastMessages]));
  }, duration);
};

export default function Toast() {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleToast = (newMessages: ToastMessage[]) => {
      setMessages(newMessages);
    };

    toastListeners.push(handleToast);

    return () => {
      toastListeners = toastListeners.filter(listener => listener !== handleToast);
    };
  }, []);

  return (
    <div className={styles.toastContainer}>
      {messages.map((toast) => (
        <div key={toast.id} className={`${styles.toast} ${styles[toast.type]}`}>
          {toast.message}
        </div>
      ))}
    </div>
  );
}
