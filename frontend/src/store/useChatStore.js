import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstanace } from "../lib/axios";
import { useAuthStore } from "./useAuthStore.js";

export const useChatStore = create((set,get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstanace.get("/messages/users");
      console.log("Fetched users:", res.data);
      set({ users: Array.isArray(res.data) ? res.data:[] });
    } catch (error) {
      console.error("Error in fetching users:", error);
      toast.error("Error in fetching users", error.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    if (!userId) {
      console.error("❌ Error: No user ID provided for messages");
      return;
    }
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstanace.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      console.error("Error in fetching messages:", error);
      toast.error("Error in fetching messages", error.response.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  sendMessage: async (messageData) => {
    const { selectedUser , messages } = get();
    if (!selectedUser) {
      console.error("❌ Error: No selected user to send message");
      return;
    }
    try {
      const res = await axiosInstanace.post(`/messages/send/${selectedUser._id}`,messageData); 
      set({ messages: [...messages, res.data] });
      console.log("Message sent:", res.data);
      set({ messages: [...messages, res.data] });
      
    } catch (error) {
      toast.error("Error in sending message", error.response.data.message); 

    }
  },

  // subscribeToMessages: () => {
  //   const { selectedUser } = get();
  //   if (!selectedUser) {
  //     console.error("❌ Error: No selected user to subscribe to messages");
  //     return;
  //   }
  //   const socket =useAuthStore.getState().socket;

  //   socket.on("newMessage", (newMessage) => {
  //     const isMessageSentBySelectedUser = newMessage.senderId === selectedUser._id;
  //     if (!isMessageSentBySelectedUser) return;
  //     set({ messages: [...get().messages, newMessage] });
  //   });
  // },

  subscribeToMessages: () => {
  const socket = useAuthStore.getState().socket;

  if (!socket) {
    console.error("❌ Socket not initialized");
    return;
  }

  socket.on("newMessage", (newMessage) => {
    const { messages, users, selectedUser } = get();

    const isCurrentChat = selectedUser?._id === newMessage.senderId;

    const sender = users.find((u) => u._id === newMessage.senderId);

    if (isCurrentChat) {
      // 👥 User is chatting with sender → add message to chat
      set({ messages: [...messages, newMessage] });
      // ⿢ Show toast (optional)
    toast.success(`📨 New message from ${sender?.fullName || "someone"}`);

    // 🔔 Show browser notification
    if (Notification.permission === "granted") {
      new Notification(`📨 New message from ${sender?.fullName || "someone"}`);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(`📨 New message from ${sender?.fullName || "someone"}`);
        }
      });
    }

    
    } else {
      // 👤 User is not chatting with sender → show notification only
      toast.success(`📨 New message from ${sender?.fullName || "someone"}`);

      if (Notification.permission === "granted") {
        new Notification(`📨 New message from ${sender?.fullName || "someone"}`);
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(`📨 New message from ${sender?.fullName || "someone"}`);
          }
        });
      }
    }
  });
},


  unsubscribeToMessages: () => {
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
  },

  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));