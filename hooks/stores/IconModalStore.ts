import { create } from "zustand";

type IconDialogStore = {
  isOpen: boolean;
  iconName: string | null;
  IconComponent: React.ComponentType<any> | null;
  openDialog: (iconName: string, IconComponent: React.ComponentType<any>) => void;
  closeDialog: () => void;
};

export const useIconDialogStore = create<IconDialogStore>((set) => ({
  isOpen: false,
  iconName: null,
  IconComponent: null,
  openDialog: (iconName, IconComponent) => set({ isOpen: true, iconName, IconComponent }),
  closeDialog: () => set({ isOpen: false, iconName: null, IconComponent: null }),
}));
