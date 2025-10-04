import Image from "next/image";

export type ContactQrCardProps = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const ContactQrCard = ({
  eyebrow = "ติดต่อทีมงาน",
  heading = "สแกน QR Code",
  description = "เพิ่มเราเป็นเพื่อนบน LINE เพื่อรับคำปรึกษาแบบส่วนตัว และรับข่าวสารโปรโมชั่นก่อนใคร",
  imageSrc = "/qrcode.jpg",
  imageAlt = "QR Code ติดต่อ Lucky Insure",
}: ContactQrCardProps) => {
  return (
    <div className="rounded-[28px] bg-gradient-to-br from-primary/70 via-primary/40 to-primary/80 p-[1.5px] shadow-2xl">
      <div className="w-full max-w-[320px] sm:max-w-[360px] rounded-[26px] bg-background/95 p-6 shadow-sm ring-1 ring-border/50">
        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="mt-2 text-xl font-semibold">{heading}</h3>
        {description ? (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        ) : null}
        <div className="relative mt-5 aspect-square w-full overflow-hidden rounded-2xl border-2 border-dashed border-primary/60 bg-muted/60">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="320px"
            className="object-contain p-4"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ContactQrCard;
