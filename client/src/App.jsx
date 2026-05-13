import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username] = useState('User_' + Math.floor(Math.random() * 1000));
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const handleReceiveMessage = (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    socket.on('receive_message', handleReceiveMessage);

    return () => {
      socket.off('receive_message', handleReceiveMessage);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('send_message', {
        text: message,
        sender: username,
        id: Date.now()
      });
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[650px] border border-white/20">
        
        {/* Header */}
        <div className="bg-white/50 backdrop-blur-md p-4 border-b border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">
            {username.charAt(0)}
          </div>
          <div>
            <h1 className="font-bold text-gray-800 text-lg">Global Chat</h1>
            <p className="text-xs text-green-500 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
            </p>
          </div>
        </div>
        
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar">
          {messages.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
              <div className="w-24 h-24 mb-4 rounded-full bg-gray-50 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p>No messages yet. Start the conversation!</p>
            </div>
          ) : (
            messages.map((msg) => {
              const isMe = msg.sender === username;
              return (
                <div 
                  key={msg.id} 
                  className={`flex flex-col max-w-[80%] ${isMe ? 'self-end' : 'self-start'}`}
                >
                  <span className={`text-[10px] text-gray-400 mb-1 px-1 ${isMe ? 'text-right' : 'text-left'}`}>
                    {isMe ? 'You' : msg.sender}
                  </span>
                  <div 
                    className={`p-3.5 shadow-sm ${
                      isMe 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl rounded-tr-sm' 
                        : 'bg-white text-gray-800 rounded-2xl rounded-tl-sm border border-gray-100'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white/50 backdrop-blur-md border-t border-gray-100">
          <form onSubmit={sendMessage} className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-white border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-sm"
              placeholder="Type your message..."
            />
            <button 
              type="submit"
              disabled={!message.trim()}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
            >
              <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default App;
