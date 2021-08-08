import React from "react";
import one from "../SourceFiles/one.jpg";
import two from "../SourceFiles/two.jpg";

function Main() {
  return (
    <div id="main">
      <div id="main-start">
        <div id="main-start-content" className="container">
          <h1>Awasome Free Psd templates & Resources</h1>
          <div id="main-start-link">
            <p>www.BlazRobar.com</p>
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
      <div id="main-break">
        <div id="main-break-content">
          <div id="main-break-text">
            <p className="container">I'm like the Robin Hood of PSD files</p>
          </div>
          <div id="main-break-btn">
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
      <div id="main-galery">
        <div id="main-galery-content">
          <ul>
            <li>
              <div>
                <i class="fas fa-angle-right"></i>
              </div>
            </li>
            <li>
              <img src={two} />
            </li>
            <li>
              <img src={one} />
            </li>
          </ul>
        </div>
      </div>
      <div id = 'main-about'>
          <div id = 'main-about-content' className = 'container'>
              <h3>BlazRobar.com</h3>
              <div id = 'main-about-text'>
                  <p>Ullamco consectetur id consequat elit eiusmod amet sit sunt id. Esse elit esse et duis 
                  Ullamco consectetur id consequat elit eiusmod amet sit sunt id. Esse elit esse et duis cupidatat qui ad proident. Eu ipsum proident irure culpa minim nostrud Lorem pariatur pariatur nulla. Et amet esse in cupidatat consequat eu aute cillum consectetur mollit proident culpa duis deserunt.
                  </p>
                  <p> Eu ipsum proident irure culpa minim nostrud Lorem pariatur pariatur nulla. Et amet esse in cupidatat consequat eu aute cillum consectetur mollit proident culpa duis deserunt.
                  Ullamco consectetur id consequat elit eiusmod amet sit sunt id. Esse elit esse et duis cupidatat qui ad proident. Eu ipsum proident irure culpa minim nostrud Lorem pariatur pariatur nulla. Et amet esse in cupidatat consequat eu aute cillum consectetur mollit proident culpa duis deserunt.
                  </p>
                  <p>Et amet esse in cupidatat consequat eu aute cillum consectetur mollit proident culpa duis deserunt.
                  Ullamco consectetur id consequat elit eiusmod amet sit sunt id. Esse elit esse et duis cupidatat qui ad proident. Eu ipsum proident irure culpa minim nostrud Lorem pariatur pariatur nulla. Et amet esse in cupidatat consequat eu aute cillum consectetur mollit proident culpa duis deserunt.
                  </p>
                  <p>Ullamco consectetur id consequat elit eiusmod amet sit sunt id. Esse elit esse et duis cupidatat qui ad proident. Eu ipsum proident irure culpa minim nostrud Lorem pariatur pariatur nulla. Et amet esse in cupidatat consequat eu aute cillum consectetur mollit proident culpa duis deserunt.
                  Ullamco consectetur id consequat elit eiusmod amet 
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Main;
