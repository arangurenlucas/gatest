'use client';

import { sendGAEvent } from "@next/third-parties/google";

export default function AnalyticsButton() {
  return (
    <button onClick={() => sendGAEvent('event', 'click', { value: '/about' })}>
      Click
    </button>
  );
} 