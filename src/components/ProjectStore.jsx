import { create } from "zustand";

export const useProjectStore = create((set) => ({
    inViewProject: null,
    setInViewProject: (project) => set({ inViewProject: project })
  }));
  
