import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section" style={{ paddingTop: "0rem" }}>
          <div className="container">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url('/img/balloons.jpg')`
                }}
              >
                <h1
                  className="has-text-weight-bold has-text-centered is-size-1"
                  style={{
                    boxShadow: "0.5rem 0 0 #1F6492, -0.5rem 0 0 #1F6492",
                    backgroundColor: "#1F6492",
                    color: "white",
                    padding: "1rem",
                    fontFamily: "Montserrat, sans-serif"
                  }}
                >
                  Class Thoughts
                </h1>
              </div>
            </div>

            <div className="content">
              <h4>Blog info...</h4> Enim ad culpa elit elit adipisicing nostrud.
              Dolore anim elit laborum nisi laboris qui eu fugiat minim elit
              amet tempor. Laborum nostrud nulla consequat consequat quis cillum
              ex tempor. Ad pariatur nostrud elit nulla aute. Excepteur dolor
              consectetur culpa aliqua pariatur eiusmod consequat labore nisi.
            </div>
            <BlogRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
