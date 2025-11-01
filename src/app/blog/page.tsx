import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer05Page from "@/components/footer-05/footer-05";
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
    category: "Car Insure",
    title: "ประกันรถยนต์ชั้น1",
    description: "เลือกประกันรถยนต์ชั้น 1 คุ้มครองครบวงจร",
    date: "",
    image: "/car1.jpg",
    link: "/carinsure1",
  },
  {
    id: 2,
    category: "Car Insure",
    title: "ประกันรถยนต์ชั้น3+",
    description: "เลือกแผนที่ใช่ ปรับความคุ้มครองให้ลงตัว",
    date: "",
    image: "/car3plus.jpg",
    link: "/carinsure3+",
  },
  {
    id: 3,
    category: "Home",
    title: "ประกันบ้าน",
    description: "ไฟไหม้ น้ำท่วม โจรกรรม—คุ้มครองอะไรบ้าง",
    date: "",
    image: "/Homei.png",
    link: "/homeinsure",
  },
  {
    id: 4,
    category: "Health",
    title: "ประกันสุขภาพ",
    description: "ค่าใช้จ่ายไม่เล็กตาม—ป้องกันความเสี่ยงฉุกเฉิน",
    date: "",
    image: "/pai.jpg",
    link: "/accidentinsure",
  },
  {
    id: 5,
    category: "Travel",
    title: "ประกันเดินทาง",
    description: "เทียบความคุ้มครองยอดฮิตก่อนบิน",
    date: "",
    image: "/Ti.jpg",
    link: "/travelinsure",
  },
  {
    id: 6,
    category: "Car Insure",
    title: "พรบ",
    description: "พรบ คืออะไร ทำไมต้องมี",
    date: "",
    image: "/prb.jpg",
    link: "/carinsure3",
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
    <>
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
            );
          })}
        </div>
      </div>
      <Footer05Page />
    </>
  );
};

export default Blog01Page;
