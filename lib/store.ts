import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { persist } from "zustand/middleware";

export type Idea = {
  id: string;
  title: string;
  description: string;
  tag: string;
  createdAt: string;
  rating: number;
};

export type State = {
  ideas: Idea[];
  darkMode: boolean;
  searchQuery: string;
  searchTag: string;
};

export type Actions = {
  addIdea: (
    title: string,
    description: string,
    tag: string,
    rating: number
  ) => void;
  toggleDarkMode: () => void;
  editIdea: (
    title: string,
    description: string,
    tag: string,
    rating: number,
    id: string
  ) => void;
  deleteIdea: (id: string) => void;
  setSearchQuery: (input: string) => void;
  setSearchTag: (tag: string) => void;
};

export const useIdeaStore = create<State & Actions>()(
  persist(
    (set) => ({
      ideas: [],
      darkMode: false,
      addIdea: (
        title: string,
        description: string,
        tag: string,
        rating: number
      ) =>
        set((state) => ({
          ideas: [
            ...state.ideas,
            {
              id: uuid(),
              title,
              description,
              tag,
              rating,
              createdAt: new Date(Date.now()).toLocaleDateString(),
            },
          ],
        })),
      toggleDarkMode: () =>
        set((state) => ({
          darkMode: !state.darkMode,
        })),
      editIdea: (
        title: string,
        description: string,
        tag: string,
        rating: number,
        id: string
      ) =>
        set((state) => ({
          ideas: state.ideas.map((idea) =>
            idea.id === id
              ? { ...idea, title, description, tag, rating }
              : { ...idea }
          ),
        })),
      deleteIdea: (id: string) =>
        set((state) => ({
          ideas: state.ideas.filter((idea) => idea.id !== id),
        })),
      searchQuery: "",
      setSearchQuery: (input: string) =>
        set(() => ({
          searchQuery: input,
        })),
      searchTag: "",
      setSearchTag: (tag: string) =>
        set(() => ({
          searchTag: tag,
        })),
    }),
    {
      name: "idea-store",
      partialize: (state) => ({
        ideas: state.ideas,
        darkMode: state.darkMode,
      }),
    }
  )
);
