"use server";

import prisma from "@/lib/prisma";
import {redirect} from "next/navigation";

export async function createShare(formData: FormData) {

    const rawFormData = {
        title: formData.get('title') as string,
        body: formData.get('body') as string,
    }

    const generateLink = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let link = '';
        for (let i = 0; i < 12; i++) {
            link += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return link;
    }

    const shareLink = await  prisma.shared.create({
        data: {
            title: rawFormData.title,
            body: rawFormData.body,
            link: generateLink(),
        }
    })

    redirect(`/${shareLink.link}`)
}