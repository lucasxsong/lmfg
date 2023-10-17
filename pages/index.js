import Head from "next/head";
import styles from "../styles/Home.module.css";
// import useWindowDimensions from "../hooks/windowSize";
import Image from "next/image";

export default function Home() {
    // const { width } = useWindowDimensions();
    return (
        <div className={styles.container}>
            <Head>
                <title>L.M.F.G</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="title">
                    <center>
                        <div className="title">
                            <b>L...M...F...G... </b>
                        </div>
                    </center>
                    {600 > 500 ? (
                        <div className="bg-orange-900 w-100 h-auto">
                            <div>
                                {/* <div className="text-3xl">Welcome to L.M.F.G Webquarters.</div> */}

                                <img
                                    src="/desktop-garden.jpg"
                                    width="400"
                                    height="auto"
                                    object-fit="fill"
                                />
                            </div>
                        </div>
                    ) : (
                        <div>
                            <img
                                src="/mobile-garden.jpg"
                                width="200"
                                height="200"
                            />
                        </div>
                    )}
                    <ul>
                        <li>
                            <a href="https://blog.lmfg.org">blog</a>
                        </li>
                        <li>
                            <a href="https://garden.lmfg.org">
                                what's growing in the garden? (under
                                construction)
                            </a>
                        </li>
                        <li>
                            <a href="https://store.lmfg.org">
                                general store (under construction ... opening
                                nov 2023)
                            </a>
                        </li>
                        <li>
                            <a href="https://lmfg.org">...</a>
                        </li>
                    </ul>
                </div>
            </main>

            <style jsx>{`

                body {
                    background-color #cc7722;
                }
                main {
                    padding: 2rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: #cc7722;
                    width: full;
                }
                main title {
                    text-size: 16px;
                    font-weight: bold;
                }
                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                main img {
                    margin: 1.5rem;
                }
                footer a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    color: inherit;
                }
                code {
                    background: #fafafa;
                    border-radius: 5px;
                    padding: 0.75rem;
                    font-size: 1.1rem;
                    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
                        monospace;
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                        Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                        Helvetica Neue, sans-serif;
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
}
