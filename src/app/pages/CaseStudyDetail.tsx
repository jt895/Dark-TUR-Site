import { useParams, Link } from "react-router";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { ArrowLeft, CheckCircle, FileText, ImageIcon, PlayCircle } from "lucide-react";

export function CaseStudyDetail() {
  const { id } = useParams();

  const caseStudies: Record<string, any> = {
    "toyota-lifetime-advantages": {
      logos: [{ src: "/case-studies/toyota-logo.png", alt: "Toyota logo", className: "h-20 md:h-24 w-auto object-contain" }],
      title: "Toyota, A Lifetime of Advantages",
      category: "Automotive | Brand Strategy, Campaign Execution",
      challenge: "Toyota faced rising pressure from Korean brands competing hard on price. The opportunity was to move the market conversation away from sticker price and towards the broader ownership experience.",
      realProblem: "A national research programme with consumers and dealers found a stronger truth: value is not just the purchase price, it is the full ownership experience across reliability, servicing, running costs, and resale.",
      role: "Research lead, strategy development, positioning, campaign planning, creative direction across brand, retail, finance, and service.",
      approach: [
        "Built the ‘A Lifetime of Advantages’ positioning and marketing plan.",
        "Rolled the strategy out across brand, retail, finance, and service communications.",
        "Created a proposition that felt consistent wherever customers encountered Toyota.",
        "Shifted the value conversation from purchase price to total ownership experience.",
      ],
      outcome: "Market share increased from 17% to 22% in 12 months. The strategy remained central to Toyota communications well beyond launch.",
      changed: [
        "17% to 22% market share growth in 12 months.",
        "Enduring platform adopted across multiple marketing channels.",
      ],
      assets: [
        { src: "/case-studies/toyota-assets/brw0929930ne-network-1.mov", type: "video", poster: "/case-studies/toyota-assets/brw0929930ne-network-1.jpg", title: "Network" },
        { src: "/case-studies/toyota-assets/brw0929930ra-range-1.mov", type: "video", poster: "/case-studies/toyota-assets/brw0929930ra-range-1.jpg", title: "Range" },
        { src: "/case-studies/toyota-assets/brw0929930rv-resale-value.mov", type: "video", poster: "/case-studies/toyota-assets/brw0929930rv-resale-value.jpg", title: "Resale Value" },
        { src: "/case-studies/toyota-assets/brw0929930tf-tfa-final-1.mov", type: "video", poster: "/case-studies/toyota-assets/brw0929930tf-tfa-final-1.jpg", title: "Toyota Finance" },
        { src: "/case-studies/toyota-assets/brw0929930ts-tsa-final-1.mov", type: "video", poster: "/case-studies/toyota-assets/brw0929930ts-tsa-final-1.jpg", title: "Toyota Service Advantage" },
        { src: "/case-studies/toyota-assets/brw0932430rc-running-costs-reedit-1.mov", type: "video", poster: "/case-studies/toyota-assets/brw0932430rc-running-costs-reedit-1.jpg", title: "Running Costs" },
        { src: "/case-studies/toyota-assets/Toyota Access HD.mp4", type: "video", poster: "/case-studies/toyota-assets/Toyota Access HD.jpg", title: "Toyota Access" },
        { src: "/case-studies/toyota-assets/Toyota Service Advantage  Low cost, capped price servicing SD.mp4", type: "video", poster: "/case-studies/toyota-assets/Toyota Service Advantage  Low cost, capped price servicing SD.jpg", title: "Toyota Service Advantage, capped price servicing" },
        { src: "/case-studies/toyota-assets/r08931-gcb.pdf", type: "pdf", preview: "/case-studies/toyota-assets/r08931-gcb.preview.jpg", title: "Retail Press 1" },
        { src: "/case-studies/toyota-assets/r08993-dt.pdf", type: "pdf", preview: "/case-studies/toyota-assets/r08993-dt.preview.jpg", title: "Retail Press 2" },
        { src: "/case-studies/toyota-assets/r09199-bcm.pdf", type: "pdf", preview: "/case-studies/toyota-assets/r09199-bcm.preview.jpg", title: "Retail Press 3" },
        { src: "/case-studies/toyota-assets/r09274-fp-v4.pdf", type: "pdf", preview: "/case-studies/toyota-assets/r09274-fp-v4.preview.jpg", title: "Retail Press 4" },
      ],
    },
    "snack-brands-kettle-popcorn": {
      logos: [{ src: "/logos/kettle.png", alt: "Kettle logo", className: "h-20 md:h-24 w-auto object-contain" }],
      title: "Snack Brands, Kettle Popcorn Launch",
      category: "FMCG | Product Launch",
      challenge: "Launching a brand extension required Kettle Popcorn to feel new, but still unmistakably Kettle.",
      realProblem: "The popcorn category was already busy, so the work needed to create difference without drifting away from the equity that made Kettle appealing in the first place.",
      role: "Go-to-market strategy, positioning, messaging, creative strategy, campaign development, launch execution.",
      approach: [
        "Developed the go-to-market plan for the launch.",
        "Built the positioning and messaging around a premium tone with a slightly irreverent edge.",
        "Shaped campaign execution so the product felt distinctive and recognisably Kettle.",
        "Kept the proposition grounded in clear product truth rather than category clichés.",
      ],
      outcome: "The launch cut through because it felt like Kettle, premium, a bit irreverent, and honest about being a better snack.",
      changed: [
        "Most successful Snack Brands brand extension launch.",
        "Secured ranging in Coles, Woolworths, Metcash, and independents.",
      ],
      assets: [
        { src: "/case-studies/kettle-assets/Kettle Popcorn Launch TVC(1).mp4", type: "video", poster: "/case-studies/kettle-assets/Kettle Popcorn Launch TVC(1).jpg", title: "Launch TVC" },
        { src: "/case-studies/kettle-assets/kettle-sweet-chilli-30.mp4", type: "video", poster: "/case-studies/kettle-assets/kettle-sweet-chilli-30.jpg", title: "Sweet Chilli, 30 second" },
        { src: "/case-studies/kettle-assets/kettle-honey-soy-30.mp4", type: "video", poster: "/case-studies/kettle-assets/kettle-honey-soy-30.jpg", title: "Honey Soy, 30 second" },
      ],
    },
    "ford-six-model-launches": {
      logos: [{ src: "/logos/ford.png", alt: "Ford logo", className: "h-20 md:h-24 w-auto object-contain" }],
      title: "Ford, Six Model Launches in Six Months",
      category: "Automotive | Launch Strategy",
      challenge: "Ford needed to bring six vehicles to market in a pressured category while keeping dealers engaged and budget performance sharp.",
      realProblem: "The market was slow, new competitors were entering regularly, and large-scale launch planning needed to work both nationally and at dealer level.",
      role: "National advertising plans, promotional planning, budget management, audience targeting, sponsorship strategy, digital transformation input.",
      approach: [
        "Developed national advertising and promotional plans across six launches.",
        "Managed a $100M+ budget across a highly competitive market period.",
        "Targeted the right audiences for the right reasons across launch activity.",
        "Strengthened Ford's position through Cricket Australia sponsorships and a major uplift in online presence.",
      ],
      outcome: "The FG Falcon launch was Ford's strongest since 2000. Ford maintained market share above 13% despite market pressure.",
      changed: [
        "FG Falcon most successful launch since 2000.",
        "Market share held above 13%.",
        "Six launches delivered in a highly competitive period.",
        "Ranger and FG Falcon featured as flagship highlights within the broader programme.",
      ],
      assets: [
        { src: "/case-studies/ford-assets/Billboard.mp4", type: "video", poster: "/case-studies/ford-assets/Billboard.jpg", title: "Billboard" },
        { src: "/case-studies/ford-assets/All New Ranger Mother of all Dunes - YouTube.mp4", type: "video", poster: "/case-studies/ford-assets/All New Ranger Mother of all Dunes - YouTube.jpg", title: "All New Ranger, Mother of all Dunes" },
        { src: "/case-studies/ford-assets/FORD Fiesta h264.mp4", type: "video", poster: "/case-studies/ford-assets/FORD Fiesta h264.jpg", title: "FORD Fiesta h264" },
        { src: "/case-studies/ford-assets/Falcon 50th Anniversary Limited Edition SD.mp4", type: "video", poster: "/case-studies/ford-assets/Falcon 50th Anniversary Limited Edition SD.jpg", title: "Falcon 50th Anniversary Limited Edition" },
        { src: "/case-studies/ford-assets/Fingers.mp4", type: "video", poster: "/case-studies/ford-assets/Fingers.jpg", title: "Fingers" },
        { src: "/case-studies/ford-assets/Ford Falcon  First  TV commercial SD.mp4", type: "video", poster: "/case-studies/ford-assets/Ford Falcon  First  TV commercial SD.jpg", title: "Ford Falcon First TV commercial" },
        { src: "/case-studies/ford-assets/Ford G6 Limited Edition Feb 2010 SD.mp4", type: "video", poster: "/case-studies/ford-assets/Ford G6 Limited Edition Feb 2010 SD.jpg", title: "Ford G6 Limited Edition Feb 2010" },
        { src: "/case-studies/ford-assets/Our new TV ad for the most fuel efficient car in Australia  SD.mp4", type: "video", poster: "/case-studies/ford-assets/Our new TV ad for the most fuel efficient car in Australia  SD.jpg", title: "Our new TV ad for the most fuel efficient car in Australia" },
        { src: "/case-studies/ford-assets/The new Ford Mondeo TV Ad Low.mp4", type: "video", poster: "/case-studies/ford-assets/The new Ford Mondeo TV Ad Low.jpg", title: "The new Ford Mondeo TV ad" },
        { src: "/case-studies/ford-assets/The new look Ford Territory Low.mp4", type: "video", poster: "/case-studies/ford-assets/The new look Ford Territory Low.jpg", title: "The new look Ford Territory" },
      ],
    },
    "commbank-little-card-big-rewards": {
      logos: [{ src: "/case-studies/commbank-logo.png", alt: "Commonwealth Bank logo", className: "h-20 md:h-24 w-auto object-contain" }],
      title: "Commonwealth Bank, Little Card Big Rewards",
      category: "Financial Services | Product Marketing",
      challenge: "The brief was simple but tough: make people care about another credit card.",
      realProblem: "In a crowded banking market, generic category language would not work. The offer needed to feel easy to understand and worth acting on.",
      role: "Strategy, proposition development, messaging, campaign development, creative direction.",
      approach: [
        "Built a campaign that was clear, cheeky, and plain spoken.",
        "Explained cashback as a tangible benefit in language people could grasp immediately.",
        "Avoided sounding like a bank and instead talked about free money in a way people understood.",
        "Shaped the proposition so the value was clear from the first interaction.",
      ],
      outcome: "Online applications rose 30% after launch.",
      changed: [
        "30% increase in online applications after launch.",
        "National campaign built around a simple, easy-to-understand value proposition.",
      ],
      assets: [
        { src: "/case-studies/commbank-assets/CBA0009CRIC15_Cricket Pads.mp4", type: "video", poster: "/case-studies/commbank-assets/CBA0009CRIC15_Cricket Pads.jpg", title: "Cricket Pads, 15 second" },
        { src: "/case-studies/commbank-assets/CBA0009SOFA15_Sofa.mp4", type: "video", poster: "/case-studies/commbank-assets/CBA0009SOFA15_Sofa.jpg", title: "Sofa, 15 second" },
      ],
    },
    "state-election-2022": {
      logos: [{ src: "/case-studies/ecsa-2022.png", alt: "2022 South Australian State Election logo", className: "h-28 md:h-32 w-auto object-contain" }],
      title: "2022 South Australian State Election",
      category: "Government | Behaviour Change",
      challenge: "Initially engaged to support advertising and media procurement, the role expanded into rebuilding ECSA's marketing and communications capability and delivering campaign strategy for major electoral events.",
      realProblem: "A key example is the work with the Electoral Commission of South Australia. Initially engaged for agency procurement, pressing issues quickly emerged: three major electoral events, a failing communications function, no strategic framework, and declining participation. Instead of a new agency, the organisation required a rebuilt marketing and communications function to restore participation and manage unprecedented challenges.",
      role: "Strategic lead, campaign strategy, creative development, media strategy, PR, and crisis communications.",
      approach: [
        "Delivered a full capability review and identified critical structural gaps.",
        "Developed a multi-year strategy aligned with operational realities and government obligations.",
        "Established a crisis communications framework from scratch.",
        "Ran concurrent campaign programmes across multiple government stakeholders with fixed, immovable deadlines.",
        "Used statewide qualitative and quantitative research to identify audience segments, behavioural barriers, and channel needs.",
        "Directed strategy, creative development, media co-ordination, publisher engagement, PR, and crisis communications through to implementation.",
      ],
      outcome: "Maintained high participation rates despite COVID pressures and voter fatigue, with 92% participation retained.",
      changed: [
        "92% participation maintained.",
        "Targeted engagement with CALD communities, young people, and disengaged voters.",
        "PR and crisis communications integrated into campaign delivery.",
      ],
      assets: [
        { src: "/case-studies/state-election-assets/ECSA5002V30_1_1.mp4", type: "video", poster: "/case-studies/state-election-assets/ECSA5002V30_1_1.jpg", title: "TV campaign, 30 second V1" },
        { src: "/case-studies/state-election-assets/ECSA5002G30_1_1.mp4", type: "video", poster: "/case-studies/state-election-assets/ECSA5002G30_1_1.jpg", title: "TV campaign, 30 second V2" },
        { src: "/case-studies/state-election-assets/ECSA5006W15_YouTube.mp4", type: "video", poster: "/case-studies/state-election-assets/ECSA5006W15_YouTube.jpg", title: "YouTube campaign, 15 second" },
        { src: "/case-studies/state-election-assets/ECSA_7s_Ph2_MAJORITY URGENCY.mp4", type: "video", poster: "/case-studies/state-election-assets/ECSA_7s_Ph2_MAJORITY URGENCY.jpg", title: "Urgency cutdown, 7 second" },
        { src: "/case-studies/state-election-assets/State Election 1B_15sec_STORY_WHEN_IV_1.mp4", type: "video", poster: "/case-studies/state-election-assets/State Election 1B_15sec_STORY_WHEN_IV_1.jpg", title: "Social story asset, 15 second" },
        { src: "/case-studies/state-election-assets/State Election Ben_&_Liam_6sec_1A_ENROL_v1_WIDE_1.mp4", type: "video", poster: "/case-studies/state-election-assets/State Election Ben_&_Liam_6sec_1A_ENROL_v1_WIDE_1.jpg", title: "Ben and Liam enrolment cutdown, 6 second" },
        { src: "/case-studies/state-election-assets/ECSA5003_Advertiser_188x262.pdf", type: "pdf", title: "Advertiser press ad" },
        { src: "/case-studies/state-election-assets/Official Guide - SE22 WEB 28.1.22 small.pdf", type: "pdf", title: "Official state election guide" },
        { src: "/case-studies/state-election-assets/LG40 Postal Voting Guide Proof Generic - Approved.pdf", type: "pdf", title: "Postal voting guide" },
        { src: "/case-studies/state-election-assets/ECSA5014_Saturday_Press_380x262_NEWS.jpg", type: "image", title: "Saturday press execution" },
        { src: "/case-studies/state-election-assets/State Election youth letter.jpg", type: "image", title: "Youth enrolment direct mail" },
      ],
    },
    "local-government-elections-2022": {
      logos: [{ src: "/case-studies/local-government-logo.jpeg", alt: "2022 Council Elections logo", className: "h-20 md:h-24 w-auto object-contain" }],
      title: "2022 Local Government Elections",
      category: "Government | Behaviour Change",
      challenge: "Local government elections in South Australia are voluntary and had been sitting at around 30% participation for years, with some council districts below 15%.",
      realProblem: "The 2022 elections followed two major parliamentary elections in the same calendar year. That created a real risk of voter fatigue and a collapse in participation. Unlike state and federal elections, voting was conducted by post, which added a second layer of behavioural complexity because voters needed to complete and return ballot papers themselves rather than attend a polling place.",
      role: "Research-led campaign strategy, creative direction, integrated communications, media planning, stakeholder co-ordination.",
      approach: [
        "Developed an integrated campaign across enrolment, nominations, and voting.",
        "Built public awareness around timing and responsibilities.",
        "Encouraged business enrolment and promoted early completion and return of ballot papers.",
        "Co-ordinated messaging across ECSA, councils, and the LGA.",
      ],
      outcome: "Participation increased from 30% to 34%+, representing more than 10% growth. Early postal ballot returns in the first week were up 300%, improving processing efficiency and speeding up results.",
      changed: [
        "30% to 34%+ turnout.",
        "10%+ participation growth.",
        "300% increase in first-week ballot returns.",
      ],
      assets: [
        { src: "/case-studies/local-government-assets/Local Government ECSA09202230A_2.mp4", type: "video", poster: "/case-studies/local-government-assets/Local Government ECSA09202230A_2.jpg", title: "TV campaign, 30 second" },
        { src: "/case-studies/local-government-assets/Local Government ECSA09202215A_1.mp4", type: "video", poster: "/case-studies/local-government-assets/Local Government ECSA09202215A_1.jpg", title: "TV campaign, 15 second" },
        { src: "/case-studies/local-government-assets/Local Government Example_Social post insitu.jpg", type: "image", title: "Social post in situ" },
        { src: "/case-studies/local-government-assets/ELC0201_Council Elections_OOH 1920x1080 (Planner).jpg", type: "image", title: "Out-of-home artwork" },
        { src: "/case-studies/local-government-assets/ELC0201_Council Elections Press Halfpage.pdf", type: "pdf", title: "Press ad, half page" },
        { src: "/case-studies/local-government-assets/ELC0201_Council Elections Press strip.pdf", type: "pdf", title: "Press ad, strip" },
        { src: "/case-studies/local-government-assets/Example_Council Elections Press_Qtr Vert.pdf", type: "pdf", title: "Press ad, quarter vertical" },
      ],

    },
    "first-nations-voice-2024": {
      logos: [{ src: "/case-studies/safnvp-logo.png", alt: "South Australian First Nations Voice to Parliament election logo", className: "h-24 md:h-28 w-auto object-contain" }],
      title: "2024 First Nations Voice to Parliament Election",
      category: "Government | Community Engagement",
      challenge: "The South Australian First Nations Voice is a state-level initiative designed to provide Aboriginal and Torres Strait Islander people with a direct and independent line of communication to Parliament and Government.",
      realProblem: "ECSA was tasked with delivering the election on 16 March 2024 across six regions and 46 positions. The election was originally due in September 2023 but was moved to avoid overlap with the Federal Voice Referendum.",
      role: "Communications strategy, creative and functional advertising, media engagement, community engagement, PR, project management, budget management, campaign implementation.",
      approach: [
        "Traditional marketing and advertising methods were identified early as unlikely to work on their own, so a different strategic approach was needed.",
        "Combined communications strategy, community engagement, media engagement, creative and functional advertising, PR, project and budget management.",
        "Delivered implementation across TV, press, outdoor, digital, website, social media, and PR.",
        "Created more than 500 community engagement kits and supported 400+ community engagement sessions.",
      ],
      outcome: "All 46 positions attracted multiple nominations, ensuring every position went to election and none were filled uncontested. Successful elections were held across all 46 positions, establishing the First Nations Voice to SA Parliament.",
      changed: [
        "46 positions contested.",
        "500+ engagement kits distributed.",
        "400+ community engagement sessions.",
        "Community-informed strategy replaced standard election advertising alone.",
      ],
      assets: [
        { src: "/case-studies/voice-assets/SAVTPA30 - Awareness - TVC_1.mp4", type: "video", poster: "/case-studies/voice-assets/SAVTPA30 - Awareness - TVC_1.jpg", title: "Awareness TVC, 30 second" },
        { src: "/case-studies/voice-assets/SAVTPE151 - Enrol - TVC_1.mp4", type: "video", poster: "/case-studies/voice-assets/SAVTPE151 - Enrol - TVC_1.jpg", title: "Enrol TVC, 15 second" },
        { src: "/case-studies/voice-assets/SAVTPE152 - Enrol URGENCY - TVC_1.mp4", type: "video", poster: "/case-studies/voice-assets/SAVTPE152 - Enrol URGENCY - TVC_1.jpg", title: "Enrol urgency TVC, 15 second" },
        { src: "/case-studies/voice-assets/SAVTPN151 - Nominate - TVC_1.mp4", type: "video", poster: "/case-studies/voice-assets/SAVTPN151 - Nominate - TVC_1.jpg", title: "Nominate TVC, 15 second" },
        { src: "/case-studies/voice-assets/SAVTPVA30 - Vote Awareness - TVC_1.mp4", type: "video", poster: "/case-studies/voice-assets/SAVTPVA30 - Vote Awareness - TVC_1.jpg", title: "Vote awareness TVC, 30 second" },
        { src: "/case-studies/voice-assets/SAVTPVU15 - Vote URGENCY - TVC_1.mp4", type: "video", poster: "/case-studies/voice-assets/SAVTPVU15 - Vote URGENCY - TVC_1.jpg", title: "Vote urgency TVC, 15 second" },
        { src: "/case-studies/voice-assets/SAVTPHTV15 - How To Vote - TVC_1.mp4", type: "video", poster: "/case-studies/voice-assets/SAVTPHTV15 - How To Vote - TVC_1.jpg", title: "How to vote TVC, 15 second" },
        { src: "/case-studies/voice-assets/ELC0384_SAVoice_Press_Enrol_92x260 15.11.23.pdf", type: "pdf", title: "Press ad, enrolment" },
        { src: "/case-studies/voice-assets/SAFNVE_nominations_A3_web.pdf", type: "pdf", title: "Nominations poster" },
        { src: "/case-studies/voice-assets/ELC0367_SA Voice Vote poster A2 [FA].pdf", type: "pdf", title: "Vote poster" },
        { src: "/case-studies/voice-assets/SAFNVE_brochure_web.pdf", type: "pdf", title: "Brochure" },
      ],
    },

    "adelaide-hills-wine-region": {
      logos: [{ src: "/case-studies/adelaide-hills-logo.png", alt: "Adelaide Hills Wine Region logo", className: "h-20 md:h-24 w-auto object-contain" }],
      title: "Adelaide Hills Wine Region",
      category: "Wine | Brand Strategy",
      challenge: "The Adelaide Hills Wine Region is widely regarded as one of Australia's leading cool climate wine regions, but it lacked a clear strategic narrative and shared sense of identity.",
      realProblem: "There was little agreement on who the region was, who it was competing against, and what story it should tell to members, visitors, government, industry bodies, and sponsors.",
      role: "Research strategy, stakeholder engagement, brand positioning, brand architecture, communications strategy.",
      approach: [
        "Started with an extensive qualitative and quantitative research programme targeting wine consumers, stakeholders, industry, and government.",
        "Clarified who the region was, what it stood for, where it was heading, and why audiences should believe in it.",
        "Defined how the region should talk about itself in a way that united members, attracted visitors, involved government and industry bodies, and engaged sponsors.",
        "Built a new brand positioning, brand architecture, and communications strategy from the research findings.",
      ],
      outcome: "The research informed a new Adelaide Hills Wine Region brand positioning, brand architecture, and communications strategy that supported members and encouraged stronger engagement with consumers, business partners, allied industry, government, and AHWR events.",
      changed: [
        "Research-led brand positioning.",
        "Clearer regional narrative.",
        "Stronger platform for member engagement, visitation, partnerships, government engagement, and events.",
      ],
      assets: [
        { src: "/case-studies/adelaide-hills-assets/Adelaide Hills Wine Brand Pyramid v7.pdf", type: "pdf", title: "Brand pyramid" },
      ],
    },
  };

  const study = id ? caseStudies[id] : null;

  if (!study) {
    return (
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl mb-6">Case Study Not Found</h1>
          <Button to="/case-studies">Back to Case Studies</Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section className="pt-32 pb-12" background="white">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-[#00796B] hover:underline mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Case Studies
          </Link>
          <div className="mb-8">
            {study.logos && (
              <div className="mb-6 flex flex-wrap items-center gap-4">
                {study.logos.map((logo: any, index: number) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className={logo.className || "h-20 w-auto object-contain"}
                  />
                ))}
              </div>
            )}
            <p className="text-sm text-[#00796B] font-medium mb-2">
              {study.category}
            </p>
            <h1 className="text-5xl md:text-6xl">{study.title}</h1>
          </div>
        </div>
      </Section>

      <Section background="grey" padding="md">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-sm font-semibold text-[#8EA3A0] mb-2 uppercase tracking-wide">
              The Challenge
            </h3>
            <p className="text-[#C8D7D4] leading-relaxed">{study.challenge}</p>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold text-[#8EA3A0] mb-2 uppercase tracking-wide">
              Our Role
            </h3>
            <p className="text-[#C8D7D4] leading-relaxed">{study.role}</p>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold text-[#8EA3A0] mb-2 uppercase tracking-wide">
              Outcome
            </h3>
            <p className="text-[#C8D7D4] leading-relaxed">{study.outcome}</p>
          </Card>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl mb-6">Background</h2>
            <p className="text-lg text-[#C8D7D4] leading-relaxed">{study.realProblem}</p>
          </div>

          <div>
            <h2 className="text-3xl mb-6">Approach</h2>
            <ul className="space-y-4">
              {study.approach.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#00796B] flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-[#C8D7D4] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl mb-6">Key Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.changed.map((item: string, index: number) => (
                <Card key={index} className="bg-[#081517] border-l-4 border-[#00796B]">
                  <p className="text-[#C8D7D4] leading-relaxed">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {study.assets && study.assets.length > 0 && (
        <Section background="grey" padding="md">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl mb-3">{id === "adelaide-hills-wine-region" ? "Brand Positioning" : "Campaign assets"}</h2>
              {id !== "adelaide-hills-wine-region" && (
                <p className="text-lg text-[#C8D7D4] leading-relaxed max-w-3xl">
                  Selected campaign assets from this case study, including screen work, print executions, and supporting materials.
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.assets.map((asset: any, index: number) => (
                <Card key={index} className="overflow-hidden">
                  <div className="mb-4 rounded-xl overflow-hidden bg-black/5 border border-black/5">
                    {asset.type === "video" ? (
                      <video controls preload="metadata" poster={asset.poster} className="w-full h-auto block bg-black" playsInline>
                        <source src={asset.src} type={asset.src.endsWith(".mp4") ? "video/mp4" : "video/quicktime"} />
                        Your browser does not support video playback.
                      </video>
                    ) : asset.type === "image" ? (
                      <div className="aspect-[4/3] bg-[#0A1719]">
                        <img src={asset.src} alt={asset.title} className="w-full h-full object-contain block" />
                      </div>
                    ) : asset.preview ? (
                      <div className="aspect-[4/3] bg-[#0A1719]">
                        <img src={asset.preview} alt={asset.title} className="w-full h-full object-contain block" />
                      </div>
                    ) : (
                      <div className="aspect-[4/3] bg-[#0A1719]">
                        <iframe src={asset.src} title={asset.title} className="w-full h-full border-0" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl mb-1">{asset.title}</h3>
                      {!(id === "adelaide-hills-wine-region" && asset.type === "pdf") && (
                        <p className="text-sm text-[#8EA3A0] uppercase tracking-wide">
                          {asset.type === "video" ? "Screen asset" : asset.type === "image" ? "Campaign artwork" : "Print asset"}
                        </p>
                      )}
                    </div>
                    <a
                      href={asset.src}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[#00796B] hover:underline whitespace-nowrap"
                    >
                      {asset.type === "video" ? <PlayCircle className="w-5 h-5" /> : asset.type === "image" ? <ImageIcon className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                      Open
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Discuss your challenge</h2>
          <p className="text-xl text-[#B8C9C6] mb-10 max-w-3xl mx-auto leading-relaxed">
            Every project presents different challenges. Let's talk about how we can help with yours.
          </p>
          <Button to="/contact" size="lg">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}
