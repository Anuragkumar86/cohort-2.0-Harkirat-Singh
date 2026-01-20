import {PrismaClient} from "@repo/db/client"

const client = new PrismaClient();

export default function Home() {
  return (
    <div>
      Hi There
    </div>
  );
}
