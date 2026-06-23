import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const logoBaseClass = "h-16 w-auto object-contain";

export function CaseStudies() {
  const caseStudies = [
    {
      id: "toyota-lifetime-advantages",
      title: "Toyota, A Lifetime of Advantages",
      category: "Automotive | Brand Strategy, Campaign Execution",
      challenge: "Low-cost Korean competitors were entering the market with strong products and aggressive pricing.",
      role: "Research lead, strategy development, positioning, campaign planning, creative direction across brand, retail, finance, and service.",
      outcome: "Toyota market share grew from 17% to 22% in 12 months and the strategy became a long-running pillar of Toyota advertising.",
      summary: "Developed a national strategy that repositioned value beyond purchase price, shifting the conversation to reliability, servicing, resale value, and total cost of ownership.",
      logos: [{ src: "/case-studies/toyota-logo.png", alt: "Toyota logo", className: logoBaseClass }],
    },
    {
      id: "snack-brands-kettle-popcorn",
      title: "Snack Brands, Kettle Popcorn Launch",
      category: "FMCG | Product Launch",
      challenge: "The popcorn category already had strong competition and plenty of choice.",
      role: "Go-to-market strategy, positioning, messaging, creative strategy, campaign development, launch execution.",
      outcome: "Delivered a launch platform that cut through in a crowded market by keeping the tone premium, honest, and recognisably Kettle.",
      summary: "Led the go-to-market strategy and campaign development for the Kettle Popcorn launch, building a proposition that felt premium, distinctive, and true to the Kettle brand.",
      logos: [{ src: "/logos/kettle.png", alt: "Kettle logo", className: logoBaseClass }],
    },
    {
      id: "ford-six-model-launches",
      title: "Ford, Six Model Launches in Six Months",
      category: "Automotive | Launch Strategy",
      challenge: "Slow car market, growing competitive pressure, six launches to manage, and dealer expectations to meet.",
      role: "National advertising plans, promotional planning, budget management, audience targeting, sponsorship strategy, digital transformation input.",
      outcome: "FG Falcon became Ford's most successful launch since 2000 and Ford maintained market share above 13%.",
      summary: "Led national advertising and promotional planning across six vehicle launches, including Ranger and FG Falcon, during a difficult market period with strong new competition.",
      logos: [{ src: "/logos/ford.png", alt: "Ford logo", className: logoBaseClass }],
    },
    {
      id: "commbank-little-card-big-rewards",
      title: "Commonwealth Bank, Little Card Big Rewards",
      category: "Financial Services | Product Marketing",
      challenge: "Make consumers care about another credit card in a crowded banking category.",
      role: "Strategy, proposition development, messaging, campaign development, creative direction.",
      outcome: "Online applications increased by 30% after launch.",
      summary: "Created the launch strategy and campaign for CBA's first cash-back credit card, translating the proposition into plain-language value people could understand quickly.",
      logos: [{ src: "/logos/commbank.png", alt: "Commonwealth Bank logo", className: logoBaseClass }],
    },
    {
      id: "state-election-2022",
      title: "2022 South Australian State Election",
      category: "Government | Behaviour Change",
      challenge: "Maintain electoral participation during COVID-19 and voter fatigue.",
      role: "Strategic lead, campaign strategy, creative development, media strategy, PR, and crisis communications.",
      outcome: "Maintained 92% participation despite unprecedented challenges.",
      summary: "Led the strategic communications campaign for the 2022 SA State Election during heightened COVID concerns and following a federal election with an expected collapse in participation.",
      logos: [{ src: "/case-studies/ecsa-2022.png", alt: "2022 South Australian State Election logo", className: "h-24 md:h-28 w-auto object-contain" }],
    },
    {
      id: "local-government-elections-2022",
      title: "2022 Local Government Elections",
      category: "Government | Behaviour Change",
      challenge: "Lift participation in a non-compulsory election after years of stagnation and severe voter fatigue across a crowded election calendar.",
      role: "Research-led campaign strategy, creative direction, integrated communications, media planning, stakeholder co-ordination.",
      outcome: "Participation lifted from 30% to 34%+, with a 300% increase in first-week postal ballot returns.",
      summary: "Reframed strategy and campaign delivery for South Australia's local government elections, reversing long-term participation decline in a voluntary voting environment.",
      logos: [{ src: "/case-studies/local-government-logo.jpeg", alt: "2022 Council Elections logo", className: logoBaseClass }],
    },
    {
      id: "first-nations-voice-2024",
      title: "2024 First Nations Voice to Parliament Election",
      category: "Government | Community Engagement",
      challenge: "Build awareness, understanding, and participation for a new electoral process following the timing disruption caused by the Federal Voice Referendum.",
      role: "Communications strategy, creative and functional advertising, media engagement, community engagement, PR, project management, budget management, campaign implementation.",
      outcome: "All 46 positions were contested and successfully elected, establishing the First Nations Voice to SA Parliament.",
      summary: "Developed and delivered the communications strategy for South Australia's first First Nations Voice election, supporting engagement across six regions and all campaign channels.",
      logos: [{ src: "/case-studies/safnvp-logo.png", alt: "South Australian First Nations Voice to Parliament election logo", className: "h-20 md:h-24 w-auto object-contain" }],
    },
    {
      id: "adelaide-hills-wine-region",
      title: "Adelaide Hills Wine Region",
      category: "Wine | Brand Strategy",
      challenge: "The region lacked a clear understanding of who it was, who it was competing against, and how to tell a cohesive story.",
      role: "Research strategy, stakeholder engagement, brand positioning, brand architecture, communications strategy.",
      outcome: "Created a clear strategic platform that united members, sharpened the region's story, and strengthened engagement with consumers, partners, industry, government, and sponsors.",
      summary: "Developed the brand positioning, architecture, and communications strategy for the Adelaide Hills Wine Region, grounded in deep audience and stakeholder research.",
      logos: [{ src: "/case-studies/adelaide-hills-logo.png", alt: "Adelaide Hills Wine Region logo", className: "h-16 md:h-20 w-auto object-contain" }],
    },
  ];

  return (
    <>
      <Section className="pt-32 pb-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-8">Case Studies</h1>
          <p className="text-xl text-white leading-relaxed">
            Selected strategic communications work across government, behaviour change, brand strategy, product launches, and complex stakeholder environments.
          </p>
        </div>
      </Section>

      <Section background="grey" padding="sm">
        <div className="max-w-4xl mx-auto">
          <Card className="border-l-4 border-[#00796B] bg-[#0A1719]">
            <p className="text-lg leading-relaxed">
              These case studies demonstrate strategic thinking, practical problem-solving, and measurable outcomes, not just polished creative outputs.
            </p>
          </Card>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
          {caseStudies.map((study) => (
            <Link key={study.id} to={`/case-studies/${study.id}`}>
              <Card hover className="border-2 transition-all duration-300 hover:border-[#00796B]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    {study.logos && (
                      <div className="mb-6 flex flex-wrap items-center gap-4">
                        {study.logos.map((logo: any, index: number) => (
                          <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className={logo.className || logoBaseClass}
                          />
                        ))}
                      </div>
                    )}
                    <p className="text-sm text-[#00796B] font-medium mb-2">
                      {study.category}
                    </p>
                    <h2 className="text-3xl mb-4">{study.title}</h2>
                    <p className="text-lg text-white leading-relaxed mb-6">
                      {study.summary}
                    </p>
                    <div className="flex items-center gap-2 text-[#00796B] font-medium">
                      Read case study <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
                        The Challenge
                      </h3>
                      <p className="text-white">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
                        Our Role
                      </h3>
                      <p className="text-white">{study.role}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
                        Outcome
                      </h3>
                      <p className="text-white">{study.outcome}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Let's talk about your challenge
          </h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            These are just a few examples of the work delivered. Every project is different. Let's discuss how we can help with yours.
          </p>
          <Button to="/contact" size="lg">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}
