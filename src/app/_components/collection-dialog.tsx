import { FC } from "react";
import Image from "next/image";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CollectionType } from "@/types/collection";

type Props = {
  trigger: React.ReactNode;
  collection: CollectionType;
};

export const CollectionDialog: FC<Props> = (props) => {
  const { trigger, collection } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{collection.id}</DialogTitle>
        </DialogHeader>
        <div>
          <Image {...collection.image} alt={collection.id} />
          <p>{collection.title}</p>
          <p>{collection.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
