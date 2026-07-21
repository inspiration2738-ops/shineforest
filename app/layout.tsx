import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shineforest.vercel.app"),
  title: "샤인포레스트 | 삶을 여행처럼 기록하는 사람",
  description: "작가 샤인포레스트의 글, 책, 그리고 오늘의 기록을 만나는 공간입니다.",
  openGraph: {
    title: "샤인포레스트 | 삶을 여행처럼 기록하는 사람",
    description: "작가 샤인포레스트의 글, 책, 그리고 오늘의 기록을 만나는 공간입니다.",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/og.png", width: 1733, height: 909, alt: "SHINE FOREST — 삶을 여행처럼 기록하는 사람" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
