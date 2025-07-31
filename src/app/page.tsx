'use client';

import Image from "next/image";
import Link from "next/link"
import BlurText from "@/app/components/BlurTextEffect/BlurTextEffect";
import { Navbar } from "@/app/components/Navbar/Navbar";
import { Button } from "@/app/components/ui/Button"
import { ImageZoom } from "@/app/components/ImageZoom/ImageZoom"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/Card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/Tabs"


export default function Home() {
  return (
    <>
      <section className="flex bg-[#1A2A80] justify-center h-screen">
        <div>
          <Navbar />
        </div>

        <div className="flex flex-col text-white font-[800] tracking-wider m-auto items-center text-center">
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

      <section className="flex flex-col bg-[#3B38A0] space-y-8 items-center h-screen" id="design-journey">
        <div className="pt-16">
          <p className="text-white text-6xl font-[700]">Design Journey</p>
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
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="final-design">
              <Card>
                <CardContent>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="flex bg-[#7A85C1] justify-center h-screen" id="poster">
        <div className="flex flex-row space-x-16 items-center mx-60">
          <div className="">
            <p className="text-white text-6xl font-[700]">Our Poster</p>
          </div>

          <div className="relative">
            <ImageZoom
              src="/poster.png"
              alt="Conference Poster on Light Pollution"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-row bg-[#B2B0E8] items-center justify-center h-screen" id="team">
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
    </>
  );
}
