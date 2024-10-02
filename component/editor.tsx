'use client';

import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import Delimiter from "@editorjs/delimiter";
import CodeTool from "@editorjs/code";

interface EditorProps {
    data: OutputData | null; // Type for Editor.js output data
    onChange: (data: OutputData) => void; // Callback function to handle changes
    holder: string; // ID of the holder element
}

const EDITOR_TOOLS = {
    code: CodeTool,
    delimiter: Delimiter,
};

const Editor: React.FC<EditorProps> = ({ data, onChange, holder }) => {
    // Add a reference to the editor
    const ref = useRef<EditorJS>();

    // Initialize Editor.js
    useEffect(() => {
        // Initialize editor if we don't have a reference
        if (!ref.current) {
            const editor = new EditorJS({
                holder: holder,
                placeholder: "Start writing here...",
                tools: EDITOR_TOOLS,
                data,
                async onChange(api) {
                    const content = await api.saver.save();
                    onChange(content);
                },
            });
            ref.current = editor;
        }

        // Cleanup function to handle destruction
        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, [data, holder, onChange]);

    return (
        <div
            id={holder}
            style={{
                width: "100%",
                minHeight: 500,
                borderRadius: "7px",
                background: "#fff",
            }}
        />
    );
};

export default Editor;
