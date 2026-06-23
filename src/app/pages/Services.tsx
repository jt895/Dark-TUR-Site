import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { CheckCircle } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Strategic Diagnostic",
      subtitle: "Define the real problem before you invest",
      description: "A focused diagnostic to understand the challenge, map the landscape, and define where strategic focus will have the greatest impact.",
      duration: "2-4 weeks",
      deliverables: [
        "Audience and stakeholder insight analysis",
        "Problem definition and strategic framing",
        "Communications landscape review",
        "Barrier and opportunity mapping",
        "Strategic recommendations and next steps",
      ],
      whenToUse: "Use this when you need clarity on the problem before committing to strategy or execution. Ideal for organisations that want to make sure they're solving the right challenge.",
      executionSupport: "Can lead directly into strategy development, or be used as a standalone diagnostic to inform internal planning.",
    },
    {
      title: "Strategy Build",
      subtitle: "Create the plan that guides everything",
      description: "A complete communications or campaign strategy—from problem definition through to delivery frameworks, partner briefing and implementation guidance.",
      duration: "6-12 weeks",
      deliverables: [
        "Full communications or campaign strategy",
        "Message frameworks and narrative architecture",
        "Channel and media strategy",
        "Campaign architecture and phasing",
        "Creative and content direction (Ideas Brief)",
        "Partner and agency briefing materials",
        "Implementation roadmap",
      ],
      whenToUse: "Use this when you have a clear challenge and need a comprehensive strategy to guide execution. Includes identification of delivery partners and briefing support.",
      executionSupport: "Includes agency/partner identification and briefing. Can be delivered as a handover, or we can provide ongoing strategic oversight during implementation.",
    },
    {
      title: "Strategic Lead",
      subtitle: "Ongoing strategic guidance from problem to delivery",
      description: "Embedded strategic leadership across the full project lifecycle—from initial problem definition through strategy development, partner briefing, and implementation oversight.",
      duration: "3-12 months (or longer)",
      deliverables: [
        "Full diagnostic and strategy development",
        "Identification and briefing of delivery partners",
        "Strategic project leadership",
        "Implementation oversight and review",
        "Creative and content direction",
        "Stakeholder alignment and management",
        "Performance tracking and refinement",
      ],
      whenToUse: "Use this for high-stakes, complex or long-term programs that need senior strategic leadership from start to finish.",
      executionSupport: "Full integration with your team and delivery partners. We identify, brief and guide specialist agencies and partners throughout, ensuring strategy is carried through to execution.",
    },
    {
      title: "Review and Refine",
      subtitle: "Evaluate what worked and improve what's next",
      description: "Post-campaign evaluation, performance analysis and strategic refinement to learn from what worked and plan smarter next steps.",
      duration: "2-4 weeks",
      deliverables: [
        "Campaign performance evaluation",
        "Audience and stakeholder feedback analysis",
        "Message effectiveness review",
        "Strategic debrief and learnings",
        "Refinement recommendations",
      ],
      whenToUse: "Use this after a campaign or program to evaluate performance and feed insights back into future strategy.",
      executionSupport: "Can inform next-phase planning or be used as a standalone review to close out a program.",
    },
  ];

  return (
    <>
      <Section className="pt-32 pb-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-8">Services</h1>
          <p className="text-xl text-[#B8C9C6] leading-relaxed">
            The United Republic is designed to be easy to buy from. Our services are structured around clear offers that can be scaled to suit the challenge, the timeline and the level of support you need.
          </p>
        </div>
      </Section>

      <Section background="grey" padding="sm">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#0A1719] border-l-4 border-[#00796B]">
            <p className="text-lg leading-relaxed">
              Every service can include campaign execution support—we help identify, brief and guide the right specialist partners to bring the strategy to life.
            </p>
          </Card>
        </div>
      </Section>

      {services.map((service, index) => (
        <Section
          key={index}
          background={index % 2 === 0 ? "white" : "grey"}
          padding="lg"
        >
          <div className="max-w-5xl mx-auto">
            <Card hover className="border-2">
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl mb-2">{service.title}</h2>
                    <p className="text-xl text-[#00796B] italic">{service.subtitle}</p>
                  </div>
                  <span className="bg-[#081517] px-4 py-2 text-sm font-medium text-[#B8C9C6] whitespace-nowrap">
                    {service.duration}
                  </span>
                </div>
                <p className="text-lg text-[#C8D7D4] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">What's included</h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#00796B] flex-shrink-0 mt-0.5" />
                        <span className="text-[#C8D7D4]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">When to use this</h3>
                  <p className="text-[#C8D7D4] leading-relaxed mb-6">
                    {service.whenToUse}
                  </p>
                  <h3 className="text-lg font-semibold mb-4">Execution support</h3>
                  <p className="text-[#C8D7D4] leading-relaxed">
                    {service.executionSupport}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Section>
      ))}

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#081517]">
            <h3 className="text-2xl mb-4">Not sure which service you need?</h3>
            <p className="text-lg text-[#C8D7D4] mb-6 leading-relaxed">
              Every project is different. We can tailor our approach to suit your challenge, your timeline, and where you need support most. Let's talk about what you're trying to achieve.
            </p>
            <Button to="/contact">
              Book an initial conversation
            </Button>
          </Card>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            The tailored team model
          </h2>
          <p className="text-xl text-[#B8C9C6] mb-8 max-w-3xl mx-auto leading-relaxed">
            The United Republic doesn't run a fixed agency structure. We build the right team around each challenge—bringing together specialist partners for creative, media, content, production and delivery based on what the work needs, not what we happen to have in-house.
          </p>
          <p className="text-xl text-[#B8C9C6] max-w-3xl mx-auto leading-relaxed">
            That means you get strategic clarity up front, the right expertise in execution, and work that's focused on outcomes.
          </p>
        </div>
      </Section>
    </>
  );
}
