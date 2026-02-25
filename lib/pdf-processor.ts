import * as pdfjs from 'pdfjs-dist';

// Next.js/Turbopack compatibility ke liye stable CDN path
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const extractTextFromPDF = async (file: File): Promise<string> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    
    // PDF document load karna
    const loadingTask = pdfjs.getDocument({ 
      data: arrayBuffer,
      useWorkerFetch: true, // Worker issues se bachne ke liye
      isEvalSupported: false 
    });
    
    const pdf = await loadingTask.promise;
    let fullText = "";

    // Har page se text extract karna
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      
      // @ts-ignore
      const pageText = textContent.items
        .map((item: any) => item.str)
        .join(" ");
        
      fullText += `--- Page ${i} ---\n${pageText}\n\n`;
    }

    return fullText;
  } catch (error) {
    console.error("PDF Extraction Error:", error);
    throw new Error("Failed to read PDF content. Please try a different file.");
  }
};