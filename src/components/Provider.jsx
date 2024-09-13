"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function Layout({ children }) {
  // const lns = new Lenis();
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  // lns.on("scroll", () => {
  //   console.log("scroll");
  // });

  return (
    <ReactLenis root options={{ animatedScroll: 1 }}>
      {children}
    </ReactLenis>
  );
}
