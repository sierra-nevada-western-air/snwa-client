import { ReactNode } from "react";

const Hero: React.FC<HeroProps> = ({ children, options }) => {
  return (
    <section className={`hero ${options}`}>
      <div className="hero-body">{children}</div>
    </section>
  );
};

interface HeroProps {
  children: ReactNode;
  options?: string;
}

export default Hero;
