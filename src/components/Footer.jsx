import favicon from '../assets/hero/favicon.png';

const Footer = () => {
  return (
     
    <div className="container">
    <div className="footer-lists">
        <ul className="footer-list">
            <li>
               <p className="footer-list-title">Information</p> 
            </li>

            <li>
                <a href="https://dz.linkedin.com/in/roukia-nesrine-kabachi-83518522b" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <a href="#about" >About Me</a>
            <li>
                <a href="https://www.instagram.com/nesrinedeveloper/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            </ul> 

        <ul className="footer-list">
            <li>
               <p className="footer-list-title">Support</p> 
            </li>

            <li>
            <p><a href="http://linkedin.com/in/kabachi-roukia-nesrine-83518522b" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </li>
           <p> <a href="https://www.facebook.com/Nesrinekabachi20/" target="_blank" rel="noopener noreferrer">Facebook</a></p>
            <li>
                <p><a href="https://www.instagram.com/nesrinedeveloper/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            </li>
            </ul> 

            
        <ul className="footer-list">
            <li>
               <p className="footer-list-title">Help</p> 
            </li>

            <li>
                <a href="mailto:kabachinesrine34@gmail.com" >Help</a>
            </li>
            <a href="mailto:kabachinesrine34@gmail.com">FAQ</a>
            <li>
                <a href="mailto:kabachinesrine34@gmail.com">Forum</a>
            </li>
            </ul> 

   
    </div>
    <div className="footer-img mt-80 lg:mt-50 mr-16">
         <img
                src={favicon}
                
                 
                alt="dev + edu"
                />
    


    </div>
    
    <div className="footer-bottom">
        <div className="container">
            <p className="copyright">
                &copy; 2024.All Right Reserved
            </p>
        </div>

    </div>
 </div>


  )
}

export default Footer;