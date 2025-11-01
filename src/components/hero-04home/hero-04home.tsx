import ContactQrCard from "@/components/contact-qr-card/contact-qr-card";
import React from "react";
import Image from "next/image";

const Hero04home = () => {
  return (
    <div className="overflow-hidden">
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-(--breakpoint-xl) w-full mx-auto flex flex-col items-center gap-12 px-6 lg:px-10 xl:px-16 py-12 lg:py-0">
          <div className="flex flex-col items-center text-center">
            
            <h1 className="mt-6 max-w-[30ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
              ปกป้องบ้านและทรัพย์สินที่คุณรัก ด้วยประกันบ้านที่คุ้มครองครบวงจร
            </h1>
            <p className="mt-6 max-w-[70ch] text-lg text-muted-foreground">
              ประกันบ้านนี้คุ้มครองทั้งไฟไหม้ ฟ้าผ่า ระเบิด ภัยธรรมชาติ ทรัพย์สินภายในบ้าน การโจรกรรม และความเสียหายที่อาจเกิดกับบุคคลภายนอกครบถ้วนในกรมธรรม์เดียว
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="relative h-[550px] w-full max-w-[360px] rounded-[2.5rem] border border-border/60 bg-background/60 shadow-2xl shadow-primary/10 overflow-hidden">
              <Image
                src="/HomeI.png"
                alt="ภาพโปรโมชันประกันบ้าน"
                fill
                sizes="(min-width:1024px) 360px, 80vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="relative h-[550px] w-full max-w-[360px] rounded-[2.5rem] border border-border/60 bg-background/60 shadow-2xl shadow-primary/10 overflow-hidden">
              <Image
                src="/viriya.jpg"
                alt="บ้านพร้อมการดูแลจากประกัน"
                fill
                sizes="(min-width:1024px) 360px, 80vw"
                className="object-cover"
                priority={false}
              />
            </div>
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

export default Hero04home;
