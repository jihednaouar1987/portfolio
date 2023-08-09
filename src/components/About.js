const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Product Designer with over 4 years of
                  experience.{" "}
                </h3>
                <p>
                  {`I'm`} a Product Designer with over 4 years of
                  experience. {`I'm`} from Tunisia. I create WordPress sites and 
                  I concept UI/UX  elements for amazing people around the world. 
                  I like work with new people. New people new Experiences.
  
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">5</span>
                      <div className="media-body">
                        Websites <br />
                        Completed.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">11</span>
                      <div className="media-body">
                        UI/UX <br />
                        Design.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2010-2012</span>
                <h6>Applied license in computing 
                    Specialty : Multimedia Web</h6>
                <p>Higher Institute of Applied Sciences and Technology of Sousse</p>
              </li>
              
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} perfectly handle the diferent software specific to my profesion
                 such as  Figma, Photoshop and Ilustrator. Dynamic, serious, meticulous, 
                 invested, profesional,hard working and sociable.
                 
              </p>
              <div className="skill-lt">
                <h6>Figma</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "82%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>WordPress</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "72%" }}>
                    <span data-toggle="tooltip" title="72%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Photoshop</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "86%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Illustrator</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="90%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Miscrosoft Softwares</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="90%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a1.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>UI/UX Designer</h6>
                  <label>Emka Engineering | Site| OCT 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                  Continuing in this vein,my experience in designing user 
                  experiences and interfaces for various applications has 
                  alowed me to develop a nuanced approach to the process.
                  Whether its for desktop , web ,or mobile applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a2.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Graphic Designer</h6>
                  <label>Emka Engineering | Site| OCT 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                    <ul>
                    <ol>Concept Vusial Identity and Branding</ol>
                   <ol>Concept Posts and materials for social media.</ol>
                   <ol>Concept Presentations for events or meetings.</ol>
                   <ol>Concept Simulations products.</ol>
                   <ol>Concept Print elements(flyers,brochures...)</ol>
                   </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a2.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Creator WordPress Sites</h6>
                  <label>Emka Engineering | Site| OCT 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <ul>
                    <ol>Creation of web sites by WordPres.  </ol>
                   <ol>Creation of SEO optimized..</ol>
                   <ol>Responsive designs.</ol></ul>
               
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a3.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Content Manager Social Media Pages </h6>
                  <label>Emka Engineering | Site| OCT 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <ul>
                   <ol> Social media ads</ol>
                   <ol> Banners Managment social media pages</ol>
                   <ol> Infographics & Presentations</ol>
                   
                   </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
