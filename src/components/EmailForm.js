import React, { useState } from 'react';
//import emailjs from '@emailjs/browser';
import './EmailForm.scss';

const EmailForm = () => {

  const errorType = {
    nameError: 'name-error',
    emailError: 'email-error',
    messageError: 'message-error'
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const SUCCESS_MESSAGE = 'Message sent successfully'
  const ERROR_MESSAGE = 'Error sending the message'

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    console.log('entra');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    console.log('formData: ', formData);

    if(formData.email === '') {
      console.log('error');
      setError(errorType.emailError);
    } else if (formData.name === '') {
      setError(errorType.nameError);
    } else if (formData.message === '') {
      setError(errorType.messageError);
    } else {
      setMessage(SUCCESS_MESSAGE)
      setFormData({
        name: '',
        email: '',
        message: ''})
      }


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
          className={error === errorType.nameError ? 'input-error' : ''}
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
          className={error === errorType.emailError ? 'input-error' : ''}
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
          className={error === errorType.messageError ? 'input-error' : ''}
        />
      </label>
      <div>
        { (error !== '' || message !== '') && 
          <div className={`formMessage ${error !== '' ? "errorMessage" : ""}`}>
            <p>
            {error !== '' && ERROR_MESSAGE}
            {message !== '' && message}   
            </p>
          </div>
        }
        
        <button className={error !=='' ? 'errorButton' : ''} type="submit">{ error === '' ? 'Submit' : 'Submit again'}</button>
      </div>
    </form>
  );
};

export default EmailForm;
