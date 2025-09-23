"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Globe2,
  ShieldCheck,
  Plane,
  FileCheck,
  Activity,
  Umbrella,
  MapPin,
  Clock,
  WalletCards,
} from "lucide-react";
import Image from "next/image";

const sections = [
  {
    icon: ShieldCheck,
    title: "ทำไมต้องมีประกันเดินทาง?",
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li>ค่ารักษาพยาบาลต่างประเทศแพงมาก ประกันช่วยออกค่าใช้จ่ายฉุกเฉิน</li>
        <li>เคลมไฟลท์ล่าช้า/ยกเลิก กระเป๋าหาย/เสียหาย ได้ตามเงื่อนไข</li>
        <li>มีบริการช่วยเหลือฉุกเฉิน 24 ชม. (Medical Assistance/EVAC)</li>
        <li>บางประเทศ/วีซ่า <span className="font-medium">บังคับต้องมี</span> (เช่น Schengen)</li>
      </ul>
    ),
  },
  {
    icon: Globe2,
    title: "แบบประกันที่ควรรู้ (เลือกให้เหมาะกับทริป)",
    body: (
      <div className="space-y-3">
        <p><span className="font-medium">Schengen Plan</span> — ใช้ขอวีซ่า ต้องมีค่ารักษาพยาบาลขั้นต่ำตามข้อกำหนด และครอบคลุมตลอดระยะพำนัก</p>
        <p><span className="font-medium">Asia / Regional</span> — เบี้ยย่อมเยา ครอบคลุมประเทศใกล้ๆ</p>
        <p><span className="font-medium">Worldwide</span> — ไปหลายทวีปหรือประเทศค่าใช้จ่ายสูง เลือกวงเงินสูง</p>
        <p><span className="font-medium">Annual Multi-Trip</span> — เดินทางบ่อยตลอดปี คุ้มกว่าแบบรายทริป</p>
        <p><span className="font-medium">Student / Work & Travel</span> — อยู่ต่างประเทศนาน มีเงื่อนไขเฉพาะนักเรียน/ฝึกงาน</p>
        <p><span className="font-medium">Adventure Sports</span> — เล่นสกี ดำน้ำ ปีนเขา ควรซื้อขยายความคุ้มครองกีฬาเสี่ยง</p>
      </div>
    ),
  },
  {
    icon: WalletCards,
    title: "วงเงินคุ้มครองที่แนะนำ",
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li>ค่ารักษาพยาบาลต่างประเทศ: <span className="font-medium">อย่างน้อย 2–5 ล้านบาท</span> (หรือเทียบเท่า)</li>
        <li>เคลื่อนย้ายฉุกเฉิน/ส่งตัวกลับประเทศ: เลือกวงเงินสูง (มักแยกจากค่ารักษา)</li>
        <li>กระเป๋า/ทรัพย์สินเสียหาย–สูญหาย: เช็ควงเงินต่อชิ้นและทั้งทริป</li>
        <li>ไฟลท์ล่าช้า/ยกเลิก: ดูเงื่อนไขชดเชยต่อชั่วโมง/ต่อเหตุ</li>
      </ul>
    ),
  },
  {
    icon: FileCheck,
    title: "เอกสาร/เงื่อนไขที่ควรรู้ (เฉพาะ Schengen/บางประเทศ)",
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li>กรมธรรม์ต้องครอบคลุมตลอดช่วงพำนัก และระบุชื่อ–นามสกุลตรงกับหนังสือเดินทาง</li>
        <li>วงเงินค่ารักษาและความคุ้มครองต้องไม่น้อยกว่าที่สถานทูตกำหนด</li>
        <li>ควรมีใบยืนยันคุ้มครอง COVID/โรคติดเชื้อ หากประเทศปลายทางกำหนด</li>
      </ul>
    ),
  },
  {
    icon: Activity,
    title: "เล่นกีฬา/กิจกรรมพิเศษ ต้องขยายอะไรบ้าง?",
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li>สกี/สโนว์บอร์ด/สเก็ต — เพิ่มความคุ้มครองกีฬาฤดูหนาว</li>
        <li>ดำน้ำ/ปีนเขา/กีฬาผาดโผน — ตรวจว่าคลุมระดับความลึก/ความสูง</li>
        <li>ขับขี่รถเช่า — เช็คความคุ้มครองความรับผิด/ทรัพย์สินบุคคลภายนอก</li>
      </ul>
    ),
  },
  {
    icon: Umbrella,
    title: "เช็คลิสต์เลือกประกันให้ตรงทริป",
    body: (
      <div className="space-y-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <label className="flex items-center gap-2"><input type="checkbox" className="checkbox" /> ปลายทาง/โซนที่ไป</label>
          <label className="flex items-center gap-2"><input type="checkbox" className="checkbox" /> ระยะเวลาทริป/ทั้งปี</label>
          <label className="flex items-center gap-2"><input type="checkbox" className="checkbox" /> วงเงินค่ารักษาเพียงพอ</label>
          <label className="flex items-center gap-2"><input type="checkbox" className="checkbox" /> เคลื่อนย้ายฉุกเฉิน/ส่งกลับ</label>
          <label className="flex items-center gap-2"><input type="checkbox" className="checkbox" /> กีฬาเสี่ยง/กิจกรรมพิเศษ</label>
          <label className="flex items-center gap-2"><input type="checkbox" className="checkbox" /> กระเป๋า–ไฟลท์ล่าช้า</label>
        </div>
        <p className="text-sm text-muted-foreground">* ถ้าขอวีซ่า ให้ตรวจข้อกำหนดสถานทูตอีกครั้งก่อนซื้อ</p>
      </div>
    ),
  },
  {
    icon: MapPin,
    title: "แพ็กแนะนำตามประเภททริป",
    body: (
      <div className="space-y-3">
        <p><span className="font-medium">ทริปยุโรป (Schengen)</span>: เลือกแผนที่ระบุ “ใช้ยื่นวีซ่าได้”, วงเงินรักษา ≥ ข้อกำหนด, ครอบคลุมตลอดพำนัก</p>
        <p><span className="font-medium">ทริปญี่ปุ่น/เกาหลี/เอเชีย</span>: Asia/Regional เพียงพอ เพิ่มกระเป๋า–ไฟลท์ล่าช้าตามฤดูกาลท่องเที่ยว</p>
        <p><span className="font-medium">Work & Travel/เรียนต่างประเทศ</span>: เลือกแผนระยะยาว + OPD/ฟัน/วัคซีน (ถ้ามี)</p>
        <p><span className="font-medium">สายลุยกีฬา</span>: เพิ่มความคุ้มครองกีฬาเสี่ยง/อุปกรณ์กีฬา</p>
      </div>
    ),
  },
  {
    icon: Clock,
    title: "ควรซื้อเมื่อไหร่ & เคลมยังไง?",
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li>ซื้อทันทีหลังออกตั๋ว/จองที่พัก เพื่อให้คุ้มครองเหตุ “ก่อนเดินทาง” (ยกเลิก/เลื่อนทริป)</li>
        <li>เก็บหลักฐาน: ใบเสร็จ รพ., ใบยืนยันไฟลท์ล่าช้า, ใบแจ้งความกรณีกระเป๋าหาย</li>
        <li>แจ้งเคลมผ่านแอป/คอลเซ็นเตอร์ พร้อมสำเนาพาสปอร์ต/บอร์ดดิ้งพาส</li>
      </ul>
    ),
  },
];

