import MarkdownSection from "./MarkdownSection";
import styles from "@/app/css/animations.module.css";

interface BlogCardProps {
  title: string;
  createdAt: string;
  content: string;
}

export default function BlogCard({ title, createdAt, content }: BlogCardProps) {
  const formatedDate = createdAt.split("T")[0];

  return (
    <div className="w-full flex flex-col justify-center items-center font-roboto text-white">
      <picture className="w-full">
        <source media="(max-width: 640px)" srcSet="/blogHeaderMobile.png" />
        <source media="(min-width: 641px)" srcSet="/blogHeader.png" />
        <img
          src="/blogHeader.png"
          alt="portrait"
          style={{ imageRendering: "pixelated" }}
          className="w-full"
        />
      </picture>

      <div className="overflow-hidden">
        <div className={styles.up_item}>
          <div className="flex flex-col items-center">
            <p className="text-sm text-white/60">{formatedDate}</p>
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>

          <MarkdownSection content={content} />
        </div>
      </div>
    </div>
  );
}
