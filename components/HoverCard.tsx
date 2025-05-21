import { MailQuestion } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { IDEAS } from "@/constants/IDEAS";

export function HoverCardManual() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          className="bg-yellow-300 dark:bg-yellow-300 text-text-light dark:text-text-dark hover:shadow-btnHover shadow-btn"
          variant="destructive"
        >
          <MailQuestion />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">🧠 Prompt Starters</h4>
            {IDEAS.map((idea) => (
              <p className="text-sm text-start" key={idea}>
                🟡{idea}
              </p>
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
