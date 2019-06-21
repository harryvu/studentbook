import React from 'react'
import useFetch from 'fetch-suspense';

const MyComponent = () => {

    // "Look! In the example! It's a fetch() request! It's a hook!"
    //   "No! It's kind of like both at the same time."
    const serverResponse = useFetch('http://localhost:3004/students/5', { method: 'GET' });

    console.log(serverResponse);
    // The return value is the body of the server's response.
    return (
        <div>{serverResponse.name}:{' '}{serverResponse.email}</div>
    )
};

export default MyComponent;