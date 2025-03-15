export const metadata = {
  title: '关于 | 个人博客',
  description: '了解更多关于博客作者和这个网站的信息。',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-24 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">关于我</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            你好！我是一名热爱技术和分享的开发者。这个博客是我记录学习心得、分享技术见解的地方。
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">我的技术栈</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>前端: React, Next.js, TypeScript, Tailwind CSS</li>
            <li>后端: Node.js, Express, NestJS</li>
            <li>数据库: MongoDB, PostgreSQL</li>
            <li>其他: Docker, Git, CI/CD</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">关于这个博客</h2>
          <p>
            这个博客使用Next.js和Tailwind CSS构建，采用了现代化的设计理念和技术栈。在这里，我主要分享：
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Web开发技术和最佳实践</li>
            <li>前端框架和库的使用心得</li>
            <li>编程语言学习笔记</li>
            <li>个人项目开发经验</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">联系我</h2>
          <p>
            如果你对我的文章有任何问题或建议，或者想要与我交流技术话题，欢迎通过以下方式联系我：
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email: example@email.com</li>
            <li>GitHub: github.com/yourusername</li>
            <li>Twitter: @yourusername</li>
          </ul>
          
          <p className="mt-8">
            感谢你访问我的博客！希望这里的内容对你有所帮助。
          </p>
        </div>
      </div>
    </div>
  );
}