// app/product/page.tsx
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Hero04travel from "@/components/hero-04travel/hero-04travel";

const producttravel = [
    { id: 1, category: "ประกันเดินทาง", title: "ประกันเดินทาง 1", description: "คุ้มครองอุบัติเหตุและค่ารักษาพยาบาลระหว่างเดินทางต่างประเทศ เริ่มต้น 450 บาท/ทริป", image: "/travel1.jpg", link: "/travel1" },
    { id: 2, category: "ประกันเดินทาง", title: "ประกันเดินทาง 2", description: "คุ้มครองกระเป๋าเดินทางและทรัพย์สินสูญหาย พร้อมค่ารักษาพยาบาล", image: "/travel2.jpg", link: "/travel2" },
    { id: 3, category: "ประกันเดินทาง", title: "ประกันเดินทาง 3", description: "คุ้มครองไฟลท์ล่าช้า ยกเลิกการเดินทาง และค่าใช้จ่ายฉุกเฉิน", image: "/travel3.jpg", link: "/travel3" },
    { id: 4, category: "ประกันเดินทาง", title: "ประกันเดินทาง 4", description: "คุ้มครองอุบัติเหตุ ค่ารักษา และความช่วยเหลือฉุกเฉินตลอด 24 ชม.", image: "/travel4.jpg", link: "/travel4" },
    { id: 5, category: "ประกันเดินทาง", title: "ประกันเดินทาง 5", description: "คุ้มครองค่าใช้จ่ายรักษาพยาบาลสูงสุด 5,000,000 บาท ในต่างประเทศ", image: "/travel5.jpg", link: "/travel5" },
    { id: 6, category: "ประกันเดินทาง", title: "ประกันเดินทาง 6", description: "ครอบคลุมทั้งครอบครัวในการเดินทาง คุ้มครองอุบัติเหตุและทรัพย์สิน", image: "/travel6.jpg", link: "/travel6" },
  ];

  export default function homeinsure() {
    return (
      <>
      <Hero04travel/>
      <section id="productshome" className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {producttravel.map((item) => (
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
  