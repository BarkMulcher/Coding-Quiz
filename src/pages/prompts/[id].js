import React, { useState, useEffect } from 'react';
import Editor from '../../components/Editor';
import Preview from '../preview';

const baseUrl = `http://localhost:8000`

const Problem1 = () => {
    const [prompt, setPrompt] = useState({ title: '', description: '' })
    const [editorContent, setEditorContent] = useState('')

    useEffect(() => {
        const fetchPromptData = async () => {
            const promptUrl = `${baseUrl}/api/prompts/2`
            const response = await fetch(promptUrl)
            if (response.ok) {
                const data = await response.json()
                setPrompt({ title: data.title, description: data.description })
            }
        }

        fetchPromptData()
    }, []);

    const handleEditorChange = (newContent) => {
        setEditorContent(newContent)
}

    return (
        <div>
            <h1>{prompt.title || 'PROBLEM'}</h1>
            <p>{prompt.description || 'DESCRIPTION'}</p>
            <Editor promptText={prompt} dataState={handleEditorChange} />
        </div>
    );
}

export default Problem1;