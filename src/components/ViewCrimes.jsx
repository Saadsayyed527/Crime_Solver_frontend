import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './List.css';

const ViewCrimes = () => {
    const [crimes, setCrimes] = useState([]);

    useEffect(() => {
        const fetchCrimes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/crimes');
                setCrimes(response.data);
            } catch (error) {
                console.error('Error fetching crimes:', error);
            }
        };

        fetchCrimes();
    }, []);

    return (
        <div className="list-container">
            <h2>Crime Reports</h2>
            <ul>
                {crimes.map(crime => (
                    <li key={crime._id}>
                        <h3>{crime.details}</h3>
                        <p>Location: {crime.location}</p>
                        {crime.imageUrl && <img src={`http://localhost:5000/${crime.imageUrl}`} alt="Crime" />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewCrimes;
