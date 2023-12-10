import React from 'react';
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/ext-language_tools'

const Editor = ({ dataState }) => {
    return (
        <>
        <AceEditor mode="python" defaultValue='IDE' theme='monokai' onChange={dataState} />
        </>
    );
}

export default Editor;
