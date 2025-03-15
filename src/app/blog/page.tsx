import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';

export const metadata = {
  title: '博客 | 个人博客',
  description: '浏览我的最新博客文章，涵盖技术、编程和Web开发等主题。',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-24 min-h-screen">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">博客文章</h1>
        <p className="text-xl text-gray-300 dark:text-gray-200 max-w-2xl mx-auto">
          探索我的最新文章，分享关于Web开发、编程技术和设计的见解。
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard 
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            coverImage={post.coverImage}
            tags={post.tags}
          />
        ))}
      </div>
    </div>
  );
}