import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstanace } from "../lib/axios";

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

  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));