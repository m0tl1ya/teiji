// "use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import TitleBar from '@/components/TitleBar';
import StartTimeInput from '@/components/StartTimeInput';
import BaseTimeInput from '@/components/BaseTimeInput';
import BreakTimeInput from '@/components/BreakTimeInput';
import FinishTimeLabel from '@/components/FinishTimeLabel';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <TitleBar />
      <StartTimeInput />
      <BaseTimeInput />
      <BreakTimeInput />
      <FinishTimeLabel />
      <div>

      </div>
    </main>
  )
}
