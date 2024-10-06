'use client'

import { useSelector } from 'react-redux';
import {RootState} from "@/lib/store";

const DisplayContent = () => {
    const content = useSelector((state: RootState) => state.editor.content);

    return <div>{JSON.stringify(content)}</div>;
};

export default DisplayContent;
