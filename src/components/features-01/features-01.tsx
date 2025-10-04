import {
  Blocks,
  Bot,
  ChartPie,
  Film,
  MessageCircle,
  Settings2,
} from "lucide-react";
import React from "react";
import Link from "next/link";

const features = [
  {
    icon: Settings2,
    title: "ประกันรถยนต์ทุกชั้น",
    description:
      "Design your space with drag-and-drop simplicity—create grids, lists, or galleries in seconds.",
    href: "/product",
  },
  {
    icon: Blocks,
    title: "ประกันบ้าน",
    description:
      "Embed polls, quizzes, or forms to keep your audience engaged.",
    href: "/homeinsure",
  },
  {
    icon: Bot,
    title: "ประกันอุบัติเหตุ",
    description:
      "Generate summaries, auto-format content, or translate into multiple languages seamlessly.",
    href: "/accidentinsure",
  },
  {
    icon: Film,
    title: "ประกันเดินทาง",
    description:
      "Connect with Spotify, Instagram, or your own media library for dynamic visuals and sound.",
    href: "/travelinsure",
  },
  {
    icon: ChartPie,
    title: "ประกันอื่นๆ",
    description:
      "Track engagement, clicks, and user activity with intuitive charts and reports.",
    href: "/etcinsure",
  },
  {
    icon: MessageCircle,
    title: "เกี่ยวกับเรา",
    description:
      "Comment, tag, and assign tasks directly within your documents.",
    href: "/about",
  },
];

const Features01Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">
          แนะนำโดย Lucky Insure
        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-(--breakpoint-lg) mx-auto px-6">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href || "/product"}
              className="flex flex-col border rounded-xl py-6 px-5 hover:bg-muted/40 transition-colors"
              aria-label={feature.title}
            >
              <div className="mb-4 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <feature.icon className="size-5" />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features01Page;
