"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

export const IconDialog = ({
  iconName,
  IconComponent,
}: { iconName: string; IconComponent: React.ComponentType<any> }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Copied", {
          description: text,
        });
      })
      .catch((error) => {
        toast.error("Failed to copy", {
          description: error,
        });
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-center flex items-center justify-center h-20">
          <IconComponent style={{ width: 32, height: 32 }} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl w-full">
        <DialogHeader>
          <DialogTitle className="space-x-3 flex items-center justify-center">
            {iconName}
          </DialogTitle>
          <DialogDescription className="text-center">Click to copy</DialogDescription>
        </DialogHeader>
        <div className="flex w-full justify-between">
          <div className="flex items-center justify-center w-full h-full">
            <IconComponent style={{ width: 60, height: 60 }} />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Button variant={"neutral"} onClick={() => copyToClipboard(iconName)}>
              {iconName}
            </Button>
            <Button variant={"neutral"} onClick={() => copyToClipboard(`<${iconName}/>`)}>
              {` <${iconName}/>`}
            </Button>
            <Button
              variant={"default"}
              onClick={() => copyToClipboard(`import { ${iconName} } from '@wolmer/jam-icons';`)}
            >
              {`import { ${iconName} } from '@wolmer/jam-icons';`}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
