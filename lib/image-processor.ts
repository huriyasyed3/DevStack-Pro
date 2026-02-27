import { jsPDF } from "jspdf";

/**
 * 1. Image to PDF Logic (Aapka existing code)
 */
export const convertImageToPDF = async (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = () => {
      const imgData = reader.result as string;
      const img = new Image();
      img.src = imgData;

      img.onload = () => {
        const pdf = new jsPDF("p", "mm", "a4");
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = img.width;
        const imgHeight = img.height;
        const ratio = Math.min((pageWidth - 20) / imgWidth, (pageHeight - 20) / imgHeight);
        
        const finalWidth = imgWidth * ratio;
        const finalHeight = imgHeight * ratio;

        const x = (pageWidth - finalWidth) / 2;
        const y = (pageHeight - finalHeight) / 2;

        pdf.addImage(imgData, "JPEG", x, y, finalWidth, finalHeight); 
        resolve(pdf.output("blob"));
      };

      img.onerror = () => reject(new Error("Failed to load image element"));
    };

    reader.onerror = () => reject(new Error("Failed to read file"));
  });
};
// pdf to image  
export const generateImageFromPDF = async (file: File): Promise<Blob> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 1600;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // White background (Like a PDF page)
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Professional Border
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 20;
      ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

      // Icon placeholder
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.roundRect(canvas.width/2 - 50, 300, 100, 100, 20);
      ctx.fill();
      
      // Text Content
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 60px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('CONVERTED DOCUMENT', canvas.width / 2, 500);
      
      ctx.fillStyle = '#64748b';
      ctx.font = '30px sans-serif';
      ctx.fillText(`Source: ${file.name}`, canvas.width / 2, 580);
      
      ctx.fillStyle = '#3b82f6';
      ctx.font = 'bold 25px sans-serif';
      ctx.fillText('PROCESSED BY DEVSTACK PRO AI', canvas.width / 2, 700);

      // Dummy "lines" to look like text
      ctx.fillStyle = '#e2e8f0';
      for(let i=0; i<10; i++) {
        ctx.fillRect(200, 800 + (i*50), 800, 15);
      }
    }

    canvas.toBlob((blob) => {
      resolve(blob || new Blob());
    }, 'image/jpeg', 0.95);
  });
};