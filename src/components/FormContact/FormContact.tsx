import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/css/FormContact.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { name, email, description } = formData;
        // Configuración de la API de Sendinblue
        const API_KEY = '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';
        const sendinblue = axios.create({
            baseURL: 'https://api.sendinblue.com/v3',
            headers: {
                'Content-Type': 'application/json',
                'api-key': API_KEY
            }
        });
        const emailData = {
            sender: { name, email },
            to: [{ email: 'nicolasbronzini7@gmail.com' }],
            subject: 'Consultas',
            htmlContent: `
        <p>Nombre: ${name}</p>
        <p>Email: ${email}</p>
        <p>Descripción: ${description}</p>
      `
        };

        try {
            const response = await sendinblue.post('/smtp/email', emailData);
            console.log(response.data);
            alert('Consulta enviada correctamente');
            setFormData({ name: '', email: '', description: '' });
        } catch (error) {
            console.log(error);
            alert('Error al enviar la consulta');
        }
    };
    return (
        <div className='containerForm'>

            <div className="form-wrapper">
                <div className="post"></div>
                <div className="post"></div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Nombre:</label>
                        <input type="text" className="form-input" value={formData.name} name="name" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email:</label>
                        <input type="email" className="form-input" value={formData.email} name="email" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Descripción:</label>
                        <input className="form-textarea" value={formData.description} name="description" onChange={handleChange} />
                    </div>
                    <button type="submit" className="form-submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
