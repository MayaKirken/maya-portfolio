import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:, formData');
}

return (
    <section className="contact-form" id="contact">
        <div className="contact-container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-subtitle">
                Have an exciting project or opportunity? Let's build something great together.
            </p>

            <form className="contact-form" onsubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                         id="message"
                         name="message"
                         rows="5"
                         value={formData.message}
                         onChange={handleChange}
                         required>
                   </textarea>
                </div>

                <button type="submit" className="btn btn-submit">
                    Send Message
                </button>
            </form>
        </div>
    </section>
);
}

export default Contact;

