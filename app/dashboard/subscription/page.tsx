"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Aapka reusable button
import { Check, Download, ArrowLeft, MoreHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * Subscription & Billing Page
 * ---------------------------
 * Task: Part 4 - Subscription gated features & UI Quality
 */
export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="space-y-8 pb-10">
      {/* 1. Header with Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full bg-slate-800/50">
            <ArrowLeft size={18} />
          </Button>
          <h1 className="text-xl font-bold text-white">Subscription & Billing</h1>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal size={18} />
        </Button>
      </div>

      {/* 2. Current Plan Usage */}
      <Card className="bg-[#0b1224] border-slate-800 p-6 rounded-2xl">
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-1">
            <span className="bg-blue-600/20 text-blue-500 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest">Active</span>
            <h2 className="text-2xl font-bold text-white">Pro Plan</h2>
            <p className="text-sm text-slate-500">$29/month • Renews Oct 12, 2024</p>
          </div>
          <Button variant="outline" className="bg-blue-600 border-none text-white hover:bg-blue-700">Manage</Button>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-xs font-bold text-slate-400">
            <span>PDFs Converted</span>
            <span>85 / 100</span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-blue-600 rounded-full" />
          </div>
          <p className="text-[10px] text-slate-500 italic">15 conversions remaining this cycle</p>
        </div>
      </Card>

      {/* 3. Pricing Toggle */}
      <div className="flex justify-center">
        <div className="bg-[#0b1224] p-1 rounded-xl border border-slate-800 flex gap-2">
          <Button 
            variant={billingCycle === "monthly" ? "primary" : "ghost"}
            className={billingCycle === "monthly" ? "bg-slate-800 text-white" : "text-slate-500"}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </Button>
          <Button 
            variant={billingCycle === "yearly" ? "primary" : "ghost"}
            className={billingCycle === "yearly" ? "bg-slate-800 text-white" : "text-slate-500"}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly <span className="ml-2 text-[10px] text-emerald-500 font-bold">-20%</span>
          </Button>
        </div>
      </div>

      {/* 4. Plan Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PlanCard 
          title="Starter" 
          desc="For individuals trying DevStack" 
          price="0" 
          features={["10 PDF conversions", "Basic AI tools", "Advanced Analytics"]}
          buttonText="Current Plan"
          isCurrent
        />
        <PlanCard 
          title="Professional" 
          desc="For power users and developers" 
          price="29" 
          features={["100 PDF conversions", "All Pro AI tools", "Priority support"]}
          buttonText="Already Subscribed"
          isPopular
          isActive
        />
        <PlanCard 
          title="Enterprise" 
          desc="For teams needing custom scale" 
          price="Custom" 
          features={["Unlimited conversions", "Dedicated account manager", "Custom API limits"]}
          buttonText="Contact Sales"
        />
      </div>

      {/* 5. Recent Invoices Section */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest">Recent Invoices</h3>
          <Button variant="ghost" className="text-blue-500 text-xs font-bold">View All</Button>
        </div>
        <div className="bg-[#0b1224] border border-slate-800 rounded-xl p-4 flex items-center justify-between group hover:border-slate-700 transition-colors">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-slate-900 rounded-lg text-slate-400 group-hover:text-blue-500">
                <Download size={20} />
             </div>
             <div>
                <p className="text-sm font-bold text-white">Sept 12, 2023</p>
                <p className="text-xs text-slate-500 font-medium">Pro Plan • $29.00</p>
             </div>
          </div>
          <Button variant="ghost" size="icon" className="text-slate-500">
             <Download size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}

/** * Sub-component for individual pricing cards
 */
function PlanCard({ title, desc, price, features, buttonText, isPopular, isActive, isCurrent }: any) {
  return (
    <div className={`p-8 rounded-2xl border transition-all flex flex-col h-full ${
      isPopular ? 'border-blue-600 bg-[#0b1224] relative ring-1 ring-blue-600' : 'border-slate-800 bg-[#0b1224]'
    }`}>
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Popular</span>
      )}
      <div className="space-y-2 mb-8">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-xs text-slate-500 font-medium">{desc}</p>
        <div className="pt-4">
          <span className="text-3xl font-bold text-white">{price === "Custom" ? price : `$${price}`}</span>
          {price !== "Custom" && <span className="text-slate-500 text-xs ml-1">/mo</span>}
        </div>
      </div>

      <div className="space-y-4 mb-10 flex-1">
        {features.map((feat: string, i: number) => (
          <div key={i} className="flex items-center gap-3">
             <div className={`p-0.5 rounded-full ${isCurrent && i === 2 ? 'text-slate-600 border border-slate-700' : 'text-emerald-500'}`}>
               <Check size={14} />
             </div>
             <span className={`text-sm font-medium ${isCurrent && i === 2 ? 'text-slate-600' : 'text-slate-300'}`}>{feat}</span>
          </div>
        ))}
      </div>

      <Button 
        variant={isActive ? "primary" : isCurrent ? "ghost" : "outline"} 
        className={`w-full font-bold py-6 rounded-xl ${
          isActive ? 'bg-blue-600 text-white hover:bg-blue-700' : 
          isCurrent ? 'border-slate-800 text-white cursor-default' : 'bg-white text-black hover:bg-slate-200'
        }`}
      >
        {buttonText}
      </Button>
    </div>
  );
}