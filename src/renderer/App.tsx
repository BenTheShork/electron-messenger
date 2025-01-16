import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Chat, Message } from '../shared/types/chat';
import Sidebar from './components/Sidebar';
import ChatHeader from './components/ChatHeader';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';

const App = () => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [messages] = useState<Message[]>([
    { id: 1, text: 'Hey there!', sender: 'John', time: '10:30' },
    { id: 2, text: 'Hi! How are you?', sender: 'me', time: '10:31' },
  ]);
  
  const [chats] = useState<Chat[]>([
    { id: 1, name: 'John Doe', lastMessage: 'Hey there!', time: '10:30', unread: 2 },
    { id: 2, name: 'Jane Smith', lastMessage: 'See you tomorrow!', time: '09:45', unread: 0 },
    { id: 3, name: 'Tech Group', lastMessage: 'New update available', time: 'Yesterday', unread: 5 },
  ]);

  const handleSendMessage = (message: string) => {
    // TODO: Implement message sending logic
    console.log('Sending message:', message);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar chats={chats} onSelectChat={setSelectedChat} />

      {selectedChat ? (
        <div className="flex-1 flex flex-col">
          <ChatHeader chat={selectedChat} />
          <MessageList messages={messages} />
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <MessageCircle className="w-16 h-16 text-gray-400 mx-auto" />
            <p className="mt-4 text-gray-500">Select a chat to start messaging</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;