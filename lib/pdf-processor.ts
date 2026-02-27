import * as pdfjsLib from 'pdfjs-dist';

// Worker path ko check karke set karna
if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
}

export const extractTextFromPDF = async (file: File): Promise<string> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    
    // Uint8Array mein convert karna zaroori hai Turbopack ke liye
    const loadingTask = pdfjsLib.getDocument({ 
      data: new Uint8Array(arrayBuffer),
      useWorkerFetch: true 
    });
    
    const pdf = await loadingTask.promise;
    let structuredContent = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      
      let lastY = -1;
      let lineText = "";

      for (const item of textContent.items as any[]) {
        // Y-coordinate (transform[5]) logic to detect new lines
        if (lastY !== -1 && Math.abs(item.transform[5] - lastY) > 5) {
          structuredContent += lineText + "\n";
          lineText = "";
        }
        
        // X-coordinate indentation logic
        const xCoord = item.transform[4];
        if (lineText === "" && xCoord > 80) {
          lineText += "\t".repeat(Math.floor(xCoord / 60)); 
        }

        lineText += item.str;
        lastY = item.transform[5];
      }
      structuredContent += lineText + "\n\n";
    }

    return structuredContent || "No content found.";
  } catch (error: any) {
    // Console mein asli wajah check karne ke liye
    console.error("PDF Processing Detailed Error:", error);
    throw new Error(`Extraction failed: ${error.message || "Invalid PDF structure"}`);
  }
};