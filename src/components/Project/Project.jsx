import { useEffect, useRef, useState } from "react";
import "./Project.css";

const Project = () => {
  const sectionRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    image: "",
    heading: "",
    content: ""
  });

  useEffect(() => {
    const section = sectionRef.current;

    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (sectionTop < viewportHeight * 0.8) {
        section.classList.add("project-reveal");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = (image, heading, content) => {
    setModalContent({ image, heading, content });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className="project-section" ref={sectionRef} id="projects">
        <div className="project-container">
          <h1 className="project-main-heading">My Projects</h1>
          <p className="project-section-content">
            Explore my projects to see how I transform innovative ideas into
            impactful solutions. Each project showcases my skills, creativity,
            and commitment to excellence.
          </p>

          <div className="project-cards-container">
            <div className="project-card">
              <img
                src="/projects/foodbash.png"
                alt="FoodBash"
                className="project-card-image"
              />
              <h2 className="project-card-heading">FoodBash</h2>
              <p className="project-card-content">
                A campus-focused online food delivery app, available on web and
                mobile. FoodBash simplifies ordering and tracking food from
                campus vendors.
              </p>
              <div className="card-button-wrap">
                <button
                  className="custom-button"
                  onClick={() =>
                    openModal(
                      "/projects/foodbash.png",
                      "FoodBash",
                      "A campus-focused online food delivery app, available on web and mobile. FoodBash simplifies ordering and tracking food from campus vendors."
                    )
                  }
                >
                  View Project
                </button>
              </div>
            </div>

            <div className="project-card">
              <img
                src="/projects/ignitia.png"
                alt="IGNITIA 2K24"
                className="project-card-image"
              />
              <h2 className="project-card-heading">IGNITIA 2K24</h2>
              <p className="project-card-content">
                A vibrant website for the college techno-cultural fest 2024,
                offering event details and interactive features for an engaging
                user experience.
              </p>
              <div className="card-button-wrap">
                <button
                  className="custom-button"
                  onClick={() =>
                    openModal(
                      "/projects/ignitia.png",
                      "IGNITIA 2K24",
                      "A vibrant website for the college techno-cultural fest 2024, offering event details and interactive features for an engaging user experience."
                    )
                  }
                >
                  View Project
                </button>
              </div>
            </div>

            <div className="project-card">
              <img
                src="/projects/bustrek.png"
                alt="BusTrek"
                className="project-card-image"
              />
              <h2 className="project-card-heading">BusTrek</h2>
              <p className="project-card-content">
                A real-time bus tracking system for campus, providing live
                updates and route information to enhance student commuting.
              </p>
              <div className="card-button-wrap">
                <button
                  className="custom-button"
                  onClick={() =>
                    openModal(
                      "/projects/bustrek.png",
                      "BusTrek",
                      "A real-time bus tracking system for campus, providing live updates and route information to enhance student commuting."
                    )
                  }
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalContent.image} alt={modalContent.heading} />
            <h2>{modalContent.heading}</h2>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
