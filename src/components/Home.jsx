import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [userId, setUserId] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', {
                name,
                phone,
                address
            });
            setUserId(response.data._id);
            // alert('Registration successful!');
        } catch (error) {
            console.error(error);
            alert('Registration failed.');
        }
    };

    return (
        <div className="container">
            <h1>Crime Solving App</h1>
            {!userId ? (
                <form onSubmit={handleRegister} className="register-form">
                    <h2>Register</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <button type="submit">Register</button>
                </form>
            ) : (
                <div className="options">
                    <h2>Choose an Option</h2>
                    <button onClick={() => window.location.href = '/lost-found'}>Lost & Found</button>
                    {/* <button onClick={() => window.location.href = '/report-crime'}>Report a Crime</button> */}
                    <button onClick={() => window.location.href = '/view-lost-found'}>View Lost & Found</button>
                    <button onClick={() => window.location.href = '/view-crimes'}>View Crimes</button>
                </div>
            )}
        </div>
    );
};

export default Home;
