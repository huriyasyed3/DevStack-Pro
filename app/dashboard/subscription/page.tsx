"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Download, ArrowLeft, MoreHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="space-y-8 pb-10 transition-colors">
      {/* 1. Header with Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full bg-muted/50 border border-border">
            <ArrowLeft size={18} className="text-foreground" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">Subscription & Billing</h1>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <MoreHorizontal size={18} />
        </Button>
      </div>

      {/* 2. Current Plan Usage */}
      <Card className="bg-card border-border p-6 rounded-2xl shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-1">
            <span className="bg-primary/20 text-primary text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest">Active</span>
            <h2 className="text-2xl font-bold text-foreground">Pro Plan</h2>
            <p className="text-sm text-muted-foreground">$29/month • Renews Oct 12, 2024</p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:opacity-90">Manage</Button>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-xs font-bold text-muted-foreground">
            <span>PDFs Converted</span>
            <span>85 / 100</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-primary rounded-full transition-all duration-500" />
          </div>
          <p className="text-[10px] text-muted-foreground italic">15 conversions remaining this cycle</p>
        </div>
      </Card>

      {/* 3. Pricing Toggle */}
      <div className="flex justify-center">
        <div className="bg-muted/50 p-1 rounded-xl border border-border flex gap-2">
          <Button 
            variant="ghost"
            className={`rounded-lg px-6 ${billingCycle === "monthly" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </Button>
          <Button 
            variant="ghost"
            className={`rounded-lg px-6 ${billingCycle === "yearly" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}
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
          features={["10 PDF conversions", "Basic AI tools", "Standard Analytics"]}
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
          <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">Recent Invoices</h3>
          <Button variant="link" className="text-primary text-xs font-bold">View All</Button>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 flex items-center justify-between group hover:border-primary/50 transition-all cursor-pointer shadow-sm">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-muted rounded-lg text-muted-foreground group-hover:text-primary transition-colors">
                <Download size={20} />
             </div>
             <div>
                <p className="text-sm font-bold text-foreground">Sept 12, 2023</p>
                <p className="text-xs text-muted-foreground font-medium">Pro Plan • $29.00</p>
             </div>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
             <Download size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}

function PlanCard({ title, desc, price, features, buttonText, isPopular, isActive, isCurrent }: any) {
  return (
    <div className={`p-8 rounded-3xl border transition-all flex flex-col h-full shadow-sm ${
      isPopular ? 'border-primary bg-card relative ring-1 ring-primary' : 'border-border bg-card'
    }`}>
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-black px-3 py-1 rounded-full uppercase">Popular</span>
      )}
      <div className="space-y-2 mb-8">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground font-medium leading-relaxed">{desc}</p>
        <div className="pt-4">
          <span className="text-3xl font-bold text-foreground">{price === "Custom" ? price : `$${price}`}</span>
          {price !== "Custom" && <span className="text-muted-foreground text-xs ml-1">/mo</span>}
        </div>
      </div>

      <div className="space-y-4 mb-10 flex-1">
        {features.map((feat: string, i: number) => (
          <div key={i} className="flex items-center gap-3">
             <div className={`p-0.5 rounded-full ${isCurrent && i === 2 ? 'text-muted-foreground/40 border border-border' : 'text-emerald-500'}`}>
               <Check size={14} />
             </div>
             <span className={`text-sm font-medium ${isCurrent && i === 2 ? 'text-muted-foreground/40' : 'text-muted-foreground'}`}>{feat}</span>
          </div>
        ))}
      </div>

      <Button 
        className={`w-full font-bold py-6 rounded-xl transition-all ${
          isActive ? 'bg-primary text-primary-foreground hover:opacity-90' : 
          isCurrent ? 'bg-muted text-muted-foreground cursor-default' : 
          'bg-foreground text-background hover:opacity-80'
        }`}
      >
        {buttonText}
      </Button>
    </div>
  );
}