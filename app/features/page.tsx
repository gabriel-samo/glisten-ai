import Container from "@/components/Container";
import StarGrid from "@/components/svg/StarGrid";

export default function FeaturesPage() {
  return (
    <Container className="mt-2 text-center">
      <div className="relative min-h-[30vh] w-full md:min-h-[45vh]">
        <StarGrid />
        <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
          Cool Features
        </h2>
      </div>
    </Container>
  );
}
