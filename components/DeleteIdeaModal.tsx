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

import { useIdeaStore } from "@/lib/store";
import { useState } from "react";
import { DialogDescription } from "@radix-ui/react-dialog";

import { Trash2Icon } from "lucide-react";

export function DeleteIdeaModal({ id, title }: { id: string; title: string }) {
  const [open, setOpen] = useState<boolean>(false);

  const { deleteIdea } = useIdeaStore((state) => state);

  function handleSubmit() {
    deleteIdea(id);

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-btnDanger-light dark:bg-btnDanger-dark rounded-lg"
          variant="destructive"
        >
          Delete 💡
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]  bg-background-light text-text-light">
        <DialogHeader>
          <DialogTitle>Delete Idea</DialogTitle>
        </DialogHeader>
        <DialogDescription>Delete Idea {title}?</DialogDescription>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            className="bg-btnDanger-light shadow-btn hover:shadow-btnHover dark:bg-btnDanger-dark"
          >
            <Trash2Icon />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
