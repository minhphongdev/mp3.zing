import { useState } from "react";

function App() {
  const [first, setfirst] = useState("");
  console.log(first);
  return (
    <div className="flex h-screen item-center border border-red-500 justify-center gap-8">
      <input
        type="text"
        value={first}
        onChange={(event) => setfirst(event.target.value)}
        className="outline-none border border-blue-600 px-4 py-4 w-[400px] h-[40px]"
      />

      <button
        type="button"
        className="outline-none px-4 py-2 bg-blue-500 w-[100] h-[40px] rounded-md text-white"
      >
        Add
      </button>
    </div>
  );
}

export default App;
