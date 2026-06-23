import { Section } from "../components/Section";
import { Button } from "../components/Button";

export function NotFound() {
  return (
    <Section className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl mb-6">404</h1>
        <h2 className="text-3xl md:text-4xl mb-6">Page not found</h2>
        <p className="text-xl text-[#B8C9C6] mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button to="/" size="lg">
          Return home
        </Button>
      </div>
    </Section>
  );
}
