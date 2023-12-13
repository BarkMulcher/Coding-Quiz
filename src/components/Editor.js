import React, { useState } from 'react';
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/ext-language_tools'
import { edit } from 'ace-builds';

const Editor = ({ dataState, editorContent, promptText }) => {

    return (
        <>
        {/* python ? pythoneditor : javascripteditor */}
        {/* need editor to display problem function */}
        <AceEditor
            mode="python"
            value={promptText}
            // value={editorContent}
            theme='monokai'
            onChange={dataState}
            // placeholder='Placeholder Text'
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
            }}
            >

        </AceEditor>
        </>
    );
}

export default Editor;
