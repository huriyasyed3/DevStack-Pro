import * as pdfjsLib from 'pdfjs-dist';

// IMPORTANT: Next.js mein worker ko local import ke zariye set karna
// Isse "Failed to fetch" wala CDN error khatam ho jayega
if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
}

export const extractTextFromPDF = async (file: File): Promise<string> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    
    // PDF load karne ka task
    const loadingTask = pdfjsLib.getDocument({ 
      data: arrayBuffer,
      useWorkerFetch: true, // Worker issues fix karne ke liye
      isEvalSupported: false 
    });
    
    const pdf = await loadingTask.promise;
    let fullText = "";

    // Text extraction loop
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      
      // Items ko string mein convert karna
      const pageText = textContent.items
        .map((item: any) => item.str)
        .join(" ");
      
      fullText += pageText + "\n\n";
    }

    // Agar text khali ho (Scanned PDF case)
    if (!fullText.trim()) {
      return "This PDF seems to be scanned or contains only images. No selectable text found.";
    }

    return fullText;
  } catch (error) {
    console.error("PDF.js Extraction Error:", error);
    // Asli error console mein dikhega, user ko friendly message
    throw new Error("Could not extract real text from PDF.");
  }
};