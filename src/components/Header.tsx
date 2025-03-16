"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full   backdrop-blur-md z-10 ">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold  hover:color-(--foreground) dark:hover:color-(--foreground) transition-colors">
            博客名称
          </Link>
          
          {/* 桌面导航 */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="color-(--foreground) dark:color-(--foreground) hover:text-black dark:hover: transition-colors">
              首页
            </Link>
            <Link href="/blog" className="color-(--foreground) dark:color-(--foreground) hover:text-black dark:hover: transition-colors">
              博客
            </Link>
            <Link href="/about" className="color-(--foreground) dark:color-(--foreground) hover:text-black dark:hover: transition-colors">
              关于
            </Link>
          </nav>
          
          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="color-(--foreground) dark:color-(--foreground) hover:text-black dark:hover: transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                首页
              </Link>
              <Link 
                href="/blog" 
                className="color-(--foreground) dark:color-(--foreground) hover:text-black dark:hover: transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                博客
              </Link>
              <Link 
                href="/about" 
                className="color-(--foreground) dark:color-(--foreground) hover:text-black dark:hover: transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                关于
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}