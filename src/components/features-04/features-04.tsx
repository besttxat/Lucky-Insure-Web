import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Goal,
    title: "คุ้มครองครอบคลุมที่สุด",
    description:
      "ทั้งรถผู้เอาประกัน, รถคู่กรณี, ทรัพย์สินบุคคลภายนอก รวมถึงผู้ขับขี่และผู้โดยสาร",
  },
  {
    icon: BookCheck,
    title: "คุ้มครองอุบัติเหตุทุกกรณี",
    description:
      "ไม่ว่าจะชนกับยานพาหนะ, ชนสิ่งกีดขวาง, รถหาย, ไฟไหม้, น้ำท่วม",
  },
  {
    icon: ChartPie,
    title: "มีคุ้มครองภัยธรรมชาติ",
    description:
      "เช่น น้ำท่วม, แผ่นดินไหว, พายุ, ลูกเห็บ (แล้วแต่เงื่อนไขบริษัท)",
  },
  {
    icon: Users,
    title: "ดูแลค่ารักษาพยาบาล",
    description:
      "ทั้งของผู้เอาประกัน ผู้โดยสาร และบุคคลภายนอก",
  },
  {
    icon: FolderSync,
    title: "มีบริการช่วยเหลือฉุกเฉิน 24 ชั่วโมง",
    description:
      "เช่น รถยก, รถลาก, ติดต่อประสานงานอุบัติเหตุ",
  },
  {
    icon: Zap,
    title: "เบี้ยประกันสูงกว่าชั้นอื่น",
    description:
      "เนื่องจากให้ความคุ้มครองกว้างที่สุด แต่สามารถเลือกแบบมี/ไม่มี Deductible (ค่าเสียหายส่วนแรก) เพื่อลดเบี้ยได้",
  },
];

const Features04Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-12 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-14 font-semibold tracking-[-0.03em] max-w-lg">
        ประกันรถยนต์ชั้น 1
        </h2>
        <div className="mt-6 md:mt-10 w-full mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <Accordion defaultValue="item-0" type="single" className="w-full">
              {features.map(({ title, description, icon: Icon }, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group/accordion-item data-[state=open]:border-b-2 data-[state=open]:border-primary"
                >
                  <AccordionTrigger className="text-lg [&>svg]:hidden group-first/accordion-item:pt-0">
                    <div className="flex items-center gap-4">
                      <Icon />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[17px] leading-relaxed text-muted-foreground">
                    {description}
                    <div className="mt-6 mb-2 md:hidden aspect-video w-full bg-muted rounded-xl" />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Media */}
          <div className="hidden md:block w-full h-full bg-muted rounded-xl" >
          <Image
            src="/car1.jpg" 
            alt="ประกันรถยนต์ชั้น 1"
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-2xl"
            priority
            />
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Features04Page;
