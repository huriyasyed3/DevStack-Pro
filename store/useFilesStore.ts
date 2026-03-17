import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// 1. Role Type define karein (Part 4 requirement ke liye)
export type UserRole = "FREE" | "PRO" | "ADMIN";

export interface ConvertedFile {
  id: string;
  name: string;
  tool: string;
  date: string;
  size: string;
  status: "SUCCESS" | "PROCESSING" | "FAILED";
}

interface FilesState {
  files: ConvertedFile[];
  conversions: number;
  role: UserRole; // 2. Role State add ki
  setRole: (role: UserRole) => void; // 3. Role update karne ka function
  addFile: (file: ConvertedFile) => void;
  removeFile: (id: string) => void;
  clearHistory: () => void;
}

export const useFilesStore = create<FilesState>()(
  persist(
    (set) => ({
      files: [],
      conversions: 0,
      role: "FREE", // 4. Default role 'FREE' rakha

      // Role change karne ka logic
      setRole: (newRole: UserRole) => set({ role: newRole }),

      addFile: (file: ConvertedFile) =>
        set((state) => ({
          files: [file, ...state.files],
          conversions: state.conversions + 1,
        })),

      removeFile: (id: string) =>
        set((state) => ({
          files: state.files.filter((f) => f.id !== id),
        })),

      clearHistory: () => set({ files: [] }),
    }),
    {
      name: "devstack-history-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);