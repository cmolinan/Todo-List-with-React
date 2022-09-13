import React, { useState } from 'react';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      // eslint-disable-next-line react/destructuring-assignment, react/prop-types
      props.addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;

// import React, { useState } from 'react';

// // eslint-disable-next-line no-unused-vars
// const InputTodo = (props) => {
//   const [inputText, setInputText] = useState({
//     fName: '',
//     lastName: '',
//   });

//   const onChange = (e) => {
//     setInputText((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('submitted');
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="form-container">
//         <input
//           type="text"
//           className="input-text"
//           placeholder="Add first name"
//           value={inputText.fName}
//           name="fName"
//           onChange={onChange}
//         />
//         <button type="submit" className="input-submit">Submit</button>
//       </form>
//       <h2>{inputText.fName}</h2>
//       <h2>{inputText.lastName}</h2>
//     </>
//   );
// };

// export default InputTodo;
