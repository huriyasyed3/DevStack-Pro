// "use client";

// import { useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// /**
//  * Weekly & Monthly mock data
//  */

// const weeklyData = [
//   { label: "Mon", conversions: 12 },
//   { label: "Tue", conversions: 19 },
//   { label: "Wed", conversions: 8 },
//   { label: "Thu", conversions: 24 },
//   { label: "Fri", conversions: 32 },
//   { label: "Sat", conversions: 18 },
//   { label: "Sun", conversions: 27 },
// ];

// const monthlyData = [
//   { label: "Jan", conversions: 120 },
//   { label: "Feb", conversions: 190 },
//   { label: "Mar", conversions: 160 },
//   { label: "Apr", conversions: 220 },
//   { label: "May", conversions: 260 },
//   { label: "Jun", conversions: 310 },
// ];

// /**
//  * AnalyticsChart with Toggle
//  */
// export default function AnalyticsChart() {
//   const [view, setView] = useState<"weekly" | "monthly">("weekly");

//   const data = view === "weekly" ? weeklyData : monthlyData;

//   return (
//     <Card>
//       <CardContent className="p-6 space-y-6">

//         {/* Header + Toggle */}
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-semibold">
//             {view === "weekly"
//               ? "Weekly Conversions"
//               : "Monthly Conversions"}
//           </h2>

//           <div className="flex gap-2">
//             <Button
//               size="sm"
//               variant={view === "weekly" ? "primary" : "outline"}
//               onClick={() => setView("weekly")}
//             >
//               Weekly
//             </Button>

//             <Button
//               size="sm"
//               variant={view === "monthly" ? "primary" : "outline"}
//               onClick={() => setView("monthly")}
//             >
//               Monthly
//             </Button>
//           </div>
//         </div>

//         {/* Chart */}
//         <div className="w-full h-[320px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={data}>
//               <defs>
//                 <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1} />
//                 </linearGradient>
//               </defs>

//               <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />

//               <XAxis dataKey="label" />
//               <YAxis />
//               <Tooltip />

//               <Line
//                 type="monotone"
//                 dataKey="conversions"
//                 stroke="#2563eb"
//                 strokeWidth={3}
//                 dot={false}
//                 fill="url(#chartGradient)"
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//       </CardContent>
//     </Card>
//   );
// }

"use client";

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react"; // Dropdown icon ke liye
import { Button } from "../ui/button";

const weeklyData = [
  { label: "MON", conversions: 40 },
  { label: "TUE", conversions: 35 },
  { label: "WED", conversions: 55 },
  { label: "THU", conversions: 45 },
  { label: "FRI", conversions: 70 },
  { label: "SAT", conversions: 65 },
  { label: "SUN", conversions: 85 },
];

export default function AnalyticsChart() {
  return (
    <Card className="bg-[#0b1224] border-slate-800 rounded-2xl overflow-hidden">
      <CardContent className="p-6">
        
        {/* Header Section: Image ke mutabiq */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">Usage Tracking</h2>
            <p className="text-xs text-slate-500">Token consumption over the last 7 days</p>
          </div>

          {/* Right Side Dropdown Selector */}
          <div className="relative group">
            <Button variant="outline" className="bg-[#161f35] border-slate-800 text-slate-300 text-[11px]">
            Last 7 Days <ChevronDown size={14} />
           </Button>
            {/* Dropdown Menu (Hidden by default) */}
            <div className="absolute right-0 mt-2 w-32 bg-[#161f35] border border-slate-800 rounded-lg shadow-xl hidden group-hover:block z-10">
              <ul className="py-1 text-[11px] font-medium text-slate-400">
                <li className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer">Last 24 Hours</li>
                <li className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer">Last 30 Days</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="w-full h-[320px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData}>
              {/* Vertical lines hide kar di hain jaisa image mein hai */}
              <CartesianGrid stroke="#1e293b" vertical={false} strokeDasharray="0" />
              <XAxis 
                dataKey="label" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#475569', fontSize: 10, fontWeight: '800'}}
                dy={15}
              />
              <YAxis hide domain={[0, 100]} />
              <Tooltip 
                cursor={{ stroke: '#1e293b', strokeWidth: 2 }}
                contentStyle={{ 
                  backgroundColor: '#0f172a', 
                  border: '1px solid #1e293b', 
                  borderRadius: '12px',
                  fontSize: '12px'
                }}
              />
              {/* Line thickness aur color image se match karta hua */}
              <Line 
                type="monotone" 
                dataKey="conversions" 
                stroke="#3b82f6" 
                strokeWidth={3} 
                dot={false}
                activeDot={{ r: 6, strokeWidth: 0, fill: '#3b82f6' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* X-Axis Highlight Line (Image mein blue indicators hain) */}
        <div className="flex justify-between px-6 mt-2">
            {weeklyData.map((_, i) => (
                <div key={i} className="h-1 w-8 bg-blue-600/20 rounded-full">
                    <div className="h-full w-1/2 bg-blue-500 rounded-full" />
                </div>
            ))}
        </div>

      </CardContent>
    </Card>
  );
}