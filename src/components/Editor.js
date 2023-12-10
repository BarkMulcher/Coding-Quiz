import React, { useState } from 'react';
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/ext-language_tools'

const Editor = ({ dataState, text }) => {
    const [defaultText, setDefaultText] = useState("FartBoobs"); //IDK --

    return (
        <>
        <AceEditor mode="python" defaultValue={text} theme='monokai' onChange={dataState} placeholder='Placeholder Text' show>
            {/* need editor to display problem function */}
            editor.setValue("new text")
            <textarea name="" id="" cols="30" rows="10" wrap='off' autoCorrect='none' autoCapitalize='none' spellCheck='false' text='test text'></textarea>
        </AceEditor>
        </>
    );
}

export default Editor;
