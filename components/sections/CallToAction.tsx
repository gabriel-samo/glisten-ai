import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import PlainLogo from "@/components/svg/PlainLogo";

export default function CallToAction() {
  return (
    <Container className="relative overflow-hidden py-32 text-center font-medium md:py-40">
      <div className="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-blue-500/50 blur-[160px] filter" />
      <div className="glass-container rounded-lg bg-gradient-to-b from-slate-800 to-slate-950 p-4 md:rounded-xl">
        <PlainLogo />
      </div>
      <h2 className="mt-8 max-w-xl text-balance text-5xl">
        AI powered insights for designers
      </h2>
      <ButtonLink link="/features" className="mt-6">
        Start Now
      </ButtonLink>
    </Container>
  );
}
