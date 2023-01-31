import dayjs, { Dayjs } from 'dayjs';
import { create } from 'zustand'

interface ClockState {
  startTime: Dayjs | null
  baseTime: Dayjs | null
  setTime: (value: Dayjs | null) => void
  setBreakTime: (value: Dayjs | null) => void
}

export const useClockStore = create<ClockState>()((set) => ({
  startTime: dayjs(),
  baseTime: dayjs('01:00'),
  setTime: (value) => set((state) => ({ startTime: value })),
  setBreakTime: (value) => set((state) => ({ baseTime: value })),
}))

