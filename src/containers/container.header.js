import React ,{  Component } from "react";
import svgLogo from '../logo.svg';
class Header extends Component{


    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand" href="#"><img src={svgLogo}/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Teams</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="home">Shuffle Teams</a>
                </li>
              </ul>
              <span class="nav-item">
                Welcome to UEFA Championship
              </span>
            </div>
          </nav>
        
              )
    }



}


export default Header;