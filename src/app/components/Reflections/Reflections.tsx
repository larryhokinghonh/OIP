import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Reflections = () => {
  return (
    <section id="reflections" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Reflections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/weekly-pitch-videos">
            <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 text-center">
              <Image src="/file.svg" alt="Weekly Pitch Videos" width={150} height={150} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Weekly Pitch Videos</h3>
              <p>What we learnt from users and prototyping.</p>
            </div>
          </Link>
          <Link href="/daily-team-briefs">
            <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 text-center">
              <Image src="/window.svg" alt="Daily Team Briefs" width={150} height={150} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Daily Team Briefs</h3>
              <p>View our daily progress updates as a team.</p>
            </div>
          </Link>
          <Link href="/proud-page">
            <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 text-center">
              <Image src="/globe.svg" alt="Proud Page" width={150} height={150} className="mx-auto mb-4" />
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
