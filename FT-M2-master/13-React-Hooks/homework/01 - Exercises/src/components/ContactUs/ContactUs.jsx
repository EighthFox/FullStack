import React from 'react';

const ContactUs = () => {

  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  
  const handleInput = (event) => {
    const form = {...form};
    form[event.target.dataset.name] = event.target.value;
    setForm(form);
  }

  return (
    <div>
      <form className="contactBg">
        <label htmlFor="nombre">Nombre: </label>
        <input name="nombre" onChange={handleInput}/>
        <label htmlFor="email">Email: </label>
        <input name="email" onChange={handleInput}/>
        <label htmlFor="asunto">Asunto: </label>
        <input name="asunto" onChange={handleInput}/>
        <label htmlFor="mensaje">Mensaje: </label>
        <input name="mensaje" onChange={handleInput}/>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
