import { Send } from "lucide-react";
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

const PREVIEW_MESSAGE = [
  {id:1, content: "Hey! How's it going?", isSent:false},
  {id:2, content: "Hey! I'm good. How about you?", isSent:true},
];

const SettingsPage = () => {
  const {theme, setTheme} = useThemeStore();
  return (
    <div className=" h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6 ">
        <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold  ">Theme</h2>
        <p className=" text-sm text-base-content/70">Choose a theme for your chat interface</p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t)=>(
            <button 
              key={t} 
              onClick={()=>setTheme(t)} 
              className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors  ${theme===t ? "bg-base-200" : "hover:bg-base-200/50"} `}
            >
              <div className="relative w-full h-8 overflow-hidden  rounded-md" data-theme={t}>
                <div className="absolute inset-0  grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary "></div>
                  <div className="rounded bg-accent "></div>
                  <div className="rounded bg-neutral "></div>
                </div>
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center group-hover:text-primary">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* preview section */}
        <h3 className="text-lg font-semibold mb-3 ">Preview</h3>
        <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg ">
          <div className="p-4 bg-base-200 ">
            <div className="max-w-lg mx-auto ">
              {/* mock chat UI  */}
              <div className="bg-base-100 rounded-x shadow-sm overflow-hidden">
                {/* chat header */}
                <div className="px-4 py-2 bg-base-100 border-b border-base-300 ">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
                      A
                    </div>
                  <div>
                  <h3 className="font-medium text-sm ">Anup</h3>
                  <p className="text-xs text-base-content/70  " >Online</p>
                </div>
              </div>
            </div>

            {/* chat messages */}
            <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-blue-100"> 
              {PREVIEW_MESSAGE.map((m)=>(
                <div key={m.id} className={`flex gap-2 ${m.isSent ? "justify-end" : "justify-start"}`}>
                  <div className={`p-3 rounded-xl shadow-sm max-w-[80%]: ${m.isSent ? "bg-primary text-primary-content" : "bg-base-200"}`}>
                    <p className=" text-sm">{m.content}</p>
                    <p className={`text-[10px] mt-1.5 ${m.isSent} ? "text-primary-content/70  " :"text-base-content/70" `} >
                      12:00 PM
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* chat input */}
          <div className="p-4 bg-base-100 border-t border-base-300">
            <div className="flex gap-3">
              <input 
                type="text" 
                placeholder="Type a message" 
                className="flex-1 h-10 input input-bordered text-sm" 
                value="This is a preview" 
                readOnly 
              />
              <button className="btn btn-primary h-10 min-h-0">
                <Send size={16} />
              </button>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage;