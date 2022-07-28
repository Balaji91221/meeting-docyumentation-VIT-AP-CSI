import {useState} from "react"
import './form.css';

function Form() {
  const [setData]=useState({
    postedBy:"",
    title:"",
    description:""
  });
  
  const inputHandler=(e)=>{
    setData(prevData=>({
      ...prevData,
      [e.target.name]:e.target.value
    }))
  }
  return (
    <div className="form">
      <form className="formControl"/>
        <div className="formInput">
          <label>Posted By:</label>
          <input type="text" name="postedBy"className="inputField" placeholder="Type here" onChange={(e)=>inputHandler(e)}/>
        </div>
        <div className="formInput">
          <label>GUEST-SPEAKER:</label>
          <input
            type="text"
            className="inputField"
            name="title"
            placeholder="Type here"
            onChange={(e)=>inputHandler(e)}
          />
        </div>
        <div className="formInput desc">
          <label>DESCRIPITION:</label>
          <textarea
            className="description"
            name="description"
            rows="6"
            cols="40"
            maxlength="500"
            minlength="3"
            placeholder="Type here"
            onChange={(e)=>inputHandler(e)}
          />
        
        <label> NO.OF TEAMS INVOLOVED: </label>
          <input type="text" name="Team"className="inputField" placeholder="Team1" onChange={(e)=>inputHandler(e)}/>
        </div>
        <div className="formInput">
        <input type="text" name="Team"className="inputField" placeholder="Team2" onChange={(e)=>inputHandler(e)}/>
        </div>
        <div className="formInput">
        <input type="text" name="Team"className="inputField" placeholder="Team3" onChange={(e)=>inputHandler(e)}/>
        </div>
        <div className="formInput">
        <input type="text" name="Team"className="inputField" placeholder="Team4" onChange={(e)=>inputHandler(e)}/>
        </div>
        <div className="formInput">
        <input type="text" name="Team"className="inputField" placeholder="Team5" onChange={(e)=>inputHandler(e)}/>
        </div>
        <div className="formInput">

        <label>
        NO.OF PEOPLE INVOLOVED:
              <input  name="NO.OF PEOPLE INVOLOVED:" className="fileInputControl" onChange={(e)=>inputHandler(e)}/>
              <div className="addIcon">
                + </div>
            </label>
            
            <div className="fileGroup">
              <div className="fileInput">
               
                <label id="#svg">
                  SVG
                  <input type="file" name="#svg" className="fileInputControl" onChange={(e)=>inputHandler(e)}/>
                  <div className="AddIcon">+</div>
                </label>
              </div>
              <div className="fileInput">
                <label id="#png">
                  PNG
                  <input type="file" name="png" className="fileInputControl"onChange={(e)=>inputHandler(e)}/>
                  <div className="AddIcon">+</div>
                </label>
              </div>
              <div className="fileInput">
                <label>
                  Docs
                  <input type="file" name="docs" className="fileInputControl"onChange={(e)=>inputHandler(e)}/>
                  <div className="AddIcon">+</div>
                </label>
              </div>
              <div className="fileInput">
                <label>
                  Posters
                  <input type="file" name="posters" className="fileInputControl" onChange={(e)=>inputHandler(e)}/>
                  <div className="AddIcon">+</div> 
                </label>
              </div>
            </div>
            
       
        
        
        <button type="upload" className="postuploadButton" >
          Upload
        </button>
      <form/>
    </div>
    </div>
  );
}

export default Form;