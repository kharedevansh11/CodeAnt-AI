import * as React from "react";
import { RepositoryCard } from "./RepoCard";
import SearchBox from "./SearchBox";
import { HeaderSection } from "./Header";


const repositories = [
  {
    name: "design-system",
    visibility: "Public",
    language: "React",
    size: "7320 KB",
    lastUpdate: "1 day ago"
  },
  {
    name: "codeant-ci-app",
    visibility: "Private",
    language: "Javascript",
    size: "5871 KB",
    lastUpdate: "2 days ago"
  },
  {
    name: "analytics-dashboard",
    visibility: "Private",
    language: "Python",
    size: "4521 KB",
    lastUpdate: "5 days ago"
  },
  {
    name: "mobile-app",
    visibility: "Public",
    language: "Swift",
    size: "3096 KB",
    lastUpdate: "3 days ago"
  },
  {
    name: "e-commerce-platform",
    visibility: "Private",
    language: "Java",
    size: "6210 KB",
    lastUpdate: "6 days ago"
  },
  {
    name: "blog-website",
    visibility: "Public",
    language: "HTML/CSS",
    size: "1876 KB",
    lastUpdate: "4 days ago"
  },
  {
    name: "social-network",
    visibility: "Private",
    language: "PHP",
    size: "5432 KB",
    lastUpdate: "7 days ago"
  }
];

export function RepositoryList() {
  return (
    <div className="flex flex-col flex-1 shrink justify-center self-stretch p-6 my-auto basis-0 bg-neutral-50 min-h-[960px] min-w-[240px] max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col flex-1 w-full bg-white rounded-xl border border-gray-200 border-solid shadow-sm max-md:max-w-full">
        <HeaderSection totalRepositories={33} />
        <div className="flex flex-1 items-start size-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
            {repositories.map((repo, index) => (
              <RepositoryCard
                key={repo.name}
                name={repo.name}
                visibility={repo.visibility}
                language={repo.language}
                size={repo.size}
                lastUpdate={repo.lastUpdate}
                isAlternate={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}