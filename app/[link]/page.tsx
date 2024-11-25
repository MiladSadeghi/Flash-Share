import {use} from "react";
import prisma from "@/lib/prisma";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

export const generateMetadata = async ({params}: {params: Promise<{link: string}>}) => {
    const {link} = await params;

    const data = await prisma.shared.findFirst({
        where: {
            link
        }
    })

    if (!data) {
        return {
            title: "not found"
        }
    }

    return {
        title: data.title
    }
}

export default function Link({params}: {params: Promise<{link: string}>}) {
   const {link} = use(params);

    const data = use(prisma.shared.findFirst({
        where: {
            link
        }
    }))

    if (!data) {
        return <div className={"h-full flex flex-col justify-center items-center"}>
            notFound
        </div>
    }

    return (
        <div className={"h-full flex flex-col justify-center items-center"}>
            <Input value={data.title} readOnly={true} className={"w-full mb-4 text-white"} placeholder={"title"}/>
            <Textarea value={data.body} readOnly={true} name={"body"} className={"text-white resize-none"} rows={20}/>
        </div>
    )
}