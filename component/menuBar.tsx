'use client';
import React, {useEffect} from 'react';
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
    MenubarLabel
} from "@/components/ui/menubar";
import Image from 'next/image';
import {useEditor} from "@/lib/hooks/useEditor";

const MenuBar = () => {
    const {saveContent, initializeEditor } = useEditor();

    useEffect(() => {
        initializeEditor();
    }, [initializeEditor]);

    return (
        <div>
            <Menubar>
                <MenubarLabel>
                    <div className="h-auto w-auto">
                        <Image
                            src="/sus-docs.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                        />
                    </div>
                </MenubarLabel>
                <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={saveContent}>Save</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>
    );
};

export default MenuBar;
