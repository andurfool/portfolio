'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [randomDots, setRandomDots] = useState<Array<{
    top: string,
    left: string,
    xMovement: [number, number, number],
    yMovement: [number, number, number]
  }> | null>(null);
  
  useEffect(() => {
    // Генерируем случайные позиции для точек только на клиенте
    const dots = Array(5).fill(null).map(() => {
      return {
        top: `${50 + Math.random() * 40 - 20}%`,
        left: `${50 + Math.random() * 40 - 20}%`,
        xMovement: [
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50
        ] as [number, number, number],
        yMovement: [
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50
        ] as [number, number, number]
      };
    });
    
    setRandomDots(dots);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section bg-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-red/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-red/10 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="subheading mb-4">Обо мне</h2>
            <h3 className="heading">Кто я и чем занимаюсь</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="w-full h-80 md:h-96 bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-red/5"></div>
                
                {/* Code visualization background grid */}
                <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-[1px] opacity-20">
                  {[...Array(144)].map((_, index) => (
                    <div 
                      key={index} 
                      className="bg-red/10 hover:bg-red/30 transition-colors duration-300"
                    ></div>
                  ))}
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  {/* Animated code visualization */}
                  <div className="relative w-full max-w-[320px]">
                    <motion.div 
                      className="bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-red/30 text-left font-mono text-sm overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 rounded-full bg-red mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <div className="text-gray-400 text-xs ml-auto">index.js</div>
                      </div>
                      
                      <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ 
                          duration: 1.5,
                          delay: 0.5,
                          ease: "easeOut"
                        }}
                      >
                        <div className="text-gray-400">
                          <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-white">=</span> <span className="text-orange-400">{'{'}</span>
                        </div>
                        
                        <motion.div 
                          className="pl-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5, duration: 0.5 }}
                        >
                          <div>
                            <span className="text-green-400">name</span><span className="text-white">:</span> <span className="text-yellow-300">&quot;Никита&quot;</span><span className="text-white">,</span>
                          </div>
                          
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 0.5 }}
                          >
                            <span className="text-green-400">skills</span><span className="text-white">:</span> <span className="text-orange-400">[</span>
                            <motion.span 
                              className="text-yellow-300"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 2.5, duration: 0.3 }}
                            >
                              &quot;React&quot;
                            </motion.span>
                            <span className="text-white">,</span> 
                            <motion.span 
                              className="text-yellow-300"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 2.8, duration: 0.3 }}
                            >
                              &quot;NextJS&quot;
                            </motion.span>
                            <span className="text-white">,</span> 
                            <motion.span 
                              className="text-yellow-300"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 3.1, duration: 0.3 }}
                            >
                              &quot;UI/UX&quot;
                            </motion.span>
                            <span className="text-orange-400">]</span><span className="text-white">,</span>
                          </motion.div>
                          
                          <motion.div
                            className="flex items-center text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3.0, duration: 0.5 }}
                          >
                            <span className="text-green-400">education</span><span className="text-white">:</span> <span className="text-yellow-300">&quot;Computer Science&quot;</span><span className="text-white">,</span>
                          </motion.div>
                          
                          <motion.div
                            className="flex items-center text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3.5, duration: 0.5 }}
                          >
                            <span className="text-green-400">passion</span><span className="text-white">:</span> <span className="text-yellow-300">&quot;Creating amazing web experiences&quot;</span>
                          </motion.div>
                        </motion.div>
                        
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 4, duration: 0.5 }}
                        >
                          <span className="text-orange-400">{'}'}</span><span className="text-white">;</span>
                        </motion.div>
                        
                        <motion.div 
                          className="mt-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            delay: 4.5, 
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 0.5
                          }}
                        >
                          <span className="text-purple-400">function</span> <span className="text-blue-400">createProject</span><span className="text-white">() {'{'}...</span><span className="text-white">{'}'}</span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-red"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-red"></div>
                
                {/* Animated dots */}
                {randomDots && randomDots.map((dot, index) => (
                  <motion.div
                    key={`dot-${index}`}
                    className="absolute w-1.5 h-1.5 rounded-full bg-red"
                    initial={{ 
                      x: 0, 
                      y: 0,
                      opacity: 0 
                    }}
                    animate={{ 
                      x: dot.xMovement,
                      y: dot.yMovement,
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    style={{
                      top: dot.top,
                      left: dot.left,
                    }}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h4 className="text-2xl font-bold mb-4">Веб-разработчик и дизайнер</h4>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Я - frontend разработчик с опытом в создании отзывчивых веб-приложений с использованием 
                современных технологий. Мой подход сочетает креативный дизайн с эффективной разработкой 
                для создания интуитивно понятных и производительных пользовательских интерфейсов.
              </p>
              
              <p className="text-gray-300 mb-8">
                С опытом работы в различных проектах, я разрабатываю интуитивно понятные 
                и визуально привлекательные интерфейсы, которые решают реальные проблемы 
                и превосходят ожидания клиентов.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-red font-bold mb-2">Образование</h5>
                  <p className="text-gray-300">ГАПОУ "ЧПК", Информационные системы и программирование</p>
                  <p className="text-gray-400 text-sm">2021-2025</p>
                </div>
                
                <div>
                  <h5 className="text-red font-bold mb-2">Опыт</h5>
                  <p className="text-gray-300">Фрилансер</p>
                  <p className="text-gray-400 text-sm">2021-настоящее время</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-red/30 transition-all duration-300">
              <div className="text-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h5 className="text-xl font-bold mb-2">Веб-разработка</h5>
              <p className="text-gray-400">Создание современных и отзывчивых веб-приложений с использованием передовых технологий.</p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-red/30 transition-all duration-300">
              <div className="text-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h5 className="text-xl font-bold mb-2">UI/UX Дизайн</h5>
              <p className="text-gray-400">Разработка интуитивно понятных и визуально привлекательных пользовательских интерфейсов.</p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-red/30 transition-all duration-300">
              <div className="text-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h5 className="text-xl font-bold mb-2">Разработка API</h5>
              <p className="text-gray-400">Проектирование и реализация эффективных и безопасных API для веб-приложений.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 