"use client"

import { sendGAEvent } from "@next/third-parties/google";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function About() {
    const pathname = usePathname();

    useEffect(() => {
        sendGAEvent('event', 'page_view', { value: pathname })
    }, [pathname])

  return (
    <div>
        <h1>About</h1>

        <Link href="/">Home</Link>
    </div>

  )

}

export default About;