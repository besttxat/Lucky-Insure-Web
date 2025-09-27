// app/product/page.tsx
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Hero04pa from "@/components/hero-04pa/hero-04pa";

const productaccident = [
    { id: 1, category: "ประกันอุบัติเหตุ", title: "ประกันอุบัติเหตุ 1", description: "คุ้มครองอุบัติเหตุรอบด้าน ค่ารักษาพยาบาล ชดเชยรายได้ เริ่มต้น 3,000 บาท/ปี", image: "/pa1.jpg", link: "/accident1" },
    { id: 2, category: "ประกันอุบัติเหตุ", title: "ประกันอุบัติเหตุ 2", description: "เบี้ยประกันคุ้มค่า คุ้มครองเสียชีวิตและทุพพลภาพจากอุบัติเหตุ เริ่มต้น 4,500 บาท/ปี", image: "/pa2.jpg", link: "/accident2" },
    { id: 3, category: "ประกันอุบัติเหตุ", title: "ประกันอุบัติเหตุ 3", description: "คุ้มครองค่ารักษาพยาบาลจากอุบัติเหตุ วงเงินสูงสุด 200,000 บาท/ครั้ง", image: "/pa3.jpg", link: "/accident3" },
    { id: 4, category: "ประกันอุบัติเหตุ", title: "ประกันอุบัติเหตุ 4", description: "คุ้มครองทั้งอุบัติเหตุและเงินชดเชยรายได้ต่อวัน สูงสุด 1,000 บาท/วัน", image: "/pa4.jpg", link: "/accident4" },
    { id: 5, category: "ประกันอุบัติเหตุ", title: "ประกันอุบัติเหตุ 5", description: "คุ้มครองอุบัติเหตุระหว่างการเดินทาง ทั้งในและต่างประเทศ", image: "/pa5.jpg", link: "/accident5" },
    { id: 6, category: "ประกันอุบัติเหตุ", title: "ประกันอุบัติเหตุ 6", description: "ชดเชยรายได้ ค่ารักษา และทุนประกันชีวิตจากอุบัติเหตุ สูงสุด 1,000,000 บาท", image: "/pa6.jpg", link: "/accident6" },
  ];

  export default function homeinsure() {
    return (
      <>
      <Hero04pa/>
      <section id="productshome" className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {productaccident.map((item) => (
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
  