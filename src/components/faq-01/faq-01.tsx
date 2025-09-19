import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "ทำประกันไปแล้วคุ้มครองอะไรบ้าง?",
    answer:
      "ครอบคลุมค่ารักษาพยาบาลจากอุบัติเหตุ/เจ็บป่วยตามวงเงินในกรมธรรม์ ค่าห้อง-อาหาร-พยาบาล ค่าหมอและการผ่าตัด รวมถึงผลประโยชน์เพิ่มเติมที่เลือก เช่น เงินชดเชยรายได้หรือคุ้มครองอุบัติเหตุส่วนบุคคล รายละเอียดดูได้ในตารางความคุ้มครองของแต่ละแผน",
  },
  {
    question: "ค่าเบี้ยประกันคำนวณจากอะไร?",
    answer:
      "พิจารณาจากอายุ เพศ ประวัติสุขภาพ แผนความคุ้มครอง/วงเงินที่เลือก และวิธีชำระ (รายเดือน/รายปี) ลูกค้าสามารถกรอกข้อมูลเบื้องต้นในหน้า “คำนวณเบี้ย” เพื่อดูราคาโดยประมาณก่อนตัดสินใจ",
  },
  {
    question: "เคลมประกันอย่างไร และใช้เวลากี่วัน?",
    answer:
      "แจ้งเคลมผ่านไลน์/แอป/คอลเซ็นเตอร์ อัปโหลดเอกสาร เช่น ใบเสร็จรับเงิน/ใบรับรองแพทย์ ทีมงานจะตรวจสอบเอกสารและโอนเงินเข้าบัญชีที่แจ้งไว้ ปกติใช้เวลา ประมาณ 7–14 วันทำการ หลังเอกสารครบถ้วน (ระยะเวลาจริงขึ้นกับประเภทเคลมและโรงพยาบาล)",
  },
  {
    question: "มีโรคประจำตัวทำประกันได้ไหม?",
    answer:
      "ทำได้ในหลายกรณี แต่อาจมีเงื่อนไขเพิ่มเติม เช่น ช่วงเวลารอคอย (waiting period) หรือยกเว้นความคุ้มครองบางอาการที่เป็นมาก่อน กรุณากรอกแบบประเมินสุขภาพให้ครบถ้วน เพื่อให้เราประเมินแผนที่เหมาะสมที่สุด",
  },
  {
    question: "สามารถยกเลิกหรือขอเงินคืนได้หรือไม่?",
    answer:
      "สามารถยกเลิกได้ตามเงื่อนไขในกรมธรรม์ หากยกเลิกภายในช่วงพิจารณา (free-look period) มักขอคืนค่าเบี้ยได้เต็มจำนวน หลังจากนั้นการคืนเงินจะเป็นไปตามสัดส่วนระยะเวลาคุ้มครองที่ใช้ไปแล้ว",
  },
];
// min-h-screen 
const FAQ01 = () => {
  return (
    <div className="flex items-center justify-center px-6 py-12">
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-tighter">
          คำถามที่พบบ่อย (FAQ)
        </h2>

        <Accordion type="single" className="mt-6" defaultValue="question-0">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ01;
