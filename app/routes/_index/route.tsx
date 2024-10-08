import { type V2_MetaFunction } from "@remix-run/cloudflare";
import avatarSrc from "~/assets/avatar.jpeg";
import akohubLogoSrc from "~/assets/akohub-logo.webp";
import coobyLogoSrc from "~/assets/cooby-logo.png";
import differentuLogoSrc from "~/assets/differentu-logo.png";
import builduifastLogoSrc from "~/assets/builduifast-logo.png";
import { ContactMeButton } from "./ContactMeButton";
import { ExperienceList } from "./ExperienceList";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Justin Chien" },
    {
      name: "description",
      content:
        "我是 Justin，一位 Web 全端工程師，擅長開發各類 Web 應用，尤其專精於打造精緻的使用者介面。",
    },
    { property: "og:title", content: "Justin Chien" },
    {
      property: "og:description",
      content:
        "我是 Justin，一位 Web 全端工程師，擅長開發各類 Web 應用，尤其專精於打造精緻的使用者介面。",
    },
    { property: "og:image:alt", content: "Justin Chien" },
    { property: "twitter:title", content: "Justin Chien" },
    {
      property: "twitter:description",
      content:
        "我是 Justin，一位 Web 全端工程師，擅長開發各類 Web 應用，尤其專精於打造精緻的使用者介面。",
    },
  ];
};

export default function Page() {
  return (
    <div className="pb-20 pt-6 md:max-w-[398px]">
      <main>
        <section className="flex flex-col space-y-7">
          <img
            src={avatarSrc}
            alt="Author avatar"
            className="h-16 w-16 rounded-full"
          />
          <p className="leading-7">
            我是 Justin，一位 Web 全端工程師，擅長開發各類 Web
            應用，尤其專精於打造精緻的使用者介面。
          </p>
          <p className="leading-7">
            我對 SaaS
            產品及使用者體驗充滿熱忱，腦海中總有無數的創意點子，同時也正在進行幾個
            Side
            Project。我希望透過技術與設計，將我的創意實現，並為使用者帶來驚喜與美好的體驗。
          </p>
          <p className="leading-7">
            如果你有任何建議或合作機會，歡迎隨時與我聯繫，一起討論與交流。
          </p>
          <ContactMeButton />
        </section>

        <div className="my-10 h-px bg-gray-200" />

        <section className="space-y-8">
          <ExperienceList
            title="工作經歷"
            items={[
              {
                logoSrc: akohubLogoSrc,
                name: "Akohub",
                note: "Frontend Engineer",
                link: "https://apps.shopify.com/ako-retargeting",
              },
              {
                logoSrc: coobyLogoSrc,
                name: "Cooby",
                note: "Full Stack Engineer",
                link: "https://www.cooby.co",
                isActive: true,
              },
            ]}
          />
          <ExperienceList
            title="Projects"
            items={[
              {
                logoSrc: differentuLogoSrc,
                name: "DifferentU",
                note: "AI 頭像生成服務",
                link: "https://differentu.pages.dev",
              },
              {
                logoSrc: builduifastLogoSrc,
                name: "Build UI Fast",
                note: "Components 組合包 + UI 構建指南",
                link: "https://build-ui-fast.com",
                isActive: true,
              },
            ]}
          />
        </section>
      </main>

      <div className="mb-5 mt-10 h-px bg-gray-200" />

      <div className="flex items-center space-x-1.5 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-gray-300"
        >
          <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
          <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
        </svg>
        <span className="flex-shrink-0 text-sm">xyz030206@gmail.com</span>
      </div>
    </div>
  );
}
