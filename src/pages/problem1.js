import React, { useState } from 'react';
import Editor from '../components/Editor';
import Preview from './preview';

const Problem1 = () => {
    const [editorContent, setEditorContent] = useState('');
    const handleEditorChange = (newContent) => {
        setEditorContent(newContent)
}

    return (
        <div>
            <h1>PROBLEM 1</h1>
            <h2 className='my-6'>Print "Hello World!"</h2>
            <Editor dataState={handleEditorChange} text="def sleep_in(weekday, vacation): " />
        </div>
    );
}

export default Problem1;