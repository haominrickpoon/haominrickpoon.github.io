import React from "react";
import Navbar from "../components/Navbar";
import "../css/BlogPage.css";
import { ReactComponent as SemiCircle } from "../resources/semi_circle.svg";

export default function BlogPage() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="card-list">
          <article className="card">
            <header className="card-header">
              <p> Mar 16 2021</p>
              <h2>Dev blog #0</h2>
            </header>
            <p>Hello everyone, We are meking a gaem</p>
            <div className="card-author">
              <a className="author-avatar" href="/">
                <img src="logo192.png" alt="avatar" />
              </a>
              <SemiCircle className="half-circle" />

              <div className="author-name">
                <div className="author-name-prefix">Author</div>
                <a href="https://github.com/hackermanone">Hackermanone</a>
              </div>
            </div>
            <div className="tags">
              <a href="/devblog">Raid</a>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
