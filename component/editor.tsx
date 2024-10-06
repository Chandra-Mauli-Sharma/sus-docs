'use client'

import {useEffect, useRef} from "react";
import EditorJS from "@editorjs/editorjs";
import {useEditor} from "@/lib/hooks/useEditor";

const Editor = () => {
    const { initializeEditor } = useEditor();
    const editorRef = useRef<EditorJS | null>(null);

    useEffect(() => {
        initializeEditor()

        return () => {
            if (editorRef.current?.destroy) {
                editorRef.current.destroy();
                editorRef.current = null;
            }
        };
    }, [initializeEditor]);

    return (
            <div id="editor" />
    );
};

export default Editor;
