import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>My Portfolio.</h3>
        </div>
        <div className="portfolio-filter-01">
          <ul className="filter nav">
            <li
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              All
            </li>
            <li
              className={`c-pointer ${activeBtn("logos")}`}
              onClick={handleFilterKeyChange("logos")}
              data-filter=".logos"
            >
              Logos
            </li>
            <li
              className={`c-pointer ${activeBtn("branding")}`}
              onClick={handleFilterKeyChange("branding")}
              data-filter=".branding"
            >
              Branding
            </li>
            <li
              className={`c-pointer ${activeBtn("socialmedia")}`}
              onClick={handleFilterKeyChange("socialmedia")}
              data-filter=".socialmedia"
            >
              Social Media Posts
            </li>
            <li
              className={`c-pointer ${activeBtn("uiux")}`}
              onClick={handleFilterKeyChange("uiux")}
              data-filter=".uiux"
            >
              UI/UX Designs
            </li>
            <li
              className={`c-pointer ${activeBtn("info")}`}
              onClick={handleFilterKeyChange("info")}
              data-filter=".info"
            >
              Infographics & Presentations
            </li>
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
          <div className="grid-item product branding uiux ">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
                
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-1.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding uiux info">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
                
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-2.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding socialmedia">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
                
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-3.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product logos">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold"> Chaneb Food</h5>
                <span>Software used : Illustrator</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/CHANEBFOOD.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-5.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          {/* grid item */}
          <div className="grid-item product logos">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold"> May mode Fashion</h5>
                <span>Software used : Illustrator</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/maymodemockup.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-5.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          {/* grid item */}
          <div className="grid-item product logos">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold"> Lueur Fashion</h5>
                <span>Software used : Illustrator</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/LUEURM6.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-5.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          {/* grid item */}
          <div className="grid-item product logos">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold"> A1QA</h5>
                <span>Software used : Illustrator</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/AQ1AMockup.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-5.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          {/* grid item */}
          <div className="grid-item product logos">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold"> Truck Diagnostic</h5>
                <span>Software used : Illustrator</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/TRCUKDIAGNOSTIC.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-5.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */} 
          {/* grid item */}
          <div className="grid-item product logos">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold"> 7 Stars Diner</h5>
                <span>Software used : Illustrator</span>
              </div>
              <div className="portfolio-img">
              <img src="static/img/7diner.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-5.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          {/* grid item */}
          <div className="grid-item product logos">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold"> Teach me Right</h5>
                <span>Software used : Illustrator</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/tr.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-5.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          {/* grid item */}
          <div className="grid-item product logos">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold"> Doctor</h5>
                <span>Software used : Illustrator</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/doctor.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-5.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          {/* grid item */}
          <div className="grid-item product logos">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold"> zen online sotre</h5>
                <span>Software used : Illustrator</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/zen.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-5.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item socialmedia info">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
               
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-4.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product logos">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Nada´s</h5>
                <span>Software used : Illustrator</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/nadas.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-6.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item socialmedia">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
               
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-7.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
             
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-8.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item socialmedia">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
               
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-9.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          
          {/* grid item */}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
