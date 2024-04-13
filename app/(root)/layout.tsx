// import StreamVideoProvider from "@/providers/StreamClientProvider";
import StreamVideoProvider from "@/providers/StreamVideoClient";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Bloom",
  description: "Video Conferencing Application",
  icons: "/icons/logo.svg",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  );
};

export default RootLayout;