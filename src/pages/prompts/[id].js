import React, { useState, useEffect } from 'react';
import Editor from '../../components/Editor';
import Preview from '../preview';

// use POST request to submit code, then somehow check it against code solution(s)?

const baseUrl = `http://localhost:8000`

const Problem1 = () => {
    const [prompt, setPrompt] = useState({ title: '', description: '', editor_text: '' })
    const [editorContent, setEditorContent] = useState('')

    useEffect(() => {
        const fetchPromptData = async () => {
            const promptUrl = `${baseUrl}/api/prompts/2`
            const response = await fetch(promptUrl)
            if (response.ok) {
                const data = await response.json()
                setPrompt({ title: data.title, description: data.description, editor_text: data.editor_text })
                setEditorContent(data.editor_text)
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
            <p className='w-full whitespace-pre-wrap text-left'>{prompt.description || 'DESCRIPTION'}</p>
            <Editor promptText={editorContent} dataState={handleEditorChange} />
        </div>
    );
}

export default Problem1;