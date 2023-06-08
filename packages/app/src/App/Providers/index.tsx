import { Remote } from "~/Remote";
import { Router } from "~/Router";
import { User } from "~/User";

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <Router.Provider>
      <Remote.Provider>
        <User.Provider>{children} </User.Provider>
      </Remote.Provider>
    </Router.Provider>
  );
}
