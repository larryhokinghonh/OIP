import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/lib/basePath';

const Reflections = () => {
  return (
    <section id="reflections" className="py-20 min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-gray-900 text-white transition-all duration-1000 flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12">Reflections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/weekly-pitch-videos">
            <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 text-center text-gray-800 transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4">
                <Image src={getAssetPath("/video-icon.svg")} alt="Weekly Pitch Videos" width={96} height={96} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2">Weekly Pitch Videos</h3>
              <p>What we learnt from users and prototyping.</p>
            </div>
          </Link>
          <Link href="/daily-team-briefs">
            <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 text-center text-gray-800 transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4">
                <Image src={getAssetPath("/daily-briefs-icon.svg")} alt="Daily Team Briefs" width={96} height={96} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2">Daily Team Briefs</h3>
              <p>View our daily progress updates as a team.</p>
            </div>
          </Link>
          <Link href="/proud-page">
            <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 text-center text-gray-800 transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4">
                <Image src={getAssetPath("/proud-icon.svg")} alt="Proud Page" width={96} height={96} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proud Page</h3>
              <p>Why we are proud of what we have achieved during this project.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reflections;
