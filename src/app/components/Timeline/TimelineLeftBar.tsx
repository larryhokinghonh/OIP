'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/app/components/ui/Card';
import { ImageCarousel } from '@/app/components/ImageCarousel/ImageCarousel';
import { ImageViewer } from '@/app/components/ImageViewer/ImageViewer';
import { getAssetPath } from '@/lib/basePath';

interface TimelineEntry {
  id: number;
  date: string;
  title: string;
  content: string; // Rich content with markdown-like formatting
  category: string;
  images?: string[]; // Optional array of image URLs
}

const timelineData: TimelineEntry[] = [
  {
    id: 1,
    date: "July 22nd",
    title: "Project Requirement Gathering",
    content: `The day began with a group meeting, where we discussed the project requirements and established the tasks to be completed for each part. After a fruitful discussion with Chrissy, we gathered information on the current state of light pollution and the concerns that they have regarding it.

One of the biggest takeaways was that the Glasgow City Centre does not have a way to collect their own data on light pollution in the Botanic Garden. Furthermore when approving events in the Botanic Garden, they rely on the environment report by a third-party organisation hired by the organiser of the event to evaluate and approve events. This insight made us think about how we can enable the Glasgow City Centre to gather their own data, as the report submitted by the organiser might be biased.

Moving forward, to enable effective communication when we are not in labs, we created communication channels using Telegram, Github and Canva. These platforms ensure that we are able to update each other on our progress, as well as share and collaborate remotely.`,
    category: "Week 1"
  },
  {
    id: 2,
    date: "July 23rd",
    title: "Task Allocation and Research",
    content: `Following up from yesterday's discussion, we first allocated tasks for every member in the group, and also assigned roles and responsibilities for every member for the project.

**The current project responsibilities are as follows:**

1. Figma Design - The design of the Figma will be handled by Teren, Marcus and Li Qin.
2. Slides and Video - The slides and video will be handled by Kenny, Larry and Josh.
3. Website - The Website will be handled by Larry and Josh.
4. Poster - The poster design will be handled by Kenny, Tern, Marcus and Li Qin.

Additionally, we started to conduct research on existing solutions for light pollution. We discovered that in the Netherlands, they have bat-friendly LED street lights from 2018 onwards. These street lights not only emit light for the residents, it also does not affect the bat's natural senses and rhythms. Thus, making roads and pavements safer, while being safe for the bats at night. Using these existing solutions, we formulate our ideas overnight and look to the next day to discuss our ideas for our solution.`,
    category: "Week 1"
  },
  {
    id: 3,
    date: "July 24th",
    title: "Ideation 2",
    content: `Today, we started to conduct research about sensors to detect light pollution. To start, we looked through the Bat Monitoring Survey Report from Applied Ecology LTD about the impact of GlasGlow events on local bat activity.

The report provided some insights into how Artificial Light At Night (ALAN) may affect bats activity. We mainly focused on the sensor placement and coverage of the light sensors used in the study. We discussed potential improvements to their sensor positioning in order to obtain a more comprehensive light measurement. The report also outlined several limitations in their findings, particularly in data collection and coverage, which we aim to address in our project. We decided to improve on their solution and use their methods as a baseline for our solution.`,
    category: "Week 1",
    images: [
      getAssetPath("/images/daily-briefs/July_24.png"),
    ]
  },
  {
    id: 4,
    date: "July 25th",
    title: "1st Video Pitch Submission",
    content: `Today was a key milestone for the project, the first deliverable of the project, a project pitch. Inside the pitch we focused on the problem statement, our initial concept, and the value of our solution. We also discussed who the presenters will be, selecting those assigned to the respective sections.`,
    category: "Week 1"
  },
  {
    id: 5,
    date: "July 28th",
    title: "Feedback Review",
    content: `We reviewed the feedback provided for the video submission, which highlighted our strong problem framing and examples. However, it also pointed out our lack of design requisitions and reflections. We've discussed it among the group on the improvements to be made for the second submission.

We also began exploring affordable alternatives for light detection sensors, mainly of the shelf and microcontroller components. These discussions helped us align our project goals with the problem statement and help with the next step of the project.`,
    category: "Week 2"
  },
  {
    id: 6,
    date: "July 29th",
    title: "LoFi Creation",
    content: `The process of LoFi design for the dashboard, based on the requirement gathering phase, stakeholders mentioned that they wanted a way to track ALAN as there is possible intrusion to the biodiversity of bats and other wildlife due to it. The most important features and user goals would be to show which sensors are detecting ALAN and the location and the details on the hardware for use case longevity.

We started with user stories:
• "As a member of Friend, I want to get notifications on ALAN intrusion of biodiversity in the Garden."
• "As a member of Friend, I want to know the exact location of the sensors and monitor areas, so I can report potential risks to biodiversity"
• "As a Technician, I want to receive notifications for low battery or offline sensors so I can promptly respond to the scenario."
• "As a field researcher, I want to compare ALAN readings of all sensors between a data range to find ALAN impacted areas."

At this stage we made use of simple sketches, establishing the flow and iterated quickly amongst ourselves getting feedback within the team and the TAs and iterating through designs to get a clearer design plan. In our case, in our dashboard design we test out flows on how stakeholders would interact with the notifications, sensors, map view, and overview.`,
    category: "Week 2",
    images: [
      getAssetPath("/images/daily-briefs/29_1.jpg"),
      getAssetPath("/images/daily-briefs/29_2.jpg"),
      getAssetPath("/images/daily-briefs/29_3.jpg"),
      getAssetPath("/images/daily-briefs/29_4.jpg"),
      getAssetPath("/images/daily-briefs/29_5.jpg"),
    ]
  },
  {
    id: 7,
    date: "July 30th",
    title: "Mid-Fidelity Creation",
    content: `We continued to refine our mid-fidelity prototype on Figma based on previous feedback and what was taught during the lecture on integrative thinking, focusing on improving the dashboard layouts with data visualisation.

**The main considerations for integrative thinking were:**

• **Live Monitoring vs Historical Insights**
  1. Users want live data to be notified of ALAN whilst researchers want historical insights to understand the trends and how it affects the biodiversity in the garden.
  2. The resolution which we implemented is to have a live lumen reading on each sensor and have a line graph to show the historical data of the lumen reading.
• **Simplicity vs Detailed**
  1. Simple users just want to monitor the overview with a simple interface, whilst more technical users might want more detailed and sensor-specific data.
  2. The resolution we implemented is to have layer information where the dashboard gives an overview, while clicking into each sensor expanding the detailed data such as map location, ALAN logs, and battery trends.
• **Alert Visibility vs Notification Overload**
  1. Users would want to be alerted by high priority issues, too many notifications can be distracting.
  2. We categorize alerts and display them in dedicated notification panels, balancing the urgency with readability.
  

  We also started planning the content for the second video pitch submission, ensuring the feedback given in the first submission is properly addressed. We were supposed to have a meeting with the stakeholder this week to check in if our proposed solution would address the needs of the stakeholder but it was postponed to the next week, leaving us unsure whether to proceed with the design changes or put it on hold till the meeting and feedback was gathered. We needed the feedback as content in the weekly reflection video submission based on the grading rubrics`,
    category: "Week 2",
    images: [
      getAssetPath("/images/daily-briefs/30_1.jpg"),
      getAssetPath("/images/daily-briefs/30_2.jpg")
    ]
  },
  {
    id: 8,
    date: "July 31st",
    title: "High Fi Creation and Think Aloud User Testing",
    content: `We clarified the expectations for our second video submission and were told that we could include any feedback we received so far, including from other people we interviewed. This gave us more confidence in presenting our current progress without waiting on the actual stakeholder's input.

We got our schoolmates to do a think aloud using our Mid-fi prototype and based on the observation of the think aloud, we made changes and developed the high-fi product. We finalised our high-fidelity prototype, equipping it with more detailed static elements. We also expanded the content of the website, adding clearer visual elements like graphs, colour coding, and more information to improve data presentation.
`,
    category: "Week 2",
    images: [
      getAssetPath("/images/daily-briefs/31_1.jpg"),
      getAssetPath("/images/daily-briefs/31_2.jpg"),
      getAssetPath("/images/daily-briefs/31_3.jpg"),
      getAssetPath("/images/daily-briefs/31_4.jpg")
    ]
  },
  {
    id: 9,
    date: "August 1st",
    title: "Pitch 2 Submission",
    content: `We submitted our second video pitch, focusing on the feedback received from the first. This time, we included both reflections and prototypes in different stages to better showcase our design evolution process and direction.`,
    category: "Week 2"
  },
  {
    id: 10,
    date: "August 4th",
    title: "Finalizing content",
    content: `After coming up with the barebone of the website, we began to add content to the website, which includes the background, problem, visual assets, prototype, solution and reflection. Each one of us contributed to the text of different sections which we reviewed together for clarity and consistency. Initially, we struggled with arranging our contents. We wanted to structure them in a way that it is easy for viewers to understand the flow of our whole journey, from Project Requirement to our solution. Seeking advice from our Technical Advisers and peers, we managed to pick up a few ideas of how to arrange our contents, leading to a smooth flow for any viewers to understand our journey. As we thought of the flow, we also prepared for the next day, where we have to finalize our poster for submission.`,
    category: "Week 3"
  },
  {
    id: 11,
    date: "August 5th",
    title: "Refining poster",
    content: `We shifted our focus to polishing the poster as the deadline is today. Wanting feedback, we consulted our Technical Advisor for their advice and see if there are areas for improvement. Our Technical Advisor told us that everything is generally okay but gave a few pointers for the poster, which are to refine the layout, color choice and correct our content in two sections due to similarities. After receiving the valuable feedback, we immediately went ahead and edited our poster according to the feedback as we still had to finish up our website for the next two days before submission on the Friday.`,
    category: "Week 3"
  },
  {
    id: 12,
    date: "August 6th",
    title: "Website Design",
    content: `Today, we started implementing the design and user experience of the website. For the design, we thought that of having a simple yet clean experience that will be able to showcase our thoughts and design thinking processes.\n For the user experience, we wanted to make a seamless journey for the users to view our project. Due to our past experience of creating websites and mobile applications before, we decided to pool together our knowledge. We made sure that all the buttons are intuitive, knowing where to go next. For example, we made use of common symbols and icons used in the majority of websites. We also made sure that every element is of the correct size, the easiest to view while still making the website aesthetic. After completing our website, we decided to do a user testing for the website tomorrow.`,
    category: "Week 3"
  },
  {
    id: 13,
    date: "August 7th",
    title: "User testing for website",
    content: `After achieving every requirement needed, today was about refining the website's content to ensure visual consistency between the poster and website. We started looking at the overall design of the website, editing any flaws in the sizing, colors and structure. Afterwards, we had a team discussion while going through the website, putting ourselves in place of a viewer, seeing if the flow made sense and if the user experience was satisfactory. Other than ourselves, we let our peers test our website too, to ensure a non-bias point of view and give their honest feedback, allowing our team to adjust accordingly. As we finish our website, we await the next day, where we have to showcase our project. We are excited!`,
    category: "Week 3"
  }
];

