import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Car,
  CarFront,
  ShieldCheck,
  AlertTriangle,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: ShieldCheck,
    title: "คุ้มครองความรับผิดต่อบุคคลภายนอก",
    description:
      "ดูแลชีวิต ร่างกาย และทรัพย์สินของบุคคลภายนอกเมื่อเกิดอุบัติเหตุจากการใช้รถ",
  },
  {
    icon: CarFront,
    title: "คุ้มครองเฉพาะรถคู่กรณี",
    description:
      "ไม่คุ้มครองความเสียหายต่อรถของผู้เอาประกันเอง (รถเรา)",
  },
  {
    icon: Users,
    title: "คุ้มครองผู้โดยสาร/บุคคลภายนอก",
    description:
      "มีค่ารักษาพยาบาล/เสียชีวิต ตามเงื่อนไขกรมธรรม์ (วงเงินจำกัด)",
  },
  {
    icon: AlertTriangle,
    title: "ไม่คุ้มครองรถหาย ไฟไหม้ ภัยธรรมชาติ",
    description:
      "ไม่รวมกรณีรถหาย ไฟไหม้ น้ำท่วม และเหตุอื่น ๆ นอกเงื่อนไข",
  },
  {
    icon: Wrench,
    title: "ซ่อมอู่ในเครือสำหรับคู่กรณี",
    description:
      "บริษัทประกันประสานอู่ในเครือเพื่อซ่อมรถคู่กรณี (รถเรามิได้คุ้มครอง)",
  },
  {
    icon: Car,
    title: "เบี้ยถูกที่สุด",
    description:
      "เหมาะกับรถอายุมาก ใช้น้อย หรือเน้นคุ้มครองความเสี่ยงต่อบุคคลภายนอก",
  },
];

const Features043 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-12 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-14 font-semibold tracking-[-0.03em] max-w-lg">
          ประกันรถยนต์ชั้น 3
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
          <div className="hidden md:block w-full h-full bg-muted rounded-xl">
            <Image
              src="/car3.jpg"
              alt="ประกันรถยนต์ชั้น 3"
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

export default Features043;