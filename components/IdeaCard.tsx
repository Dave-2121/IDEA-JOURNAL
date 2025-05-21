import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { Idea } from "@/lib/store";
import { EditIdeaModal } from "./EditIdeaModal";
import { DeleteIdeaModal } from "./DeleteIdeaModal";

export function IdeaCard({
  title,
  description,
  tag,
  rating,
  createdAt,
  id,
}: Idea) {
  return (
    <Card className="md:w-[350px] w-[338px] bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark">
      <CardHeader>
        <CardTitle>{`🚀 ${title}`}</CardTitle>
        <CardDescription>{`"${description}"`}</CardDescription>
      </CardHeader>
      <CardContent className="flex text-sm justify-start gap-10">
        <div className="flex items-center justify-center gap-1">
          <h4>Tag:</h4>
          <span>{tag}</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <h4>Rating:</h4>
          {Array.from({ length: rating }).map((ele, ind) => (
            <span key={ind}>
              <StarIcon size={18} fill="#f7cd03" />
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-2">
        <EditIdeaModal
          id={id}
          title={title}
          description={description}
          tag={tag}
          rating={rating}
          createdAt={createdAt}
          key={id}
        />
        <DeleteIdeaModal id={id} title={title} />

        <time className="ml-auto text-sm">{createdAt}</time>
      </CardFooter>
    </Card>
  );
}
