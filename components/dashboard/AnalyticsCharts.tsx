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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    /* FIXED: bg-[#0b1224] -> bg-card | border-slate-800 -> border-border */
    <Card className="bg-card border-border rounded-2xl overflow-hidden shadow-xl transition-colors">
      <CardContent className="p-4 sm:p-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="space-y-1">
            {/* FIXED: text-white -> text-foreground */}
            <h2 className="text-lg font-bold text-foreground tracking-tight">Usage Tracking</h2>
            <p className="text-[10px] sm:text-xs text-muted-foreground">Token consumption over the last 7 days</p>
          </div>

          <div className="relative group self-start">
            {/* FIXED: bg-[#161f35] -> bg-muted */}
            <Button variant="outline" className="h-8 bg-muted border-border text-foreground text-[10px] sm:text-[11px] px-3">
              Last 7 Days <ChevronDown className="ml-2" size={14} />
            </Button>
            
            <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-2xl hidden group-hover:block z-20">
              <ul className="py-1 text-[11px] font-medium text-muted-foreground">
                <li className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer transition-colors">Last 24 Hours</li>
                <li className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer transition-colors">Last 30 Days</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="w-full h-[250px] sm:h-[320px] mt-4">
          <ResponsiveContainer width="100%" height="100%" debounce={50}>
            <LineChart data={weeklyData} margin={{ left: -20, right: 10 }}>
              {/* FIXED: Grid color changed to border-border equivalent */}
              <CartesianGrid stroke="currentColor" className="text-border" vertical={false} strokeDasharray="3 3" />
              <XAxis 
                dataKey="label" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: 'currentColor', fontSize: 9, fontWeight: '700'}}
                className="text-muted-foreground"
                dy={10}
              />
              <YAxis hide domain={[0, 100]} />
              
              {/* FIXED: Tooltip background and text based on theme variables */}
              <Tooltip 
                cursor={{ stroke: '#3b82f6', strokeWidth: 1 }}
                contentStyle={{ 
                  backgroundColor: 'var(--card)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '10px',
                  fontSize: '11px',
                  color: 'var(--foreground)'
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

        {/* Bottom Indicators */}
        <div className="hidden sm:flex justify-between items-center px-2 mt-6 gap-2">
            {weeklyData.map((_, i) => (
                <div key={i} className="h-1 flex-1 bg-primary/10 rounded-full overflow-hidden max-w-[40px] md:max-w-[60px]">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${Math.random() * 60 + 20}%` }} 
                    />
                </div>
            ))}
        </div>

      </CardContent>
    </Card>
  );
}