const getCategoryColor = (category: string) => {
  const colors = {
    "Week 1": "bg-blue-500",
    "Week 2": "bg-green-500",
    "Week 3": "bg-purple-500"
  };
  return colors[category as keyof typeof colors] || "bg-gray-500";
};

// Simple markdown-like content parser
const parseContent = (content: string) => {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let currentParagraph: string[] = [];
  let listItems: string[] = [];
  let listType: 'bullet' | 'numbered' | null = null;
  let listDepth = 0;

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ').trim();
      if (text) {
        // Handle bold text
        const parts = text.split(/(\*\*.*?\*\*)/g);
        elements.push(
          <p key={elements.length} className="mb-3">
            {parts.map((part, index) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index} className="font-semibold text-blue-50">{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </p>
        );
      }
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      const ListComponent = listType === 'numbered' ? 'ol' : 'ul';
      const listClass = listType === 'numbered' 
        ? 'list-decimal list-inside space-y-1 ml-4' 
        : 'list-disc list-inside space-y-1 ml-4';
      
      elements.push(
        <ListComponent key={elements.length} className={listClass}>
          {listItems.map((item, index) => {
            // Handle nested items (indented with spaces)
            const indent = item.match(/^(\s*)/)?.[1]?.length || 0;
            const cleanItem = item.trim();
            const marginClass = indent > 0 ? `ml-${Math.min(indent / 2, 8)}` : '';
            
            // Handle bold text in list items
            const parts = cleanItem.split(/(\*\*.*?\*\*)/g);
            return (
              <li key={index} className={`text-blue-100 ${marginClass}`}>
                {parts.map((part, partIndex) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={partIndex} className="font-semibold text-blue-50">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </li>
            );
          })}
        </ListComponent>
      );
      listItems = [];
      listType = null;
      listDepth = 0;
    }
  };

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    
    // Empty line - flush current paragraph
    if (!trimmedLine) {
      flushParagraph();
      flushList();
      return;
    }

    // Numbered list item
    if (/^\s*\d+\./.test(line)) {
      flushParagraph();
      if (listType !== 'numbered') {
        flushList();
        listType = 'numbered';
      }
      listItems.push(line.replace(/^\s*\d+\.\s*/, ''));
      return;
    }

    // Bullet list item
    if (/^\s*[•·-]/.test(line)) {
      flushParagraph();
      if (listType !== 'bullet') {
        flushList();
        listType = 'bullet';
      }
      listItems.push(line.replace(/^\s*[•·-]\s*/, ''));
      return;
    }

    // Regular paragraph text
    flushList();
    currentParagraph.push(trimmedLine);
  });

  // Flush any remaining content
  flushParagraph();
  flushList();

  return elements;
};

