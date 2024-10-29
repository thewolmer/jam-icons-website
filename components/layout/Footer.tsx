import React from "react";
import { Link } from "../link";

export const Footer = () => {
  return (
    <footer className="pt-20 pb-4 text-center mx-auto">
      Icons by{" "}
      <Link className="underline" href="https://michaelamprimo.com/">
        michaelamprimo.com
      </Link>{" "}
      , Npm Package by{" "}
      <Link className="underline" href="https://wolmer.me">
        wolmer.me
      </Link>
    </footer>
  );
};
