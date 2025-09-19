// src/components/logo/logo.tsx
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/luckyy.jpg"        // ต้องมีไฟล์ public/luckyy.png อยู่จริง
      alt="Lucky Insure Logo"
      width={60}
      height={3}
      priority
    />
  );
}
