// //form from lessons with some refactoring
// import React, { useState } from 'react';

// const styles = {
//   formStyle: {
//     background: '#70CE4E',
//   },
// };

// //Form details how to from React Lessons and refactored
// function Form() {
//   // Here we set variables `useState`
//   const [Name, setName] = useState('');
//   const [Message, setMessage] = useState('');
//   const [Email] = useState('');

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { name, value } = e.target;

//     return name === 'Name' ? setName(value): setMessage
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // Alert the user
//     alert(`Hello ${Name} please fill out the form`);
//     // clear the inputs
//     // setName('');
//     // setMessage('');
//     // setEmail('');
//   };


//   return (
//     <div>
//       <nav style={styles.formStyle} className="formsection">
//       <div className="container">
//       <ul>
//         Fill out the form below to reach me:
//       </ul>
//       <form className="form">
//         <ul>
//         <input
//           value={Name}
//           name="Name"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Name"
//         />
//         </ul>
//         <ul>
//           <input
//           value={Email}
//           name="email"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="email"
//         />
//         </ul>
//         <ul>
//         <input
//           value={Message}
//           name="message"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="message"
//         />
//         </ul>
//         <ul>
//         <button type="button" onClick={handleFormSubmit}>
//           Submit
//         </button>
//         </ul>
//         <p>I will contact you shortly.</p>
//       </form>
//       </div>
//       </nav>
//     </div>
//   );
// }

// export default Form;


