import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/toaster";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // ThemeProvider => Context Api를 기반으로 만들어진 것, context를 사용해서 모든 리액트
    // 컴포넌트에게 theme속성을 전달하는 역할을 수행한다. 다크모드 적용하기 위해서 사용

    // Toaster는 사용자에게 메시지나 알림을 표시하는 ui 구성요소이다. 주로 임시적인 메시지를 표시하거나 작업의 성공 또는 실패를 알리는데 사용된다.
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className={"min-h-screen"}>
        <Component {...pageProps} />
        <Toaster />
      </div>
      <ModeToggle className={"absolute top-6 right-6"} />
    </ThemeProvider>
  );
}
