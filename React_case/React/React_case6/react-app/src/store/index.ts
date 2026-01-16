import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createNotificationSlice } from './slices/notificationSlice';
import type { NotificationSlice } from './slices/notificationSlice';

// यहाँ आप और भी Slices (UserSlice, FileSlice) जोड़ सकते हैं
type StoreState = NotificationSlice;

export const useStore = create<StoreState>()(
  devtools((...a) => ({
    ...createNotificationSlice(...a),
  }))
);