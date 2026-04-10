import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Student</h4>
                <h5>Dev Bhoomi Uttarakhand University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Bachelor of Technology (B.Tech) in Computer Science Engineering (CSE).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Schooling</h4>
                <h5>Patna, Bihar</h5>
              </div>
              <h3>PREVIOUS</h3>
            </div>
            <p>
              Completed earlier education and schooling in Patna, Bihar, building a strong academic foundation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance & Projects</h4>
                <h5>Web & Video Editing</h5>
              </div>
              <h3>EXPERIENCE</h3>
            </div>
            <p>
              Hands-on experience in building basic web projects using HTML, CSS, and Next.js. Edited videos using After Effects, Premiere Pro, and CapCut. Created visual content via Canva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
