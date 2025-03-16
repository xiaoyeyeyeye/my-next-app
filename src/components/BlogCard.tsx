import Link from 'next/link';
import Image from 'next/image';

type BlogCardProps = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
  tags?: string[];
};

export default function BlogCard({ id, title, excerpt, date, coverImage, tags }: BlogCardProps) {
  return (
    <article className=" backdrop-blur-md dark:bg-black/30 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full  dark:border-gray-800">
      {coverImage && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image 
            src={coverImage} 
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-5 flex flex-col flex-grow">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 color-(--foreground) dark:color-(--foreground) rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <h2 className="text-xl font-bold mb-2 hover:text-dark-600 dark:hover:text-dark-400 transition-colors">
          <Link href={`/blog/${id}`}>
            {title}
          </Link>
        </h2>
        
        <p className="color-(--foreground) dark:text-gray-200 mb-4 flex-grow">{excerpt}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-500 dark:color-(--foreground) mt-auto">
          <time dateTime={date}>{date}</time>
          <Link 
            href={`/blog/${id}`} 
            className="text-dark-600 dark:text-dark-400 hover:underline flex items-center gap-1"
          >
            阅读更多
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}