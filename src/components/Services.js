import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>What I do?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
          
              <div className="feature-content media-body">
                <h5>Visual Identity Graphic Design.</h5>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
           
              <div className="feature-content media-body">
                <h5>Creation  sites WordPress.</h5>
                <p>
               

                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
             
              <div className="feature-content media-body">
                <h5>Mastery in Figma and Adobe XD.</h5>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
             
              <div className="feature-content media-body">
                <h5>Creat and Collaborate for Brand Identity.</h5>
                <p>
                
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              
              <div className="feature-content media-body">
                <h5> Design prototyping.</h5>
                <p>
                  
                </p>
              </div>
            </div>
          </div><div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              
              <div className="feature-content media-body">
                <h5> Social media Ads. </h5>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
             
              <div className="feature-content media-body">
                <h5>Contribute innovative & creative ideas .</h5>
                <p>
                  
                </p>
              </div>
            </div>
          </div><div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
            
              <div className="feature-content media-body">
                <h5>Producing marketing assets.</h5>
                <p>
                  
                </p>
              </div>
            </div>
          </div><div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
            
              <div className="feature-content media-body">
                <h5>Design and mockups for new showrooms.</h5>
                <p>
                  
                </p>
              </div>
            </div>
          </div><div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
             
              <div className="feature-content media-body">
                <h5> Infographics & Presentations.</h5>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              
              <div className="feature-content media-body">
                <h5>SEO Marketing.</h5>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              
              <div className="feature-content media-body">
                <h5>Advanced skills working with Mac.</h5>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="separated" />
        {/* Comment  <Testimonials />*/}
      </div>
    </section>
  );
};
export default Services;
