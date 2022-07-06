import {useState} from "react"
import './form.css';

export default function Form() {
  const [data,setData]=useState({
    postedBy:"",
    title:"",
    description:""
  });
  const [svg,setSVG]=useState(null);
  const [png,setPNG]=useState(null);
  const [docs,setDocs]=useState(null);
  const [posters,setPosters]=useState(null)
  const inputHandler=(e)=>{
    setData(prevData=>({
      ...prevData,
      [e.target.name]:e.target.value
    }))
  }
  return (
    <div className="form">
      <form className="formControl">
        <div className="formInput">
          <label>Posted By:</label>
          <input type="text" name="postedBy"className="inputField" placeholder="Type here" onChange={(e)=>inputHandler(e)}/>
        </div>
        <div className="formInput">
          <label>Title:</label>
          <input
            type="text"
            className="inputField"
            name="title"
            placeholder="Type here"
            onChange={(e)=>inputHandler(e)}
          />
        </div>
        <div className="formInput desc">
          <label>Posted By:</label>
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
        </div>
        <div className="fileGroup">
          <div className="fileInput">
            <label>
              SVG
              <input type="file" name="svg" className="fileInputControl" onChange={(e) => setSVG(e.target.files[0])}/>
              <div className="addIcon">+</div>
            </label>
          </div>
          <div className="fileInput">
            <label>
              PNG
              <input type="file" name="png" className="fileInputControl" onChange={(e) => setPNG(e.target.files[0])}/>
              <div className="addIcon">+</div>
            </label>
          </div>
          <div className="fileInput">
            <label>
              Docs
              <input type="file" name="docs" className="fileInputControl" onChange={(e) => setDocs(e.target.files[0])}/>
              <div className="addIcon">+</div>
            </label>
          </div>
          <div className="fileInput">
            <label>
              Posters
              <input type="file" name="psosters" className="fileInputControl" onChange={(e) => setPosters(e.target.files[0])}/>
              <div className="addIcon">+</div>
            </label>
          </div>
        </div>
        <button type="submit" className="postSubmitButton">
          Submit
        </button>
      </form>
    </div>
  );
}