import React, { useRef, useEffect } from 'react';

import { ButtonWrap, InputGroupWrap } from '../../components';

const registration = {
  "margin": "40px"
}

const Registration = () => {
  // this.focus = React.createRef();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const cityRef = useRef(null);
  const countryRef = useRef(null);

  //componentDidMount
  // useEffect(() => {
  //   firstNameRef.current.focus();
  // }, []);


  const handleSumit = (e) => {
    e.preventDefault();

    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      city: cityRef.current.value,
      country: countryRef.current.value
    }

    console.log("data.......", data);
  }

  return <div style={registration} id="registration">
    <form onSubmit={handleSumit}>
      <h2>Registration</h2>
      <InputGroupWrap text="First Name" inputRef={firstNameRef} focus={true} />
      <InputGroupWrap text="Last Name" inputRef={lastNameRef} />
      <InputGroupWrap text="City" inputRef={cityRef} />
      <InputGroupWrap text="Country" inputRef={countryRef} />

      <ButtonWrap text="Submit" />
    </form>
  </div>

  // this.focus.current.focus();
}

export default Registration;