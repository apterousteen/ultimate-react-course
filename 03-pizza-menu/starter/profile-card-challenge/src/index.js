import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "plum",
  },
  {
    skill: "UX/UI",
    level: "advanced",
    color: "khaki",
  },
  {
    skill: "UX/UI",
    level: "advanced",
    color: "lightgreen",
  },
  {
    skill: "Git & GitHub",
    level: "intermediate",
    color: "lightpink",
  },
  {
    skill: "React",
    level: "beginner",
    color: "lightblue",
  },
  {
    skill: "React Native",
    level: "dummy",
    color: "lightgray",
  },
];

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.pinimg.com/originals/ad/f1/44/adf1445aaa2e40006e6a0729be3b3a64.jpg"
      alt="avatar"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>smol developer</h1>
      <p>
        Lorem Ipsum，也称乱数假文或者哑元文本，
        是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
        Ipsum从西元15世纪起就被作为此领域的标准文本使用。
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill name={skill.skill} icon={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ name, icon, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>
        ({icon === "advanced" && "^_^"}
        {icon === "intermediate" && "~_~"}
        {icon === "beginner" && ">_<"}
        {icon === "dummy" && "x_x"})
      </span>
    </div>
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
