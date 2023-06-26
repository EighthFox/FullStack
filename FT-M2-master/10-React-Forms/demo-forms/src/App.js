// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //const [name, setName] = useState("");
  // const [mail, setMail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    mail: "",
    password: "",
  })

  const mailChangeHandler = (event) => {
    const mailValue = event.target.value;

    if(!/\S+@\S+\.\S+/.test(mailValue)){
      setError("Mail inválido");
    }else{
      setError("");
    }

    setForm({...form, mail: mailValue});
  };

  const passwordChangeHandler = (event) => {
    setForm({...form, password: event.target.value});
  };

  const submitHandler = (event) => {
    event.preventDefaul();
  };

  // const mailChangeHandler = (event) => {
  //   const mailValue = event.target.value;

  //   if(!/\S+@\S+\.\S+/.test(mailValue)){
  //     setError("Mail inválido");
  //   }else{
  //     setError("");
  //   }

  //   setMail(mailValue);
  // };

  // const nameChangeHandler = (event) => {
  //   setName(event.target.value);
  // };

  // const passwordChangeHandler = (event) => {
  //   setPassword(event.target.value);
  // };

  return (
    <>
      <form className={error && "error"} onSubmit={submitHandler}>
        <h2>Soy el Form</h2>
        {/* <div>
          <label>Nombre:</label>
          <input type="text" onChange={nameChangeHandler} value={name}/>
        </div> */}
        <div>
          <label>Mail:</label>
          <input type="text" onChange={mailChangeHandler} value={form.mail}/>
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" onChange={passwordChangeHandler} value={form.password} autoComplete="on"/>
        </div>
        <button type="submit" disabled={!form.mail || !form.password || error}>ENVIAR</button>
      </form>
    </>
  );
}

export default App;
