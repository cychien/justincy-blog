import { Link } from "@remix-run/react";
import { cn } from "~/utils";

type Experience = {
  logoSrc: string;
  name: string;
  note: string;
  link: string;
  isActive?: boolean;
};

type ExperienceListProps = {
  title: string;
  items: Experience[];
};

function ExperienceList({ title, items }: ExperienceListProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-sm">{title}</h2>
      <ul className="min-w-max rounded-lg bg-[#F0F0F0]">
        {items.map((item, index) => (
          <li
            key={index}
            className={cn(
              "flex items-center justify-between gap-6 rounded-lg p-[10px] text-sm",
              { "pretty-shadow bg-white": item.isActive }
            )}
          >
            <span className="flex flex-shrink-0 items-center space-x-2">
              <img
                src={item.logoSrc}
                alt={`${item.name} logo`}
                className="h-6 w-6 rounded-sm object-cover"
              />
              <Link to={item.link}>{item.name}</Link>
            </span>
            <span className="flex-shrink-0 text-xs text-gray-400">
              {item.note}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { ExperienceList };
