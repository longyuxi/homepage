import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p dangerouslySetInnerHTML={{__html: education.description}}></p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em>{work.years}</em>
          </p>
          <p dangerouslySetInnerHTML={{__html: work.description}}></p>
          <br/>
        </div>
      );
    });

    const extracurricular = this.props.data.extracurricular.map(function (extracurricular) {
      return (
        <div key={extracurricular.company}>
          <h3>{extracurricular.company}</h3>
          <p className="info">
            {extracurricular.title}
            <span>&bull;</span> <em>{extracurricular.years}</em>
          </p>
          <p dangerouslySetInnerHTML={{__html: extracurricular.description}}></p>
          <br/>
        </div>
      );
    });

    const projects = this.props.data.projects.map(function (projects) {
      return (
        <div key={projects.company}>
          <h3>{projects.company}</h3>
          <p className="info">
            {projects.title}
          </p>
          <p dangerouslySetInnerHTML={{__html: projects.description}}></p>
          <br/>
        </div>
      );
    });

    const random = this.props.data.random.map(function (random) {
      return (
        <div key={random.company}>
          <p dangerouslySetInnerHTML={{__html: random.description}}></p>
          <br/>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    const slide_duration = 1300;

    return (
      <section id="resume">
        <Slide left duration={slide_duration}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={slide_duration}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Experience</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={slide_duration}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Extracurricular</span>
              </h1>
            </div>

            <div className="nine columns main-col">{extracurricular}</div>
          </div>
        </Slide>

        <Slide left duration={slide_duration}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Projects</span>
              </h1>
            </div>

            <div className="nine columns main-col">{projects}</div>
          </div>
        </Slide>

        <Slide left duration={slide_duration}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Random Things</span>
              </h1>
            </div>

            <div className="nine columns main-col">{random}</div>
          </div>
        </Slide>

        {/* <Slide left duration={slide_duration}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide> */}

      </section>
    );
  }
}

export default Resume;
