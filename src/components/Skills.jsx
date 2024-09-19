import Section from "./Section";
import checkmark from "../assets/checkmark.png";
const Skills = () => {
  return (
    <Section  className="mt-15" >
      <div className= "relative max-w-[32rem] mx-auto text-center mt-[40rem] md:mb-15 lg:mb:[60rem]">
     <h1 className="text-white text-5xl font-bold mt-[35rem] ">Skills</h1> 
     
     </div>
        
<div>
 
      <div id="skills" className="experience-details-container">
        <div className="about-containers">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[12rem] md:mb-20 lg:mb:[6rem]">
            <h2 className="skills-sub-title">Web Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Next JS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
            <h2 className="skills-sub-title">Backend Development + other languages</h2>
            <div className="article-container">
               
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Python</h3>
                  <p>intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>SQL</h3>
                  <p>Experienced</p>
                </div>
              </article>





              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Flask</h3>
                  <p>intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>SQL databases</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>RESTful APIs</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>PHP</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      
</div>

        </Section>
        
  )
}

export default Skills