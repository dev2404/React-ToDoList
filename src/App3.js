import React, { useState } from "react";

function App3() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;
    const { value, name } = event.target;

    setFullName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value,
      //   };
      // }
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
  };
  return (
    <form onSubmit={onSubmits}>
      <div>
        <h3>
          Hello {fullName.fname} {fullName.lname}
        </h3>
        <p>
          {fullName.email}
          <br /> {fullName.phone}
        </p>
        <input
          type="text"
          placeholder="Enter your Name"
          name="fname"
          onChange={inputEvent}
          value={fullName.fname}
        />
        <input
          type="text"
          placeholder="Enter your Name"
          name="lname"
          onChange={inputEvent}
          value={fullName.lname}
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={inputEvent}
          value={fullName.email}
        />
        <input
          type="phone"
          placeholder="Enter your phone"
          name="phone"
          onChange={inputEvent}
          value={fullName.phone}
        />
        <button type="submit">click Me</button>
      </div>
    </form>
  );
}

export default App3;
