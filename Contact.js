import React, { useState } from "react";

const Contact = () => {
    const[data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    })
    const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
        return{
          ...preVal,
          [name] : value,
        }
    })
    };

    const formSubmit= (e)=>{
        e.preventDefault();
        alert(` 
            My Name is ${data.fullname}, My mobile number is ${data.phone} and email address is ${data.email}, And here is my message ${data.msg}`)
    };
    return(
        <>
<div className="my-5">
    <h1 className="text-center">Contact Us</h1>
</div>
<div className="container contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div className="mb-3">
  <label htmlFor="fullname" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="fullname" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your phone number"/>
</div>
 <div className="mb-3">
  <label htmlFor="phone" className="form-label">Phone</label>
  <input type="text" className="form-control" id="phone" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your phone number"/>
</div>
 <div className="mb-3">
  <label htmlFor="email" className="form-label">Email address</label>
  <input type="email" className="form-control" id="email" name="email" value={data.email} onChange={InputEvent} placeholder="Enter your email address"/>
</div>
<div className="mb-3">
  <label htmlFor="message" className="form-label">Message</label>
  <textarea className="form-control" id="message" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
</div>
<div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
            </form>
        </div>
    </div>
</div>
        </>
    )
}
export default Contact;