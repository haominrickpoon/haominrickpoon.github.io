import React from "react";
import "../css/BlogPage.css";
import { ReactComponent as SemiCircle } from "../resources/semi_circle.svg";

export default function BlogPage() {
  return (
    <section className="card-list">
      <article className="card">
        <header className="card-header">
          <p> Mar 15 2021</p>
          <h2>Today</h2>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="/">
            <img src="logo192.png" alt="avatar" />
          </a>
          <SemiCircle className="half-circle" />

          <div className="author-name">
            <div className="author-name-prefix">Author</div>
            Ricky Chen
          </div>
        </div>
        <div className="tags">
          <a href="/">Raid</a>
        </div>
      </article>

      <article className="card">
        <header className="card-header">
          <p> Mar 23 2021</p>
          <h2>Today</h2>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="/">
            <img src="logo192.png" alt="avatar" />
          </a>
          <SemiCircle className="half-circle" />

          <div className="author-name">
            <div className="author-name-prefix">Author</div>
            Ricky Chen
          </div>
        </div>
        <div className="tags">
          <a href="/">Raid</a>
        </div>
      </article>

      <article className="card">
        <header className="card-header">
          <p> Mar 15 2021</p>
          <h2>Today</h2>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="/">
            <img src="logo192.png" alt="avatar" />
          </a>
          <SemiCircle className="half-circle" />

          <div className="author-name">
            <div className="author-name-prefix">Author</div>
            Ricky Chen
          </div>
        </div>
        <div className="tags">
          <a href="/">Raid</a>
        </div>
      </article>
    </section>
  );
}
