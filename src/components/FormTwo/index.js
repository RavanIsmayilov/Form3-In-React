import { useState } from 'react';
import { validate } from '../helpers';
import "./style.css"


export function FormTwo() {

    const [profileDatas,setProfileDatas] = useState({
      fullname: "",
      gender: ""   ,
      phone: "",
      birthday: ""
    })

    const [errors,setErrors] = useState({
        fullname: "",
        gender: ""   ,
        phone: "",
        birthday: ""
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
      profileDatas.fullname.length > 0 &&
      profileDatas.gender !== '' &&
      profileDatas.phone.length > 8 &&
      profileDatas.birthday.length > 0 
      
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


    <div className='inputs'>  
    <div className='section_fullname'>
        <label htmlFor="fullname">Full Name*</label>  
        <input className="fullname" 
        name = "fullname" type = "text" 
        onChange={handleChange} 
        defaultValue={profileDatas.fullname} /> 
        {errors.fullname && <span style={{color:"red", fontWeight:"500"}}>{errors.fullname}</span>}
    </div>           

  
      <div className='section_gender'>
        <label htmlFor='gender'>Gender:</label>
      <input type="radio" name="gender" onChange={handleChange}/> Male
      <input type="radio" name="gender" onChange={handleChange}/> Female 
      {errors.gender && <span style={{color:"red", fontWeight:"500",margin:"0 0 0 8px"}}>{errors.gender}</span>}
 </div>


    <div className='section_phone'> 
      <label htmlFor="phone">Phone Number</label> 
      <input className="phone" 
      name = "phone" type = "number"
   
      onChange={handleChange} 
      defaultValue={profileDatas.phone} /> 
      {errors.phone && <span style={{color:"red", fontWeight:"500"}}>{errors.phone}</span>}

    </div>


    <div className='section_birthday'>
      <label htmlFor="birthday">Birthday</label> 
      <input type="date" className="birthday" name="birthday" value={profileDatas.birthday} onChange={handleChange} />
      {errors.birthday && <span style={{color:"red", fontWeight:"500"}}>{errors.birthday}</span>}


    </div>

    </div>
      <button className="btn" type='submit'>Create account</button>

    </div>

    </form>
  );
}


