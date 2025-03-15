export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  coverImage: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '使用Next.js构建现代化博客网站',
    excerpt: '探索如何利用Next.js的强大功能构建一个高性能、SEO友好的个人博客网站。',
    content: `
# 使用Next.js构建现代化博客网站

在当今数字化时代，拥有一个个人博客网站是展示自己专业技能和分享知识的绝佳方式。Next.js作为一个强大的React框架，提供了许多优势，使其成为构建博客网站的理想选择。

## Next.js的优势

- **服务器端渲染(SSR)**: 提高首屏加载速度和SEO表现
- **静态站点生成(SSG)**: 预渲染页面，提供极快的加载速度
- **文件系统路由**: 简化路由配置
- **API路由**: 轻松创建API端点
- **图像优化**: 自动优化图像加载

## 构建博客的关键步骤

1. **设置项目结构**
   - 创建页面组件
   - 设计组件层次结构

2. **实现内容管理**
   - 使用Markdown或MDX处理内容
   - 集成CMS或使用本地文件系统

3. **优化性能**
   - 实现增量静态再生成(ISR)
   - 优化字体和图像加载

4. **添加交互功能**
   - 评论系统
   - 分享功能
   - 订阅通知

通过Next.js，你可以构建一个既美观又高效的博客平台，为读者提供出色的用户体验。
    `,
    date: '2023-10-15',
    coverImage: '/images/nextjs-blog.svg',
    tags: ['Next.js', 'React', 'Web开发']
  }]
 
  