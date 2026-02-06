'use client';

import { useState } from 'react';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-20 right-4 z-40">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 border border-gray-200">
          <div className="bg-indigo-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <span className="font-bold">💬 Live Chat</span>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">×</button>
          </div>
          <div className="p-4 h-64 overflow-y-auto bg-gray-50">
            <div className="bg-indigo-100 rounded-lg p-3 mb-2 max-w-[80%]">
              <p className="text-sm">Hi! 👋 How can I help you create your personalized story today?</p>
            </div>
          </div>
          <div className="p-4 border-t">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full px-3 py-2 border rounded-lg text-sm"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition"
        >
          💬
        </button>
      )}
    </div>
  );
}
