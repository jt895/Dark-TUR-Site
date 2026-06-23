import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { ArrowRight } from "lucide-react";

export function HowWeWork() {
  const process = [
    {
      step: "01",
      title: "Diagnose",
      description: "We identify the problem behind the brief",
      detail: "Before any strategy work begins, we need to understand what's really going on. This phase combines audience research, stakeholder insight, communications audits and strategic analysis to define the real challenge—not just the symptoms.",
      services: [
        "Audience and stakeholder insight",
        "Communications review and audit",
        "Brand and positioning diagnosis",
        "Behaviour change strategy",
        "Message and narrative assessment",
        "Strategic problem definition",
      ],
      approach: "We can support this phase as a standalone diagnostic, or as the foundation for ongoing strategy and delivery work. The diagnostic output becomes the brief for everything that follows.",
    },
    {
      step: "02",
      title: "Design",
      description: "We turn complexity into a clear plan",
      detail: "Once the problem is clear, we build the strategy. This means creating frameworks, plans and direction that guide decision-making, shape creative development, and ensure all activity is aligned to outcomes.",
      services: [
        "Communications strategy",
        "Campaign architecture",
        "Message frameworks",
        "Content planning",
        "Channel planning and media strategy",
        "Stakeholder engagement strategy",
        "Launch sequencing and phasing",
      ],
      approach: "Strategy work can be delivered as a complete plan, or we can work alongside internal teams to co-create and build capability. Every strategy is designed to survive contact with reality.",
    },
    {
      step: "03",
      title: "Direct",
      description: "We help the strategy survive contact with reality",
      detail: "Strategy only works if it's executed well. We help clients identify and brief the right agency and specialist partners, provide strategic oversight during implementation, and ensure the work stays true to the original intent.",
      services: [
        "Agency and partner briefing",
        "Implementation oversight and guidance",
        "Strategic project leadership",
        "Internal team support and capability building",
        "Creative and content review",
        "Alignment across stakeholders and partners",
      ],
      approach: "This is where the tailored team model comes to life. We identify, brief and guide specialist partners—whether that's creative agencies, media partners, content producers, or delivery teams—to bring the strategy to life with the right expertise.",
    },
    {
      step: "04",
      title: "Measure",
      description: "We help clients understand what worked and what to do next",
      detail: "Measuring outcomes is how we learn. We help clients evaluate campaign performance, test messages, review what worked, and plan refinements based on evidence.",
      services: [
        "Campaign evaluation and analysis",
        "Performance reporting against objectives",
        "Message testing and effectiveness studies",
        "Post-campaign review and debrief",
        "Refinement planning and optimisation",
      ],
      approach: "Evaluation feeds back into strategy. We help clients build a cycle of learning that improves performance over time and ensures future work is smarter, sharper and more focused.",
    },
  ];

  return (
    <>
      <Section className="pt-32 pb-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-8">How we work</h1>
          <p className="text-xl text-[#B8C9C6] leading-relaxed">
            The United Republic works from strategy through to delivery. We can support one phase of the process or guide the full journey from problem definition to campaign execution.
          </p>
        </div>
      </Section>

      <Section background="grey" padding="sm">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#00796B] text-white border-none">
            <p className="text-lg leading-relaxed">
              We work with clients to define where strategic support is needed most. Some organisations need help defining the problem. Others have a clear brief but need strategy and direction. And some need ongoing guidance to ensure execution stays true to the strategic intent.
            </p>
          </Card>
        </div>
      </Section>

      {process.map((phase, index) => (
        <Section
          key={index}
          background={index % 2 === 0 ? "white" : "grey"}
          padding="lg"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-2">
                <span className="text-7xl font-bold text-[#26A69A] opacity-40">
                  {phase.step}
                </span>
              </div>
              <div className="lg:col-span-10">
                <h2 className="text-4xl mb-3">{phase.title}</h2>
                <p className="text-xl text-[#00796B] italic mb-8">{phase.description}</p>
                
                <p className="text-lg text-[#C8D7D4] leading-relaxed mb-8">
                  {phase.detail}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">What we deliver</h3>
                    <ul className="space-y-2">
                      {phase.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-[#00796B] flex-shrink-0 mt-0.5" />
                          <span className="text-[#C8D7D4]">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Our approach</h3>
                    <p className="text-[#C8D7D4] leading-relaxed">{phase.approach}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Strategy through to delivery
          </h2>
          <p className="text-xl text-[#B8C9C6] mb-10 max-w-3xl mx-auto leading-relaxed">
            The United Republic works from problem definition through to identifying, briefing and guiding the right execution partners. We bring strategic clarity up front, and help make sure that clarity survives through to delivery.
          </p>
          <Button to="/services" size="lg">
            Explore our services
          </Button>
        </div>
      </Section>
    </>
  );
}
