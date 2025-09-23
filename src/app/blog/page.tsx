import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  id: string | number;
  category: string;
  title: string;
  description?: string;
  author?: string;
  date?: string; // preformatted date text (optional)
  image?: string; // support product-style field name
  imageUrl?: string; // backwards compatibility
  link?: string; // optional link to detail page
  authorAvatarUrl?: string; // optional avatar (not displayed)
};

type Blog01Props = {
  heading?: string;
  posts?: BlogPost[];
  sortOptions?: { value: string; label: string }[];
  defaultSort?: string;
  linkBase?: string; // optional base path to build link from id if post.link is missing
};

const defaultPosts: BlogPost[] = [
  {
    id: 1,
    category: "Technology",
    title: "What is the future of web development?",
    description: "แนวโน้มเทคโนโลยีเว็บและทักษะที่ควรมีในปีหน้า",
    date: "Nov 30, 2024",
    image: "/car1.webp",
    link: "/blog/1",
  },
  {
    id: 2,
    category: "Insurance",
    title: "เคล็ดลับเลือกประกันรถให้คุ้มที่สุด",
    description: "เลือกแผนที่ใช่ ปรับความคุ้มครองให้ลงตัว",
    date: "Nov 22, 2024",
    image: "/car2.webp",
    link: "/blog/2",
  },
  {
    id: 3,
    category: "Travel",
    title: "เดินทางต่างประเทศควรมีประกันแบบไหน?",
    description: "เทียบความคุ้มครองยอดฮิตก่อนบิน",
    date: "Oct 12, 2024",
    image: "/travel1.png",
    link: "/NEWS3",
  },
  {
    id: 4,
    category: "Health",
    title: "ทำไมอุบัติเหตุเล็กๆ ควรมีความคุ้มครอง",
    description: "ค่าใช้จ่ายไม่เล็กตาม—ป้องกันความเสี่ยงฉุกเฉิน",
    date: "Sep 18, 2024",
    image: "/health1.jpg",
    link: "/blog/4",
  },
  {
    id: 5,
    category: "Home",
    title: "ประกันบ้านจำเป็นแค่ไหนในปีนี้",
    description: "ไฟไหม้ น้ำท่วม โจรกรรม—คุ้มครองอะไรบ้าง",
    date: "Aug 05, 2024",
    image: "/pa1.jpg",
    link: "/blog/5",
  },
  {
    id: 6,
    category: "Technology",
    title: "AI ช่วยงานประกันอย่างไรบ้าง",
    description: "ย่นเวลาเอกสาร ลดความผิดพลาด เพิ่มประสบการณ์ลูกค้า",
    date: "Jul 22, 2024",
    image: "/car3.webp",
    link: "/blog/6",
  },
];

const defaultSortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
];

const Blog01Page = ({
  heading = "Today\'s Posts",
  posts = defaultPosts,
  sortOptions = defaultSortOptions,
  defaultSort = sortOptions[0]?.value || "recommended",
  linkBase,
}: Blog01Props) => {
  return (
    <div className="max-w-(--breakpoint-xl) mx-auto py-16 px-6 xl:px-0">
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-semibold tracking-tighter">{heading}</h2>
        <Select defaultValue={defaultSort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => {
          const href = post.link ?? (linkBase ? `${linkBase}/${post.id}` : undefined);
          const imgSrc = post.image || post.imageUrl;
          return (
          <Card key={post.id} className="shadow-none py-0 gap-3">
            <CardHeader className="p-2 pb-0">
              <div className="relative aspect-video bg-muted rounded-lg w-full overflow-hidden">
                {imgSrc ? (
                  href ? (
                    <Link href={href} aria-label={post.title}>
                      <Image
                        src={imgSrc}
                        alt={post.title}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={imgSrc}
                      alt={post.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  )
                ) : null}
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-5 px-5">
              <Badge variant="secondary">{post.category}</Badge>

              <h3 className="mt-4 text-[1.4rem] font-semibold tracking-tight">
                {href ? (
                  <Link href={href} className="hover:underline">
                    {post.title}
                  </Link>
                ) : (
                  post.title
                )}
              </h3>
              {post.description ? (
                <p className="mt-2 text-foreground/80 text-[15px]">
                  {post.description}
                </p>
              ) : null}
              {post.date ? (
                <div className="mt-6 text-muted-foreground text-sm">{post.date}</div>
              ) : null}
            </CardContent>
          </Card>
        );})}
      </div>
    </div>
  );
};

export default Blog01Page;
