'use client';

import Editor from "@/component/editor";
import MenuBar from "@/component/menuBar";

export default function Home() {
    return(
        <div className="flex flex-col">
            <MenuBar/>
            <Editor/>
        </div>

    )
}
