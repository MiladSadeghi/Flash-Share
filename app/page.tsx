"use client";

import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {createShare} from "@/app/actions";

export default function Home() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");



    return (
        <form action={createShare} className={"h-full flex flex-col justify-center items-center"}>
            <Input value={title} name={"title"} onChange={(e) => setTitle(e.target.value)} className={"w-full mb-4 text-white"} placeholder={"title"} />
            <Textarea value={body} name={"body"} onChange={(e) => setBody(e.target.value)} className={"text-white resize-none"} rows={20} />
            <Button type={"submit"} disabled={!title || !body} className={"w-full mt-4 transition-all"} variant={"secondary"}>Save</Button>
        </form>
    );
}
