import React from 'react';
import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-blue-100 border-t-blue-500 rounded-full"
      />
      <p className="text-gray-500 animate-pulse">Analyzing documents...</p>
    </div>
  );
}