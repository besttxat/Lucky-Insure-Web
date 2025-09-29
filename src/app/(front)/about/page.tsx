import Contact01Page from "@/components/contact-01/contact-01";
import Image from "next/image";

export default function About() {
    return (
        <div>
            {/* Gallery: 4-image grid */}
            <section className="py-12">
                <div className="max-w-(--breakpoint-xl) mx-auto px-6 md:px-0">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">
                        Gallery
                    </h2>
                    <p className="mt-2 text-center text-muted-foreground">
                        
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        {["/about1.jpg", "/about2.jpg", "/about3.jpg", "/about4.jpg"].map(
                            (src, idx) => (
                                <div
                                    key={src + idx}
                                    className="relative aspect-[16/9] rounded-xl border border-dashed border-foreground/20 overflow-hidden bg-muted"
                                >
                                    <Image
                                        src={src}
                                        alt={`gallery-${idx + 1}`}
                                        fill
                                        sizes="50vw"
                                        className="object-contain"
                                        priority={idx === 0}
                                    />
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            <Contact01Page />
        </div>
    );
}
