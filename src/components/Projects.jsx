
 
 
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
 

const ProjectCard = ({
  
  name,
  description,
  
  image,
  
  project_link,
}) => {
  console.log("Rendering project:", name, project_link); // Debug log
  return (

    // "relative max-w-[32rem] mx-auto text-center mt-[40rem] md:mb-15 lg:mb:[60rem]"
     
    
   
    <div id="projects"  className="mb-0 lg:mb-16">
      <a href={project_link} target="_blank" rel="noopener noreferrer">
      <div className='p-5 rounded-2xl sm:w-full w-full border-2 border-gray-300'>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

         
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

         
      </div>
    </a>
    </div>
      
  );
};

const Projects = () => {
  return (
    <>
      

       
    <h1 className="h1 lg:mb-10">
      My Projects

    </h1>
      <div className='lg:mt-5  md-40 flex flex-wrap gap-4 lg:gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");