import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  alternate?: boolean;
}

const SectionWrapper = ({ children, className = "", id, alternate }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${alternate ? "bg-cream-light" : "bg-background"} ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
};

export default SectionWrapper;
