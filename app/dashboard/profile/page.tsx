"use client";

import { Camera, Moon, Bell, Save } from "lucide-react";
import { Switch } from "@/components/ui/switch"; 
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 transition-colors">
      {/* 1. Header & Avatar Section */}
      <div className="flex flex-col items-center mb-10">
        {/* FIXED: text-white -> text-foreground */}
        <h2 className="text-xl font-bold text-foreground mb-8">User Settings</h2>
        
        <div className="relative group">
          <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-primary/30 shadow-xl">
            <img 
              src="/avatar.jpg" 
              alt="Alex Rivera"
              className="h-full w-full object-cover"
            />
          </div>
          {/* FIXED: border-[#050a15] -> border-background */}
          <button className="absolute bottom-0 right-0 bg-primary p-2 rounded-full border-2 border-background hover:opacity-90 transition-all shadow-lg">
            <Camera size={14} className="text-primary-foreground" />
          </button>
        </div>
        
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-foreground">Alex Rivera</h3>
          <p className="text-sm text-primary font-medium">alex.rivera@devstack.pro</p>
        </div>
      </div>

      {/* 2. Form Sections */}
      <div className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">Personal Information</label>
          
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground ml-1">Full Name</label>
            <div className="relative">
              {/* FIXED: bg-slate-900/50 -> bg-muted/50 | text-white -> text-foreground */}
              <input 
                type="text" 
                defaultValue="Alex Rivera"
                className="w-full bg-muted/50 border border-border rounded-xl py-3 px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-muted-foreground ml-1">Email Address</label>
            <input 
              type="email" 
              defaultValue="alex.rivera@devstack.pro"
              className="w-full bg-muted/50 border border-border rounded-xl py-3 px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-muted-foreground ml-1">Bio</label>
            <textarea 
              rows={3}
              defaultValue="Lead Developer at CloudFlow, passionate about AI and workflow optimization."
              className="w-full bg-muted/50 border border-border rounded-xl py-3 px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
            />
          </div>
        </div>

        {/* App Preferences */}
        <div className="space-y-4 pt-4">
          <label className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">App Preferences</label>
          
          {/* FIXED: bg-slate-900/40 -> bg-card */}
          <div className="bg-card border border-border rounded-2xl p-4 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-muted rounded-lg text-muted-foreground">
                  <Moon size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Dark Mode</p>
                  <p className="text-[10px] text-muted-foreground">Sync with system settings</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-muted rounded-lg text-muted-foreground">
                  <Bell size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Push Notifications</p>
                  <p className="text-[10px] text-muted-foreground">Receive alerts for AI processing</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        {/* Save Button */}
        {/* FIXED: bg-blue-600 -> bg-primary */}
        <Button className="w-full bg-primary hover:opacity-90 text-primary-foreground font-bold py-6 rounded-xl mt-6 flex items-center gap-2 shadow-lg shadow-primary/20">
          <Save size={18} />
          Save Changes
        </Button>
      </div>
    </div>
  );
}