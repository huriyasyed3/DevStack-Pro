"use client";

import { User, Shield, CreditCard, Activity, Save, Zap } from "lucide-react";
import { Switch } from "@/components/ui/switch"; 
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"; // Shadcn component

export default function ProfilePage() {
  // Demo Data (In real app, fetch from Auth/DB)
  const user = {
    name: "Alex Rivera",
    email: "alex.rivera@devstack.pro",
    role: "Pro User", 
    creditsUsed: 45,
    totalCredits: 100
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Side: Account Info & Plan */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <User size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{user.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
                  <Shield size={10} /> {user.role}
                </span>
                <span className="text-muted-foreground text-xs">{user.email}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-card border border-border rounded-2xl">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3 block">Monthly Usage</label>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-foreground font-medium">{user.creditsUsed} / {user.totalCredits} Credits</span>
                <span className="text-muted-foreground">45%</span>
              </div>
              <Progress value={45} className="h-1.5" />
              <p className="text-[10px] text-muted-foreground mt-3">Resets on March 1st</p>
            </div>

            <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl relative overflow-hidden group">
               <Zap className="absolute -right-2 -bottom-2 text-primary/10 w-20 h-20 group-hover:scale-110 transition-transform" />
               <label className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">Current Plan</label>
               <h3 className="text-lg font-bold text-foreground">DevStack Pro</h3>
               <Button variant="link" className="p-0 h-auto text-primary text-xs font-bold mt-2">Manage Subscription</Button>
            </div>
          </div>

          {/* Settings Form */}
          <div className="space-y-4 pt-4">
             <div className="space-y-1">
                <label className="text-xs text-muted-foreground ml-1 font-medium">Full Name</label>
                <input 
                  type="text" 
                  defaultValue={user.name}
                  className="w-full bg-muted/30 border border-border rounded-xl py-3 px-4 text-sm text-foreground focus:ring-2 focus:ring-primary/20 transition-all"
                />
             </div>
             <div className="space-y-1">
                <label className="text-xs text-muted-foreground ml-1 font-medium">Email</label>
                <input 
                  type="email" 
                  defaultValue={user.email}
                  disabled
                  className="w-full bg-muted/50 border border-border rounded-xl py-3 px-4 text-sm text-muted-foreground cursor-not-allowed"
                />
             </div>
          </div>
        </div>

        {/* Right Side: Preferences & Security */}
        <div className="w-full md:w-80 space-y-6">
          <div className="p-5 bg-card border border-border rounded-2xl space-y-5">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest border-b border-border pb-3 flex items-center gap-2">
              <Activity size={14} className="text-primary" /> Preferences
            </h4>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground font-medium">Dark Mode</span>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground font-medium">Email Alerts</span>
              <Switch />
            </div>

            <div className="pt-2">
              <Button variant="outline" className="w-full text-xs font-bold py-5 rounded-xl border-dashed">
                <CreditCard size={14} className="mr-2" /> Billing History
              </Button>
            </div>
          </div>

          <Button className="w-full bg-primary hover:opacity-90 text-primary-foreground font-bold py-6 rounded-xl flex items-center gap-2">
            <Save size={18} />
            Save Profile
          </Button>
        </div>

      </div>
    </div>
  );
}