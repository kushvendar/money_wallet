import { PrismaClient } from "@repo/db/client";

const client=new PrismaClient()

export default function Home() {
  return (
    <div className="text-3xl bg-red-300">
      "random commit don't want to break streak"
    </div>
  );
}
