import { QualityCards } from "@components/Cards/QualityCards/QualityCards";
import { Rss,ShoppingCart,UserRoundGroup } from "lucide-react";

import { Link } from "react-router";

import demo1 from "@/assets/image/demo1.jpg"
import demo2 from "@/assets/image/demo2.jpg"
import demo3 from "@/assets/image/demo3.jpg"
import demo4 from "@/assets/image/demo4.jpg"

const imageUrl =
  "https://drive.google.com/file/d/1CJeJSMyRemmfpSDTpLD9EgeRkRRtfJMp/view";


export const Introduction = () => {
  return (
    <section className="introduction bg-[#080325] ">
      <div className="introduction__content">
        <QualityCards
          info={[
            {
              icon: <Rss size={"48px"} />,
              title: "Blog",
              desc: "Youplay can be used for simple blogging, not only full-stack gaming template.",
            },
            {
              icon: <ShoppingCart size={"48px"} />,
              title: "Store",
              desc: "If you want to sale goods, let's do it. This is so easy with Youplay",
            },
            {
              icon: <UserRoundGroup size={"48px"} />,
              title: "Social Network",
              desc: "Build your gaming social network, or forum for Clan members.",
            },
          ]}
        />
        <h2
          style={{
            textAlign: "center",
            color: "white",
            margin: "100px",
            fontSize: "40px",
          }}
        >
          Youplay Comes with 4 Demo
        </h2>
        <div className="demos grid justify-center items-center grid-cols-12 gap-4">
          <div className="demo col-span-12 md:col-span-6  flex justify-center">
            <Link to="/dark">
              <img className="demo__image object-cover" src={demo3} alt="" />
              </Link>
            <h5 className="text-white text-[18px]">
              Dark <span className="text-gray-600 text-[13.5px]">demo</span>
            </h5>
          </div>
          <div className="demo col-span-12 md:col-span-6 ">
            <a href="">
              <img className="demo__image object-cover " src={demo2} alt="" />
            </a>
            <h5 className="text-white text-[18px]">
              Shooter <span className="text-gray-600 text-[13.5px]">demo</span>
            </h5>
          </div>
          <div className="demo col-span-12 md:col-span-6 ">
            <a href="">
              <img className="demo__image object-cover" src={demo1} alt="" />
            </a>
            <h5 className="text-white text-[18px]">
              Anime <span className="text-gray-600 text-[13.5px]">demo</span>
            </h5>
          </div>
          <div className="demo col-span-12 md:col-span-6 ">
            <a href="">
              <img className="demo__image object-cover" src={demo4} alt="" />
            </a>
            <h5 className="text-white text-[18px]">
              Light <span className="text-gray-600 text-[13.5px]">demo</span>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};
