import { useState } from 'react';
import { validate } from '../helpers';
import image from "../assets/Auto Layout Vertical.png"
import "./style.css"


export function FormThree() {

    const [profileDatas,setProfileDatas] = useState({
      search: ""
    })

    const [errors,setErrors] = useState({
        search: ""
    })

    const handleChange = (e) => {
      e.preventDefault()    

      const {name, type, checked, value} = e.target;

      setProfileDatas({
        ...profileDatas,
        [name]: type === "checkbox" ? checked : value 
      })

      const error = validate(name,value)
      setErrors({
        ...errors,
        [name]: error
      })

    }

    const handleSubmit = (e) =>{
      e.preventDefault()

      let formIsValid = true;

      Object.keys(profileDatas).forEach((name) => {
        const value = profileDatas[name];
        const error = validate(name, value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error,
        }));
    
        if (error) {
          formIsValid = false;
        }
      });
      
      if(
      profileDatas.search.length > 0 
      ) {
        formIsValid = true;
      }
    
      if (formIsValid) {
        console.log("Form is valid:", profileDatas);
      } else {
        console.log("Form is invalid");
      }
    };    


  return (
    <form className="form" onSubmit={handleSubmit}>
    <div className='form_into'>

    <div className='inputs2'>  
    <div className='section_search'>
        <label htmlFor="search">Search Address*</label>  
        <input className="search" 
        name = "search" type = "text" 
        onChange={handleChange} 
        defaultValue={profileDatas.fullname} /> 
        {errors.search && <span style={{color:"red", fontWeight:"500"}}>{errors.search}</span>}
        <span style={{fontSize:"15px"}}>Your address is not visible to other users</span>
    </div>    

    </div>
    <div className='btns'>
      <button className="button" type='submit'>Use Current Location</button>
      <button className="button" type='submit'>Add Manually</button>
    </div>
    <div>
      <img className='image' src={image} alt='' />
    </div>

    </div>

    </form>
  );
}


