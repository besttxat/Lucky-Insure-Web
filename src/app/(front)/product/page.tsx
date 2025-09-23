// app/product/page.tsx
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const products = [
  { id: 1, category: "ประกันรถยนต์", title: "ประกันรถยนต์ชั้น 1", description: "คุ้มครองรอบด้าน รถเรา + รถคู่กรณี + อุบัติเหตุ + ภัยธรรมชาติ เริ่มต้น 12,000 บาท/ปี", image: "/car1.webp", link: "/carinsure1" },
  { id: 2, category: "ประกันรถยนต์", title: "ประกันรถยนต์ชั้น 2+", description: "คุ้มครองรถคู่กรณี และรถเราในกรณีชนกับพาหนะทางบก เริ่มต้น 9,000 บาท/ปี", image: "/car2.webp", link: "/carinsure2+" },
  { id: 3, category: "ประกันรถยนต์", title: "ประกันรถยนต์ชั้น 2", description: "คุ้มครองรถคู่กรณี + อุบัติเหตุบุคคล แต่ไม่คุ้มครองรถเรา เริ่มต้น 7,500 บาท/ปี", image: "/car2.webp", link: "/carinsure2" },
  { id: 4, category: "ประกันรถยนต์", title: "ประกันรถยนต์ชั้น 3+", description: "คุ้มครองรถคู่กรณี + รถเรา (เฉพาะกรณีชนกับพาหนะทางบก) เบี้ยถูก เริ่มต้น 5,000 บาท/ปี", image: "/car.webp", link: "/carinsure3+" },
  { id: 5, category: "ประกันรถยนต์", title: "ประกันรถยนต์ชั้น 3", description: "คุ้มครองเฉพาะรถคู่กรณี เน้นเบี้ยถูกสุด เริ่มต้น 3,500 บาท/ปี", image: "/car3.webp", link: "/carinsure3" },
];

export default function ProductPage() {
  return (
    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((item) => (
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
