/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, {useState} from 'react';
import {XMarkIcon} from './icons';

interface ContactModalProps {
  onClose: () => void;
}

const WHATSAPP_NUMBER = '6285647818779';

/**
 * A modal component for a contact form.
 * Submits data to a WhatsApp number.
 */
export const ContactModal: React.FC<ContactModalProps> = ({onClose}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      // Basic validation
      return;
    }

    const text = `Halo, saya ingin menghubungi Anda.\n\n*Nama:* ${name}\n*Email:* ${email}\n*Pesan:* ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const isFormInvalid = !name.trim() || !message.trim();

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="contact-modal-title">
      <div
        className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-lg relative p-6 md:p-8 m-4"
        onClick={(e) => e.stopPropagation()}>
        <header className="flex justify-between items-center mb-6">
          <h2
            id="contact-modal-title"
            className="text-2xl font-bold text-white">
            Hubungi Kami
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white z-10 p-2 rounded-full bg-transparent hover:bg-gray-700 transition-colors"
            aria-label="Tutup formulir kontak">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          <main className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2">
                Nama
              </label>
              <input
                id="name"
                type="text"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow duration-200"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="opsional"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2">
                Isi Pesan
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow duration-200"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </main>

          <footer className="mt-8 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white font-semibold transition-colors">
              Batal
            </button>
            <button
              type="submit"
              disabled={isFormInvalid}
              className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed">
              Kirim via WhatsApp
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};
