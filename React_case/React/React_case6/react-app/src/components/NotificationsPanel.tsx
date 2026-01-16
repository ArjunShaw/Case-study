import React from 'react';
import { useStore } from '../store';

export const NotificationsPanel = () => {
  const { notifications, markAsRead, clearNotifications } = useStore();
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#1e1e1e', 
      color: '#fff', 
      borderRadius: '12px', 
      width: '350px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
      border: '1px solid #333'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h3 style={{ margin: 0 }}>Notifications ({unreadCount})</h3>
        {notifications.length > 0 && (
          <button onClick={clearNotifications} style={{ background: '#ff4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', padding: '5px 10px' }}>
            Clear
          </button>
        )}
      </div>
      
      {notifications.length === 0 && <p style={{ color: '#888', textAlign: 'center' }}>No notifications yet.</p>}
      
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {notifications.map((n) => (
          <div key={n.id} style={{ 
            padding: '12px', 
            background: n.read ? '#2d2d2d' : '#3d3d3d',
            marginBottom: '8px',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderLeft: n.read ? '4px solid #555' : '4px solid #007bff'
          }}>
            <span style={{ 
              textDecoration: n.read ? 'line-through' : 'none',
              color: n.read ? '#888' : '#fff',
              fontSize: '14px'
            }}>
              {n.message}
            </span>
            {!n.read && (
              <button 
                onClick={() => markAsRead(n.id)}
                style={{ background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer' }}
              >
                Done
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};