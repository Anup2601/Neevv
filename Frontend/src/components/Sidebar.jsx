import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore"
import { Users } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";

function Sidebar() {
  const {getUsers, users=[], selectedUser, setSelectedUser ,isUsersLoading, getMessages} = useChatStore()

  const {onlineUsers}= useAuthStore();
  const [showOnline, setShowOnline] = useState(false);

  useEffect(() => {
    getUsers();
    console.log("Users data:", users)
  }, [getUsers]);

  const filteredUsers = showOnline ? users.filter((user) => onlineUsers.includes(user._id)) : users;

  useEffect(() => {
    if (selectedUser) {
      console.log("🔹 Fetching messages for:", selectedUser?._id);
      getMessages(selectedUser?._id); // ✅ Make sure this sends a valid ID
    }
  }, [selectedUser, getMessages]);

  if(isUsersLoading){
    return <SidebarSkeleton/>
  }
  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200 ">
      <div className=" border-b border-base-300 p-5 w-full">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium hidden lg:block ">Contacts</span>
        </div>
        {/* to do online filter here */}
        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm"
            />
            <span className="text-sm">Show online only</span>
          </label>
          <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3">
        { filteredUsers.map((user) => (
          <button
            key={user.id}
            className={` w-full flex items-center gap-3 p-3 hover:bg-base-100 transition-colors ${
              selectedUser?._id === user.id ? "bg-base-300 ring-1 ring-base-300":""
            }`}
            onClick={() => {
              console.log("Selected user ID:", user._id);
              setSelectedUser(user);
              getMessages(user._id);
              }}
          >
          <div className="relative mx-auto lg:mx-0"> 
            <img
              src={user.profilePic || "/vite.svg"} 
              alt={user.fullName}
              className="size-12 object-cover  rounded-full"
            />
            {onlineUsers.includes(user.id) && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-zinc-900"></span>
            )}
          </div>

          {/* user info -only visible on large screens */}
          <div className="hidden lg:block text-left min-w-0 ">
            <div className="font-medium truncate">{user.fullName}</div>
            <div className="text-sm ">
              {onlineUsers.includes(user.id) ? (
                <span className="text-green-500">Online</span>
              ) : (
                <span className="text-base-500">Offline</span>
              )}
            </div>
          </div>
          </button>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar