"use client";
import { useEffect, useState } from 'react';

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
};

export default function Background() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [starParticles, setStarParticles] = useState<Particle[]>([]);

  // 检测暗模式
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeQuery.addEventListener('change', handleChange);
    return () => darkModeQuery.removeEventListener('change', handleChange);
  }, []);

  // 设置窗口尺寸并生成粒子
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      setDimensions({
        width: newWidth,
        height: newHeight,
      });
      
      // 当窗口大小改变时，重新生成粒子
      generateParticles(newWidth, newHeight);
    };

    // 提取生成粒子的逻辑到单独的函数
    const generateParticles = (width: number, height: number) => {
      // 生成雨滴粒子
      const particleCount = Math.min(Math.floor(width / 8), 250);
      const newParticles: Particle[] = [];

      // 根据屏幕高度计算速度系数，屏幕越小，速度越慢
      const speedFactor = Math.min(1, height / 1000);
      
      for (let i = 0; i < particleCount; i++) {
        // 随机分布在整个屏幕顶部上方
        const xPosition = Math.random() * width;
        // 随机高度，使雨滴错落有致
        const yPosition = -Math.random() * height * 0.5;
        
        newParticles.push({
          id: i,
          x: xPosition,
          y: yPosition,
          size: Math.random() * 2 + 1,
          color: `hsla(${Math.floor(Math.random() * 360)}, 80%, 75%, ${Math.random() * 0.3 + 0.4})`,
          velocity: {
            x: 0, 
            y: (Math.random() * 3 + 3) * speedFactor, // 根据屏幕高度调整速度
          },
        });
      }
      
      // 生成背景雾气粒子
      const starCount = Math.min(Math.floor(width / 20), 80);
      const newStarParticles: Particle[] = [];
      
      for (let i = 0; i < starCount; i++) {
        let xPosition = Math.random() * width;
        let yPosition = Math.random() * height;
        
        newStarParticles.push({
          id: i + 1000,
          x: xPosition,
          y: yPosition,
          size: Math.random() * 60 + 30,
          color: `rgba(70, 90, 120, ${Math.random() * 0.05 + 0.05})`,
          velocity: {
            x: (Math.random() - 0.5) * 0.2,
            y: (Math.random() - 0.5) * 0.1,
          },
        });
      }

      setParticles(newParticles);
      setStarParticles(newStarParticles);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isDarkMode]);

  // 更新雨滴粒子位置
  useEffect(() => {
    if (particles.length === 0 || dimensions.width === 0) return;

    const animationId = requestAnimationFrame(() => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          // 更新位置
          let newX = particle.x + particle.velocity.x;
          let newY = particle.y + particle.velocity.y;

          // 边界检查 - 当雨滴落到底部时，重新从顶部开始
          if (newX < 0) newX = dimensions.width;
          if (newX > dimensions.width) newX = 0;
          
          // 当雨滴落到底部，重置到顶部
          if (newY > dimensions.height) {
            newY = -Math.random() * 50;
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    });

    return () => cancelAnimationFrame(animationId);
  }, [particles, dimensions]);
  
  // 更新星星粒子位置
  useEffect(() => {
    if (starParticles.length === 0 || dimensions.width === 0) return;

    const animationId = requestAnimationFrame(() => {
      setStarParticles(prevParticles =>
        prevParticles.map(particle => {
          // 更新位置
          let newX = particle.x + particle.velocity.x;
          let newY = particle.y + particle.velocity.y;

          // 边界检查 - 星星粒子从一边消失后从另一边出现
          if (newX < 0) newX = dimensions.width;
          if (newX > dimensions.width) newX = 0;
          if (newY < 0) newY = dimensions.height;
          if (newY > dimensions.height) newY = 0;

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    });

    return () => cancelAnimationFrame(animationId);
  }, [starParticles, dimensions]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* 黑夜雨天背景 */}
      <div 
        className="absolute inset-0 transition-colors duration-500" 
        style={{
        //   background: 'linear-gradient(to bottom,rgb(165, 165, 181) 0%,rgb(67, 67, 92) 40%,rgb(47, 47, 64) 100%)', // 更深的夜色背景
        }}
      />
      
      {/* 添加雨水反光效果 */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 100%), repeating-linear-gradient(0deg, rgba(150, 180, 255, 0.1) 0px, transparent 4px, transparent 6px, rgba(150, 180, 255, 0.1) 10px)',
          backgroundSize: '100% 100%, 100% 1000px',
          animation: 'rain 10s linear infinite',
        }}
      />
      
      {/* 雨滴粒子 */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            width: particle.size * 5,
            height: particle.size * 5, // 更长的雨滴
            backgroundColor: particle.color,
            opacity: 0.8,
            transform: `translate(${particle.x}px, ${particle.y}px)`,
            borderRadius: '50%',
          }}
        />
      ))}
      
      {/* 雾气粒子 */}
   
      
      {/* 添加夜雨氛围的光晕效果 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dark-900 rounded-full mix-blend-soft-light filter blur-[180px] opacity-30 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-900 rounded-full mix-blend-soft-light filter blur-[180px] opacity-30 animate-pulse animation-delay-2000" />
      
      {/* 模拟远处的闪电效果 */}
      <div className="absolute inset-0 bg-dark-50 opacity-0 animate-lightning mix-blend-overlay" />
    </div>
  );
}