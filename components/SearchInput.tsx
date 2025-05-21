import { Input } from "@/components/ui/input";
import { useIdeaStore } from "@/lib/store";
import { useEffect, useState } from "react";

export function SearchInput({ className }: { className?: string }) {
  const { searchQuery, setSearchQuery } = useIdeaStore((state) => state);

  const [input, setInput] = useState<string>(searchQuery);

  useEffect(() => {
    setSearchQuery(input.toLocaleLowerCase().trim());
  }, [input, setSearchQuery]);

  return (
    <Input
      className={className}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      type="search"
      placeholder="🔍 Search..."
    />
  );
}
