import { QualityCards } from "@components/Cards/QualityCards/QualityCards";

import { TriangleAlert, Clock, Boxes } from "lucide-react";

export const Features = () => {
  return (
    <section className="features">
      <div className="features__content flex flex-col justify-center items-center p-10 text-white">
        <h2 className="title font-medium text-left text-[20px] md:text-[35px]">A BIT MORE FEATURES</h2>
        <QualityCards
          info={[
            {
              icon: <TriangleAlert size={"48px"} />, // or "AlertTriangle" depending on lucide-react version
              title: "Clan Wars",
              desc: "Manage battles in the games. Add teams and fights.",
            },
            {
              icon: <Clock size={"48px"} />,
              title: "Coming Soon",
              desc: "Use coming soon page with countdown before release feature or service.",
            },
            {
              icon: <Boxes size={"48px"} />, // or "Blocks" / "Cuboid"
              title: "Page Builder",
              desc: "Visual Composer will help you build site pages.",
            },
          ]}
        />
      </div>
    </section>
  );
};
