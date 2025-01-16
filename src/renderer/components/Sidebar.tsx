import React from 'react';
import { Menu, Search } from 'lucide-react';
import { Chat } from '../../shared/types/chat';
import ChatList from './ChatList';

interface SidebarProps {
  chats: Chat[];
  onSelectChat: (chat: Chat) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ chats, onSelectChat }) => {
  return (
    <div className="w-80 bg-white border-r border-gray-200">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <Menu className="w-6 h-6 text-gray-500" />
        <div className="relative w-full mx-4">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none"
          />
        </div>
      </div>

      <ChatList chats={chats} onSelectChat={onSelectChat} />
    </div>
  );
};

export default Sidebar;