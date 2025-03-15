import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import Image from 'next/image';

type BlogPostPageProps =Promise< 
 {
    id: string;
  }>;

export async function generateMetadata({ params }: { params: BlogPostPageProps}) {
  const {id}=await params
  const post = blogPosts.find((post) => post.id === id);
  
  if (!post) {
    notFound();
  }
  
  return {
    title: `${post.title} | 个人博客`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: BlogPostPageProps}) {
  const {id}=await params
  const post = blogPosts.find((post) => post.id === id);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 sm:px-6 py-24 min-h-screen">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 bg-gray-600 dark:bg-gray-800 text-gray-300 dark:text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="text-gray-500 dark:text-gray-400 mb-8">
            <time dateTime={post.date}>{post.date}</time>
          </div>
          
          {post.coverImage && (
            <div className="relative w-full h-64 sm:h-96 mb-8 overflow-hidden rounded-xl">
              <Image 
                src={post.coverImage} 
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </header>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.substring(2)}</h1>;
            } else if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.substring(3)}</h2>;
            } else if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-bold mt-5 mb-2">{paragraph.substring(4)}</h3>;
            } else if (paragraph.startsWith('- ')) {
              return <li key={index} className="ml-6 mb-1">{paragraph.substring(2)}</li>;
            } else if (paragraph.startsWith('```')) {
              // 处理代码块的开始和结束
              return null;
            } else if (paragraph.trim() === '') {
              return <br key={index} />;
            } else if (paragraph.trim().startsWith('1. ') || paragraph.trim().startsWith('2. ') || paragraph.trim().startsWith('3. ') || paragraph.trim().startsWith('4. ')) {
              // 简单处理有序列表
              return <li key={index} className="ml-6 mb-1 list-decimal">{paragraph.substring(paragraph.indexOf('.') + 2)}</li>;
            } else {
              return <p key={index} className="mb-4">{paragraph}</p>;
            }
          })}
        </div>
      </article>
    </div>
  );
}