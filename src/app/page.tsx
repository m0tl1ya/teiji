// "use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import TitleBar from '@/components/TitleBar';
import StartTimePicker from '@/components/StartTimePicker';
import BaseTimePicker from '@/components/BaseTimePicker';
import BreakTimePicker from '@/components/BreakTimePicker';
import FinishTimeLabel from '@/components/FinishTimeLabel';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <TitleBar />
      <StartTimePicker />
      <BaseTimePicker />
      <BreakTimePicker />
      <FinishTimeLabel />
      <div>

      </div>
    </main>
  )
}
