"use client";

/**
 * @component AdminCharts
 * @description 
 * Part of the Admin Dashboard (Part 3). 
 * Implements Recharts for high-performance data visualization.
 * Designed with a Mobile-First and Atomic Design approach.
 * Uses Shadcn HSL variables for dynamic theme synchronization.
 */

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
} from 'recharts';
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";

// Mock Data: In production, this would be fetched via Server Actions or SWR
const WEEKLY_TRAFFIC_DATA = [
  { name: 'Mon', conversions: 40 },
  { name: 'Tue', conversions: 30 },
  { name: 'Wed', conversions: 65 },
  { name: 'Thu', conversions: 45 },
  { name: 'Fri', conversions: 90 },
  { name: 'Sat', conversions: 55 },
  { name: 'Sun', conversions: 75 },
];

export default function AdminCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 animate-in fade-in duration-500">
      
      {/* --- CHART SECTION: Platform Traffic Analysis --- */}
      <div className="lg:col-span-2 bg-card border border-border rounded-[2rem] p-8 shadow-sm transition-all hover:shadow-md">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Activity className="text-primary" size={20} /> Platform Traffic
            </h3>
            <p className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wider">
              Real-time Conversion Analytics
            </p>
          </div>
          
          {/* Growth Indicator: Visual UX for quick data digestion */}
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">
            <TrendingUp size={12} /> +12.5% Growth
          </div>
        </div>

        <div className="h-[300px] w-full">
          {/* ResponsiveContainer ensures the chart scales across all device breakpoints */}
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={WEEKLY_TRAFFIC_DATA}>
              <defs>
                {/* Linear Gradient for a premium SaaS aesthetic */}
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={1} />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.6} />
                </linearGradient>
              </defs>
              
              {/* Subtle Grid: Maintains readability without cluttering the UI */}
              <CartesianGrid 
                strokeDasharray="3 3" 
                vertical={false} 
                stroke="hsl(var(--muted-foreground))" 
                strokeOpacity={0.1} 
              />
              
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fontSize: 12, fill: 'hsl(var(--muted-foreground))', fontWeight: 500}} 
                dy={10}
              />
              
              <YAxis hide /> {/* Cleaner look: relying on Tooltip for exact values */}
              
              <Tooltip 
                cursor={{fill: 'hsl(var(--muted))', opacity: 0.4}} 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  borderRadius: '16px', 
                  border: '1px solid hsl(var(--border))',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                  padding: '12px',
                  fontSize: '12px'
                }} 
              />
              
              <Bar 
                dataKey="conversions" 
                fill="url(#barGradient)" 
                radius={[8, 8, 8, 8]} 
                barSize={32}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* --- STATS SECTION: Key Performance Indicators (KPIs) --- */}
      <div className="flex flex-col gap-6">
        
        {/* Revenue KPI Card */}
        <div className="p-8 bg-primary/5 border border-primary/10 rounded-[2rem] relative overflow-hidden group transition-all hover:bg-primary/[0.08]">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <DollarSign size={80} className="text-primary" />
          </div>
          <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">Total Revenue</p>
          <h2 className="text-4xl font-black text-foreground tracking-tight">$12,450.00</h2>
          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md">↑ 8%</span> 
            Monthly Growth
          </div>
        </div>

        {/* User Base KPI Card */}
        <div className="p-8 bg-muted/40 border border-border rounded-[2rem] relative overflow-hidden group transition-all hover:bg-muted/60">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
            <Users size={80} className="text-foreground" />
          </div>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">Active Pro Users</p>
          <h2 className="text-4xl font-black text-foreground tracking-tight">1,240</h2>
          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="text-primary font-bold">New</span> 
            24 Signups today
          </div>
        </div>

      </div>
    </div>
  );
}