"use client";

import Image from "next/image";
import BackgroundImage from "@/public/bg.jpg";
import Button from "../components/ui/Button";
import { useRouter } from "next/navigation";

export default function Home() {
    const { push } = useRouter();

    return (
        <section className="flex h-screen w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-0">
                <h1 className="text-8xl font-bold text-white">Cinelandia</h1>

                <h4 className="text-md text-gray-400">(Migliorato)</h4>

                <Button className="mt-10" onClick={() => push("/films")}>
                    Esplora ora
                </Button>
            </div>

            <Image
                src={BackgroundImage}
                alt="Cinelandia Logo"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full object-cover filter brightness-30"
            />
        </section>
    );
}
