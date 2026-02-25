// import { create } from "zustand";

// /**
//  * File Type
//  */
// export interface ConvertedFile {
//   id: string;
//   name: string;
//   tool: string;
//   date: string;
// }

// /**
//  * Zustand Store
//  * Handles:
//  * - File history
//  * - Conversion count (analytics)
//  */
// interface FilesState {
//   files: ConvertedFile[];
//   conversions: number;

//   addFile: (file: ConvertedFile) => void;
// }

// export const useFilesStore = create<FilesState>((set) => ({
//   files: [],
//   conversions: 0,

//   addFile: (file) =>
//     set((state) => ({
//       files: [file, ...state.files],
//       conversions: state.conversions + 1,
//     })),
// }));

import { create } from "zustand";

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
  files: ConvertedFile[]; // State ka naam 'files' hai
  conversions: number;
  addFile: (file: ConvertedFile) => void; // 'file' ki type define kar di
}

export const useFilesStore = create<FilesState>((set) => ({
  files: [],
  conversions: 0,
  addFile: (file: ConvertedFile) => // Type added here
    set((state) => ({
      files: [file, ...state.files],
      conversions: state.conversions + 1,
    })),
}));