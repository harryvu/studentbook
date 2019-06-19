import React, { useState } from 'react'

function AddStudentComponent() {    
    const [greeting, setGreeting] = useState('Hello from AddStudentComponent!')
    const handleChange = event => setGreeting(event.target.value)
    const handleSubmit = event => {        
        console.log(greeting);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: {' '}
                <input type="text" value={greeting} onChange={handleChange} />
            </label>{' '}
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddStudentComponent;