'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-gray-800 py-12 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="#home" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-red">andur</span>
              <span className="text-white">fool</span>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Создаю современные и отзывчивые веб-приложения, сочетая креативный дизайн с передовыми технологиями.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.847 2.46 2.274 4.617 2.86 4.617.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.747c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.15-3.574 2.15-3.574.119-.254.305-.491.729-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                </svg>
              </a>
              <a href="https://t.me/andurfool" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248c-.14.652-.868 4.394-1.228 5.835-.152.605-.316 1.591-.953 1.591-.636 0-1.129-.663-1.749-1.299-.977-.97-1.53-1.596-2.47-2.539-.53-.545-.184-1.003.108-1.295.298-.3 2.42-2.223 2.516-2.41.012-.024.023-.11-.04-.157s-.183-.041-.258-.024c-.106.024-1.793 1.14-5.061 3.345-.48.327-.913.489-1.302.489-.428 0-1.252-.244-1.865-.445-.751-.244-1.349-.374-1.297-.79.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.324.015.468.177.098.113.13.262.144.387.016.136.005.255-.006.336z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-red transition-colors">Главная</Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-red transition-colors">Обо мне</Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-red transition-colors">Навыки</Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-red transition-colors">Проекты</Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-red transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="text-red mr-2">Email:</span>
                <a href="mailto:andurfool@gmail.com" className="hover:text-red transition-colors">andurfool@gmail.com</a>
              </li>
              <li className="text-gray-400">
                <span className="text-red mr-2">Telegram:</span>
                <a href="https://t.me/andurfool" className="hover:text-red transition-colors">@andurfool</a>
              </li>
              <li className="text-gray-400">
                <span className="text-red mr-2">Локация:</span>
                Чита, Россия
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} andurfool. Все права защищены.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4"
          >
            <Link href="#home" className="inline-flex items-center text-red hover:text-light-red transition-colors">
              <span className="mr-2">Наверх</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 