import "./App.css";

function App() {
    return (
        <div className="container">
            <header>🏝️ Far away 🧳</header>
            <section className="add-form">
                <p>What do you need for your trip 😍?</p>
                <form>
                    <select>
                        <option value="1">1</option>
                    </select>
                    <input type="text" placeholder="item" />
                    <button type="submit"></button>
                </form>
            </section>
            <main>
                <button>Clear list</button>
            </main>
            <footer>Start adding some items to your packing list</footer>
        </div>
    );
}

export default App;
