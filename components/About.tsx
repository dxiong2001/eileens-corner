import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
  return (
    <section id="about" className="dark-bg">
      <div className="flex">
        <div className="flex-full">
          <AboutCard
            title="Reviews"
            icon="/icons/design.svg"
            description="I create design  products with unique ideas."
            projects={7}
          />
          <AboutCard
            title="Lists"
            icon="/icons/code.svg"
            description="I develop Front-End with coding super smooth."
            projects={10}
          />
          <AboutCard
            title="To Watch"
            icon="/icons/phone.svg"
            description="I develop cross-platform mobile applications."
            projects={7}
          />
        </div>

        <div className="image-collage">
          {/* <Image
            src="/images/section-image-collage1.jpg"
            width={225}
            height={400}
            alt="collage image 1"
          /> */}
          <Image
            src="/images/section-image-collage2.jpg"
            width={330}
            height={600}
            alt="collage image 2"
          />
          <Image
            src="/images/section-image-collage3.jpg"
            width={330}
            height={600}
            alt="collage image 3"
          />
        </div>
      </div>

      {/* <div className="flex partners justify-space">
        <Image
          src="/images/partners/wallety.png"
          height={45}
          width={180}
          alt="wallety"
        />
        <Image
          src="/images/partners/artisty.png"
          height={45}
          width={180}
          alt="artisty"
        />
        <Image
          src="/images/partners/khedma-lik.png"
          height={45}
          width={180}
          alt="khedma-lik"
        />
        <Image
          src="/images/partners/directy.png"
          height={45}
          width={180}
          alt="directy"
        />
        <Image
          src="/images/partners/telefy.png"
          height={45}
          width={180}
          alt="telefy"
        />
      </div> */}
    </section>
  );
}

type Props = {
  title: string;
  icon: string | StaticImageData;
  description: string;
  projects: number;
};

function AboutCard({ title, icon, description, projects }: Props) {
  return (
    <div className="light-bg about-card">
      <div className="flex justify-space">
        <h3 className="red">{title}</h3>
        <Image src={icon} width={28} height={28} alt={title} />
      </div>
      <p className="white">{description}</p>
      <span className="gray">{projects.toString()} projects</span>
    </div>
  );
}
