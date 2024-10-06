import { useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from "@editorjs/header";
import List from "@editorjs/list";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setContent} from "@/lib/feature/editorSlice";
import CodeTool from "@editorjs/code";

export const useEditor = () => {
    const dispatch = useAppDispatch();
    const content = useAppSelector((state) => state.editor.content);
    const editorRef = useRef<EditorJS | null>(null);

    const initializeEditor = () => {
        if (!editorRef.current) {
            editorRef.current = new EditorJS({
                holder: 'editor',
                tools: {
                    header: Header,
                    list: List,
                    code: CodeTool
                },
            });
        }
    };

    const saveContent = async () => {
        if (editorRef.current) {
            const savedData = await editorRef.current.save();
            dispatch(setContent(savedData));
            console.log('Content saved:', savedData);
        }
    };

    return { content, saveContent, initializeEditor };
};
