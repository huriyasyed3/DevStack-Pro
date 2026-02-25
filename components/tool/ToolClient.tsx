// // "use client";

// // import UploadBox from "@/components/tool/UploadBox";

// // type Props = { slug: string };

// // export default function ToolClient({ slug }: Props) {
// //   const toolName = slug
// //     .replace(/-/g, " ")
// //     .replace(/\b\w/g, (c) => c.toUpperCase());

// //   return (
// //     <div>
// //       <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">
// //         {toolName} Converter
// //       </h1>

// //       <p className="text-gray-600 dark:text-gray-400 mb-10">
// //         Convert your files quickly and securely using our free online {toolName} tool.
// //       </p>

// //       {/* REAL Upload Component */}
// //       <UploadBox />
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import ToolHero from "./ToolHero";
// import UploadBox from "./UploadBox";
// import ConvertActions from "./ConvertActions";
// import FAQSection from "./FAQSection";

// /**
//  * ToolClient Component
//  * --------------------
//  * Main client-side controller for the tool page.
//  * Handles:
//  * - File selection
//  * - Convert button + spinner
//  * - Layout composition using Cards
//  * - Hero section
//  * - FAQ section
//  */

// interface ToolClientProps {
//   slug: string;
// }

// export default function ToolClient({ slug }: ToolClientProps) {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   return (
//     <div className="space-y-16">
//       {/* Hero Section */}
//       <ToolHero
//         title="Convert Your Files Instantly"
//         description="Upload your file and convert it securely within seconds using our fast online tool."
//       />

//       {/* Upload + Convert Section */}
//       <Card>
//         <CardContent className="p-8 space-y-6">
//           <UploadBox onFileSelect={setSelectedFile} file={selectedFile} />
//           <ConvertActions file={selectedFile} />
//         </CardContent>
//       </Card>

//       {/* FAQ / SEO Content */}
//       <FAQSection slug={slug} />
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import ToolHero from "@/components/tool/ToolHero";
// import UploadBox from "@/components/tool/UploadBox";
// import ConvertActions from "@/components/tool/ConvertActions";
// import FAQSection from "@/components/tool/FAQSection";

// interface ToolClientProps {
//   slug: string;
// }

// /**
//  * ToolClient Component
//  * -------------------
//  * - Main client-side controller for a tool page
//  * - Manages:
//  *   1. Selected file state
//  *   2. Upload + Convert section
//  *   3. SEO/FAQ Section
//  */
// export default function ToolClient({ slug }: ToolClientProps) {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   return (
//     <div className="space-y-16">

//       {/* Hero Section */}
//       <ToolHero
//         title="Convert Your Files Instantly"
//         description="Upload your file and convert it securely within seconds using our fast online tool."
//       />

//       {/* Upload + Convert Section */}
//       <Card>
//         <CardContent className="p-8 space-y-6">

//           {/* Upload Box */}
//           <UploadBox onFileSelect={setSelectedFile} file={selectedFile} />

//           {/* Convert Button + Spinner */}
//           <ConvertActions file={selectedFile} toolName={slug}/>

//         </CardContent>
//       </Card>

//       {/* FAQ / SEO Content */}
//       <FAQSection slug={slug} />

//     </div>
//   );
// }


"use client";

import { useState } from "react";
import UploadBox from "@/components/tool/UploadBox";
import ConvertActions from "@/components/tool/ConvertActions";
import FAQSection from "@/components/tool/FAQSection";

export default function ToolClient({ slug }: { slug: string }) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // File Removinga function
  const handleClear = () => setSelectedFile(null);

  return (
    <div className="min-h-screen bg-background text-white pb-20">
      {/* 1. Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-[10px] font-bold tracking-widest text-slate-500">
        <div>TOOLS  /  <span className="text-blue-500 uppercase">{slug.replace('-', ' ')}</span></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-12">
        {/* 2. Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Convert {slug.split('-')[0].toUpperCase()} to <br /> 
            <span className="text-white">Editable {slug.split('-')[2]?.toUpperCase() || 'Word'}</span>
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
            Upload your file and convert it securely within seconds using our fast online tool.
          </p>
        </div>

        {/* 3. Main Tool Area */}
        <div className="space-y-6">
          {/* Upload Box: isme hum file state aur clear function bhej rahe hain */}
          <UploadBox onFileSelect={setSelectedFile} file={selectedFile} />

          {/* 4. Convert Bar: sirf tab dikhega jab file ho */}
          {selectedFile && (
            <div className="pt-6 animate-in fade-in slide-in-from-bottom-4">
               <ConvertActions 
                 file={selectedFile} 
                 toolName={slug} 
                 onClear={handleClear} // Taake user file hata sake
               />
            </div>
          )}
        </div>

       
      </div>
    </div>
  );
}