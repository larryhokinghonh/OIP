'use client';

import BlurText from "@/app/components/BlurTextEffect/BlurTextEffect";
import { Layout } from "@/app/components/Layout/Layout";
import { ImageZoom } from "@/app/components/ImageZoom/ImageZoom"
import Reflections from "@/app/components/Reflections/Reflections";
import {
  Card,
  CardContent,
} from "@/app/components/ui/Card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/Tabs"


export default function Home() {
  return (
    <Layout>
      <section className="flex justify-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white transition-all duration-1000">
        <div className="flex flex-col font-[800] tracking-wider m-auto items-center text-center w-full max-w-none px-4 sm:px-8 lg:px-16">
          <BlurText
            text="Team 5"
            delay={50}
            animateBy="letters"
            direction="top"
            className="text-3xl sm:text-4xl mb-4"
          />
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            <BlurText
              text="Let the Night Be Dark Again:"
              delay={50}
              animateBy="letters"
              direction="top"
              className="block"
            />
            <BlurText
              text="Protecting our Bats from Light Pollution"
              delay={50}
              animateBy="letters"
              direction="top"
              className="block"
            />
          </div>
          <BlurText
            text="Saving the bats in Glasgow Botanic Garden through sensors. Discover how our team designed a solution towards detecting light pollution."
            delay={50}
            animateBy="letters"
            direction="top"
            className="text-lg sm:text-xl md:text-2xl font-[400] leading-relaxed"
          />
        </div>
      </section>

      <section className="flex flex-col space-y-8 items-center min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-gray-800 text-white transition-all duration-1000" id="design-journey">
        <div className="pt-16">
          <p className="text-6xl font-[700]">Design Journey</p>
        </div>

        <div className="flex mx-64 flex-col gap-6">
          <Tabs defaultValue="problem-statement">
            <TabsList>
              <TabsTrigger value="problem-statement"><p className="text-2xl font-[400]">Problem Statement</p></TabsTrigger>
              <TabsTrigger value="idea-evolution"><p className="text-2xl font-[400]">Idea Evolution</p></TabsTrigger>
              <TabsTrigger value="final-design"><p className="text-2xl font-[400]">Final Design</p></TabsTrigger>            
            </TabsList>
            <TabsContent value="problem-statement">
              <Card>
                <CardContent>
                    <div className="flex flex-col">
                      <p className="text-2xl font-[400]">
                        Glasgow City Council is pushing for more events in the Glasgow Botanic Garden, increasing artificial light at night (ALAN) and raising concerns about its impact on wildlife. However, there is no existing system to monitor ALAN levels within the park or track its ecological effects over time.
                      </p>
                      <br />
                      <p className="text-2xl font-[400] font-semibold">
                        How might we monitor artificial light at night in the Botanic Gardens to support data-driven decisions that protect urban biodiversity?
                      </p>
                    </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="idea-evolution">
              <Card>
                <CardContent>
                  <p className="text-2xl font-[400]">Our idea began with deploying simple light sensors across the Botanic Gardens to measure ALAN. The first prototype was basic, consisting of sensor lists and raw data tables.</p>
                  <br />
                  <p className="text-2xl font-[400]">After receiving feedback, we realized that our initial sensors could only detect direct (LOS) light, missing much of the ambient light pollution affecting nocturnal wildlife. This led to a series of hardware iterations:</p>
                  <br />
                  <ul className="text-2xl font-[400] list-disc list-inside space-y-2">
                    <li>We explored adding Sky Quality Meters (SQMs) and spectral sensors to detect skyglow and color spectrum.</li>
                    <li>We then discovered that simply orienting sensors upward improved indirect light detection.</li>
                    <li>Later, we added a clear dome for weather protection, but realized it limited the sensor&apos;s field of view.</li>
                    <li>Finally, we adopted a diffuser dome, which scatters light from all directions onto the sensor surface, enabling more realistic NLOS (non-line-of-sight) ALAN detection.</li>
                  </ul>
                  <br />
                  <p className="text-2xl font-[400]">In parallel, we improved the software interface into a more comprehensive monitoring platform with an interactive dashboard, map integration, color‑coded sensor statuses, trend graphs, and detailed sensor pages — making the system practical for both City Council and conservation groups.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="final-design">
              <Card>
                <CardContent>
                  <p className="text-2xl font-[400]">The final design is a high‑fidelity monitoring platform that provides clear, real-time insights into ALAN conditions within the Botanic Gardens.</p>
                  <br />
                  <p className="text-2xl font-[400]">On the hardware side, our deployed sensors include TSL2591 light sensors housed in weatherproof diffuser domes to capture ambient light from all angles. Select nodes are equipped with Sky Quality Meters and spectrometers to measure sky brightness and spectral composition respectively.</p>
                  <br />
                  <p className="text-2xl font-[400]">On the software side, the system features:</p>
                  <br />
                  <ul className="text-2xl font-[400] list-disc list-inside space-y-2">
                    <li>A central dashboard with live data</li>
                    <li>A map showing real-time sensor deployment</li>
                    <li>Colour‑coded sensor statuses for quick assessment</li>
                    <li>Detailed sensor pages with historical trend graphs and threshold-based notifications</li>
                  </ul>
                  <br />
                  <p className="text-2xl font-[400]">This integrated system transforms raw light readings into an accessible, evidence-based tool that supports informed policy decisions while helping to safeguard biodiversity in the Gardens.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="flex justify-center min-h-screen bg-gradient-to-br from-gray-800 via-blue-800 to-slate-700 text-white transition-all duration-1000" id="poster">
        <div className="flex flex-row space-x-16 items-center mx-60">
          <div className="">
            <p className="text-6xl font-[700]">Our Poster</p>
          </div>

          <div className="relative">
            <ImageZoom
              src="/poster.png"
              alt="Conference Poster on Light Pollution"
            />
          </div>
        </div>
      </section>

      <Reflections />

      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-slate-800 text-white transition-all duration-1000 py-16" id="team">
        <div className="mb-12">
          <h2 className="text-6xl font-[700] text-center">Meet Our Team</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
          {/* Josh */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20">
              <img 
                src="/images/team/josh.jpg" 
                alt="Josh" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-[600] mb-2">Josh</h3>
            <a 
              href="https://www.linkedin.com/in/henndro-joshua/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 text-blue-300 hover:text-blue-200 hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Kenny */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20">
              <img 
                src="/images/team/kenny.jpg" 
                alt="Kenny" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-[600] mb-2">Kenny</h3>
            <a 
              href="https://www.linkedin.com/in/kenny-low-wl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 text-blue-300 hover:text-blue-200 hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Larry */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20">
              <img 
                src="/images/team/larry.jpg" 
                alt="Larry" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-[600] mb-2">Larry</h3>
            <a 
              href="https://www.linkedin.com/in/larryhkh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 text-blue-300 hover:text-blue-200 hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Liqin */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20">
              <img 
                src="/images/team/liqin.jpg" 
                alt="Liqin" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-[600] mb-2">Liqin</h3>
            <a 
              href="https://www.linkedin.com/in/tung-li-qin/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 text-blue-300 hover:text-blue-200 hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Marcus */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20">
              <img 
                src="/images/team/marcus.jpg" 
                alt="Marcus" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-[600] mb-2">Marcus</h3>
            <a 
              href="https://www.linkedin.com/in/chuakymarcus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 text-blue-300 hover:text-blue-200 hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Teren */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20">
              <img 
                src="/images/team/teren.jpg" 
                alt="Teren" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-[600] mb-2">Teren</h3>
            <a 
              href="https://www.linkedin.com/in/teren-tan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 text-blue-300 hover:text-blue-200 hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
