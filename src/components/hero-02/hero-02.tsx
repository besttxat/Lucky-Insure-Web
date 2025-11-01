 "use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Hero02 = () => {
  const [isInfoOpen, setIsInfoOpen] = React.useState(true);

  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/lucky.jpg"   // 👈 รูปต้องอยู่ใน public/lucky.png
        alt="Hero banner"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay text */}
      <div className="relative z-10 max-w-(--breakpoint-xl) mx-auto px-6 text-white md:-translate-x-8 lg:-translate-x-12">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border bg-white/20 text-white backdrop-blur-sm"
          asChild
        >
        </Badge>

        <div className="mt-6 flex flex-col items-start gap-4">
          <Button
            type="button"
            size="sm"
            variant="secondary"
            className="rounded-full border-white/40 bg-white/20 text-white hover:bg-white hover:text-black"
            onClick={() => setIsInfoOpen((prev) => !prev)}
            aria-expanded={isInfoOpen}
          >
            {isInfoOpen ? "ซ่อนรายละเอียด" : "แสดงรายละเอียด"}
          </Button>

          {isInfoOpen ? (
            <div className="inline-flex max-w-[65ch] flex-col gap-6 rounded-3xl border border-white/25 bg-black/40 px-8 py-6 shadow-lg backdrop-blur-sm">
              <h1 className="max-w-[20ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-tight tracking-tighter drop-shadow-lg">
                ประกันชั้น 1 คุ้มครองครบจบ
              </h1>

              <p className="max-w-[60ch] sm:text-lg drop-shadow">
                ประกันรถยนต์ชั้น 1 คุ้มครองครบทุกความเสี่ยง ทั้งอุบัติเหตุ รถชน รถหาย ไฟไหม้ น้ำท่วม รวมถึงค่ารักษาพยาบาลและความเสียหายต่อบุคคลภายนอก 
                มาพร้อมบริการช่วยเหลือฉุกเฉินตลอด 24 ชั่วโมง ให้คุณขับขี่มั่นใจ อุ่นใจทุกเส้นทาง ครอบคลุมและคุ้มค่าที่สุด
              </p>

              <div className="mt-12 flex items-center gap-4">
                <Link href="/product">
                  <Button size="lg" className="rounded-full text-base">
                    ประกัน <ArrowUpRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full text-base shadow-none bg-white/20 text-white border-white hover:bg-white hover:text-black"
                >
                  <Link
                    href="https://www.youtube.com/watch?v=Vri7TWGNgPA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CirclePlay className="h-5 w-5" /> Watch Demo
                  </Link>
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

export default Hero02;
