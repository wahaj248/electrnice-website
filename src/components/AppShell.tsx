import { CartProvider } from "@/context/CartContext";
import { CartUiProvider } from "@/context/CartUiContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <CartUiProvider>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
      </CartUiProvider>
    </CartProvider>
  );
}
