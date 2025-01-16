import React from 'react';
import { Phone, Search, Settings } from 'lucide-react';
import { Chat } from '../../shared/types/chat';

interface ChatHeaderProps {
  chat: Chat;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ chat }) => {
  return (
    <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
          {chat.name[0]}
        </div>
        <span className="ml-3 font-medium">{chat.name}</span>
      </div>
      <div className="flex items-center space-x-4">
        <Phone className="w-5 h-5 text-gray-500 cursor-pointer" />
        <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
        <Settings className="w-5 h-5 text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatHeader;