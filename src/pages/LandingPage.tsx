import React from "react";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <header className="title">
          <h2>Raid Albatross</h2>
        </header>
        <div className="content">
          <p>
            Welcome to the Raid Albatross Legends website! I will be posting
            updates about the game whenever I can. In the meantime, please feel
            free to ask any questions on github
          </p>
        </div>
      </main>
    </div>
  );
}
