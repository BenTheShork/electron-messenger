import React, { useState } from 'react';
import { Paperclip, Send } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <div className="flex items-center space-x-4">
        <Paperclip className="w-6 h-6 text-gray-500 cursor-pointer" />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Write a message..."
          className="flex-1 p-2 border border-gray-200 rounded-full focus:outline-none focus:border-blue-500"
        />
        <Send 
          className="w-6 h-6 text-blue-500 cursor-pointer" 
          onClick={handleSend}
        />
      </div>
    </div>
  );
};

export default MessageInput;