import dayjs, { Dayjs } from 'dayjs';
import { create } from 'zustand'

interface ClockState {
  startTime: Dayjs | null
  baseTime: Dayjs | null
  breakTime: Dayjs | null
  finishTime: Dayjs | null
  setTime: (value: Dayjs | null) => void
  setBaseTime: (value: Dayjs | null) => void
  setBreakTime: (value: Dayjs | null) => void
  setFinishTime: () => void
}

export const useClockStore = create<ClockState>()((set) => ({
  startTime: dayjs(),
  baseTime: dayjs("07:45", "HH-mm"),
  breakTime: dayjs("07:45", "HH-mm"),
  finishTime: null,
  setTime: (value) => set((state) => ({ startTime: value })),
  setBaseTime: (value) => set((state) => ({ baseTime: value })),
  setBreakTime: (value) => set((state) => ({ breakTime: value })),
  setFinishTime: () => set((state) => ({ finishTime: state.startTime})),
}))

