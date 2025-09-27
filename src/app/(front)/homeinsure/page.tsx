// app/product/page.tsx
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Hero04home from "@/components/hero-04home/hero-04home";

const productshome = [
    { id: 1, category: "ประกันบ้าน", title: "ประกันบ้านชั้น 1", description: "คุ้มครองรอบด้าน อัคคีภัย น้ำท่วม โจรกรรม เริ่มต้น 12,000 บาท/ปี", image: "/home1.jpg", link: "/homeinsure1" },
    { id: 2, category: "ประกันบ้าน", title: "ประกันบ้านชั้น 2", description: "คุ้มครองไฟไหม้ น้ำท่วม ซ่อมแซมบ้านบางส่วน เริ่มต้น 9,500 บาท/ปี", image: "/home2.jpg", link: "/homeinsure2" },
    { id: 3, category: "ประกันบ้าน", title: "ประกันบ้านชั้น 3", description: "ราคาประหยัด คุ้มครองเฉพาะไฟไหม้และภัยธรรมชาติ เริ่มต้น 5,000 บาท/ปี", image: "/home3.jpg", link: "/homeinsure3" },
    { id: 4, category: "ประกันบ้าน", title: "ประกันบ้านเหมาจ่าย", description: "คุ้มครองค่าซ่อมแซมบ้านและทรัพย์สินสูงสุด 1,000,000 บาท/ปี", image: "/home4.jpg", link: "/homeinsure4" },
    { id: 5, category: "ประกันบ้าน", title: "ประกันบ้าน+ทรัพย์สิน", description: "คุ้มครองทั้งตัวบ้านและทรัพย์สินภายใน เริ่มต้น 15,000 บาท/ปี", image: "/home5.jpg", link: "/homeinsure5" },
    { id: 6, category: "ประกันบ้าน", title: "ประกันบ้านอุบัติเหตุ", description: "ชดเชยรายได้และค่ารักษาพยาบาลจากอุบัติเหตุภายในบ้าน", image: "/home6.jpg", link: "/homeinsure6" },
  ];

export default function homeinsure() {
  return (
    <>
    <Hero04home/>
    <section id="productshome" className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {productshome.map((item) => (
        <Card key={item.id} className="shadow-none overflow-hidden rounded-md py-0 max-w-[400px] mx-auto">
          <CardHeader className="p-0">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="w-full aspect-video object-cover border-b"
            />
          </CardHeader>

          <CardContent className="pb-6">
            <div className="flex items-center gap-3">
              <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                {item.category}
              </Badge>
            </div>

            <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-2 text-muted-foreground">{item.description}</p>

            {/* ปุ่มของใครของมัน */}
        <Button size="sm" className="mt-6 shadow-none" asChild>
            <Link href={item.link}>
                Read more <ChevronRight />
            </Link>
        </Button>

          </CardContent>
        </Card>
      ))}
    </section>
    </>
  );
}
