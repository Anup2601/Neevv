import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import toast from "react-hot-toast";
import { Image, Send, X } from "lucide-react";

// Desc: Component for the message input field
function MessageInput() {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();
  const MAX_FILE_SIZE = 100 * 1024; 


  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) {
      return;
    }
    // Check if the image exceeds the file size limit
  if (imagePreview && imagePreview.length > MAX_FILE_SIZE) {
    toast.error("File size too large. Maximum allowed size is 100 kB.");
    return;
  }

    try {
      await sendMessage({ 
        text:text.trim(),
        image: imagePreview,
       });
      // clear form fields
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

    } catch (error) {
      if (error.response && error.response.status === 413) {
        toast.error("Payload Too Large: File size exceeds the server limit.");
      } else {
        toast.error("Error in sending message", error.response?.data?.message || error.message);
      }    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")){
      toast.error("❌ Error: Please upload an image file");
      return;
    } 
    if (file.size > MAX_FILE_SIZE) {
      toast.error("❌ Error: File size too large. Maximum allowed size is 100 kB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if(fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <div className="p-4 w-full">
    {imagePreview && (
      <div className="mb-3 flex items-center gap-2">
        <div className="relative">
          <img
            src={imagePreview}
            alt="Preview"
            className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
          />
          <button
            onClick={removeImage}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
            flex items-center justify-center"
            type="button"
          >
            <X className="size-3" />
          </button>
        </div>
      </div>
    )}

    <form onSubmit={handleSendMessage} className="flex items-center gap-2">
      <div className="flex-1 flex gap-2">
        <input
          type="text"
          className="w-full input input-bordered rounded-lg input-sm sm:input-md"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />

        <button
          type="button"
          className={`hidden sm:flex btn btn-circle
                   ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`}
          onClick={() => fileInputRef.current?.click()}
        >
          <Image size={20} />
        </button>
      </div>
      <button
        type="submit"
        className="btn btn-sm btn-circle"
        disabled={!text.trim() && !imagePreview}
      >
        <Send size={22} />
      </button>
    </form>
  </div>
  )
}

export default MessageInput