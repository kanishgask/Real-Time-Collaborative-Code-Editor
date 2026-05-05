import React, { useState } from "react";
import Editor from "./Editor";
import Chat from "./Chat";

function App() {
  const [room, setRoom] = useState("");

  return (
    <div>
      <h1>Live Code Editor</h1>

      {!room ? (
        <div>
          <input onChange={(e) => setRoom(e.target.value)} placeholder="Room ID" />
          <button onClick={() => setRoom(room)}>Join</button>
        </div>
      ) : (
        <>
          <Editor room={room} />
          <Chat room={room} />
        </>
      )}
    </div>
  );
}

export default App;
