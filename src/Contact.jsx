import React, { useState } from "react";

const Contact = () => {
    const [data , setData] = useState({
        fullname: '',
        phone:'',
        email:'',
        msg:''
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}.My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`)
    };


  return (
    <>
      <div my-5>
        <h1 className="text-center">You Can Talk With Me . . .</h1>
      </div>
      <div className="container-fluid contact_div" id="header">
        <div className="row mt-5">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label fw-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label fw-bold">
                  Phone no
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label fw-bold">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label fw-bold">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>

              <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">
                      Send Message
                  </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
