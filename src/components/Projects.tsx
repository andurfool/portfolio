'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';

// Данные о проектах
const projects = [
  {
    id: 1,
    title: 'Сайт компьютерного клуба',
    description: 'Современный веб-сайт для компьютерного клуба в городе Чита с адаптивным дизайном, анимациями и системой бронирования. Разработан с использованием React, Vite и Tailwind CSS.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://port-1tzy.vercel.app/',
    github: '',
    isPrivate: true, // Приватный проект, без ссылки на GitHub
  },
  {
    id: 2,
    title: 'Мобильное приложение',
    description: 'Кроссплатформенное мобильное приложение для управления задачами. Разработано с использованием React Native.',
    tags: ['React Native', 'Redux', 'Firebase'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'Дашборд аналитики',
    description: 'Интерактивный дашборд для визуализации данных с возможностью фильтрации и экспорта отчетов.',
    tags: ['Next.js', 'Chart.js', 'MongoDB'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 4,
    title: 'Интернет-магазин',
    description: 'Полнофункциональный интернет-магазин с каталогом товаров, корзиной и системой оплаты.',
    tags: ['Vue.js', 'Node.js', 'Stripe'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 5,
    title: 'Блог-платформа',
    description: 'Платформа для публикации статей с системой комментариев и управлением пользователями.',
    tags: ['Django', 'PostgreSQL', 'AWS'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
];

// Категории проектов
const categories = ['Все', 'React', 'Vue.js', 'Next.js', 'Node.js', 'Django'];

// Project Card Component
const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  
  // Обработчики событий с useCallback для предотвращения ненужных перерисовок
  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);
  
  // Card variants for animation
  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }
    }),
  };
  
  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="project-card relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 transition-all duration-500 hover:border-red/50">
        {/* Project display with 3D tilt effect */}
        <motion.div 
          className="h-full w-full"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
          }}
          animate={{
            rotateX: hovered ? -3 : 0,
            rotateY: hovered ? 3 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/95 to-black flex items-center justify-center z-0">
          </div>
          
          {/* Project visual representation - заменяем фото на стилизованные элементы */}
          <div className="absolute inset-0 z-10 opacity-90">
            <div className="w-full h-full flex items-center justify-center p-6">
              <div className="relative w-full max-w-md h-48 md:h-64 overflow-hidden rounded-lg border border-red/20 shadow-lg bg-black/70 backdrop-blur-sm">
                {/* Абстрактный фон с уникальным узором для каждого проекта */}
                <div className="absolute inset-0">
                  {/* Уникальный визуальный фон для каждого проекта */}
                  {project.id === 1 && (
                    <div className="absolute inset-0 overflow-hidden">
                      {/* Сетка игровых компьютеров */}
                      <div className="absolute grid grid-cols-4 grid-rows-3 gap-3 p-4 inset-0">
                        {[...Array(8)].map((_, index) => (
                          <motion.div
                            key={`pc-${index}`}
                            className="rounded bg-red/5 border border-red/10 relative overflow-hidden"
                            initial={{ opacity: 0.5, scale: 0.8 }}
                            animate={{ 
                              opacity: hovered ? 1 : 0.5, 
                              scale: hovered ? 1 : 0.8,
                              boxShadow: hovered ? "0 0 5px rgba(255,0,0,0.3)" : "0 0 0 rgba(255,0,0,0)" 
                            }}
                            transition={{ 
                              duration: 0.3, 
                              delay: index * 0.05
                            }}
                          >
                            <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-red animate-pulse"></div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Неоновый логотип компьютерного клуба */}
                      <motion.div 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          textShadow: ["0 0 10px rgba(255,0,0,0.5)", "0 0 20px rgba(255,0,0,0.8)", "0 0 10px rgba(255,0,0,0.5)"]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          repeatType: "reverse"
                        }}
                      >
                        <div className="text-red text-3xl font-bold mb-2 filter drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]">
                          GAME ZONE
                        </div>
                        <div className="text-xs text-gray-400">КОМПЬЮТЕРНЫЙ КЛУБ</div>
                      </motion.div>
                      
                      {/* Декоративные элементы */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red/50 to-transparent"></div>
                    </div>
                  )}
                  
                  {/* Мобильное приложение - стилизованный интерфейс */}
                  {project.id === 2 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="relative w-[40%] h-[70%] rounded-xl border-4 border-gray-700 bg-gray-800 overflow-hidden"
                        initial={{ y: 20 }}
                        animate={{ y: hovered ? 0 : 20 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                      >
                        {/* Шапка приложения */}
                        <div className="h-[10%] bg-red/80 w-full flex items-center justify-center">
                          <div className="w-1/3 h-1 bg-white rounded-full"></div>
                        </div>
                        
                        {/* Контент приложения - анимированные задачи */}
                        <div className="p-2 overflow-hidden h-[90%]">
                          {[...Array(6)].map((_, index) => (
                            <motion.div
                              key={`task-${index}`}
                              className="h-[12%] mb-2 bg-gray-700/50 rounded-md flex items-center overflow-hidden"
                              initial={{ x: -100, opacity: 0 }}
                              animate={{ 
                                x: hovered ? 0 : -100,
                                opacity: hovered ? 1 : 0
                              }}
                              transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1
                              }}
                            >
                              <div className={`w-2 h-full ${index % 3 === 0 ? 'bg-green-500' : index % 3 === 1 ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
                              <div className="ml-2 w-2/3 h-1 bg-white/50 rounded-full"></div>
                              <div className="ml-auto mr-2 w-3 h-3 rounded-full border border-white/30"></div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Пуш-уведомление появляется при наведении */}
                        <motion.div
                          className="absolute top-2 left-0 right-0 mx-auto w-[90%] p-2 bg-gray-900/90 rounded-lg border border-gray-700 transform origin-top"
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={{ 
                            opacity: hovered ? 1 : 0, 
                            scaleY: hovered ? 1 : 0
                          }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                        >
                          <div className="h-2 w-1/3 bg-red/80 rounded-full mb-1"></div>
                          <div className="h-1 w-full bg-white/20 rounded-full"></div>
                        </motion.div>
                      </motion.div>
                      
                      {/* Декоративные точки вокруг */}
                      {[...Array(8)].map((_, index) => (
                        <motion.div
                          key={`dot-${index}`}
                          className="absolute w-1 h-1 rounded-full bg-red/50"
                          style={{
                            top: `${15 + (index * 10)}%`,
                            left: `${20 + ((index % 4) * 20)}%`,
                          }}
                          animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                        />
                      ))}
                    </div>
                  )}
                  
                  {/* Дашборд аналитики - графики и данные */}
                  {project.id === 3 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
                      {/* Сетка для дашборда */}
                      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 p-4">
                        {/* Главный график */}
                        <div className="col-span-4 row-span-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-2 relative overflow-hidden">
                          <div className="w-full h-[15%] flex justify-between items-center">
                            <div className="w-1/4 h-2 bg-red/70 rounded-full"></div>
                            <div className="flex gap-1">
                              {[...Array(3)].map((_, i) => (
                                <div key={`dot-${i}`} className="w-2 h-2 rounded-full bg-gray-500"></div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="w-full h-[85%] relative pt-4">
                            {/* График линии тренда */}
                            <svg className="w-full h-full" viewBox="0 0 100 50">
                              <motion.path
                                d="M0,40 Q20,35 30,20 Q40,5 50,15 Q60,25 70,20 Q80,15 90,5 L100,10"
                                fill="none"
                                stroke="rgba(255,0,0,0.7)"
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: hovered ? 1 : 0 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                              />
                              <motion.path
                                d="M0,40 Q20,35 30,20 Q40,5 50,15 Q60,25 70,20 Q80,15 90,5 L100,10"
                                fill="none"
                                stroke="rgba(255,0,0,0.2)"
                                strokeWidth="4"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: hovered ? 1 : 0 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                              />
                              {/* Точки данных */}
                              {[
                                { x: 0, y: 40 },
                                { x: 30, y: 20 },
                                { x: 50, y: 15 },
                                { x: 70, y: 20 },
                                { x: 90, y: 5 }
                              ].map((point, index) => (
                                <motion.circle
                                  key={`point-${index}`}
                                  cx={point.x}
                                  cy={point.y}
                                  r="1.5"
                                  fill="white"
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ 
                                    scale: hovered ? [1, 1.5, 1] : 0, 
                                    opacity: hovered ? 1 : 0 
                                  }}
                                  transition={{ 
                                    duration: 1, 
                                    delay: 1.5 + index * 0.1,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 1
                                  }}
                                />
                              ))}
                            </svg>
                          </div>
                        </div>
                        
                        {/* Метрики и KPI плитки */}
                        {[...Array(8)].map((_, index) => {
                          // Определяем позицию для разных плиток
                          const isWide = index < 2;
                          const spanClass = isWide ? "col-span-2 row-span-1" : "col-span-1 row-span-1";
                          // Пропускаем позиции, занятые главным графиком
                          if (index < 4 && Math.floor(index / 2) === 0) {
                            return null;
                          }
                          
                          return (
                            <motion.div
                              key={`metric-${index}`}
                              className={`${spanClass} rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-2 flex flex-col justify-between relative overflow-hidden`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ 
                                opacity: hovered ? 1 : 0, 
                                y: hovered ? 0 : 20 
                              }}
                              transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                              <div className="w-1/3 h-1 bg-gray-600 rounded-full"></div>
                              <div className="flex justify-between items-end">
                                <div className="w-1/2 h-3 bg-red/70 rounded-full"></div>
                                <div className={`w-2 h-2 rounded-full ${index % 3 === 0 ? 'bg-green-500' : index % 3 === 1 ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
                  {/* Интернет-магазин - товары и интерфейс */}
                  {project.id === 4 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
                      {/* Стилизованный интерфейс магазина */}
                      <div className="relative w-[85%] h-[80%] rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm overflow-hidden">
                        {/* Шапка магазина */}
                        <div className="h-[10%] w-full flex items-center justify-between px-4 border-b border-gray-700">
                          <div className="w-1/4 h-2 bg-red/80 rounded-full"></div>
                          <div className="flex gap-3">
                            <div className="w-6 h-2 bg-gray-600 rounded-full"></div>
                            <div className="w-6 h-2 bg-gray-600 rounded-full"></div>
                            <div className="w-6 h-2 bg-gray-600 rounded-full"></div>
                            <div className="relative">
                              <div className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center">
                                <div className="w-2 h-2 bg-red rounded-full"></div>
                              </div>
                              <motion.div
                                className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red flex items-center justify-center text-[6px] text-white font-bold"
                                animate={{ 
                                  scale: hovered ? [1, 1.2, 1] : 1
                                }}
                                transition={{
                                  duration: 0.6, 
                                  repeat: Infinity, 
                                  repeatType: "reverse",
                                  repeatDelay: 1
                                }}
                              >
                                2
                              </motion.div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Сетка товаров */}
                        <div className="p-3 grid grid-cols-3 grid-rows-2 gap-3 h-[90%]">
                          {[...Array(6)].map((_, index) => (
                            <motion.div
                              key={`product-${index}`}
                              className="rounded-lg bg-gray-900/50 border border-gray-800 overflow-hidden flex flex-col"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ 
                                scale: hovered ? 1 : 0.8, 
                                opacity: hovered ? 1 : 0,
                                y: hovered ? 0 : 10
                              }}
                              transition={{ 
                                duration: 0.3, 
                                delay: 0.05 * index 
                              }}
                              whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 0 15px rgba(255,0,0,0.2)"
                              }}
                            >
                              {/* Картинка товара */}
                              <div className="h-[60%] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-2">
                                <div className={`w-[60%] h-[60%] rounded-md ${index % 3 === 0 ? 'bg-red/20' : index % 3 === 1 ? 'bg-blue-500/20' : 'bg-green-500/20'}`}>
                                  <div className="w-full h-full flex items-center justify-center">
                                    <div className={`w-1/2 h-1/2 ${index % 2 === 0 ? 'rounded-full' : 'rounded'} ${index % 3 === 0 ? 'bg-red/30' : index % 3 === 1 ? 'bg-blue-500/30' : 'bg-green-500/30'}`}></div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Информация о товаре */}
                              <div className="h-[40%] p-2 flex flex-col justify-between">
                                <div className="w-full h-1 bg-gray-700 rounded-full"></div>
                                <div className="w-2/3 h-1 bg-gray-700 rounded-full"></div>
                                <div className="flex justify-between items-center">
                                  <div className="w-1/3 h-2 bg-red/80 rounded-full"></div>
                                  <div className="w-6 h-6 rounded-full border border-red/50 flex items-center justify-center">
                                    <div className="w-3 h-0.5 bg-red"></div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Анимированные элементы корзины */}
                      <motion.div
                        className="absolute top-[15%] right-[15%] w-5 h-5 rounded-md bg-red/80 z-20"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: hovered ? [0, 1, 0] : 0,
                          opacity: hovered ? [0, 1, 0] : 0,
                          x: hovered ? [0, 50] : 0,
                          y: hovered ? [0, -30] : 0
                        }}
                        transition={{ 
                          duration: 1, 
                          delay: 1,
                          repeat: hovered ? Infinity : 0,
                          repeatDelay: 3
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Блог-платформа - статьи и комментарии */}
                  {project.id === 5 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
                      {/* Стилизованный интерфейс блога */}
                      <div className="relative w-[90%] h-[85%] flex gap-4">
                        {/* Левая колонка - список статей */}
                        <div className="w-1/3 h-full overflow-hidden flex flex-col gap-3">
                          {[...Array(4)].map((_, index) => (
                            <motion.div
                              key={`article-${index}`}
                              className="rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-3 flex flex-col gap-2"
                              initial={{ x: -50, opacity: 0 }}
                              animate={{ 
                                x: hovered ? 0 : -50, 
                                opacity: hovered ? 1 : 0 
                              }}
                              transition={{ 
                                duration: 0.5, 
                                delay: 0.1 * index 
                              }}
                              whileHover={{ 
                                scale: 1.03,
                                borderColor: "rgba(255,0,0,0.5)"
                              }}
                            >
                              <div className="w-3/4 h-2 bg-red/70 rounded-full"></div>
                              <div className="w-full h-1 bg-gray-600 rounded-full"></div>
                              <div className="w-full h-1 bg-gray-600 rounded-full"></div>
                              <div className="w-2/3 h-1 bg-gray-600 rounded-full"></div>
                              <div className="flex justify-between items-center mt-1">
                                <div className="flex items-center gap-1">
                                  <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                                  <div className="w-10 h-1 bg-gray-600 rounded-full"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                  <div className="w-3 h-3 rounded-full bg-gray-600 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red/70"></div>
                                  </div>
                                  <div className="w-3 h-1 bg-gray-600 rounded-full"></div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Правая колонка - открытая статья */}
                        <div className="w-2/3 h-full rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-4 flex flex-col">
                          {/* Заголовок статьи */}
                          <motion.div 
                            className="mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ 
                              opacity: hovered ? 1 : 0, 
                              y: hovered ? 0 : -20 
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="w-2/3 h-3 bg-red/80 rounded-full mb-3"></div>
                            <div className="flex gap-2">
                              <div className="px-2 py-1 rounded-full bg-gray-700/50 flex items-center">
                                <div className="w-10 h-1 bg-gray-500 rounded-full"></div>
                              </div>
                              <div className="px-2 py-1 rounded-full bg-gray-700/50 flex items-center">
                                <div className="w-8 h-1 bg-gray-500 rounded-full"></div>
                              </div>
                            </div>
                          </motion.div>
                          
                          {/* Содержимое статьи */}
                          <div className="flex-1 flex flex-col gap-2">
                            {[...Array(6)].map((_, index) => (
                              <motion.div
                                key={`paragraph-${index}`}
                                className="w-full h-1.5 bg-gray-600 rounded-full"
                                initial={{ width: "0%", opacity: 0 }}
                                animate={{ 
                                  width: hovered ? "100%" : "0%", 
                                  opacity: hovered ? 1 : 0 
                                }}
                                transition={{ 
                                  duration: 0.8, 
                                  delay: 0.6 + 0.1 * index 
                                }}
                                style={{
                                  width: `${100 - index * 5}%`,
                                }}
                              />
                            ))}
                            
                            {/* Псевдо-изображение в статье */}
                            <motion.div
                              className="w-full h-[30%] rounded-lg bg-gray-700/50 my-2 overflow-hidden"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ 
                                opacity: hovered ? 1 : 0, 
                                scale: hovered ? 1 : 0.9 
                              }}
                              transition={{ duration: 0.5, delay: 0.8 }}
                            >
                              <div className="w-full h-full bg-gradient-to-br from-red/5 to-red/20 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full border-2 border-red/30 flex items-center justify-center">
                                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-red/50"></div>
                                </div>
                              </div>
                            </motion.div>
                            
                            {[...Array(4)].map((_, index) => (
                              <motion.div
                                key={`paragraph2-${index}`}
                                className="w-full h-1.5 bg-gray-600 rounded-full"
                                initial={{ width: "0%", opacity: 0 }}
                                animate={{ 
                                  width: hovered ? "100%" : "0%", 
                                  opacity: hovered ? 1 : 0 
                                }}
                                transition={{ 
                                  duration: 0.8, 
                                  delay: 1.2 + 0.1 * index 
                                }}
                                style={{
                                  width: `${100 - index * 5}%`,
                                }}
                              />
                            ))}
                          </div>
                          
                          {/* Комментарии */}
                          <motion.div 
                            className="mt-4 pt-4 border-t border-gray-700"
                            initial={{ opacity: 0 }}
                            animate={{ 
                              opacity: hovered ? 1 : 0
                            }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                              <div className="w-20 h-1.5 bg-gray-600 rounded-full"></div>
                            </div>
                            <div className="flex gap-2">
                              <div className="w-[90%] h-8 border border-gray-700 rounded-lg flex items-center px-2">
                                <div className="w-1/3 h-1 bg-gray-600 rounded-full"></div>
                              </div>
                              <div className="w-[10%] h-8 bg-red/70 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
            <div>
              {/* Tags with staggered animation */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <motion.span 
                    key={tag} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 0 }}
                    transition={{ duration: 0.3, delay: hovered ? i * 0.1 : 0 }}
                    className="text-xs font-medium bg-red/10 text-red px-3 py-1 rounded-full backdrop-blur-sm relative z-30"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              
              {/* Title with animation */}
              <motion.h4 
                className="text-2xl font-bold mb-2 relative z-30"
                initial={{ color: "#ffffff" }}
                animate={{ color: hovered ? "#FF0000" : "#ffffff" }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h4>
              
              {/* Description with reveal animation */}
              <motion.p 
                className="mb-4 text-gray-300 leading-relaxed relative z-30 max-w-md font-light"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {project.description}
              </motion.p>
            </div>
            
            {/* Links with slide animation */}
            <div className="flex items-center gap-4 relative z-30">
              <motion.a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-red text-white flex items-center transition-all duration-300 hover:bg-red/80 relative shadow-md"
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: hovered ? 0 : -20, 
                  opacity: hovered ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                <span>Демо</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
              
              {/* Показываем ссылку на GitHub только если проект не приватный */}
              {!project.isPrivate && project.github && (
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border-2 border-white text-white flex items-center transition-all duration-300 hover:border-gray-400 hover:text-gray-300 shadow-md bg-black/30 backdrop-blur-sm"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ 
                    x: hovered ? 0 : -20, 
                    opacity: hovered ? 1 : 0 
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <span>GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              )}
              
              {/* Показываем значок приватного проекта */}
              {project.isPrivate && (
                <motion.div 
                  className="px-4 py-2 rounded-full border-2 border-white text-white flex items-center transition-all duration-300 hover:border-gray-400 hover:text-gray-300 shadow-md bg-black/30 backdrop-blur-sm"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ 
                    x: hovered ? 0 : -20, 
                    opacity: hovered ? 1 : 0 
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <span>Приватный</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              )}
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered ? 0.9 : 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  // Мемоизируем фильтрованные проекты, чтобы избежать перерисовки при каждом рендере
  const filteredProjects = activeCategory === 'Все'
    ? projects
    : projects.filter(project => project.tags.includes(activeCategory));
  
  // Обработчик изменения категории
  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);
  
  // Parallax effect for background elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const bgY1 = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const bgY2 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  
  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  
  return (
    <section id="projects" ref={sectionRef} className="section relative py-24 overflow-hidden">
      {/* Background Elements with parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          style={{ y: bgY1 }}
          className="absolute -top-40 -right-20 w-[500px] h-[500px] rounded-full bg-red/5 blur-[100px]"
        />
        <motion.div 
          style={{ y: bgY2 }}
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-red/5 blur-[100px]"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl z-0"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="subheading mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Мои проекты
            </motion.h2>
            <motion.h3 
              className="heading relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Последние работы
              <motion.span 
                className="absolute -bottom-3 left-0 h-1 bg-red"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.h3>
          </motion.div>
          
          {/* Filter Categories */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md ${
                  activeCategory === category
                    ? 'bg-red text-white hover:bg-red/80 shadow-glow'
                    : 'bg-gray-300/10 text-white hover:bg-gray-700/30'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Projects Grid - Modern layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div 
            variants={itemVariants} 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn inline-flex items-center rounded-full px-8 py-3 bg-gradient-to-r from-red to-dark-red text-white hover:from-red/80 hover:to-dark-red/80 transition-all duration-300"
            >
              <span>Больше проектов на GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 