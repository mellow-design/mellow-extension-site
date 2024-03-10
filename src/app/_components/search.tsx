"use client";

import { FC, useCallback } from "react";
import { useImmer } from "use-immer";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const useSearch = () => {
  const [searchValue, setSearchValue] = useImmer("");

  const handleSearch = useCallback((searchValue: string) => {
    setSearchValue(searchValue);
  }, []);

  return {
    searchValue,
    handleSearch,
  };
};

type Props = {
  onSearch: (searchValue: string) => void;
};

export const Search: FC<Props> = (props) => {
  const { onSearch } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = e.currentTarget.search.value;
    onSearch(searchValue);
  };
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input id="search" placeholder="Enter keywords" />
          <Button className="w-[120px]" type="submit">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};
