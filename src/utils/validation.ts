export const isPDFFile = (file: File): boolean => {
  return file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
};

export const validateFiles = (files: File[]): string | null => {
  if (files.length === 0) {
    return 'Please select at least one file';
  }

  const invalidFiles = files.filter(file => !isPDFFile(file));
  if (invalidFiles.length > 0) {
    return `Invalid file type${invalidFiles.length > 1 ? 's' : ''}: ${invalidFiles.map(f => f.name).join(', ')}. Only PDF files are allowed.`;
  }

  return null;
};