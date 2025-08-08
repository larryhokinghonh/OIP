'use client';

import { Layout } from "@/app/components/Layout/Layout";
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
import { getAssetPath } from "@/lib/basePath";

export default function PartnerMeetingReflections() {
  return (
    <Layout>
      <section className="flex flex-col items-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white transition-all duration-1000 py-16">
        <div className="pt-16 mb-12">
          <h1 className="text-6xl font-[700] text-center">Partner Meeting Reflections</h1>
        </div>

        <div className="flex mx-8 lg:mx-64 flex-col gap-6 w-full max-w-6xl">
          <Tabs defaultValue="meeting-1">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="meeting-1">
                <p className="text-xl font-[400]">First Partner Meeting</p>
              </TabsTrigger>
              <TabsTrigger value="meeting-2">
                <p className="text-xl font-[400]">Second Partner Meeting</p>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="meeting-1">
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col space-y-6">
                    <h2 className="text-3xl font-[600] mb-4">First Partner Meeting Reflection</h2>
                    
                    <div className="space-y-4">
                      <p className="text-xl font-[400] leading-relaxed">
                        Our discussion with Chrissy got us to think deeply about the challenge of obtaining unbiased environmental data for approving events in the Glasgow Botanic Gardens.
                      </p>
                      
                      <p className="text-xl font-[400] leading-relaxed">
                        Currently, the approval process relies on environmental surveys conducted by a third-party hired by the event organisers. We reflected on how the reliance on external party reports would place the council in, accepting information that they cannot independently verify. A notable example is the GlasGLOW bat monitoring survey by Applied Ecology Ltd. The report describes methods that were used to track bat activities and the consideration for choosing the locations. While these insights are valuable, they are still produced by an independent organisation with no accountability to the council.
                      </p>
                      
                      <p className="text-xl font-[400] leading-relaxed">
                        This led us to reflect on the larger issue which, without their own reliable baseline data, the council cannot validate third-party findings. Therefore from our conversation with Chrissy, we were made aware that our project should also focus on collecting, storing and analysing data that the council can use independently.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="meeting-2">
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col space-y-6">
                    <h2 className="text-3xl font-[600] mb-4">Second Partner Meeting Reflection</h2>
                    
                    <div className="space-y-4">
                      <p className="text-xl font-[400] leading-relaxed">
                        In our second meeting with Chrissy, we presented our project plans and the poster. She reviewed the materials and indicated that everything looked fine, offering no significant comments or changes.
                      </p>
                      
                      <p className="text-xl font-[400] leading-relaxed">
                        While the absence of detailed feedback was reassuring and suggested we are on the right track, it also made us reflect on whether there might be areas for improvement that were not explicitly mentioned.
                      </p>
                      
                      <div className="flex justify-center mt-6">
                        <img 
                          src={getAssetPath("/images/reflections/team_call.jpg")} 
                          alt="Team call with partner Chrissy during second meeting"
                          className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
