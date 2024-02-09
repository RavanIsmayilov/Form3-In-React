import "./style.css"
import { useState } from 'react';
import { validate } from "../helpers";
import image from "../assets/Auto Layout Horizontal.png"

export function FormOne(){

    const [profileDatas,setProfileDatas] = useState({
        email: "",
        password: "",
        terms: false
        })

    const [errors,setErrors] = useState({
        email: "",
        password: "",
        terms: false
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
        profileDatas.email.length > 0 &&
        profileDatas.password.length > 8 &&
        profileDatas.terms === true 
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

    <div>
        <img className='images' src={image} alt='' />
    </div>

    <div className='inputs'>  

    <div className='section_email'>
        <label htmlFor="email">Email*</label>  
        <input className="email" 
        name = "email" type = "text" 
        onChange={handleChange} 
        defaultValue={profileDatas.email} /> 
        {errors.email && <span style={{color:"red", fontWeight:"500"}}>{errors.email}</span>}

    <div className='section_password'> 
        <label htmlFor="password">Password*</label> 
        <input className="password" 
        name = "password" type = "password"
        onChange={handleChange} 
        defaultValue={profileDatas.password} /> 
        {errors.password && <span style={{color:"red", fontWeight:"500"}}>{errors.password}</span>}

    </div>



        </div>
        </div>

        <button className="btn" type='submit'>Create Account</button>
    <div className='section_terms'>
        <input type="checkbox" className="terms" name="terms" value={profileDatas.terms} onChange={handleChange} />
        <label className="label" htmlFor="terms">Send me news and promotions</label>
        {errors.terms && <p style={{color:"red", fontWeight:"500", margin:"0 0 0 5px"}}>{errors.terms}</p>}
    </div>  
        <span className="span">By continuing I agree with the Terms & Conditions, Privacy Policy</span>

        </div>
        </form>


    )
}
