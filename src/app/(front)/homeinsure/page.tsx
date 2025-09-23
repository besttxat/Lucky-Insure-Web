// app/product/page.tsx
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const productshome = [
  { id: 1, category: "ประกันบ้าน", title: "ประกันบ้านชั้น 1", description: "คุ้มครองรอบด้าน อุบัติเหตุ ค่ารักษา ซ่อมรถ เริ่มต้น 12,000 บาท/ปี", image: "/", link: "/carinsure1" },
  { id: 2, category: "ประกันรถยนต์", title: "ประกันรถยนต์ชั้น 2", description: "คุ้มครองรถคู่กรณี + อุบัติเหตุ เริ่มต้น 7,500 บาท/ปี", image: "/car2.webp", link: "/carinsure1" },
  { id: 3, category: "ประกันรถยนต์", title: "ประกันรถยนต์ชั้น 3", description: "ราคาประหยัดสุด คุ้มครองคู่กรณี เริ่มต้น 3,500 บาท/ปี", image: "/car3.webp", link: "/carinsure1" },
  { id: 4, category: "ประกันสุขภาพ", title: "ประกันสุขภาพเหมาจ่าย", description: "คุ้มครองค่ารักษาพยาบาลสูงสุด 1,000,000 บาท/ปี", image: "/health1.jpg", link: "/carinsure1" },
  { id: 5, category: "ประกันเดินทาง", title: "ประกันการเดินทางต่างประเทศ", description: "คุ้มครองอุบัติเหตุและค่ารักษาพยาบาลในต่างประเทศ", image: "/travel1.png", link: "/carinsure1" },
  { id: 6, category: "ประกันอุบัติเหตุ", title: "ประกันอุบัติเหตุส่วนบุคคล", description: "ชดเชยรายได้และค่ารักษาพยาบาลจากอุบัติเหตุ", image: "/pa1.jpg", link: "/carinsure1" },
];

export default function homeinsure() {
  return (
    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
    </div>
  );
}
