import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

export const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await res.json();
        setUser(data);
        setForm({ name: data.name, email: data.email, phone: data.phone });
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    console.log("Usuario actualizado:", form);
    alert("Simulación: Usuario actualizado");
    setEditMode(false);
  };

  const handleDelete = async () => {
    const confirm = window.confirm("¿Estás seguro de eliminar este usuario?");
    if (confirm) {
      console.log("Usuario eliminado");
      alert("Simulación: Usuario eliminado");
      navigate("/users");
    }
  };

  if (!user) return <p>Cargando...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Detalle del Usuario</h2>
      {editMode ? (
        <>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono" />
          <button onClick={handleUpdate}>Guardar</button>
          <button onClick={() => setEditMode(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Teléfono:</strong> {user.phone}</p>
          <button onClick={() => setEditMode(true)}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </>
      )}
    </div>
  );
};
