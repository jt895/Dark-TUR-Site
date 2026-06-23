import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { CheckCircle } from "lucide-react";

export function WhyIndependent() {
  const benefits = [
    {
      title: "Better briefs",
      description: "Independent strategy starts with the real problem, not the solution. That means briefs are grounded in evidence, focused on outcomes, and clear about what success looks like. Agencies can execute against that clarity instead of guessing at the strategy.",
    },
    {
      title: "Stronger alignment",
      description: "Strategy that's independent of execution bias creates alignment across stakeholders. It's easier to get buy-in when the strategy isn't tied to a particular channel, medium, or agency capability.",
    },
    {
      title: "More focused spend",
      description: "Media-neutral strategy allocates budget where it will have the greatest impact—not where the agency makes the most margin. That means more efficient spend and better return on investment.",
    },
    {
      title: "Clearer accountability",
      description: "When strategy and execution are separated, it's easier to measure what's working. You can evaluate execution quality against strategic intent, rather than having the same team mark their own homework.",
    },
    {
      title: "Better execution through the right partners",
      description: "Independent strategy allows you to brief the best specialist partners for each challenge. You're not limited by what one agency happens to have in-house. That means better creative, better media, better content, and better outcomes.",
    },
    {
      title: "Strategy that works in the real world",
      description: "Independent strategists focus on what will actually work, not what will win awards or keep agency departments busy. Strategy is designed to perform in market, not just look good in a presentation.",
    },
  ];

  return (
    <>
      <Section className="pt-32 pb-20" background="white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-12">Why strategy works</h1>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Too many organisations move to execution too early. The campaign gets briefed before the issue is fully understood. The channels get selected before the audience is clear. The work gets made before the strategy is strong enough to guide it.
            </p>
            <p className="text-2xl text-[#00796B] italic">
              Strategy changes that.
            </p>
          </div>
        </div>
      </Section>

      <Section background="grey">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-l-4 border-[#00796B]">
            <p className="text-lg leading-relaxed">
              Strategy means starting with the problem, not the solution. It means strategic thinking that's free from execution bias, media ownership, or agency capability constraints. And it means clients get clear direction before they invest in delivery.
            </p>
          </Card>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">The benefits of strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} hover className="h-full">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-7 h-7 text-[#00796B] flex-shrink-0 mt-1" />
                  <h3 className="text-2xl">{benefit.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed ml-11">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section background="grey">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-4xl mb-8">The problem with integrated agencies</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Traditional full-service agencies promise integrated strategy and execution under one roof. In practice, this often means strategy is shaped by what the agency can deliver, rather than what the client actually needs.
              </p>
              <p>
                Creative teams want creative solutions. Media teams want media budgets. Digital teams want digital programs. The strategy ends up serving the agency's capability and revenue model, not the client's problem.
              </p>
              <p>
                Independent strategy removes that bias. It allows the strategy to be genuinely media-neutral, channel-agnostic, and focused purely on what will work best.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl mb-8">The tailored team model</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                The United Republic doesn't try to do everything. We do strategy—problem definition, strategic planning, and direction. Then we help identify and brief the right specialist partners to bring that strategy to life.
              </p>
              <p>
                That might mean creative agencies for campaign development, media specialists for planning and buying, content producers for digital and social, research partners for testing and evaluation, or PR firms for stakeholder engagement.
              </p>
              <p>
                The team is built around the challenge, not the other way around. And because we're independent, we can choose the best partners based on fit, capability and track record—not internal politics or revenue targets.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl mb-8">Strategy that guides execution</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Good strategy doesn't just sit in a document. It guides every decision during execution—from message development to channel selection, creative direction to campaign phasing.
              </p>
              <p>
                The United Republic can provide strategic oversight during delivery, helping ensure execution partners stay true to the strategy, reviewing creative work, providing direction when issues arise, and keeping stakeholders aligned.
              </p>
              <p>
                That means the strategy actually influences the work, rather than being ignored the moment production starts.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Start with strategy
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            If you need strategic clarity before you invest in execution—and want to make sure that clarity carries through to delivery—let's talk.
          </p>
          <Button to="/contact" size="lg">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}
