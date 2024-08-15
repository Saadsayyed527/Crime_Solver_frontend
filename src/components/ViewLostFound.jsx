import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './List.css';

const ViewCrimes = () => {
    const [crimes, setCrimes] = useState([]);

    useEffect(() => {
        const fetchCrimes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/lost-found');
                setCrimes(response.data);
            } catch (error) {
                console.error('Error fetching crimes:', error);
            }
        };

        fetchCrimes();
    }, []);

    return (
        <div className="list-container">
            <h2>Found Items</h2>
            <ul>
                {crimes.map(crime => (
                    <li key={crime._id}>
                        <h1> Found By : {crime.reporterName}</h1>
                        <h2>Contact : {crime.contact}</h2>
                        <h3>Details {crime.details}</h3>
                        <p>Location : {crime.location}</p>
                        {crime.imageUrl && <img src={`http://localhost:5000/${crime.imageUrl}`} alt="Crime" />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewCrimes;
