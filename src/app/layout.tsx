import ContactUs from "@/components/layout/ContactUs";
import Footer from "@/components/layout/Footer";
import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const Header = dynamic(() => import("@/components/layout/Header"), {
  ssr: false,
});

export const metadata = {
  verification: {
    google: "cnNMcMtQPdNCzaTgpw6ZvCrrY2EZXjZ8IyiKEj2Ap68",
    //  yandex: 'yandex',
    //  yahoo: 'yahoo',
    //  other: {
    //    me: ['my-email', 'my-link'],
    //  },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="cnNMcMtQPdNCzaTgpw6ZvCrrY2EZXjZ8IyiKEj2Ap68"
        />

        {/* <div
          className="gtag"
          dangerouslySetInnerHTML={{
            __html: `<!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-FWY589Q66N"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-FWY589Q66N'); </script>`,
          }}
        ></div>*/}
      </Head>
      <body className="overflow-x-hidden bg-gray-100 font-graphik">
        <Header />
        {children}
        <ContactUs />
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
      <GoogleAnalytics gaId="G-FWY589Q66N" />
    </html>
  );
}
