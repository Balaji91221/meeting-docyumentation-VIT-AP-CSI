import React from "react";
import "./login.css";
function Login() {
  return (
    <>
    <div class="row mb-3" id="division0" style="margin-right: 0; margin-bottom: 0px !important;">

    <div id="division1" class="col-md-4 themed-grid-col">

      <div id="textdivision">

        <div style="margin-right: 0px; ">
          <h1 id="csi">CSI</h1>
        </div>
  
        <div>
          <span id="database" style="font-size: 2rem; color: #0189ef;">DATA</span>
          <span id="database" style="font-size: 2rem;" >BASE</span>
        </div>

      </div>

      <div id="textdivision" style="margin-right:200px ;">

        <div style="margin-right: 0px; ">
          <h1 id="csi" style="font-size: 1.5rem ; position: relative; top: 320px;">CSI Chapter VIT-AP</h1>
        </div>
  
        <div style=" position: relative; top: 310px; color: aliceblue;">
          <small>Join Hands to Help Students</small>
        </div>

      </div>

    </div>
    
    
    <div id="division2" class=" col-md-8 themed-grid-col">

      <div class="container" id="form">

        <div class="col"><h4 id="emailheading">Enter your college Email-ID</h4></div>
          
        <div class="col">        
            <form>

                <div class="input-field" style="padding-bottom: 10px;" >
                    <input type="email" required placeholder="Email" id="inputfield"/>
                    <span></span>
                </div>

                <button type="submit" class="btn btn-primary" id="buttonnext" >Next</button>
                
            </form>

          </div>
          

        </div>
        




      </div>

    </div>
    </>

  
  
 


  );
}

export default Login;