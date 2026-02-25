"use client";

import { useState } from "react";
import { Camera, Mail, User, BookOpen, Moon, Bell, Save } from "lucide-react";
import { Switch } from "@/components/ui/switch"; // ShadCN component
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      {/* 1. Header & Avatar Section */}
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-xl font-bold text-white mb-8">User Settings</h2>
        
        <div className="relative group">
          <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-blue-600/30">
            <img 
              src="/avatar.jpg" // Aapka profile image path
              alt="Alex Rivera"
              className="h-full w-full object-cover"
            />
          </div>
          <button className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full border-2 border-[#050a15] hover:bg-blue-500 transition-colors">
            <Camera size={14} className="text-white" />
          </button>
        </div>
        
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-white">Alex Rivera</h3>
          <p className="text-sm text-blue-500 font-medium">alex.rivera@devstack.pro</p>
        </div>
      </div>

      {/* 2. Form Sections */}
      <div className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Personal Information</label>
          
          <div className="space-y-1">
            <label className="text-xs text-slate-400 ml-1">Full Name</label>
            <div className="relative">
              <input 
                type="text" 
                defaultValue="Alex Rivera"
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-blue-600 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-400 ml-1">Email Address</label>
            <input 
              type="email" 
              defaultValue="alex.rivera@devstack.pro"
              className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-blue-600 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-400 ml-1">Bio</label>
            <textarea 
              rows={3}
              defaultValue="Lead Developer at CloudFlow, passionate about AI and workflow optimization."
              className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-blue-600 transition-colors resize-none"
            />
          </div>
        </div>

        {/* App Preferences */}
        <div className="space-y-4 pt-4">
          <label className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">App Preferences</label>
          
          <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-lg text-slate-400">
                  <Moon size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Dark Mode</p>
                  <p className="text-[10px] text-slate-500">Sync with system settings</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-lg text-slate-400">
                  <Bell size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Push Notifications</p>
                  <p className="text-[10px] text-slate-500">Receive alerts for AI processing</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-6 rounded-xl mt-6 flex items-center gap-2">
          <Save size={18} />
          Save Changes
        </Button>
      </div>
    </div>
  );
}