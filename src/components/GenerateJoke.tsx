import { useEffect, useState } from "react";
import { decode } from "he";
import logo from "../assets/img/logo.png";

function GenerateJoke() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async (signal: AbortSignal) => {
    const url = new URL("https://v2.jokeapi.dev/joke/Any?type=single");
    const response = await fetch(url, { signal });
    const value = await response.json();

    setJoke(decode(value.joke));
  };

  useEffect(() => {
    if (!joke) {
      const controller = new AbortController();
      fetchJoke(controller.signal);

      return () => controller.abort();
    }
  }, [joke]);

  return (
    <div className="flex flex-col justify-center items-center p-10 gap-5 border border-slate-200 rounded-md py-20">
      <header>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
      </header>
      <div className="py-10 bg-slate-200 px-10 rounded-md sm:w-1/4 text-wrap w-full">
        <p>{joke || "..."}</p>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mt-10"
        onClick={() => setJoke("")}
      >
        Get a new joke
      </button>
    </div>
  );
}

export default GenerateJoke;
