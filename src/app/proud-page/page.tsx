import { Layout } from "@/app/components/Layout/Layout";
import { Card } from "@/app/components/ui/Card";
import Image from 'next/image';
import React from 'react';
import { getAssetPath } from "@/lib/basePath";

const ProudPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-800 via-blue-800 to-slate-700 text-white py-16 px-4">
        {/* Hero Section */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto text-center pt-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              What We&rsquo;re Proud Of
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-200 max-w-3xl mx-auto mb-12">
              This Overseas Immersion Programme at the University of Glasgow has been more than just an academic endeavour, 
              it has been a journey of exploration, innovation, and global collaboration. Here&rsquo;s what we are proud of:
            </p>
            
            {/* Team Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-2xl">
                <Image
                  src={getAssetPath("/images/proud/team_photo.jpg")}
                  alt="Our team at the University of Glasgow"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl border border-white/20"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
            <p className="text-lg text-gray-300 italic">
              Our team during the Overseas Immersion Programme at the University of Glasgow
            </p>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              
              {/* Overseas Growth */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">🌍 Overseas Growth and Immersion</h3>
                <p className="text-gray-200 leading-relaxed">
                  From Singapore, stepping into a country out of our comfort zone and immersing ourselves in a different academic culture. 
                  We brought skills, perspective, and effort into an international setting.
                </p>
              </Card>

              {/* Environmental Impact */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-300">🌱 Real-World Environmental Impact</h3>
                <p className="text-gray-200 leading-relaxed">
                  We came up with a data-driven plan to monitor Artificial Light at Night (ALAN) at the botanic gardens, 
                  which is an issue that is possibly impacting the biodiversity and nocturnal species. Our system not only 
                  detects light levels in an area but also presents that data in a meaningful way.
                </p>
              </Card>

              {/* Technology Innovation */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">💡 Idea to Effective Technology</h3>
                <p className="text-gray-200 leading-relaxed">
                  From sensor ideas to mock-ups and dashboard development of UI/UX prototyping, transforming the idea into 
                  an actual prototype. Proving that IoT solutions can be both technically sound and meaningful.
                </p>
              </Card>

              {/* User-Centric Design */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  4
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">👥 User-centric, Purpose-driven</h3>
                <p className="text-gray-200 leading-relaxed">
                  With the involvement of Chrissy Sanachan from Friends of the Botanic Garden, we designed a solution that 
                  is intuitive and impactful. With our interactive dashboard empowers users to make data-informed decisions.
                </p>
              </Card>

              {/* Sustainable Design */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  5
                </div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-300">♻️ Sustainable Design</h3>
                <p className="text-gray-200 leading-relaxed">
                  Tackling real-world constraints of power, we implemented battery monitoring, solar panels, and power-efficient 
                  components to ensure the device is environmentally friendly.
                </p>
              </Card>

              {/* Collaboration */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  6
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pink-300">🤝 Cross-collaboration and Learning</h3>
                <p className="text-gray-200 leading-relaxed">
                  Working alongside our partner, GTAs, and professors in Glasgow has been enriching. We are proud of what 
                  we have learned and contributed to this environment.
                </p>
              </Card>

            </div>

            {/* Full-width cards */}
            <div className="mt-8 space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  7
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">🌿 Stepping Stone to Better Biodiversity</h3>
                <p className="text-gray-200 leading-relaxed">
                  This project has paved the first steps for innovation in environmental monitoring, setting out the sensors 
                  that collect the data and so that the community can make ecological decisions for the Botanic Garden.
                </p>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  8
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-300">✨ An Experience to Remember</h3>
                <p className="text-gray-200 leading-relaxed">
                  This was not just a module and project we had to go through. It was a journey where we grew technically, 
                  academically, and personally. We are proud at the same time grateful of what was built and how far we have come.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Areas for Improvement Section */}
        <section className="pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">
              Things That Could Have Been Better
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-red-900/20 backdrop-blur-sm border-red-500/30 p-6">
                <h3 className="text-xl font-bold mb-3 text-red-300">⚠️ Limited Real-World Testing</h3>
                <p className="text-gray-200 leading-relaxed">
                  The solution we came up with is just a simulation, there was no chance to deploy and observe long-term 
                  field behavior in the garden. It would have been good to deploy our prototype to see the impact.
                </p>
              </Card>

              <Card className="bg-red-900/20 backdrop-blur-sm border-red-500/30 p-6">
                <h3 className="text-xl font-bold mb-3 text-red-300">⏰ Time Constraints</h3>
                <p className="text-gray-200 leading-relaxed">
                  Due to the constraint in time of the Overseas Immersion Programme, we had to quickly ideate, which is not ideal, 
                  as we might miss features that could possibly benefit the problem statement. With this in mind, we did multiple 
                  consultations with the GTAs and have a deeper ideation process to try our best to not miss out on any possible 
                  features that are of high importance.
                </p>
              </Card>

              <Card className="bg-red-900/20 backdrop-blur-sm border-red-500/30 p-6">
                <h3 className="text-xl font-bold mb-3 text-red-300">👥 Limited Stakeholder Engagement</h3>
                <p className="text-gray-200 leading-relaxed">
                  While we talked to Chrissy Sanachan from Friends of the Botanic Garden, we only had two interactions, 
                  and the second one was postponed. It was tough to validate our solution and refine the usability with so few sessions.
                </p>
                <p className="text-gray-300 mt-3 text-sm">
                  What we did was to seek help from other like students and GTAs for opinion on our design journey.
                </p>
              </Card>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default ProudPage;
