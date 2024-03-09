import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import Image from "next/image";

import { api } from "@/trpc/server";
import { COLLECTIONS } from "@/app/const/collection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex-1 py-4">
      <div className="container max-w-7xl space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <form className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input id="search" placeholder="Enter keywords" />
              <Button className="w-full" type="submit">
                Search
              </Button>
            </div>
          </form>
        </div>
        <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {COLLECTIONS.map((collection) => {
            return (
              <Card key={collection.id}>
                <div>
                  <Image
                    alt={collection.description}
                    className="rounded-t-lg"
                    height="250"
                    width="400"
                    src={collection.image}
                  />
                </div>
                <CardContent className="p-4">
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
      </div>
    </main>
  );
}
