// app/product/page.tsx
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const productetc = [    
    { id: 1, category: "ประกันธุรกิจ", title: "ประกันร้านค้า/SME", description: "คุ้มครองไฟไหม้ น้ำท่วม และความเสียหายต่อทรัพย์สินในร้านค้า", image: "/biz1.jpg", link: "/biz1" },
    { id: 2, category: "ประกันธุรกิจ", title: "ประกันความรับผิดของผู้ประกอบการ", description: "คุ้มครองความเสียหายต่อบุคคลที่ 3 จากการประกอบธุรกิจ", image: "/biz2.jpg", link: "/biz2" },    
    { id: 3, category: "ประกันสัตว์เลี้ยง", title: "ประกันสุขภาพสุนัข", description: "คุ้มครองค่ารักษาพยาบาลสุนัขจากเจ็บป่วยและอุบัติเหตุ", image: "/pet1.jpg", link: "/pet1" },
    { id: 4, category: "ประกันสัตว์เลี้ยง", title: "ประกันสุขภาพแมว", description: "คุ้มครองค่ารักษาพยาบาลแมว โรคและอุบัติเหตุ", image: "/pet2.jpg", link: "/pet2" },      
    { id: 5, category: "ประกันเกษตร", title: "ประกันภัยข้าว", description: "คุ้มครองผลผลิตข้าวจากภัยธรรมชาติ เช่น น้ำท่วม ภัยแล้ง", image: "/agri1.jpg", link: "/agri1" },
    { id: 6, category: "ประกันเกษตร", title: "ประกันภัยพืชผล", description: "คุ้มครองพืชผลเกษตรทั่วไปจากโรค แมลง และภัยธรรมชาติ", image: "/agri2.jpg", link: "/agri2" },
  ];

export default function homeinsure() {
  return (
    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {productetc.map((item) => (
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
