import React from "react";
import GenerateJoke from "../components/GenerateJoke";
import { Navbar } from "../components/Navbar";

export const Dashboard: React.FC = () => {
  return (
    <section>
      <Navbar />
      <GenerateJoke />
    </section>
  );
};
