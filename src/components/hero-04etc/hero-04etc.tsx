import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContactQrCard from "@/components/contact-qr-card/contact-qr-card";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Hero04etc = () => {
  return (
    <div className="overflow-hidden">
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 lg:px-10 xl:px-16 py-12 lg:py-0">
          <div className="my-auto">
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            {/* <Link href="#productshome">
              โปรโมชันใหม่ประจำเดือน <ArrowUpRight className="ml-1 size-4" />
            </Link> */}
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
            เลือกประกันอื่นๆที่ใช่สำหรับคุณ
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
          เรามีบริการประกันภัยที่ครอบคลุมทุกความต้องการของธุรกิจและบุคคลทั่วไป ไม่ว่าจะเป็นที่อยู่อาศัย โรงงาน อาคารพาณิชย์ หรือการดำเนินธุรกิจในทุกมิติ
          </p>
          <div className="mt-12 flex items-center gap-4">
            {/* <Button size="lg" className="rounded-full text-base" asChild>
              <Link href="#productshome">
                ดูแพ็กเกจทั้งหมด <ArrowUpRight className="h-5! w-5!" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
              asChild
            >
              <Link href="/calculator">
                <CirclePlay className="h-5! w-5!" /> คำนวณเบี้ย
              </Link>
            </Button> */}
          </div>
          </div>
          <div className="relative w-full max-w-[560px] md:max-w-[680px] lg:max-w-[760px] h-[420px] md:h-[520px] lg:h-[640px] mx-auto lg:mx-0 lg:ml-8 flex items-center justify-center">
            <Image
              src="/HomeI.png"
              alt="ภาพโปรโมชันประกัน"
              width={1000}
              height={1000}
              sizes="(min-width:1280px) 760px, (min-width:768px) 680px, 560px"
              className="h-full w-auto object-contain object-center rounded-2xl ring-1 ring-border"
              priority
            />
          </div>
        </div>
      </section>
      <section className="w-full px-6 pb-20">
        <div className="max-w-(--breakpoint-xl) mx-auto flex flex-col items-center text-center gap-4">
          <ContactQrCard />
        </div>
      </section>
    </div>
  );
};

export default Hero04etc;
