import "./App.css";

import { useState } from "react";

function App() {
    const [travelList, setTravelList] = useState([]);
    const [count, setCount] = useState("1");
    const [item, setItem] = useState("");

    function handleDeleteItem(id) {
        setTravelList(travelList.filter((item) => item.key !== id));
    }

    return (
        <div className="container">
            <Header />
            <Form
                count={count}
                setCount={setCount}
                item={item}
                setItem={setItem}
                handleAddItem={setTravelList}
                travelList={travelList}
            />
            <ShowTravelList
                travelList={travelList}
                setTravelList={setTravelList}
                handleDeleteItem={handleDeleteItem}
            />
            <Footer travelList={travelList} />
        </div>
    );
}

function Header() {
    return <header>🏝️ Far away 🧳</header>;
}

function Form({ count, setCount, item, setItem, handleAddItem, travelList }) {
    function addItemToList(e) {
        e.preventDefault();

        if (item.trim() === "") return;

        const uniqueKey = `${item}-${Date.now()}`;

        const newItem = { name: item, count, key: uniqueKey };

        handleAddItem([...travelList, newItem]);

        setItem("");
        setCount("1");
    }

    return (
        <>
            <section className="add-form">
                <p>What do you need for your trip 😍?</p>
                <form>
                    <select
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    >
                        {Array.from({ length: 10 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        placeholder="item..."
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    />
                    <button type="submit" onClick={(e) => addItemToList(e)}>
                        Add
                    </button>
                </form>
            </section>
        </>
    );
}

function ShowTravelList({ travelList, setTravelList, handleDeleteItem }) {
    function handleDeleteList() {
        const userResponse = window.confirm(
            "Do you want to proceed with clearing the list?"
        );

        if (userResponse) setTravelList([]);
    }

    return (
        <main className="list-body">
            <ul>
                {travelList.map((item) => {
                    return (
                        <li key={item.key}>
                            <label
                                htmlFor="myCheckbox"
                                className={item.isPacked ? "active" : ""}
                            >
                                {item.count} {item.name}
                            </label>
                            <button onClick={() => handleDeleteItem(item.key)}>
                                ❌
                            </button>
                        </li>
                    );
                })}
            </ul>
            <button className="clear-btn" onClick={handleDeleteList}>
                Clear list
            </button>
        </main>
    );
}

function Footer({ travelList }) {
    return (
        <>
            {travelList.length > 0 ? (
                <footer>
                    You have added {travelList.length} item(s) in your list
                </footer>
            ) : (
                <footer>Start adding some items to your packing list 🚀</footer>
            )}
        </>
    );
}

export default App;
