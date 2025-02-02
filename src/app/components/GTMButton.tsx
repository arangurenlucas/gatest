'use client';

import { sendGTMEvent } from "@next/third-parties/google";

export default function GTMButton() {
  return (
    <button onClick={() => sendGTMEvent('click', 'GTM Button')}>
      GTM Button
    </button>
  );
} 