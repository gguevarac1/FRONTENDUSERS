import React, {useState, useEffect} from "react";

export const Users =()=>{
    const [users, setUsers] = useState([])
    const [loading, setLoading]= useState([true])
    const [error, setError] = useState(null)

    useEffect(()=> {
        const  getUsers = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users',
                    // {
                    //     headers: {
                    //         'Access-Control-Allow-Origin': '*'
                    //     }
                    // }
                )
                const data = await res.json()
                setUsers(data)
            } catch (error) {
                console.log(error)
                setError(error)
            } finally{
                setLoading(false)
            }   
        }
        getUsers()
    },[])
    if (error){
        return <h1 style={{color:'red'}}>Failed to load data</h1>
    }
    if (loading){
        return <h1 style={{color:'red'}}>Loading...</h1>
    }


return (
  <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{ marginBottom: '20px', color: '#333' }}>Users List</h2>
    <table style={{
      width: '100%',
      borderCollapse: 'collapse',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      <thead style={{ backgroundColor: '#4CAF50', color: 'white' }}>
        <tr>
          <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
          <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
          <th style={{ padding: '12px', textAlign: 'left' }}>City</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
              borderBottom: '1px solid #ddd'
            }}
          >
            <td style={{ padding: '10px' }}>{user.name}</td>
            <td style={{ padding: '10px' }}>{user.email}</td>
            <td style={{ padding: '10px' }}>{user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

        
    
    
}