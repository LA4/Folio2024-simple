'use client'
import React, { use, useState } from 'react'
import Link from 'next/link'

export default function Navigation({children}: Readonly<{children: React.ReactNode;}>) {
  const [activeMenu, setActiveMenu] = useState<Boolean>(false)
  return (
    <main>
    {activeMenu && <menu >
        <Link href="/home">Acceuil</Link> 
        <Link href="/cv">Acceuil</Link> 
        <Link href="/Illustration">Acceuil</Link> 
        <span>Close navigation panel</span>
    </menu>}
    {children}
    </main>
  )

}
