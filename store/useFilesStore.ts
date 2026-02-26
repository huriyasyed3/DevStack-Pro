import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/** * ConvertedFile Interface
 */
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
  addFile: (file: ConvertedFile) => void;
  removeFile: (id: string) => void; // Single file delete karne ke liye
  clearHistory: () => void;      // Poori history saaf karne ke liye
}

export const useFilesStore = create<FilesState>()(
  persist(
    (set) => ({
      files: [],
      conversions: 0,

      // Nayi file add karna (Top par show hogi)
      addFile: (file: ConvertedFile) =>
        set((state) => ({
          files: [file, ...state.files],
          conversions: state.conversions + 1,
        })),

      // Specific file remove karna
      removeFile: (id: string) =>
        set((state) => ({
          files: state.files.filter((f) => f.id !== id),
        })),

      // Poora data clear karna
      clearHistory: () => set({ files: [] }),
    }),
    {
      name: "devstack-history-storage", // LocalStorage mein is naam se save hoga
      storage: createJSONStorage(() => localStorage),
    }
  )
);