import React, { useState, useEffect } from 'react';

const HooksFun = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(
    () => {
      console.log("useEffect...");

      const timerId = setInterval(() => {
        console.log("interval..")
      }, 1000)

      return () => {
        console.log("unmount");
        clearInterval(timerId);
      }
    }, [firstName]
  );

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  return (
    <>
      <h1>Hooks Function</h1>
      <input
        id="firstName"
        name="firstName"
        onChange={(event) => { handleFirstNameChange(event) }}
      />
      <input
        id="lastName"
        name="lastName"
        onChange={(event) => { handleLastNameChange(event) }}
      />
      <br />
      <label>{firstName + ' ' + lastName}</label>
    </>
  )
}

export default React.memo(HooksFun);