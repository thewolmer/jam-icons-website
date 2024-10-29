import { fetchNpmLatest } from "@/lib/fetchNpmLatest";
import { Github, Npm } from "@wolmer/jam-icons";
import React from "react";
import { Link } from "../link";
import { Button } from "../ui/button";

export const NavBar = async () => {
  const npmData = await fetchNpmLatest("@wolmer/jam-icons");
  return (
    <nav className="h-20 w-full max-w-5xl mx-auto p-2 flex justify-end items-end gap-2">
      {npmData?.version && (
        <Link href="https://www.npmjs.com/package/@wolmer/jam-icons">
          <Button variant={"neutral"}>v{npmData?.version}</Button>
        </Link>
      )}
      <Link href="https://github.com/thewolmer/jam-icons">
        <Button variant={"neutral"}>
          <Github className="w-6 h-6" />
        </Button>
      </Link>
    </nav>
  );
};
