import React from 'react';


function Portfolio () {
    return(
        
            
        <div id="portfolio" className="container-fluid text-center bg-grey">
        <h2>Portfolio</h2><br/>
        <h4>What we have created</h4>
        <div className="row text-center slideanim">
          <div className="col-sm-4">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Paris" width="400" height="300"/>
              <p><strong>Paris</strong></p>
              <p>Yes, we built Paris</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="thumbnail">
              <img src="https://media.istockphoto.com/photos/manhattan-panorama-with-its-skyscrapers-illuminated-at-dusk-new-york-picture-id538811669?b=1&k=20&m=538811669&s=170667a&w=0&h=Z_nBn58GNBa_kjUBlzniEehEk1GPOCz9H5u50z0qKdU=" alt="New York" width="400" height="300"/>
              <p><strong>New York</strong></p>
              <p>We built New York</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="thumbnail">
              <img src="https://worldstrides.com/wp-content/uploads/2015/07/iStock_000061296808_Large-1.jpg" alt="San Francisco" width="400" height="300"/>
              <p><strong>San Francisco</strong></p>
              <p>Yes, San Fran is ours</p>
            </div>
          </div>
        </div><br/>
        
       
    </div>
    );
};

export default Portfolio;