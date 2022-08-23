import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 30000);
  }, []);

  return (
    <div className="text-center my-5">
      <h1>We are sorry,</h1>
      <h2>That page cannot be found.</h2>
      <p>You will be redirected to the home page in 30 sec.</p>
      <Link href="/">
        <a className="text-decoration-none text-dark fst-italic">
          Click Here to go the Home page.
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
