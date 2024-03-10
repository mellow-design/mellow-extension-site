import { type StaticImageData } from "next/image";

export type CollectionType = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
};
