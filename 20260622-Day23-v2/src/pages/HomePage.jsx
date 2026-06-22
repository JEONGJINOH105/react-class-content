import React from "react";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <nav className="NavBar">
        <h1>Jhon</h1>

        <div className="Menus">
          <a href=""><span className="a-tag">Home</span></a>
          <a href="">About</a>
          <a href="">Skills</a>
          <a href="">My work</a>
          <a href="">Testimonial</a>
          <a href="">Contact</a>
        </div>
      </nav>

      <section className="Menu-Home">
        <img
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjhfMjQx%2FMDAxNjM4MDkxNDcyODcy.ZtA05mFUg_0kXBiqEjE3MveXf_mRq4RxhRZVtX2hrzkg.yllUEuEz2G5JEU7CDGZMHAVR5ld4N2Kr_7O6Uz9oceUg.PNG.classe82%2F08._DJ_%25B6%25F3%25C0%25CC%25BE%25F0%25C0%25C7_%25B0%25A1%25C0%25BB%252C_%25C4%25B7%25C7%25CE%25B0%25FA_%25BA%25D2%25B8%25DB%25C0%25CC_%25C7%25CA%25BF%25E4%25C7%25D1_%25BD%25C3%25B0%25A3.png&type=a340"
          alt=""
        />
        <p>
          Hello <br /> I'm <span className="p-tag">Coder</span>, Jhon
        </p>
        <button>Contact Me</button>
      </section>
    </>
  );
}
