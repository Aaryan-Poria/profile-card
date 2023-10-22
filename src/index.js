import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <Bio />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURExUYHSggGBolGxMTITEhJSk3Li46Fx8zODM4NygtLisBCgoKDQ0NDg0NDisZFRktKy0tNzc3KystKysrKzctKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDBv/EABYQAQEBAAAAAAAAAAAAAAAAAAARAf/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMHBv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A8oA+devgAAAAAAAAgsFECCiKAAAIEABUFQRVEUABAAAAAAAAAQFgAKgIoUKgFUAKAgKIAoihQQCqIoCAIKgFUQFVUEiqIAoCAAAACIDTIKBUUQSqJQSgKLUUAoigUEAqiVKJVAFoqAlUEFAUKgAqiAtURRVAZAAGVRWnMQKAlEVFGaUGlZpQaozVoKAiiaJqoUqaijVVlUFKzU3QbqVhVg3mqxjWJqtCCFVBRUAFVUE1pQRBkqUrbkqUTQKVEUUqAVSoBVq4yuA0tQQEEAEFFxayoGoAguIoYq1mrgrSpishioooioKKijWKgIrmINuSpoAgAgAAKCxFwUAABNU0GRUEAAAAAAGsZXBcbVnFQUBFUAVFRRrAAVyGoNOSI0gIigIoACgIKAYoqCJqoDIpFEVcARFAQVAFxFwTFUEVVRUVQAQFGsRUUVlGkVzRGk0ERRQAAFAMXEVAAATcaBWUa1BBFNBEUUEaSAi4QBcUxUBQRQEFwVAaURQQUGERQGRpFRIKAgoACgYCosBFFRNaQREaIqMqsARGiAysUABUUQBqAAooAAJVQUVmAgJAFEiI0gICqgoiNZgCiiKCgAkBASKIBFEAgqAQBRYgoKigKAqCCiCCi0RFFRBUBUAZgoBEFBoAABUqoAoAAigEEUERQAASqKAACAAAAAAAIAANCKAgAAAKAIKAgAKACAIAogCiAKAoAIAAAAAAP//Z"
        alt="Solid-Color"
        width="100%"
        height="200px%"
      />
    </div>
  );
}

function Bio() {
  return (
    <div className="myBio">
      <p className="name">Aaryan Poria</p>
      <p>
        Currently pursuing a B.Tech in CSE degree from VIT Vellore, I'm on a
        journey to master Frontend Development, with guidance from The Odin
        Project and Jonas Schmedtmann's React Course. My interests extend beyond
        coding, encompassing gaming, chess, and a love for diving into novels.
      </p>
    </div>
  );
}
// 💪 🖒
const skills = [
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "yellow"
  },
  {
    skill: "HTML",
    level: "intermediate",
    color: "green"
  },
  {
    skill: "CSS",
    level: "intermediate",
    color: "orange"
  },
  {
    skill: "React",
    level: "beginner",
    color: "blue"
  }
];

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
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
