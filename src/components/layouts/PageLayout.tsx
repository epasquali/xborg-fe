"use client";
import "./layout.css";
import { Flex } from "@chakra-ui/react";
import { TopNavBar } from "./Navbar";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <TopNavBar />
      <div className="page-bg">
        <Flex minH={"60vh"} bg="gray.50" align={"top"} justify={"center"}>
          {children}
        </Flex>
      </div>
    </div>
  );
}
