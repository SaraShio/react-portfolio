import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";

import "./styles.css";

//const rootElement = document.getElementById("root");
//const root = createRoot(rootElement);

function App() {
  //return "My portfolio";
  return (
    <div>
      <Avatar
        name="Sofia Loren"
        tagline="I design and build awesome web applications"
        image="https://randomuser.me/api/portraits/men/15.jpg"
      />
      <WorkExperience>
        <Company name="Microsoft" from_date="Jan 2019" to_date="Dec 2020" />
        <Company name="Netflix" from_date="May 2017" to_date="Nov 2020" />
        <Company name="Google" from_date="Dec 2013" to_date="May 2023" />
      </WorkExperience>
      <Portfolio>
        <Project image="https://picsum.photos/id/20/200/300" />
        <Project image="https://picsum.photos/id/36/200/300" />
        <Project image="https://picsum.photos/id/60/200/300" />
        <Project />
      </Portfolio>

      <Avatar
        name="Jane Doe"
        tagline="I am awesome!"
        image="https://randomuser.me/api/portraits/women/15.jpg"
      />
      <WorkExperience id="1" profile="John Doe">
        <Company name="Microsoft" from_date="Jan 2019" to_date="Dec 2020" />
        <Company name="Netflix" from_date="May 2017" to_date="Nov 2020" />
        <Company name="Google" from_date="Dec 2013" to_date="May 2023" />
      </WorkExperience>
      <Portfolio>
        <Project image="https://picsum.photos/id/20/200/300" />
        <Project image="https://picsum.photos/id/36/200/300" />
        <Project image="https://picsum.photos/id/60/200/300" />
        <Project />
      </Portfolio>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="profile-container">
      <div className="profile-img">
        <img src={props.image} alt="" />
      </div>
      <div>
        <p className="profile">Hello, I'm {props.name}</p>
        <p className="profil-tagline">{props.tagline}</p>
      </div>
    </div>
  );
}

function WorkExperience(props) {
  return (
    <div>
      <h2>Work experience</h2>
      <ul className="work">{props.children}</ul>
    </div>
  );

  //return "work experience";
}

function Company(props) {
  // return "company";
  return (
    <li>
      <h2 className="work-title">
        <span className="company">{props.name}</span>
        <span className="from">{props.from_date}</span>
        <span className="to">{props.to_date}</span>
      </h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </li>
  );
}

function Portfolio(props) {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio">{props.children}</div>
    </div>
  );
}

function Project(props) {
  let image;
  if (!props.image) {
    image = "https://placehold.co/600x400";
  } else {
    image = props.image;
  }
  return (
    <div className="project">
      <div className="project-image">
        <img src={image} alt="" />
      </div>
      <div className="project-description">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