export const TimelineLeftBar: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const [viewerImages, setViewerImages] = useState<string[]>([]);
  const [viewerInitialIndex, setViewerInitialIndex] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (imageUrl: string, index: number, allImages: string[]) => {
    setViewerImages(allImages);
    setViewerInitialIndex(index);
    setImageViewerOpen(true);
  };

  const closeImageViewer = () => {
    setImageViewerOpen(false);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = parseInt(entry.target.getAttribute('data-id') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      if (observerRef.current) {
        observerRef.current.observe(item);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 pt-12">
          <h1 className="text-5xl font-bold text-white mb-4">Daily Team Briefs</h1>
          <p className="text-xl text-blue-200">Project Timeline & Progress Updates</p>
        </div>

        <div ref={timelineRef} className="relative flex">
          {/* Left timeline bar */}
          <div className="flex-shrink-0 w-24 relative">
            {/* Vertical line */}
            <div className="absolute left-12 top-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500" style={{height: 'calc(100% - 60px)'}}></div>
          </div>

          {/* Content area */}
          <div className="flex-1 pl-4">
            <div className="space-y-16">
              {timelineData.map((entry, index) => {
                const isVisible = visibleItems.has(entry.id);

                return (
                  <div
                    key={entry.id}
                    data-id={entry.id}
                    className="timeline-item relative flex"
                  >
                    {/* Date aligned with card */}
                    <div className="absolute -left-20 top-8 flex flex-col items-center">
                      <div className="text-sm text-blue-300 font-medium whitespace-nowrap transform -rotate-90 origin-center mb-8">
                        {entry.date}
                      </div>
                      <div className={`w-3 h-3 rounded-full ${getCategoryColor(entry.category)}`}></div>
                    </div>
                    <Card className={`
                      p-8 bg-white/10 backdrop-blur-sm border border-white/20 
                      transform transition-all duration-700 ease-out
                      ${isVisible 
                        ? 'translate-y-0 opacity-100 scale-100' 
                        : 'translate-x-8 translate-y-8 opacity-0 scale-95'
                      }
                      hover:bg-white/15 hover:scale-[1.02] hover:shadow-2xl
                      w-full
                    `}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-4 h-4 rounded-full ${getCategoryColor(entry.category)}`}></div>
                        <span className="text-sm font-medium text-blue-300 uppercase tracking-wide">
                          {entry.category}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {entry.title}
                      </h3>
                      
                      <div className="text-blue-100 mb-6 leading-relaxed text-base">
                        {parseContent(entry.content)}
                      </div>
                      
                      {/* Image carousel */}
                      {entry.images && entry.images.length > 0 && (
                        <ImageCarousel
                          images={entry.images}
                          onImageClick={(imageUrl, index) => handleImageClick(imageUrl, index, entry.images!)}
                        />
                      )}
                      
                      <div className="text-sm text-blue-300 font-medium bg-blue-900/30 px-3 py-1 rounded-full inline-block">
                        {entry.date}
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* End marker */}
            <div className="flex justify-start mt-16 ml-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg">
                Project Timeline Complete
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Viewer Modal */}
      <ImageViewer
        isOpen={imageViewerOpen}
        images={viewerImages}
        initialIndex={viewerInitialIndex}
        onClose={closeImageViewer}
      />
    </div>
  );
};
