import React, { useState } from 'react'

function AddStudentComponent() {    
    const [name, setName] = useState('Harry Vu')
    const [email, setEmail] = useState('harryvu@outlook.com')
    const handleNameChange = event => setName(event.target.value)
    const handleEmailChange = event => setEmail(event.target.value)
    const handleSubmit = event => {        
        console.log(name);
        console.log(email);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: {' '}
                <input type="text" value={name} onChange={handleNameChange} />
            </label>{' '}<br />
            <label>
                Email: {' '}
                <input type="text" value={email} onChange={handleEmailChange} />
            </label>{' '}<br />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddStudentComponent;