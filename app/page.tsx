"use client";
import { HoverCardManual } from "@/components/HoverCard";
import { IdeaCard } from "@/components/IdeaCard";
import { IdeaModal } from "@/components/IdeaModal";
import { SearchInput } from "@/components/SearchInput";

import { TAGS } from "@/constants/TAGS";
import { useIdeaStore } from "@/lib/store";

export default function Home() {
  const { ideas, searchQuery, searchTag, setSearchTag } = useIdeaStore(
    (state) => state
  );

  const filteredIdeas = ideas.filter((idea) => {
    if (searchQuery && !searchTag) {
      return (
        idea.title.includes(searchQuery) ||
        idea.description.includes(searchQuery)
      );
    }

    if (searchTag && !searchQuery) {
      return idea.tag === searchTag;
    }

    if (searchTag && searchQuery) {
      return (
        idea.title.includes(searchQuery) ||
        idea.description.includes(searchQuery) ||
        idea.tag === searchTag
      );
    }

    return true;
  });

  function render() {
    if (filteredIdeas.length === 0) {
      return (
        <h1 className="text-center text-text-light dark:text-text-dark col-span-2 text-lg capitalize">
          No ideas to display right now 💡
        </h1>
      );
    }

    if (filteredIdeas.length > 0) {
      return filteredIdeas.map((idea) => (
        <IdeaCard
          id={idea.id}
          title={idea.title}
          description={idea.description}
          tag={idea.tag}
          rating={idea.rating}
          createdAt={idea.createdAt}
          key={idea.id}
        />
      ));
    }
  }

  return (
    <section className="min-h-screen flex bg-background-light dark:bg-background-dark">
      <div className="md:max-w-7xl  mx-auto w-full px-0 flex flex-col gap-4 md:gap-0">
        <div className="mt-2 flex flex-col md:mx-auto md:flex-row items-center py-1 md:items-start  md:px-5 md:gap-12 md:py-2 gap-4">
          <SearchInput className="md:w-96 w-3/4 h-10 border-[1px] text-text-light dark:text-text-dark border-stone-400 focus:border-0 focus-visible:ring-stone-500 dark:focus-visible:ring-stone-300 outline-none active:outline-none" />
          <ul className="flex md:self-center md:flex-row flex-wrap md:gap-4 gap-2 md:justify-center md:items-center text-text-light dark:text-text-dark justify-center">
            {TAGS.map((ele) => (
              <li
                key={ele}
                onClick={() => {
                  setSearchTag(ele);
                }}
                className="px-1.5 py-.5 md:text-[16px] text-[15px] bg-accent-orange  rounded-xl hover:opacity-[.9] hover:cursor-pointer"
              >
                {ele}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2 flex flex-row  justify-around md:mx-0  md:justify-around md:flex-row items-center py-1 md:items-start  md:px-5 md:gap-12 md:py-2 ">
          <IdeaModal />
          <div className="flex gap-2 items-center justify-center text-text-light dark:text-text-dark ">
            <h3>Feeling stuck?</h3>

            <HoverCardManual />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:place-self-center md:gap-x-20 md:gap-y-10 flex flex-col mx-auto gap-y-6 mt-2 md:p-2 ">
          {render()}
        </div>
      </div>
    </section>
  );
}
