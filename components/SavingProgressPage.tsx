/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, {useEffect, useState} from 'react';

const loadingMessages = [
  'Menginisialisasi generator video...',
  'Merender bingkai pertama...',
  'Menerapkan efek visual...',
  'Menyusun adegan...',
  'Menambahkan sentuhan akhir...',
  'Hampir selesai...',
];

/**
 * A fullscreen overlay that displays a loading animation and text indicating that
 * a video remix is being created.
 */
export const SavingProgressPage: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
    }, 2500); // Change message every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 animate-fade-in text-center px-4"
      aria-live="polite"
      aria-busy="true">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">
          Video Anda sedang dibuat...
        </h2>
        {/* Progress bar structure */}
        <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
          <div className="bg-purple-600 h-2.5 rounded-full progress-bar-value"></div>
        </div>
        <p className="text-gray-400 mt-4 min-h-[2em]">
          {loadingMessages[messageIndex]}
        </p>
      </div>
    </div>
  );
};