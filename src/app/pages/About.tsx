import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Button } from "../components/Button";

export function About() {
  return (
    <>
      <Section className="pt-32 pb-20" background="white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-12">About</h1>
          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              The United Republic is an independent communications strategy consultancy led by senior practitioners with deep experience across government, major brands, complex stakeholder environments and behaviour change.
            </p>
            <p>
              We help organisations define the real problem, shape the right strategic response, and guide the work through to delivery when needed.
            </p>
            <p className="text-xl text-[#00796B] italic">
              Our role is not to add noise. It is to bring clarity, direction and judgement at the point where communications decisions matter most.
            </p>
          </div>
        </div>
      </Section>

      <Section background="grey">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">The tailored team model</h2>
          <div className="space-y-8">
            <Card>
              <p className="text-lg leading-relaxed mb-6">
                We do not force projects through a fixed agency structure. We build the right team around the challenge, drawing on specialist partners and senior talent to make sure strategy is carried through in the right way.
              </p>
              <p className="text-lg leading-relaxed">
                This means clients get strategic thinking that's independent of execution bias, combined with access to the best specialists for each part of the work—whether that's creative development, media strategy, content production, stakeholder engagement, or campaign delivery.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">How we're different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card hover>
              <h3 className="text-2xl mb-4 text-[#00796B]">Strategy before execution</h3>
              <p className="text-[#C8D7D4] leading-relaxed">
                We start with the problem, not the solution. That means better briefs, clearer direction, and work that's focused on what matters most.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-2xl mb-4 text-[#00796B]">Independent advice</h3>
              <p className="text-[#C8D7D4] leading-relaxed">
                We don't have a vested interest in a particular channel, medium or approach. Our only interest is making sure the strategy is right.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-2xl mb-4 text-[#00796B]">Senior practitioners</h3>
              <p className="text-[#C8D7D4] leading-relaxed">
                You work with experienced strategists who've delivered complex, high-stakes communications programs—not junior account teams.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-2xl mb-4 text-[#00796B]">The right partners</h3>
              <p className="text-[#C8D7D4] leading-relaxed">
                We identify, brief and guide specialist partners based on what the work needs—not what we happen to have in-house.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-2xl mb-4 text-[#00796B]">Evidence-led</h3>
              <p className="text-[#C8D7D4] leading-relaxed">
                Our strategies are grounded in research, insight and data—not assumptions or creative instinct.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-2xl mb-4 text-[#00796B]">Focused on outcomes</h3>
              <p className="text-[#C8D7D4] leading-relaxed">
                We measure success by results, not outputs. Strategy is only as good as what it achieves.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="grey">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Experience</h2>
          <Card>
            <p className="text-lg leading-relaxed mb-6">
              The United Republic has delivered strategic communications work across government, public sector, purpose-led organisations, major brands and complex stakeholder environments.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our work spans behaviour change campaigns, brand repositioning, multi-stakeholder engagement programs, crisis and reputation management, campaign strategy and launch planning.
            </p>
            <p className="text-lg leading-relaxed">
              We've led projects including state and local government elections, national awareness campaigns, product and brand launches, and long-term strategic consulting engagements with government and corporate clients.
            </p>
          </Card>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Principal Consultant - James Trrebilcock</h2>
          <Card className="bg-[#F5F5F5]">
            <p className="text-lg leading-relaxed mb-6">
              With 25 years of experience across strategy, communications, engagement, customer experience and operational leadership, I help organisations solve the right problems before they invest in execution. Through The United Republic, I work with government, community-facing organisations and major brands to uncover the real issues, identify the audiences that matter most, and build evidence-based strategies that connect insight, messaging and delivery.
            </p>
            <p className="text-lg leading-relaxed">
              My work is grounded in research, customer and stakeholder understanding, and a clear view of what drives participation, trust and growth. I bring together strategy, communications and implementation planning to give clients a clear path forward, practical actions, and the right partners to deliver work that performs in the real world.
            </p>
          </Card>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Let's talk about your challenge
          </h2>
          <p className="text-xl text-[#B8C9C6] mb-10 max-w-3xl mx-auto leading-relaxed">
            If you're facing a complex communications challenge and need strategic clarity before you invest in execution, we'd like to hear from you.
          </p>
          <Button to="/contact" size="lg">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}