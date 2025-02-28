import HeaderMenu from "../components/HeaderMenu";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata = {
    title: "Austin Adams",
    description:
        "Customly built by Austin Adams, this site serves as a professional portfolio and demonstration of web development skills.",
};

export default function RootLayout({ children }) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <body>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <HeaderMenu />
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
