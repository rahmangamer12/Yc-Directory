import Navbar from "@components/Navbar";


export default function Layout({ children }: Readonly<{children: React.ReactNode}>) {
    return(
        <main className="chrome-sonic-dark font-work-sans">
            <Navbar/>
             {children}
        </main>
    )
}