import React from "react";
import Home from "./home/page";
import Education from "./education/page";
import Experience from "./experience/page";
import Skills from "./skills/page";

export default function Base() {
  return (
    <main>
      <Home />
      <Education />
      <Experience />
      <Skills />
    </main>
  );
}
