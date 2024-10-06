import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {OutputData} from "@editorjs/editorjs";

export interface EditorState {
    content: OutputData | null;
}

const initialState: EditorState = {
    content: null,
};

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        setContent: (state, action: PayloadAction<OutputData | null>) => {
            state.content = action.payload;
        },
    },
});

export const { setContent } = editorSlice.actions;
