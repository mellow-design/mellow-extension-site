"use client";

import { FC } from "react";
import { IconArrowsDiagonal } from "@tabler/icons-react";

import { CardContent, Card } from "@/components/ui/card";
import { CollectionDialog } from "@/app/_components/collection-dialog";
import { Search, useSearch } from "@/app/_components/search";
import { CollectionType } from "@/types/collection";

type Props = {
  collections: CollectionType[];
};

export const CollectionList: FC<Props> = (props) => {
  const { collections } = props;
  const { searchValue, handleSearch } = useSearch();

  const filterCollections = collections.filter((collection) => {
    return (
      collection.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      collection.description.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <>
      <Search onSearch={handleSearch} />
      <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filterCollections.map((collection) => {
          return (
            <Card key={collection.id}>
              <div
                className="relative h-[200px] w-full rounded-t-lg bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${collection.image.src})`,
                }}
              >
                <CollectionDialog
                  trigger={
                    <div className="absolute right-[8px] top-[8px] flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-lg bg-gray-900/20">
                      <IconArrowsDiagonal color="#fff" size={16} />
                    </div>
                  }
                  collection={collection}
                />
              </div>
              <CardContent className="min-h-[64px] p-4">
                <h3 className="line-clamp-2 font-[500] leading-none">
                  {collection.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {collection.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};
