import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function Home() {
  // 获取最新的3篇文章
  const latestPosts = blogPosts.slice(0, 3);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 py-24 min-h-screen">
      {/* 英雄区域 */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6">欢迎来到我的博客</h1>
        <p className="text-xl color-(--foreground) dark:text-gray-400 max-w-2xl mx-auto mb-8">
          这是一个使用Next.js和Tailwind CSS构建的个人博客，分享关于Web开发、编程技术和设计的见解。
        </p>
        <Link 
          href="/blog" 
          className="inline-block bg-dark-600 hover:bg-dark-700  font-medium py-3 px-6 rounded-full transition-colors"
        >
          浏览所有文章
        </Link>
      </div>
      
      {/* 最新文章区域 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">最新文章</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article key={post.id} className=" backdrop-blur-md dark:bg-black/30 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full  dark:border-gray-800">
              {post.coverImage && (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image 
                    src={post.coverImage} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 hover:text-dark-600 dark:hover:text-dark-400 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="color-(--foreground) dark:text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mt-auto">
                  <time dateTime={post.date}>{post.date}</time>
                  <Link 
                    href={`/blog/${post.id}`} 
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
          ))}
        </div>
      </div>
      
      {/* 关于我区域 */}
      <div className="backdrop-blur-md dark:bg-gray-900/50 rounded-2xl p-8 sm:p-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">关于我</h2>
          <p className="text-lg color-(--foreground) dark:text-gray-400 mb-6">
            你好！我是一名热爱技术和分享的开发者。这个博客是我记录学习心得、分享技术见解的地方。
          </p>
          <div className="flex justify-center">
            <Link 
              href="/about" 
              className="inline-block border border-dark-600 text-dark-600 hover:bg-dark-600 hover: font-medium py-2 px-6 rounded-full transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
