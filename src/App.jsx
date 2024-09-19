 
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
 
import  Footer from "./components/Footer";
 


const App = () => {  
  return (
    <>
    <div className="pt-[5.75rem] lg:pt-[5.25rem] sm:pt-36">
       <Header />
       <Hero />
       
       <div className="relative">
       <div className="gradient-04 z-1" />
     
      <About />
    </div>
   
       <Skills />
    
    
       <Projects className="" />
 
   
       <div className="pt-[50rem] lg:pt-[10rem] ">
    <Footer />
    </div>
    </div>
    


    </>
    
  );
}

export default App;
