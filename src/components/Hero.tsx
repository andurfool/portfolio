'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [randomValues, setRandomValues] = useState<{
    x: Array<[number, number]>, 
    y: Array<[number, number]>, 
    tops: string[], 
    lefts: string[]
  } | null>(null);
  
  useEffect(() => {
    // Генерируем случайные значения только на клиенте после монтирования
    const xValues: Array<[number, number]> = Array(6).fill(0).map(() => 
      Math.random() > 0.5 ? [0, Math.random() * 100 - 50] : [0, Math.random() * -100 + 50]
    );
    
    const yValues: Array<[number, number]> = Array(6).fill(0).map(() => 
      Math.random() > 0.5 ? [0, Math.random() * 100 - 50] : [0, Math.random() * -100 + 50]
    );
    
    const topValues: string[] = Array(6).fill(0).map(() => `${Math.random() * 100}%`);
    const leftValues: string[] = Array(6).fill(0).map(() => `${Math.random() * 100}%`);
    
    setRandomValues({
      x: xValues,
      y: yValues,
      tops: topValues,
      lefts: leftValues,
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-red/5 blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-red font-mono text-xl mb-4">Привет, меня зовут</h2>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block">Никита</span>
              <span className="text-red">Веб-разработчик</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Я создаю современные и отзывчивые веб-приложения, 
              сочетая креативный дизайн с передовыми технологиями.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a href="#projects" className="btn btn-red">
                Мои проекты
              </a>
              <a href="#contact" className="btn btn-outline">
                Связаться со мной
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.847 2.46 2.274 4.617 2.86 4.617.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.747c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.15-3.574 2.15-3.574.119-.254.305-.491.729-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                </svg>
              </a>
              <a href="https://t.me/andurfool" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248c-.14.652-.868 4.394-1.228 5.835-.152.605-.316 1.591-.953 1.591-.636 0-1.129-.663-1.749-1.299-.977-.97-1.53-1.596-2.47-2.539-.53-.545-.184-1.003.108-1.295.298-.3 2.42-2.223 2.516-2.41.012-.024.023-.11-.04-.157s-.183-.041-.258-.024c-.106.024-1.793 1.14-5.061 3.345-.48.327-.913.489-1.302.489-.428 0-1.252-.244-1.865-.445-.751-.244-1.349-.374-1.297-.79.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.324.015.468.177.098.113.13.262.144.387.016.136.005.255-.006.336z"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red/20 to-red/5 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border-2 border-red/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden relative flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        duration: 3,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="text-red text-8xl md:text-9xl font-bold flex items-center justify-center">
                        <div className="relative">
                          <span>AF</span>
                          <motion.div 
                            className="absolute -top-1 -right-1 w-4 h-4 bg-red rounded-full"
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.5, opacity: [1, 0] }}
                            transition={{
                              repeat: Infinity,
                              repeatDelay: 2,
                              duration: 1.5
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Анимированные частицы - рендерим только когда есть рандомные значения */}
                  {randomValues && (
                    <div className="absolute inset-0 z-0">
                      {[...Array(6)].map((_, index) => (
                        <motion.div
                          key={index}
                          className="absolute w-2 h-2 rounded-full bg-red/70"
                          initial={{ 
                            x: 0, 
                            y: 0, 
                            opacity: 0 
                          }}
                          animate={{ 
                            x: randomValues.x[index], 
                            y: randomValues.y[index], 
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 3 + index,
                            repeat: Infinity,
                            delay: index * 0.5,
                            ease: "easeInOut"
                          }}
                          style={{
                            top: randomValues.tops[index],
                            left: randomValues.lefts[index],
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Circular animated rings */}
                  {[...Array(3)].map((_, index) => (
                    <motion.div
                      key={`ring-${index}`}
                      className={`absolute rounded-full border border-red/30`}
                      initial={{ width: '30%', height: '30%', opacity: 0 }}
                      animate={{ 
                        width: ['30%', '80%'], 
                        height: ['30%', '80%'], 
                        opacity: [0, 0.5, 0] 
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 1,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a href="#about" className="flex flex-col items-center text-white hover:text-red transition-colors">
            <span className="text-sm mb-2">Прокрутите вниз</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 