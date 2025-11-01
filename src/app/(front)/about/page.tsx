import Contact01Page from "@/components/contact-01/contact-01";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <section className="py-12">
        <div className="max-w-(--breakpoint-xl) mx-auto px-6 md:px-0 flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            สแกนเพื่อแอดไลน์
          </h2>
          <p className="text-muted-foreground max-w-[50ch]">
            เพิ่มเราเป็นเพื่อนเพื่อรับข้อมูลอัปเดต โปรโมชั่น และสอบถามรายละเอียดเพิ่มเติมได้ทันทีผ่าน LINE.
          </p>
          <div className="relative h-64 w-64">
            <Image
              src="/qrcode.jpg"
              alt="Lucky Insure LINE QR Code"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
      <Contact01Page />
    </div>
  );
}
