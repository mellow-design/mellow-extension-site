import { unstable_noStore as noStore } from "next/cache";

import { api } from "@/trpc/server";

export default async function Home() {
  noStore();
  await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex-1 bg-gradient-to-b from-purple-50 to-cyan-500 py-4">
      <div className="container absolute left-[50%] top-[45%] max-w-7xl -translate-x-[50%] -translate-y-[50%] space-y-4">
        <h1 className="mb-8 text-6xl font-extrabold leading-none tracking-tight">
          <div>
            DALL-E
            <span className="ml-[16px] bg-gradient-to-r from-[#58a6ff] to-[#F55131] bg-clip-text leading-[68px] text-transparent">
              Images and prompts
            </span>
          </div>
          Bulk Download
        </h1>
        <p className="mb-8 text-2xl leading-8 text-gray-700">
          A Chrome extension designed for users of ChatGPT who utilize GPTs or
          DALL·E to generate AI images
        </p>
        <h1></h1>
      </div>
    </main>
  );
}
