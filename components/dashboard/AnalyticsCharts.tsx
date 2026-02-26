"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react"; 
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
  const [mounted, setMounted] = useState(false);

  // Prevents hydration mismatch for Recharts
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Card className="bg-[#0b1224] border-slate-800 rounded-2xl overflow-hidden shadow-xl">
      <CardContent className="p-4 sm:p-6">
        
        {/* Header Section: Responsive Flex */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white tracking-tight">Usage Tracking</h2>
            <p className="text-[10px] sm:text-xs text-slate-500">Token consumption over the last 7 days</p>
          </div>

          <div className="relative group self-start">
            <Button variant="outline" className="h-8 bg-[#161f35] border-slate-800 text-slate-300 text-[10px] sm:text-[11px] px-3">
              Last 7 Days <ChevronDown className="ml-2" size={14} />
            </Button>
            {/* Professional Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-32 bg-[#161f35] border border-slate-800 rounded-lg shadow-2xl hidden group-hover:block z-20">
              <ul className="py-1 text-[11px] font-medium text-slate-400">
                <li className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors">Last 24 Hours</li>
                <li className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors">Last 30 Days</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chart Area: Responsive Height */}
        <div className="w-full h-[250px] sm:h-[320px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData} margin={{ left: -20, right: 10 }}>
              <CartesianGrid stroke="#1e293b" vertical={false} strokeDasharray="3 3" />
              <XAxis 
                dataKey="label" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#475569', fontSize: 9, fontWeight: '700'}}
                dy={10}
              />
              <YAxis hide domain={[0, 100]} />
              <Tooltip 
                cursor={{ stroke: '#3b82f6', strokeWidth: 1 }}
                contentStyle={{ 
                  backgroundColor: '#0f172a', 
                  border: '1px solid #1e293b', 
                  borderRadius: '10px',
                  fontSize: '11px',
                  color: '#fff'
                }}
                itemStyle={{ color: '#3b82f6' }}
              />
              <Line 
                type="monotone" 
                dataKey="conversions" 
                stroke="#3b82f6" 
                strokeWidth={3} 
                dot={false}
                activeDot={{ r: 5, strokeWidth: 0, fill: '#3b82f6' }}
                animationDuration={1500}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Indicators: Hidden on very small screens, responsive on larger */}
        <div className="hidden sm:flex justify-between items-center px-2 mt-6 gap-2">
            {weeklyData.map((_, i) => (
                <div key={i} className="h-1 flex-1 bg-blue-600/10 rounded-full overflow-hidden max-w-[40px] md:max-w-[60px]">
                    <div 
                      className="h-full bg-blue-500 rounded-full" 
                      style={{ width: `${Math.random() * 60 + 20}%` }} 
                    />
                </div>
            ))}
        </div>

      </CardContent>
    </Card>
  );
}