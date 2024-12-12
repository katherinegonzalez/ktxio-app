import React, { useState } from 'react';
//import emailjs from '@emailjs/browser';
import './EmailForm.scss';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('AAAA');

    // Configura los parámetros de EmailJS
    /*emailjs.send(
      'YOUR_SERVICE_ID',      // Reemplaza con tu Service ID
      'YOUR_TEMPLATE_ID',     // Reemplaza con tu Template ID
      formData,               // Los datos del formulario
      'YOUR_USER_ID'          // Reemplaza con tu User ID
    )
    .then((response) => {
      alert('Correo enviado exitosamente');
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error);
      alert('Hubo un error al enviar el correo');
    });*/
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Subject:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default EmailForm;
