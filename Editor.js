import React, { useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function Editor({ room }) {
  const textareaRef = useRef();

  useEffect(() => {
    socket.emit("join", room);

    socket.on("code-update", (code) => {
      textareaRef.current.value = code;
    });
  }, []);

  const handleChange = () => {
    const code = textareaRef.current.value;
    socket.emit("code-change", { room, code });
  };

  return (
    <textarea
      ref={textareaRef}
      onChange={handleChange}
      placeholder="Start coding..."
      style={{ width: "100%", height: "300px" }}
    />
  );
}

export default Editor;
