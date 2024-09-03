import { useInView } from "react-intersection-observer";
import "./Skill.css";

const skills1 = [
  { name: "HTML", image: "/skills/angularjs.png" },
  { name: "CSS", image: "/skills/css3.png" },
  { name: "JavaScript", image: "/skills/javascript.png" },
  { name: "React", image: "/skills/angularjs.png" },
  { name: "TypeScript", image: "/skills/php.png" },
  { name: "Sass", image: "/skills/python.png" },
  { name: "Webpack", image: "/skills/tailwind.png" },
  { name: "Babel", image: "/skills/angularjs.png" },
  { name: "Jest", image: "/skills/angularjs.png" },
  { name: "GraphQL", image: "/skills/css3.png" },
  { name: "Tailwind CSS", image: "/skills/angularjs.png" },
];

const skills2 = [
  { name: "Node.js", image: "/skills/angularjs.png" },
  { name: "MongoDB", image: "/skills/css3.png" },
  { name: "Python", image: "/skills/javascript.png" },
  { name: "Git", image: "/skills/angularjs.png" },
  { name: "Docker", image: "/skills/php.png" },
  { name: "Kubernetes", image: "/skills/tailwind.png" },
  { name: "AWS", image: "/skills/angularjs.png" },
  { name: "Firebase", image: "/skills/python.png" },
  { name: "SQL", image: "/skills/tailwind.png" },
  { name: "Express.js", image: "/skills/css3.png" },
  { name: "REST API", image: "/skills/python.png" },
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
