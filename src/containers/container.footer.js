import React ,{  Component } from "react";

class Footer extends Component{


    render(){
        return (
           
            <footer>
            <div className="sponsor"><h3> Sponsors</h3></div>
            <div className="footer-content">
            <img src={ "https://img.icons8.com/office/100/000000/brutus.png" } />
            </div>
            <div className="footer-content">
            <img src={"https://img.icons8.com/color/100/000000/plush.png"} />
            </div>
            <div className="footer-content">
            <img src={"https://img.icons8.com/ios/100/000000/pokemon-filled.png"}/>
            </div>
            <div className="footer-content">
            <img src={"https://img.icons8.com/doodle/100/000000/girl.png"} />
            </div>
            <div className="footer-content">
            <img src={"https://img.icons8.com/color/100/000000/hulk.png"}/>
            </div>
            

          </footer>
                  
              )
    }



}


export default Footer;