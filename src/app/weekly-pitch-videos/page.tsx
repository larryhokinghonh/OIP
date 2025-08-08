import { Layout } from "@/app/components/Layout/Layout";
import React from 'react';

const WeeklyPitchVideosPage = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 pt-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Weekly Pitch Videos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our weekly pitch presentations showcasing the progress and insights from the Glasgow Botanical Gardens ALAN project.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Week 1 Video */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2 text-blue-300">Week 1</h2>
                <p className="text-gray-300">Initial project presentation and research findings</p>
              </div>
              
              <div className="aspect-video bg-black/30 rounded-lg border border-white/20 overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YiCJtCtht90"
                  title="Week 1 Pitch Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>Date: Week 1</p>
              </div>
            </div>

            {/* Week 2 Video */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2 text-purple-300">Week 2</h2>
                <p className="text-gray-300">Progress update and design development</p>
              </div>
              
              <div className="aspect-video bg-black/30 rounded-lg border border-white/20 overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/pGY0QrDpOYc"
                  title="Week 2 Pitch Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>Date: Week 2</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WeeklyPitchVideosPage;
