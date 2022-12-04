import React, { useState } from "react";

const Contact = () => {

    const [inp , setInp] = useState({
      fullName : '',
      number : '',
      address : '',
      insta : '',
      email : '',
      password:''
    })

    const submitted = (e)=>{
        e.preventDefault()
        alert(`
        Your Name is ${inp.fullName} \n
        Your Number is ${inp.number} \n
        Your Address is ${inp.address} \n
        Your Insta Id is ${inp.insta} \n
        Your Email is ${inp.email}  
        `)
    }

    const name_changed = (event)=>{
      const inp = event.target.value
      const names = event.target.name
      setInp((prev)=>{
        return {
          ...prev,
          [names] : inp,
        }
      })
    }
  return (
    <>
    <div className="mx-5 my-5">
      <form onSubmit={submitted}>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Full Name :
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={name_changed}
            value={inp.fullName}
            name="fullName"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Phone Number :
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={name_changed}
            value={inp.number}
            name="number"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Address :
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={name_changed}
            value={inp.address}
            name="address"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Insta Id :
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={name_changed}
            value={inp.insta}
            name="insta"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={name_changed}
            value={inp.email}
            name="email"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={name_changed}
            value={inp.password}
            name="password"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </>
  );
};

export default Contact;
