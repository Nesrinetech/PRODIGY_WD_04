
//   <section className={`${styles.paddings} relative z-10`}>
//     <div className="gradient-02 z-0" />
//     <div className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row items-start`}
//     >
//       <div className="lg:w-1/2 flex flex-col">
//       <h1 className="text-3xl lg:text-5xl font-bold mb-6 mt-6 text-left">
//             About Me

//           </h1>
//       </div>

//       <div className="mt-4 font-normal text-left text-[14px] lg:text-[18px] text-secondary-white leading-relaxed lg:leading-[1.8] xl:leading-[2] overflow-auto px-4">
       
  
//         <span className="font-extrabold text-white">Welcome to my portfolio!</span> I am Nesrine Kabachi, a Professional Web Developer. I've delved into languages like Python, HTML, CSS, JavaScript, and PHP. I've crafted websites, Python games, and Web applications. Join me on a journey where coding meets creativity, and ideas come to life in the digital realm. If you want to see my other programming projects, you can visit my Github profile. Dedicated to crafting tailored websites for businesses, I specialize in creating visually appealing and functional web platforms. We focus on meeting our clients' specific needs for online presence. While we also offer web applications, our primary expertise lies in delivering engaging and responsive websites that effectively represent and enhance our clients' brand identities on the digital landscape. Explore our projects collection by scrolling down.
        
//     </div>
//     <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
//         <img src={aboutImage} alt="About Me" className="w-full max-w-[80%] lg:max-w-full h-auto rounded-lg" />
//       </div>
//       </div>
//   </section>

'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
 
 
import { TitleText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import  preview from '../assets/hero/preview.png';
// import aboutImage from '../assets/laptop.png';
// import styles from '../styles';
 
const About = () => (

<section id="about" className={`${styles.paddings} relative z-10 mb-20 `}>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          // className={`${styles.innerWidth}  mx-auto flex lg:flex-row flex-col gap-15 lg:mt-20 mt-24`}
           className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col items-center gap-10`}
        >
         
        {/* left section */}
            <motion.div
             variants={fadeIn('left', 'tween', 0.2, 1)}
            //  className="h1 justify-center flex flex-[0.75] flex-col"
             className="flex-1 lg:max-w-[50%] max-w-full flex justify-center lg:justify-start"
            //  "flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[22px] border-[2px] border-[#ffffff] relative "
            >
            
        {/* <img
            src={preview}
             alt="About Me"
             className="w-full h-auto object-cover  rounded-lg lg:max-w-[400px]"
             
             /> */}

<img src={preview} alt="About Me" className="w-full h-auto object-cover rounded-lg lg:max-w-[400px]" />

            </motion.div>
            
      



        {/* right section */}

        <motion.div
             variants={fadeIn('right', 'tween', 0.2, 1)}
            //  className="h1 justify-center flex flex-[0.75] flex-col"
             className="flex-1 lg:max-w-[50%] flex flex-col justify-center text-left p-4"
            //  "flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[22px] border-[2px] border-[#ffffff] relative "
            >
            
            <TitleText title={<>About Me</>} className="text-left font-bold sm:text-[22px] text-[26px] sm:leading-[30px] leading-[26px] text-white"/>
             <div className="mt-[24px] font-normal sm:text-[20px] text-[16px] sm:leading-[25.6px] leading-[39.6px]  text-white "> 
             <span className="font-extrabold text-white">Welcome to my portfolio!</span> I'm Nesrine Kabachi, a passionate Full-Stack Web Developer skilled in HTML, CSS, JavaScript (along with its frameworks and libraries), Python, and PHP. I create websites, and Web Apps, and beautiful UI/UX Web designs, I specialize in creating visually appealing and functional Web platforms, focusing on meeting my clients' specific needs for online presence. I hold a professional certificate in programming and web development from the Universal Research and Professional Studies Institute and I have the CS50x 2023 online course certificate from Harvard University. Check out my other professional certificates on<br></br> <a href="https://www.linkedin.com/in/roukia-nesrine-kabachi-83518522b" className="text-blue-500 underline" target="_blank">My LinkedIn Profile</a> Join me on a journey where coding meets creativity, and ideas come to life.               
        
             </div>
            </motion.div>
            
        
            </motion.div>
    </section>
    
    );
  

export default About;