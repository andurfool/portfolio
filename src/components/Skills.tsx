'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Список навыков с процентами владения
const skills = [
  { name: 'HTML/CSS', percent: 95, icon: 'devicon-html5-plain' },
  { name: 'JavaScript', percent: 90, icon: 'devicon-javascript-plain' },
  { name: 'React', percent: 85, icon: 'devicon-react-original' },
  { name: 'TypeScript', percent: 80, icon: 'devicon-typescript-plain' },
  { name: 'Node.js', percent: 75, icon: 'devicon-nodejs-plain' },
  { name: 'Next.js', percent: 85, icon: 'devicon-nextjs-original' },
  { name: 'Tailwind CSS', percent: 90, icon: 'devicon-tailwindcss-plain' },
  { name: 'Git', percent: 85, icon: 'devicon-git-plain' },
];

// Группы навыков
const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Vue.js', 'Angular', 'HTML5', 'CSS3/SASS', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Инструменты',
    skills: ['Git', 'Docker', 'Webpack', 'Figma', 'Adobe XD', 'VS Code', 'GitHub'],
  },
  {
    title: 'Soft Skills',
    skills: ['Командная работа', 'Коммуникация', 'Управление проектами', 'Решение проблем', 'Адаптивность'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
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
    <section id="skills" className="section bg-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-red/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-red/5 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="subheading mb-4">Мои навыки</h2>
            <h3 className="heading">Технический стек</h3>
          </motion.div>
          
          {/* Skill Bars */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {skills.map((skill, index) => (
              <div key={skill.name} className="relative">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium">{skill.name}</h4>
                  <span className="text-red font-mono">{skill.percent}%</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-dark-red to-red rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.percent}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Skill Groups */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group) => (
              <div 
                key={group.title} 
                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-red/30 transition-all duration-300"
              >
                <h4 className="text-xl font-bold mb-4 text-red">{group.title}</h4>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <svg className="w-4 h-4 text-red mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
          
          {/* Additional Skills Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h4 className="text-2xl font-bold mb-8 text-center">Дополнительные навыки</h4>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-900/20 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-gray-900/40 transition-all duration-300">
                <div className="text-red text-3xl mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h5 className="font-medium">UI/UX Дизайн</h5>
              </div>
              
              <div className="bg-gray-900/20 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-gray-900/40 transition-all duration-300">
                <div className="text-red text-3xl mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h5 className="font-medium">Адаптивная верстка</h5>
              </div>
              
              <div className="bg-gray-900/20 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-gray-900/40 transition-all duration-300">
                <div className="text-red text-3xl mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h5 className="font-medium">API Интеграция</h5>
              </div>
              
              <div className="bg-gray-900/20 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-gray-900/40 transition-all duration-300">
                <div className="text-red text-3xl mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h5 className="font-medium">Командная работа</h5>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 