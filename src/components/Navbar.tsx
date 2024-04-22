import { useAuth } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <div className="flex justify-end  items-center  gap-5 border border-slate-200 rounded-md pr-10 py-5">
      <ul className="flex flex-row gap-5">
        <li className="border border-orange-200 px-2 rounded-md hover:bg-orange-200">
          <button onClick={() => signOut()}>Logout</button>
        </li>
      </ul>
    </div>
  );
};
