import {create} from "zustand";

interface TestState {
    currentStep: number;
    answers: Record<number, string>;
    setAnswer: (step: number, answer: string) => void;
    goNext: () => void;
    goPrev: () => void;
    reset: () => void;
}

export const useTestStore = create<TestState>((set) => ({
    currentStep: 0,
    answers: {},
    setAnswer: (step, answer) =>
        set((state) => ({
            answers: { ...state.answers, [step]: answer },
        })),
    goNext: () => set((state) => ({ currentStep: state.currentStep + 1 })),
    goPrev: () => set((state) => ({ currentStep: Math.max(0, state.currentStep - 1 )})),
    reset: () => set(({ currentStep: 0, answers: {} })),
}));