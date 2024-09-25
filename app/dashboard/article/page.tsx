"use client";
import { useRouter } from "next/navigation";
import { ArticleLink, articles } from "@/components/article-links";

export default function Article() {
    const router = useRouter();

    return (
        <div className="grid grid-cols-12 gap-x-5 w-10/12 mx-auto mt-20">
            <h2 className="text-black font-bold text-center text-4xl col-start-5 col-span-4 ">ARTICLE</h2>
            <div className="col-span-12 text-black grid grid-cols-3 gap-12 mt-20">
                {articles.map((article, index) => (
                    <ArticleLink
                        key={index}
                        href={article.href}
                        imageSrc={article.imageSrc}
                        imageAlt={article.imageAlt}
                        category={article.category}
                        title={article.title}
                        date={article.date}
                        description={article.description}
                    />
                ))}
            </div>
        </div>
    );
}