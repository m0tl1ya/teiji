import dayjs, { Dayjs } from 'dayjs';
import { create } from 'zustand'

interface ClockState {
  startTime: Dayjs | null
  breakTime: Dayjs | null
  setTime: (value: Dayjs | null) => void
  setBreakTime: (value: Dayjs | null) => void
}

export const useClockStore = create<ClockState>()((set) => ({
  startTime: null,
  breakTime: dayjs('01:00'),
  setTime: (value) => set((state) => ({ startTime: value })),
  setBreakTime: (value) => set((state) => ({ breakTime: value })),
}))

