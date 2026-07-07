
export default function Layout({children}){
    return(
        <div>
            <header>
                <h2>My website</h2>
                <hr/>
            </header>
            <main>
                {children}
            </main>
            <hr/>

            <footer>
                <p>@ 2026 My website</p>
            </footer>
        </div>
    )
}