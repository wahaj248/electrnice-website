"use client";

import { createContext, useContext, useMemo, useState } from "react";

type CartUiContextValue = {
  open: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

const CartUiContext = createContext<CartUiContextValue | null>(null);

export function CartUiProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const value = useMemo(
    () => ({
      open,
      openCart: () => setOpen(true),
      closeCart: () => setOpen(false),
      toggleCart: () => setOpen((v) => !v),
    }),
    [open]
  );

  return <CartUiContext.Provider value={value}>{children}</CartUiContext.Provider>;
}

export function useCartUi() {
  const ctx = useContext(CartUiContext);
  if (!ctx) throw new Error("useCartUi must be used within CartUiProvider");
  return ctx;
}

