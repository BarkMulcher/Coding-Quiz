import React, { useState } from 'react';

const Preview = () => {
    const [textValue, setTextValue] = useState("<h1>Hello World!</h1>");

    return (
        <>
            <textarea onChange={(text) => setTextValue(text.target.value)} name="" id="" cols="30" rows="10" />
            <h1>Preview: {textValue}</h1>
        </>
    );
}

export default Preview;
