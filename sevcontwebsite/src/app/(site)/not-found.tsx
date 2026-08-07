import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-white py-24">
      <Container className="text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">
          404
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-navy-600">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <div className="mt-8">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}
