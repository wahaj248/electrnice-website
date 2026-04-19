"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getProductById } from "@/lib/products";

export type CartLine = { productId: string; quantity: number };

type CartContextValue = {
  lines: CartLine[];
  addItem: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
  itemCount: number;
};

const STORAGE_KEY = "electronic-website-cart";

const CartContext = createContext<CartContextValue | null>(null);

function readStored(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (x): x is CartLine =>
          x &&
          typeof x === "object" &&
          typeof (x as CartLine).productId === "string" &&
          typeof (x as CartLine).quantity === "number"
      )
      .map((x) => ({
        productId: x.productId,
        quantity: Math.max(1, Math.floor(x.quantity)),
      }));
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLines(readStored());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const addItem = useCallback((productId: string, quantity = 1) => {
    const q = Math.max(1, Math.floor(quantity));
    setLines((prev) => {
      const idx = prev.findIndex((l) => l.productId === productId);
      if (idx === -1) return [...prev, { productId, quantity: q }];
      const next = [...prev];
      next[idx] = {
        productId,
        quantity: next[idx].quantity + q,
      };
      return next;
    });
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    const q = Math.floor(quantity);
    if (q < 1) {
      setLines((prev) => prev.filter((l) => l.productId !== productId));
      return;
    }
    setLines((prev) => {
      const idx = prev.findIndex((l) => l.productId === productId);
      if (idx === -1) return [...prev, { productId, quantity: q }];
      const next = [...prev];
      next[idx] = { productId, quantity: q };
      return next;
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const itemCount = useMemo(
    () => lines.reduce((n, l) => n + l.quantity, 0),
    [lines]
  );

  const value = useMemo(
    () => ({
      lines,
      addItem,
      setQuantity,
      removeItem,
      clear,
      itemCount,
    }),
    [lines, addItem, setQuantity, removeItem, clear, itemCount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function cartLineTotal(line: CartLine): number {
  const p = getProductById(line.productId);
  if (!p) return 0;
  return p.price * line.quantity;
}
