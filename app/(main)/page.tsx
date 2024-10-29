"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useIconDialogStore } from "@/hooks/stores/IconModalStore";
import { copyToClipboard } from "@/utils/copy";
import * as Icons from "@wolmer/jam-icons";
import { ClipboardF } from "@wolmer/jam-icons";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GlobalIconDialog } from "./components/GlobalIconDialog";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleIcons, setVisibleIcons] = useState(100);
  const [showFilledIcons, setShowFilledIcons] = useState(false);
  const openDialog = useIconDialogStore((state) => state.openDialog);

  const filteredIcons = Object.entries(Icons).filter(
    ([iconName]) =>
      iconName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!showFilledIcons || iconName.endsWith("F")),
  );

  const displayedIcons = filteredIcons.slice(0, visibleIcons);

  const loadMoreIcons = () => {
    setVisibleIcons((prev) => prev + 100);
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-8  max-w-7xl mx-auto *:w-full">
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="font-extrabold font-grotesk text-5xl text-center ">Jam Icons</h1>
        <Button
          variant={"neutral"}
          onClick={() => copyToClipboard("npm install @wolmer/jam-icons")}
          className="text-semibold"
        >
          <ClipboardF className="w-5 h-5 mr-2" /> npm install @wolmer/jam-icons
        </Button>
      </div>
      <div className="">
        <div className="w-full max-w-7xl px-2 py-5 flex gap-6">
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setVisibleIcons(100);
            }}
            placeholder="Search icons..."
          />
          <div className="flex items-center space-x-2">
            <Switch
              id="filled"
              checked={showFilledIcons}
              onCheckedChange={() => setShowFilledIcons(!showFilledIcons)}
            />
            <Label htmlFor="filled">Filled</Label>
          </div>
        </div>
        <InfiniteScroll
          dataLength={displayedIcons.length}
          next={loadMoreIcons}
          hasMore={visibleIcons < filteredIcons.length}
          loader={<h4>Loading...</h4>}
          className="grid grid-cols-3 md:grid-cols-6 w-full gap-5 h-full justify-center items-center p-2"
        >
          {displayedIcons.map(([iconName, IconComponent]) => (
            <Button
              key={iconName}
              className="text-center flex items-center justify-center h-20"
              onClick={() => openDialog(iconName, IconComponent)}
            >
              <IconComponent style={{ width: 32, height: 32 }} />
            </Button>
          ))}
        </InfiniteScroll>
      </div>
      <GlobalIconDialog />
    </main>
  );
}
