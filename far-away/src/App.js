import "./App.css";

import { useState } from "react";

const List = [
    {
        id: 1,
        name: "Shorts",
        count: "3",
        isPacked: false,
    },
    {
        id: 2,
        name: "Blouse",
        count: "4",
        isPacked: false,
    },
    {
        id: 3,
        name: "Cream",
        count: "1",
        isPacked: false,
    },
];

function App() {
    const [travelList, setTravelList] = useState([]);
    const [count, setCount] = useState("1");
    const [item, setItem] = useState("");
    const [isActive, setIsActive] = useState(false);

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
                isActive={isActive}
                setIsActive={setIsActive}
            />
            <ShowTravelList
                travelList={travelList}
                setTravelList={setTravelList}
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

        const newItem = { name: item, count, key: uniqueKey, isPacked: false };

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

function ShowTravelList({ travelList, setTravelList, isActive, setIsActive }) {
    function handleDeleteList() {
        const userResponse = window.confirm(
            "Do you want to proceed with clearing the list?"
        );

        if (userResponse) setTravelList([]);
    }

    function handleCheckedItem() {
        setIsActive(!isActive);
    }

    return (
        <main className="list-body">
            <ul>
                {travelList.map((item) => {
                    return (
                        <li key={item.key}>
                            <input
                                type="checkbox"
                                onChange={handleCheckedItem}
                            />
                            <label
                                htmlFor="myCheckbox"
                                className={item.isPacked ? "active" : ""}
                            >
                                {item.count} {item.name}
                            </label>
                        </li>
                    );
                })}
            </ul>
            <button onClick={handleDeleteList}>Clear list</button>
        </main>
    );
}

function Footer({ travelList }) {
    return (
        <>
            {travelList.length > 0 ? (
                <footer>
                    You have added {travelList.length} item(s) in your list and
                    you packed X% of the list
                </footer>
            ) : (
                <footer>Start adding some items to your packing list 🚀</footer>
            )}
        </>
    );
}

export default App;
