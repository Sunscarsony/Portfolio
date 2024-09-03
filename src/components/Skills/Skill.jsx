import { useInView } from "react-intersection-observer";
import "./Skill.css";

const skills1 = [
  { name: "HTML", image: "/skills/html.png" },
  { name: "CSS", image: "/skills/css3.png" },
  { name: "JavaScript", image: "/skills/javascript.png" },
  { name: "React", image: "/skills/react-js.png" },
  { name: "TypeScript", image: "/skills/typescript.png" },
  { name: "Webpack", image: "/skills/webpack.png" },
  { name: "Babel", image: "/skills/babel.png" },
  { name: "NestJS", image: "/skills/nestjs.png" },
  { name: "Tailwind CSS", image: "/skills/tailwind.png" },
];

const skills2 = [
  { name: "Node.js", image: "/skills/nodejs.png" },
  { name: "MongoDB", image: "/skills/mongo-db.png" },
  { name: "Python", image: "/skills/python.png" },
  { name: "Git", image: "/skills/git.png" },
  { name: "Docker", image: "/skills/docker.png" },
  { name: "Kubernetes", image: "/skills/kubernetes.png" },
  { name: "AWS", image: "/skills/aws.png" },
  { name: "Firebase", image: "/skills/firebase.png" },
  { name: "SQL", image: "/skills/sql.png" },
  { name: "jQuery", image: "/skills/jquery.png" },
  { name: "Java", image: "/skills/java.png" },
];

const Skill = () => {
  const { ref: skillsRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  return (
    <div
      className={`skills-section ${inView ? "reveal" : ""}`}
      ref={skillsRef}
      id="skills"
    >
      <div className="content">
        <h1 className="skills-heading">My Skills</h1>
        <p className="skills-content">
          I have experience in building dynamic web applications with JavaScript
          and React.js, designing responsive interfaces with CSS, and developing
          server-side solutions with Node.js. I am skilled in version control
          with Git and managing SQL databases, with a solid grasp of modern web
          development practices and a commitment to ongoing learning.
        </p>
      </div>
      <div className="carousel-container">
        <div className="carousel carousel1">
          <div className="carouselInner">
            {[...skills1, ...skills1].map((skill, index) => (
              <div className="card" key={index}>
                <img src={skill.image} alt={skill.name} />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel carousel2">
          <div className="carouselInner">
            {[...skills2, ...skills2].map((skill, index) => (
              <div className="card" key={index}>
                <img src={skill.image} alt={skill.name} />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
