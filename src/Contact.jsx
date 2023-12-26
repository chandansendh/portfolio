import React, { useState } from "react";

function Contact() {
    const [data,setData]=useState({
        name:'',
        phone:undefined,
        email:'',
        msg:''
    });
    const inPut=(e)=>{
        const{name,value}=e.target;
        setData((oldD)=>{
            return{...oldD,[name]:value};
        })
    }
    const sub=(e)=>{
        e.preventDefault();
        alert(`your Name:${data.name}
        your Phone No.:${data.phone}
        your Email:${data.email}
        your Message:${data.msg}`);
    }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_dov">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={sub}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={inPut}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Phone no.
                </label>
                <input
                  type="number"
                  name="phone"
                  value={data.phone}
                  onChange={inPut}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="mobile no."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={inPut}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                name="msg"
                  value={data.msg}
                  onChange={inPut}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
