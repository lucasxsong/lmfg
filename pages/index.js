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
                <div className={styles.grid}>
                    <div className={styles.title}>
                        <div>
                            <a href="/lucas-manufacturing">L.MFG</a>
                        </div>
                        <div>
                            <div>
                                <a href="/little-mission-free-garden">
                                    L.M.F.G
                                </a>
                            </div>
                            <div>
                                <a href="/let-me-fkn-garden">
                                    L.M.F**.G
                                </a>
                            </div>
                        </div>

                        <div className={styles.description}></div>
                    </div>
                    {600 > 500 ? (
                        <div className="bg-orange-900 w-100 h-auto">
                            {/* <div className="text-3xl">Welcome to L.M.F.G Webquarters.</div> */}

                            <img
                                src="/desktop-garden.jpg"
                                width="200"
                                height="auto"
                                object-fit="fill"
                            />
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
                    <div className={styles.grid}>
                        {/* <a className={styles.card}
                                href="https://garden.lmfg.org"
                        >
                            <h3>
                               the Garden 
                            </h3>
                            <p>
                                what we're sowing and growing
                            </p>
                            </a>
                        <a
                            className={styles.card}
                            href="https://wutevr.lmfg.org"
                        >
                            <h3>W.U.T.E.V.R</h3>
                            <p> Written Under The Everso Vibrant Redwood</p>
                        </a>
                        <a
                            className={styles.card}
                            href="https://store.lmfg.org"
                        >
                            <h3> General Store</h3>
                            <p> under construction</p>
                        </a> */}
                    </div>
                </div>
            </main>

            <style jsx>{`
                main {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
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
