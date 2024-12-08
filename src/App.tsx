import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { FileUpload } from './components/FileUpload';
import { Dashboard } from './components/Dashboard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { Navbar } from './components/Navbar';
import { uploadDocuments, generateDashboard, APIError } from './services/api';
import { useAsync } from './hooks/useAsync';
import type { FinancialMetrics } from './types/financial';

function App() {
  const { 
    data: metrics,
    error,
    isLoading,
    execute
  } = useAsync<FinancialMetrics>();

  const handleUpload = useCallback(async (files: FileList) => {
    try {
      await execute(
        (async () => {
          await uploadDocuments(files);
          const response = await generateDashboard();
          return response.metrics;
        })()
      );
    } catch (err) {
      console.error('Error:', err);
    }
  }, [execute]);

  const handleReset = useCallback(() => {
    execute(Promise.reject(null)).catch(() => {});
  }, [execute]);

  const errorMessage = error instanceof APIError 
    ? error.message 
    : 'An error occurred while processing your files';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
            Financial Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Upload your financial documents to generate insights
          </p>
        </motion.div>

        {error && (
          <div className="max-w-2xl mx-auto mb-8">
            <ErrorMessage message={errorMessage} onRetry={handleReset} />
          </div>
        )}

        {!metrics && !isLoading && (
          <div className="max-w-2xl mx-auto">
            <FileUpload onUpload={handleUpload} isLoading={isLoading} />
          </div>
        )}

        {isLoading && (
          <div className="flex justify-center items-center min-h-[300px]">
            <LoadingSpinner />
          </div>
        )}

        {metrics && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-6 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleReset}
                className="text-sm text-gray-600 hover:text-gray-900 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-200"
              >
                Upload New Documents
              </motion.button>
            </div>
            <Dashboard metrics={metrics} />
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default App;