import { ImagePrimitive as Image } from "@cychien/cotton-ui";

import { ArrowRight } from "~/components/icons";

type AnnouncementProps = {
  imagePlaceholder: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  imageSrcSet: string;
  imageSizes: string;
  title: string;
  description: { text: string; link?: string }[];
};

function Announcement({
  imagePlaceholder,
  imageUrl,
  imageWidth,
  imageHeight,
  imageSrcSet,
  imageSizes,
  title,
  description,
}: AnnouncementProps) {
  return (
    <div>
      <div className="relative">
        <div className="font-latin text-sm text-gray-500">2023 / 9 / 3</div>
        <div className="absolute top-1/2 hidden h-0.5 -translate-y-1/2 bg-gray-300 lg:-left-8 lg:block lg:w-4 xl:-left-16 xl:w-10" />
      </div>
      <div className="mt-5  lg:mt-8">
        <Image
          width={imageWidth}
          height={imageHeight}
          placeholder={imagePlaceholder}
          src={imageUrl}
          srcSet={imageSrcSet}
          sizes={imageSizes}
          className="max-w-full rounded-xl"
        />
      </div>
      <div className="mt-8 lg:mt-12">
        <h2 className="text-xl font-medium">{title}</h2>
        <div className="mt-5 space-y-4 lg:mt-6">
          {description.map((d) => (
            <p key={d.text} className="text-sm leading-6 text-gray-700">
              {d.text}
              {d.link && (
                <a
                  href={d.link}
                  className="ml-4 inline-block space-x-1.5 text-gray-500 hover:text-[#EC4733]"
                >
                  <ArrowRight className="h-3 w-3 flex-shrink-0 translate-y-px" />
                </a>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Announcement };
