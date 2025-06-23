import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start Learning your way.</div>
      <h2 className="text-3xl font-bold">
        Build and Personalize your Learning Companion
      </h2>
      <p>
        Pick a name, subject, voice & personality — and start learning through voice conversations that feel natural and fun.
      </p>
      <Image
        src="/images/cta.svg"
        alt="CTA Image"
        width={500}
        height={300}
        className="cta-image"
      />
          <button className="btn-primary">
              <Image
                  src="/icons/plus.svg"
                  alt="Plus Icon"
                  width={12}
                  height={12}
              />
              <Link href="/companions/new">
                  Build a new Companion
              </Link>
        </button>
    </section>
  );
};

export default CTA;
