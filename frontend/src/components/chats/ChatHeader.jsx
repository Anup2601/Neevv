import { Phone, Video, X } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";
import { useChatStore } from "../../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-start">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-medium">{selectedUser.fullName}</h3>
            <p className="text-sm text-base-content/70">
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        <div className="flex items-center ml-auto space-x-2 gap-3">
        <button
          onClick={() => handleVoiceCall(selectedUser)}
          className="p-2  bg-primary/10 text-base-content rounded-full hover:bg-primary/20"
          title="Voice Call"
        >
          <Phone size={20} />
        </button>
        <button
          onClick={() => handleVideoCall(selectedUser)}
          className="p-2 bg-primary/10 text-base-content rounded-full hover:bg-primary/20"
          title="Video Call"
        >
          <Video size={20} />
        </button>
      

        {/* Close button */}
        <button onClick={() => setSelectedUser(null)}>
          <X />
        </button>
        </div>
      </div>
    </div>
  );
};
export default ChatHeader;