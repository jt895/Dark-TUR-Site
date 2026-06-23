import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { ClientLogos } from "../components/ClientLogos";
import { ArrowRight, CheckCircle, Users, Target, Lightbulb } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  const proofPoints = [
    "We start with the real problem, not just the brief",
    "We focus on what matters most and where it can have the greatest influence",
    "We combine strategic thinking with practical delivery direction",
    "We identify and brief the right partners to bring the work to life",
    "We stay focused on outcomes, not agency process",
  ];

  const methodology = [
    {
      number: "01",
      title: "Start with the foundation, not the finish",
      description: "Brilliant work begins with the basics. We start by understanding audiences deeply, identifying the true challenge, quantifying what matters most, and mapping the barriers, segments and behaviours that will shape success. Strategy comes first, and everything else follows from that.",
      points: [
        "Understanding your audiences deeply",
        "Identifying the true challenge, not just the symptoms",
        "Quantifying the challenge and where influence matters most",
        "Mapping segments, barriers and behaviours",
        "Building strategy grounded in data and insight",
      ],
    },
    {
      number: "02",
      title: "Ideas first, not creative concepts",
      description: "We develop what we call an Ideas Brief, not a traditional creative brief. This creates audience-first direction that guides everything that follows. We stay media-neutral from the start, build around what engages and influences, and shape execution by bringing together the right combination of message, medium and meaning.",
      points: [
        "Ideas Brief, not traditional creative brief",
        "Media-neutral thinking from the outset",
        "Focus on what influences and shifts behaviour",
        "Build from message, medium and meaning",
        "Prioritise the right idea over the biggest idea",
      ],
    },
    {
      number: "03",
      title: "The right team, every time",
      description: "We do not run a fixed creative department or force work through an agency machine. We build the right team around each challenge, bringing together the best senior specialists for the job. That keeps the work tailored, lean and focused on outcomes.",
      points: [
        "No bloated departments or fixed agency structure",
        "Specialist teams built around the challenge",
        "Senior creative and execution partners selected for fit",
        "More flexibility, less overhead",
        "Focus on outcomes, not outputs",
      ],
    },
  ];

  const services = [
    {
      title: "Diagnose",
      subtitle: "We identify the problem behind the brief.",
      items: [
        "Audience and stakeholder insight",
        "Communications review",
        "Brand and positioning diagnosis",
        "Behaviour change strategy",
        "Message and narrative assessment",
        "Strategic problem definition",
      ],
    },
    {
      title: "Design",
      subtitle: "We turn complexity into a clear plan.",
      items: [
        "Communications strategy",
        "Campaign architecture",
        "Message frameworks",
        "Content planning",
        "Channel planning",
        "Stakeholder engagement strategy",
        "Launch sequencing",
      ],
    },
    {
      title: "Direct",
      subtitle: "We help the strategy survive contact with reality.",
      items: [
        "Agency and partner briefing",
        "Implementation oversight",
        "Strategic project leadership",
        "Internal team support",
        "Creative and content review",
        "Alignment across stakeholders",
      ],
    },
    {
      title: "Measure",
      subtitle: "We help clients understand what worked and what to do next.",
      items: [
        "Campaign evaluation",
        "Performance reporting",
        "Message testing",
        "Post-campaign review",
        "Refinement planning",
      ],
    },
  ];

  const sectors = [
    "Government and public sector",
    "Purpose-led organisations",
    "Complex stakeholder environments",
    "Brand and reputation challenges",
    "Behaviour change programs",
    "Multi-channel campaigns",
    "Projects that need strategy, alignment and implementation discipline",
  ];

  const expertise = [
    "Public trust and participation",
    "Brand and market repositioning",
    "Consumer awareness and education",
    "Complex multi-stakeholder communications",
    "Campaign and launch strategy",
    "Research-led strategic planning",
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-28 pb-12" background="dark" animate={false}>
        <div className="relative overflow-hidden min-h-[680px] bg-[#03090A] -mx-6 lg:-mx-8">
          <iframe
            src="/hero-flag.html"
            title="United Republic animated hero background"
            className="absolute inset-0 h-full w-full opacity-55 pointer-events-none border-0"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,9,10,0.82)_0%,rgba(3,9,10,0.70)_42%,rgba(3,9,10,0.42)_100%)]" />
          <motion.div
            className="relative z-10 max-w-4xl px-6 py-16 md:px-12 md:py-20 lg:px-16"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight text-white"
              variants={{ hidden: { opacity: 0, y: 34 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Start with the right questions, then build the right response.
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-6"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              The United Republic helps organisations define the real problem, shape the right strategy, and guide the work that follows.
            </motion.p>
            <motion.p
              className="text-lg text-gray-300 mb-10 max-w-3xl"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              We work with government, brands and complex organisations to make sure they are solving the right problems before investing in campaigns, content, media, stakeholder activity or creative development.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <Button to="/contact" size="lg">
                Start with a strategic diagnostic
              </Button>
              <Button to="/how-we-work" variant="outline" size="lg">
                See how we work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* What We Do Differently */}
      <Section background="grey">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-8">What we do differently</h2>
        </div>
        <div className="max-w-5xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed">
            The United Republic helps organisations start with the right questions, define the real problem, and build the right response before investing in execution. We use strategic clarity, audience understanding, evidence-based planning and practical problem definition to make sure the work is focused on what matters most, where it can have the greatest influence, and how it can create the strongest outcome.
          </p>
          <p className="text-lg leading-relaxed">
            We then help bring that strategy to life by identifying and briefing the right partners for the task at hand. Rather than pushing work through a fixed agency model, we build the right team around each challenge, drawing on the best specialist talent to deliver campaign execution that stays true to the strategy. That means clients get clear thinking up front, the right expertise in delivery, and work designed to perform in the real world.
          </p>
        </div>
      </Section>

      {/* Why Clients Engage Us Early */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Why clients engage us early</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {proofPoints.map((point, index) => (
            <Card key={index} hover>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#00796B] flex-shrink-0 mt-1" />
                <p className="text-lg">{point}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Our Methodology */}
      <Section background="grey">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-6">Our methodology</h2>
          <p className="text-xl text-[#B8C9C6]">The United Republic Creative Methodology</p>
        </div>
        <div className="space-y-16 max-w-6xl mx-auto">
          {methodology.map((step, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-1">
                <span className="text-6xl font-bold text-[#26A69A] opacity-40">{step.number}</span>
              </div>
              <div className="lg:col-span-11">
                <Card>
                  <h3 className="text-3xl mb-4">{step.title}</h3>
                  <p className="text-lg text-[#B8C9C6] mb-8 leading-relaxed">{step.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-[#00796B] flex-shrink-0 mt-0.5" />
                        <span className="text-[#C8D7D4]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What We Do */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">What we do</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} hover className="h-full">
              <h3 className="text-2xl mb-3 text-[#00796B]">{service.title}</h3>
              <p className="text-base mb-6 text-[#B8C9C6] italic">{service.subtitle}</p>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-[#C8D7D4] leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Built for Complex Organisations */}
      <Section background="grey">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-6">Built for complex organisations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-[#0A1719] p-6 border-l-4 border-[#00796B]">
              <p className="text-base">{sector}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-6">Experience across high-stakes work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {expertise.map((item, index) => (
            <Card key={index} hover>
              <p className="text-lg">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Client Logos */}
      <Section background="grey">
        <ClientLogos />
      </Section>

      {/* Closing CTA */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Solve the right problems before you invest in execution.
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            If you need clearer problem definition, stronger strategy, or the right delivery partners to bring complex work to life, let's talk.
          </p>
          <Button to="/contact" size="lg">
            Book an initial conversation
          </Button>
        </div>
      </Section>
    </>
  );
}