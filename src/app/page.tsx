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
        <div className="flex flex-col font-[800] tracking-wider m-auto items-center text-center">
          <BlurText
            text="Light Pollution"
            delay={50}
            animateBy="letters"
            direction="top"
            className="text-8xl"
          />
          <BlurText
            text="Save the Bats!"
            delay={50}
            animateBy="letters"
            direction="top"
            className="text-4xl"
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
                        Glasgow City Council is pushing for more events in the Glasgow Botanic Garden,
                        adding artificial light at night (ALAN), which raises concern about its effect
                        on the wildlife in the Garden. There is a lack of data collection with regards
                        to wildlife activity throughout the year in the city and ALAN tracking system
                        inside the garden.
                      </p>
                    </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="idea-evolution">
              <Card>
                <CardContent>
                  <p className="text-2xl font-[400]">Our idea began with deploying light sensors across the Botanic Gardens to collect
                    artificial light at night data. The first prototype was simple, displaying only sensor
                    lists and raw data tables. After receiving feedback, we refined the concept into a more
                    comprehensive monitoring system with an interactive dashboard, map integration, color‑coded
                    sensor statuses, trend graphs, and detailed sensor pages. This made the platform
                    more practical for both City Council and conservation groups.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="final-design">
              <Card>
                <CardContent>
                  <p className="text-2xl font-[400]">The final design is a high‑fidelity monitoring platform that provides both City Council and
                    conservation groups with clear insights into artificial light at night within the Botanic Gardens.
                    It features a central dashboard with live data, a map showing sensor deployment, colour‑coded sensor
                    statuses, and detailed sensor pages with graphs and notifications. This system transforms raw light
                    readings into an accessible tool that supports evidence‑based decisions while safeguarding biodiversity. </p>

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

      <section className="flex flex-row items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-slate-800 text-white transition-all duration-1000" id="team">
        <div className="flex flex-col">
          <div className="flex bg-white rounded-lg">
            <p>test</p>
          </div>
          <div className="flex bg-white rounded-lg">
            <p>test</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex bg-white rounded-lg">
            <p>test</p>
          </div>
          <div className="flex bg-white rounded-lg">
            <p>test</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex bg-white rounded-lg">
            <p>test</p>
          </div>
          <div className="flex bg-white rounded-lg">
            <p>test</p>
          </div>
        </div>
      </section>

      <Reflections />
    </Layout>
  );
}
