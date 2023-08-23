import { PrismaClient } from "db";

const client = new PrismaClient();

export default async function Page() {
  const users = await client.user.findMany();

  return (
    <>
      <div>Hello World!</div>
      <div>This is a Page</div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
}
