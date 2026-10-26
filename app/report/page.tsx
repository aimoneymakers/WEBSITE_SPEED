import type { Metadata } from 'next'
import { Suspense } from 'react'
import ReportView from './ReportView'

export const metadata: Metadata = { title: 'Your PageSpeed Report', robots: { index: false, follow: false } }

export default function ReportPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#0b0f1a] text-white flex items-center justify-center"><p className="text-white/50 text-sm">Loading report…</p></main>}>
      <ReportView />
    </Suspense>
  )
}
