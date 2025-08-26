/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, {useState} from 'react';

interface GenerateVideoPageProps {
  onGenerate: (prompt: string) => void;
  onCancel: () => void;
}

/**
 * A page that allows the user to enter a prompt to generate a new video.
 */
export const GenerateVideoPage: React.FC<GenerateVideoPageProps> = ({
  onGenerate,
  onCancel,
}) => {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('');
  const [cameraMove, setCameraMove] = useState('');

  const handleGenerate = () => {
    if (prompt.trim()) {
      let fullPrompt = prompt.trim();
      if (style) {
        fullPrompt += `\n\nGaya Video: ${style}`;
      }
      if (cameraMove) {
        fullPrompt += `\nGerakan Kamera: ${cameraMove}`;
      }
      onGenerate(fullPrompt);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-2xl bg-gray-800 p-6 md:p-8 rounded-lg shadow-2xl">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
            Buat Video Baru
          </h1>
          <p className="text-gray-400">
            Jelaskan video yang ingin Anda buat.
          </p>
        </header>

        <main>
          <div className="mb-6">
            <label
              htmlFor="prompt"
              className="block text-sm font-medium text-gray-300 mb-2">
              Prompt
            </label>
            <textarea
              id="prompt"
              rows={10}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow duration-200"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="misalnya, Seekor beruang grizzly megah berdiri di sungai deras di gunung, sedang menangkap salmon."
              aria-label="Prompt untuk pembuatan video baru"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                htmlFor="style"
                className="block text-sm font-medium text-gray-300 mb-2">
                Gaya Video (opsional)
              </label>
              <select
                id="style"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow duration-200"
                value={style}
                onChange={(e) => setStyle(e.target.value)}>
                <option value="">Pilih gaya</option>
                <option value="Sinematik">Sinematik</option>
                <option value="Anime">Anime</option>
                <option value="Hitam Putih">Hitam Putih</option>
                <option value="Timelapse">Timelapse</option>
                <option value="Stop Motion">Stop Motion</option>
                <option value="Claymation">Claymation</option>
                <option value="Fotografi Udara">Fotografi Udara</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="camera-move"
                className="block text-sm font-medium text-gray-300 mb-2">
                Gerakan Kamera (opsional)
              </label>
              <select
                id="camera-move"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow duration-200"
                value={cameraMove}
                onChange={(e) => setCameraMove(e.target.value)}>
                <option value="">Pilih gerakan</option>
                <option value="Aerial">Aerial</option>
                <option value="Panning">Panning</option>
                <option value="Zoom">Zoom</option>
                <option value="Tracking Shot">Tracking Shot</option>
                <option value="Dolly">Dolly</option>
                <option value="Crane shot">Crane shot</option>
              </select>
            </div>
          </div>
        </main>

        <footer className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-6 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white font-semibold transition-colors">
            Batal
          </button>
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim()}
            className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed">
            Buat
          </button>
        </footer>
      </div>
    </div>
  );
};