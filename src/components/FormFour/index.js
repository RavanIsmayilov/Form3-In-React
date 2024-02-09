import "./style.css"
import { useState } from 'react';
import { validate } from "../helpers";

export function FormFour(){

    const [profileDatas,setProfileDatas] = useState({
        address: "",
        apartment: "",
        city: "",
        state: "",
        zipcode: ""
        })

    const [errors,setErrors] = useState({
        address: "",
        apartment: "",
        city: "",
        state: "",
        zipcode: ""
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
        profileDatas.address.length > 0 &&
        profileDatas.apartment.length > 8 &&
        profileDatas.city.length > 0 &&
        profileDatas.state.length > 8 &&
        profileDatas.zipcode.length > 0 
       
        ) {
          formIsValid = true;
        }
      
        if (formIsValid) {
          console.log("Form is valid:", profileDatas);
        } else {
          console.log("Form is invalid");
        }
      };    


    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className='form_into'>

    <div className='inputs'>  

    <div className='section_address'>
        <label htmlFor="address">Street Address*</label>  
        <input className="address" 
        name = "address" type = "text" 
        placeholder="319 Bainbridge Street"
        onChange={handleChange} 
        defaultValue={profileDatas.address} /> 
        {errors.address && <span style={{color:"red", fontWeight:"500"}}>{errors.address}</span>}
    </div>

    <div className='section_apartment'>
        <label htmlFor="apartment">Apartment*</label>  
        <input className="apartment" 
        name = "apartment" type = "text" 
        onChange={handleChange} 
        defaultValue={profileDatas.apartment} /> 
        {errors.apartment && <span style={{color:"red", fontWeight:"500"}}>{errors.apartment}</span>}
    </div>

    <div className='section_city'>
        <label htmlFor="city">City*</label>  
        <input className="city" 
        name = "city" type = "text" 
        placeholder="New York City"
        onChange={handleChange} 
        defaultValue={profileDatas.city} /> 
        {errors.city && <span style={{color:"red", fontWeight:"500"}}>{errors.city}</span>}
    </div>
<div className="sections">
    <div className='section_state'>
        <label htmlFor="state">State*</label>  
        <input className="state" 
        name = "state" type = "text" 
        placeholder="New York"
        onChange={handleChange} 
        defaultValue={profileDatas.state} /> 
        {errors.state && <span style={{color:"red", fontWeight:"500"}}>{errors.state}</span>}
    </div>

    <div className='section_zipcode'>
        <label htmlFor="zipcode">Zipcode*</label>  
        <input className="zipcode" 
        name = "zipcode" type = "number" 
        placeholder="11233"
        onChange={handleChange} 
        defaultValue={profileDatas.zipcode} /> 
        {errors.zipcode && <span style={{color:"red", fontWeight:"500"}}>{errors.zipcode}</span>}
    </div>
    </div>


        </div>

        <button className="btn" type='submit'>Save Information</button>
        
        </div>
        </form>


    )
}
