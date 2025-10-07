import { useEffect, useState } from 'react';
import { db, doc, setDoc, onSnapshot } from "../config/firebase";
import Swal from "sweetalert2";

const TextEditor = () => {
  const ACCENT_COLOR = 'text-[#6b46ff]';
  const [val, setVal] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  let sumbit = async (content) => {


    try {
      setIsSaving(true);
      await setDoc(doc(db, "text", "1"), {
        "text": content
      })
      console.log("Text Save");
    } catch (error) {
      console.error("Error saving document:", error);
    }
  }
  let saveText = async () => {
    if (val === "") {
      Swal.fire({
        icon: "warning",
        title: "Empty Field!",
        text: "Please enter some text before submitting.",
        confirmButtonColor: "#6b46ff", // matches your accent color
      });
      return
    } else {

      sumbit(val)
    }
  }

  let getData = () => {
    onSnapshot(doc(db, "text", "1"), (docSnap) => {
      if (docSnap.exists()) {
        let content = docSnap.data().text;
        setVal(content)
        setLoading(false)
        if (content === "") {
          // console.log("yes");

          setIsSaving(false);
        } else {
          setIsSaving(true);

        }
      }
    })
  }
  useEffect(() => {
    getData()
  }, []);
  let handleClear = () => {
    setVal("")
    sumbit("");
    setIsSaving(false);
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-[#6b46ff] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-[#6b46ff] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-[#6b46ff] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          </div>
          <p className="text-[#6b46ff] font-medium tracking-wider">Loading</p>
        </div>
      </div>
    )
  }
  let getVal = (e) => {
    setVal(e.target.value)
    setIsSaving(false)
  }
  return (
    // The main card container
    <div className="bg-white shadow-lg rounded-lg border border-gray-100 w-full">
      <div className="flex p-4 md:p-8">


        <div className="w-16 flex flex-col items-center pt-1 md:pt-3 flex-shrink-0 max-[600px]:hidden">

          <div className={`p-1 cursor-pointer ${ACCENT_COLOR}`}>
            <span className="text-3xl font-light">☰</span>
          </div>
          <div className="p-1 mt-6 cursor-pointer text-gray-400">
            <span className="text-2xl font-light">📄</span>
          </div>
        </div>

        {/* Right Content Area (W: Auto) */}
        <div className="flex-grow pl-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Text</h1>

          {/* Text Input Area Container */}
          <div className="flex flex-col">
            {/* Textarea without absolute positioning */}
            <textarea
              onChange={getVal}
              value={val}
              className="w-full h-48 md:h-64 resize-none outline-none text-lg text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg p-4 focus:border-[#6b46ff] focus:ring-2 focus:ring-[#6b46ff]/10 transition-all"
              placeholder="Type something..."
            ></textarea>

            {/* Button Group - now in normal flow below textarea */}
            <div className="flex justify-end items-center space-x-4 mt-4">
              {val === "" ? null :
                <button
                  style={{ cursor: "pointer" }}
                  onClick={handleClear}
                  className="px-8 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium"
                >
                  Clear
                </button>
              }
              <button
                style={{ cursor: "pointer" }}
                onClick={saveText}
                disabled={isSaving}
                className="px-8 py-2 bg-[#6b46ff] text-white border border-[#6b46ff] rounded hover:bg-[#5a3ae6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6b46ff]/30 font-medium disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSaving ? "Saved..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TextEditor