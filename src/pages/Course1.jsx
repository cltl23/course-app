import React from "react";
import Tutorial from "../components/tutorial/tutorial";
import About from "../components/about/About";
import Content from "../components/content/Content";
import Notes from "../components/notes/Notes";
import Container from "../components/container/Container";
import "./Course1.scss";

export default function Course1() {
  return (
    <div className="CourseOne">
      <Container>
        <section>
          <Tutorial />
          <Notes />
        </section>

        <section>
          <About />
          <Content />
        </section>
      </Container>
    </div>
  );
}
