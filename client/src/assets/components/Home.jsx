
import { createRoot } from 'react-dom/client';
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
function Home() {
    return (

        <>
        <div>Search Bar</div>
        <div>Top Games</div>
        <div>sidebar for signedin users:wishlist/favorites</div>
        <div>Buy Me Coffee Sidebar</div>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>InCaseOfGaming</h1>
            <div className="card">
                {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default Home;