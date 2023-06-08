import { User } from "~/User";

export function Avatar() {
  const { user } = User.use();

  if (!user) return null;

  return <img className="h-8 w-8 rounded-full" src={user.avatar} />;
}
