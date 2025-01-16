import React from 'react';
import { Chat } from '../../shared/types/chat';

interface ChatListProps {
  chats: Chat[];
  onSelectChat: (chat: Chat) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, onSelectChat }) => {
  return (
    <div className="overflow-y-auto h-[calc(100vh-4rem)]">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="p-4 hover:bg-gray-50 cursor-pointer flex items-center border-b border-gray-100"
          onClick={() => onSelectChat(chat)}
        >
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            {chat.name[0]}
          </div>
          <div className="ml-4 flex-1">
            <div className="flex justify-between">
              <span className="font-medium">{chat.name}</span>
              <span className="text-sm text-gray-500">{chat.time}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 truncate">{chat.lastMessage}</span>
              {chat.unread > 0 && (
                <span className="bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs">
                  {chat.unread}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;