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
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <input type="text" placeholder="item..." />
                    <button type="submit">Add</button>
                </form>
            </section>
            <main className="list-body">
                <button>Clear list</button>
            </main>
            <footer>Start adding some items to your packing list</footer>
        </div>
    );
}

export default App;
