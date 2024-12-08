import React from 'react';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg bg-red-50 p-4 border border-red-100"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-red-100 p-2">
          <AlertCircle className="h-5 w-5 text-red-500" />
        </div>
        <p className="text-sm text-red-700">{message}</p>
      </div>
      {onRetry && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onRetry}
          className="mt-3 text-sm font-medium text-red-700 hover:text-red-800"
        >
          Try again
        </motion.button>
      )}
    </motion.div>
  );
}