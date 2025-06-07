import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const EditUser = () => {
    const { id } = useParams(); // Obtiene el ID desde la URL
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [success, setSuccess] = useState('');

    // Simula cargar el usuario por ID (reemplaza esto con un fetch real)
    useEffect(() => {
        // Aquí iría la llamada a tu API con fetch o axios
        // Por ahora simulamos los datos
        const usuarioSimulado = {
            name: "Juan",
            email: "juan@ejemplo.com",
            phone: "0987654321"
        };
        setUser(usuarioSimulado);
    }, [id]);

    function manejarCambio(e) {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function manejarSubmit(e) {
        e.preventDefault();
        console.log(`Usuario ${id} editado:`, user);
        setSuccess('Usuario actualizado con éxito');
        // Redirigir a lista de usuarios
        setTimeout(() => navigate("/users"), 1500);
    }

    return (
        <div>
            <h2>Editar Usuario</h2>
            <form onSubmit={manejarSubmit}>
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
                <button type="submit">Guardar Cambios</button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};
