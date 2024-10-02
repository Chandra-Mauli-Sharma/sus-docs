'use client';

import Editor from "@/component/editor";
import {useState} from "react";
import {OutputData} from "@editorjs/editorjs";

export default function Home() {
    const [content, setContent] = useState<OutputData | null>(null);
    return(
        <Editor
            data={content}
            onChange={(e) => setContent(e)}
            holder="editor_create"
        />
    )
}
