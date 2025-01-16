export interface Chat {
    id: number;
    name: string;
    lastMessage: string;
    time: string;
    unread: number;
  }
  
  export interface Message {
    id: number;
    text: string;
    sender: string;
    time: string;
  }