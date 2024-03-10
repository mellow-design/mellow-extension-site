import { unstable_noStore as noStore } from "next/cache";

import { api } from "@/trpc/server";
import { COLLECTIONS } from "@/app/const/collection";
import { CollectionList } from "@/app/_components/collection-list";

export default async function Home() {
  noStore();
  await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex-1 py-4">
      <div className="container max-w-7xl space-y-4">
        <CollectionList collections={COLLECTIONS} />
      </div>
    </main>
  );
}
