import { Meta } from "@/components/Meta";
import { useRouter } from "next/router";

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <header>
        <Meta />
      </header>

      {router.pathname === "/"}

      <main>{children}</main>
    </>
  );
};
