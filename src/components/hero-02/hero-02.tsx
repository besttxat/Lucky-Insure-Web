import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";


const Hero02 = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link href="#">
              Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
            ประกันชั้น 1 คุ้มครองครบจบ
          </h1>
          <p className="mt-6 max-w-[60ch] sm:text-lg">
            Explore a collection of Shadcn UI blocks and components, ready to
            preview and copy. Streamline your development workflow with
            easy-to-implement examples.
          </p>
          <div className="mt-12 flex items-center gap-4">
          <Link href="/product">
            <Button size="lg" className="rounded-full text-base">
              ประกัน <ArrowUpRight className="h-5! w-5!" />
            </Button>
            </Link>
            <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full text-base shadow-none"
              >
            <Link
                href="https://www.youtube.com/watch?v=Vri7TWGNgPA"
                target="_blank"       // 👈 เปิดแท็บใหม่
                rel="noopener noreferrer"
              >
    <CirclePlay className="h-5 w-5" /> Watch Demo
  </Link>
</Button>
          </div>
        </div>
        <div className="w-full aspect-video bg-accent rounded-xl" >
        <Image
          src="/lucky.png"        // 👈 รูปต้องอยู่ใน public/hero.jpg
          alt="Hero banner"
          width={1920}
          height={1080}
          className="w-full h-full object-cover rounded-xl"
       />
        </div>
      </div>
    </div>
  );
};

export default Hero02;
