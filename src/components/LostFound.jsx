import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const ReportCrime = () => {
    const [reporterName, setReporterName] = useState('');
    const [contact, setContact] = useState('');
    const [details, setDetails] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('reporterName', reporterName);
        formData.append('contact', contact);
        formData.append('details', details);
        formData.append('location', location);
        formData.append('image', image);

        try {
            await axios.post('http://localhost:5000/api/Lost-found', formData);
            alert('Items reported successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to report crime.');
        }
    };

    return (
        <div className="form-container">
            <h2>Upload Lost And Find Items </h2>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={reporterName}
                    onChange={(e) => setReporterName(e.target.value)}
                />

<input
                    type="contact"
                    placeholder="Your contact (Optional)"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />


                <input
                    type="text"
                    placeholder="Details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReportCrime;
