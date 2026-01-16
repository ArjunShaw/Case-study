import React, { useState } from 'react';
import { useStore } from './store';
import { NotificationsPanel } from './components/NotificationsPanel';

function App() {
  const addNotification = useStore((s) => s.addNotification);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      addNotification(text);
      setText('');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#121212', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '50px',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <h1 style={{ color: '#fff', marginBottom: '30px' }}>DesignHub Control Tower</h1>
      
      <div style={{ marginBottom: '30px', display: 'flex', gap: '10px' }}>
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Type something..."
          style={{ 
            padding: '12px', 
            borderRadius: '8px', 
            border: '1px solid #333', 
            backgroundColor: '#2d2d2d', 
            color: '#fff',
            width: '250px',
            outline: 'none'
          }}
        />
        <button 
          onClick={handleAdd} 
          style={{ 
            padding: '12px 24px', 
            borderRadius: '8px', 
            border: 'none', 
            backgroundColor: '#007bff', 
            color: '#fff', 
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Send Alert
        </button>
      </div>

      <NotificationsPanel />
    </div>
  );
}

export default App;