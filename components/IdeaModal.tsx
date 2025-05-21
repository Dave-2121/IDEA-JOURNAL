"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TAGS } from "@/constants/TAGS";
import { useIdeaStore } from "@/lib/store";
import { useState } from "react";
import RatingComponent from "./RatingComponent";

export function IdeaModal() {
  const [open, setOpen] = useState<boolean>(false);

  const [rating, setRating] = useState<number>(0);

  const { addIdea } = useIdeaStore((state) => state);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;

    const formData = new FormData(form);

    const { title, description, tag } = Object.fromEntries(formData);

    if (!title || !description || !tag || !rating) return;

    if (
      typeof title !== "string" ||
      typeof description !== "string" ||
      typeof tag !== "string" ||
      typeof rating !== "number"
    )
      return;

    addIdea(title, description, tag, rating);

    setRating(0);

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-btnPrimary-light   dark:bg-btnPrimary-dark text-text-light dark:text-text-dark hover:shadow-btnHover shadow-btn"
          variant="secondary"
        >
          New Idea
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background-light text-text-light">
        <DialogHeader>
          <DialogTitle>New Idea</DialogTitle>
        </DialogHeader>
        <form id="idea-form" onSubmit={handleSubmit}>
          <div className="grid md:gap-4 py-4 gap-5">
            <div className="md:grid md:grid-cols-4 md:items-center md:gap-4 flex items-center flex-col gap-2">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                name="title"
                id="title"
                className="col-span-3 border-stone-600"
              />
            </div>

            <div className="md:grid md:grid-cols-4 md:items-center md:gap-4 flex items-center flex-col gap-2 ">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                name="description"
                className="col-span-3 border-stone-600"
              />
            </div>
            <div className="md:grid md:grid-cols-4 md:items-center md:gap-4 flex items-center flex-col gap-2">
              <Label htmlFor="tag" className="text-right">
                Tag
              </Label>
              <Select name="tag">
                <SelectTrigger
                  className="w-[180px] col-start-2 col-end-4 border-stone-600"
                  id="tag"
                  name="tag"
                >
                  <SelectValue placeholder="Select a tag" id="tag" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Ideas</SelectLabel>
                    {TAGS.map((ele) => (
                      <SelectItem value={ele} key={ele}>
                        {ele}
                      </SelectItem>
                    ))}
                    {/* <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem> */}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="md:grid md:grid-cols-4 md:items-center md:gap-4 flex items-center flex-col gap-2">
              <Label htmlFor="rating" className="text-right">
                Rating
              </Label>
              <RatingComponent rating={rating} setRating={setRating} />
            </div>
          </div>
        </form>
        <DialogFooter>
          <Button
            type="submit"
            form="idea-form"
            className="bg-btnAccent-light shadow-btn hover:shadow-btnHover dark:bg-btnAccent-dark"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
