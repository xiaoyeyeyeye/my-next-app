import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" dark:bg-black/60 backdrop-blur-md  dark:border-gray-800/70 py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">关于博客</h3>
            <p className="color-(--foreground) dark:text-gray-200">
              这是一个使用Next.js和Tailwind CSS构建的个人博客网站，分享技术文章和个人见解。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="color-(--foreground) dark:text-gray-200 hover:text-black dark:hover: transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/blog" className="color-(--foreground) dark:text-gray-200 hover:text-black dark:hover: transition-colors">
                  博客
                </Link>
              </li>
              <li>
                <Link href="/about" className="color-(--foreground) dark:text-gray-200 hover:text-black dark:hover: transition-colors">
                  关于
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="color-(--foreground) dark:text-gray-200">example@email.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.6 9h16.8M3.6 15h16.8" />
                </svg>
                <span className="color-(--foreground) dark:text-gray-200">www.example.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="  dark:border-gray-800 mt-8 pt-8 text-center text-gray-500 dark:color-(--foreground)">
          <p>© {new Date().getFullYear()} 个人博客. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}