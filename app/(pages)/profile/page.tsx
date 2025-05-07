'use client';

import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { UserProfile } from '@clerk/nextjs';
import React from 'react';

function Profile() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-black transition-colors">
      {/* Fullscreen background grid */}
      <FlickeringGrid
        className="absolute inset-0 z-0 w-full h-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        // Removed fixed width/height
      />

      {/* Profile content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 mt-20 mb-20">
        <div>
          <UserProfile routing='hash'
            appearance={{
              elements: {
                rootBox: 'w-full',
                card: 'bg-transparent shadow-none',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
