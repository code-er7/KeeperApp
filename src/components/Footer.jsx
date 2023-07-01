import React from "react";  
 
function Footer(){
    const currYear = new Date().getFullYear();
    return (
     <footer>
        <p>Copyright © {currYear} Chetan Rao</p>
     </footer>  
    )
}
export default Footer;