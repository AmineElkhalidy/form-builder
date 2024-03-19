import FormGenerator from "./form-generator/page";
import Header from "@/components/header";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-between p-24">
        <FormGenerator />
      </main>
    </SessionProvider>
  );
}
