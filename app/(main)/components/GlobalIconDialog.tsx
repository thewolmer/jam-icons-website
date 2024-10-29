"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useIconDialogStore } from "@/hooks/stores/IconModalStore";
import { copyToClipboard } from "@/utils/copy";

export const GlobalIconDialog = () => {
  const { isOpen, iconName, IconComponent, closeDialog } = useIconDialogStore();

  if (!iconName || !IconComponent) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogContent className="max-w-2xl w-full">
        <DialogHeader className="text-center flex items-center justify-center">
          <DialogTitle>{iconName}</DialogTitle>
          <DialogDescription>Click to copy</DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex w-full h-full items-center justify-center">
            <IconComponent style={{ width: 60, height: 60 }} />
          </div>
          <div className="flex flex-col gap-2">
            <Button variant="neutral" onClick={() => copyToClipboard(iconName)}>
              {iconName}
            </Button>
            <Button variant="neutral" onClick={() => copyToClipboard(`<${iconName} />`)}>
              {`<${iconName} />`}
            </Button>
            <Button
              variant="default"
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