export default function TravelWhichInsurancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-12 px-6">
        <h1 className="text-4xl md:text-5xl md:leading-14 font-semibold tracking-[-0.03em] max-w-2xl">
          เดินทางต่างประเทศควรมีประกันแบบไหน?
        </h1>

        <div className="mt-6 md:mt-10 w-full mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Content */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {sections.map(({ icon: Icon, title, body }, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="group/accordion-item data-[state=open]:border-b-2 data-[state=open]:border-primary"
                >
                  <AccordionTrigger className="text-lg [&>svg]:hidden group-first/accordion-item:pt-0">
                    <div className="flex items-center gap-3">
                      <Icon className="shrink-0" />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[17px] leading-relaxed text-muted-foreground">
                    {body}
                    <div className="mt-6 mb-2 md:hidden aspect-video w-full bg-muted rounded-xl" />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTA row */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/travelinsure"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 border hover:bg-accent transition"
              >
                ดูแพ็กเกจประกันเดินทาง
              </a>
              {/* <a
                href="/quote/travel"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-primary text-primary-foreground hover:opacity-90 transition"
              >
                ขอใบเสนอราคา
              </a> */}
            </div>
          </div>

          {/* Right: Media slot */}
          <div className="hidden md:block w-full h-full bg-muted rounded-xl overflow-hidden">
            <Image
              src="/travel-which.jpg"  // ⬅️ วางรูปหน้าปกไว้ที่ public/travel-which.jpg
              alt="เลือกประกันเดินทางอย่างไร"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Extra section: บล็อกภาพ+ข้อความ (ช่องวางรูป/เนื้อหาเพิ่ม) */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: Plane, title: "ก่อนออกเดินทาง", desc: "ซื้อประกันทันทีหลังจองตั๋ว เพื่อคุ้มครองเหตุยกเลิกทริป" },
            { icon: Umbrella, title: "ระหว่างทริป", desc: "พกเบอร์ฉุกเฉินบริษัทประกันและสำเนากรมธรรม์ไว้เสมอ" },
            { icon: MapPin, title: "หลังเดินทาง", desc: "ยื่นเคลมออนไลน์ภายในเวลาที่กำหนด เก็บหลักฐานให้ครบ" },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border p-5 hover:shadow-sm transition">
              <div className="flex items-center gap-3 mb-2">
                <c.icon />
                <h3 className="text-lg font-semibold">{c.title}</h3>
              </div>
              <p className="text-muted-foreground">{c.desc}</p>
              <div className="mt-4 aspect-[16/9] w-full bg-muted rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}