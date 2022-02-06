import React from "react";
import logo from "../Images/logo.png";

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        {/* コメントだよ。 */}

        <h1 className="text-3xl font-bold underline bg-dark">
          Hello world!
        </h1>
      </header>
    </div>
);
}