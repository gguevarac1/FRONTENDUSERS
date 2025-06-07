import React, { useState } from "react";

export const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [success, setSuccess] = useState('');

    function manejarCambio(evento) {
        const { name, value } = evento.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function manejarRegistro(e) {
        e.preventDefault();
        // Aquí podrías enviar los datos a un backend
        console.log('Usuario registrado:', user);
        setSuccess('Usuario registrado con éxito');
        // Resetear el formulario
        setUser({ name: '', email: '', phone: '' });
    }

    return (
        <div>
            <h2>Registro de Usuario</h2>
            <form onSubmit={manejarRegistro}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="name" value={user.name} onChange={manejarCambio} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={user.email} onChange={manejarCambio} required />
                </div>
                <div>
                    <label>Teléfono:</label>
                    <input type="tel" name="phone" value={user.phone} onChange={manejarCambio} required />
                </div>
                <button type="submit">Registrar</button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};
