import {personal} from "@/lib/cv-info";
import {Metadata} from "next";
import HomeLayout from "@/app/home/layout";
import HomePage from "@/app/home/page";

export async function generateMetadata(): Promise<Metadata> {
    return {
        metadataBase: new URL('https://vladyslavfokin.netlify.app/'),
        title: personal.name,
        description: personal.desc,
        openGraph: {
            title: personal.name,
            description: personal.desc,
            images: personal.photo,
        },
    };
}

export default function MainPage() {
    return (
        <HomeLayout>
            <HomePage/>
        </HomeLayout>
    )
}
