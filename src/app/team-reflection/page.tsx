'use client';

import { Layout } from "@/app/components/Layout/Layout";
import {
  Card,
  CardContent,
} from "@/app/components/ui/Card"

export default function TeamReflection() {
  return (
    <Layout>
      <section className="flex flex-col items-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white transition-all duration-1000 py-16">
        <div className="pt-16 mb-12">
          <h1 className="text-6xl font-[700] text-center">Team Reflection</h1>
        </div>

        <div className="flex mx-8 lg:mx-64 flex-col gap-6 w-full max-w-6xl">
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col space-y-6">
                <div className="space-y-4">
                  <p className="text-xl font-[400] leading-relaxed">
                    Team 5 is proud to have developed a solution framework that effectively address the light pollution issue raised by our stakeholder from the Friends of Glasgow Botanic Gardens, Chrissy Sanachan.
                  </p>
                  
                  <p className="text-xl font-[400] leading-relaxed">
                    From our initial meeting with her, we could sense her frustration as she explained the challenges the Gardens were facing. Tackling the light pollution problem was an eye-opening experience for the entire team. It was an unfamiliar issue for us, but also an interesting and impactful one. We knew we had to fully understand the problem at hand before we could begin designing meaningful solutions.
                  </p>
                  
                  <p className="text-xl font-[400] leading-relaxed">
                    Through research and discussions, we learned that light pollution is not just about excessive brightness, but also it has a direct impact on the bats and wildlife.
                  </p>
                  
                  <p className="text-xl font-[400] leading-relaxed">
                    Collaborating as a team meant drawing on each member&apos;s strengths. Josh and Larry focused on technical feasibility, while Teren, Marcus and Kenny on creative design, and Li Qin on understanding community needs. We also discovered the importance of listening carefully to our stakeholder and translating her concerns into actionable steps, through our meetings with her.
                  </p>
                  
                  <p className="text-xl font-[400] leading-relaxed">
                    One of the most valuable lessons we gained from this project was the importance of balancing innovation with practicality. While it was tempting to propose ambitious ideas, we had to ensure that our solutions could be realistically implemented within the Gardens&apos; context and budget, which was mentioned by our stakeholder.
                  </p>
                  
                  <p className="text-xl font-[400] leading-relaxed">
                    Overall, this project not only improved our problem-solving skills but also gave us a deeper appreciation for environmental stewardship. We leave the experience more aware of the hidden impacts of human activity and more confident in our ability to address complex, unfamiliar challenges.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
