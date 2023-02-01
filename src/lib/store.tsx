"use client";
import dayjs, { Dayjs } from 'dayjs';
import { create } from 'zustand'

interface ClockState {
  startTime: any | null
  baseTime: any | null
  breakTime: any | null
  finishTime: any | null
  setTime: (value: any | null) => void
  setBaseTime: (value: any | null) => void
  setBreakTime: (value: any | null) => void
  setFinishTime: () => void
}

export const useClockStore = create<ClockState>()((set) => ({
  startTime: null,
  baseTime: "07:45",
  breakTime: "01:00",
  finishTime: null,
  setTime: (value) => set(() => ({ startTime: value })),
  setBaseTime: (value) => set(() => ({ baseTime: value })),
  setBreakTime: (value) => set(() => ({ breakTime: value })),
  setFinishTime: () => set((state) => ({ finishTime: state.startTime})),
}))

