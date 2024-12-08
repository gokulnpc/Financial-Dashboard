import React from 'react';
import { BarChart2, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <BarChart2 className="h-8 w-8" />
            <span className="font-bold text-xl">FinanceAI</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Settings className="h-5 w-5" />
            </button>
            <a 
              href="https://docs.example.com" 
              className="text-sm font-medium hover:text-white/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}