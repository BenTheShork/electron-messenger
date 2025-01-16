import React from 'react';
import { Message } from '../../shared/types/chat';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[70%] p-3 rounded-lg ${
              message.sender === 'me'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-800'
            }`}
          >
            <p>{message.text}</p>
            <span className="text-xs opacity-70 mt-1 block">
              {message.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;