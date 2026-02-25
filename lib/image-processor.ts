import { jsPDF } from "jspdf";

export const convertImageToPDF = async (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = () => {
      const imgData = reader.result as string;
      const img = new Image();
      img.src = imgData;

      img.onload = () => {
        // PDF Create karein (A4 size default)
        const pdf = new jsPDF("p", "mm", "a4");
        
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        // Image dimensions calculate karein taake ratio kharab na ho
        const imgWidth = img.width;
        const imgHeight = img.height;
        const ratio = Math.min((pageWidth - 20) / imgWidth, (pageHeight - 20) / imgHeight);
        
        const finalWidth = imgWidth * ratio;
        const finalHeight = imgHeight * ratio;

        // Image add karein (Centered)
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