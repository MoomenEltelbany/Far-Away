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
        name: "Shorts",
        count: "3",
        isPacked: false,
    },
    {
        id: 3,
        name: "Shorts",
        count: "3",
        isPacked: false,
    },
];

function App() {
    const [travelList, setTravelList] = useState(List);

    return (
        <div className="container">
            <Header />
            <Form />
            <ShowTravelList travelList={travelList} />
            <Footer />
        </div>
    );
}

function Header() {
    return <header>🏝️ Far away 🧳</header>;
}

function Form() {
    return (
        <>
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
        </>
    );
}

function ShowTravelList() {
    return (
        <main className="list-body">
            <ul>
                <li>
                    <input type="checkbox" />
                    <label for="myCheckbox">2 Shirts</label>
                </li>
                <li>
                    <input type="checkbox" />
                    <label for="myCheckbox" className="active">
                        2 Shirts
                    </label>
                </li>
                <li>
                    <input type="checkbox" />
                    <label for="myCheckbox">2 Shirts</label>
                </li>
                <li>
                    <input type="checkbox" />
                    <label for="myCheckbox">2 Shirts</label>
                </li>
                <li>
                    <input type="checkbox" />
                    <label for="myCheckbox">2 Shirts</label>
                </li>
                <li>
                    <input type="checkbox" />
                    <label for="myCheckbox">2 Shirts</label>
                </li>
                <li>
                    <input type="checkbox" />
                    <label for="myCheckbox">2 Shirts</label>
                </li>
                <li>
                    <input type="checkbox" />
                    <label for="myCheckbox">2 Shirts</label>
                </li>
            </ul>
            <button>Clear list</button>
        </main>
    );
}

function Footer() {
    return <footer>Start adding some items to your packing list 🚀</footer>;
}

export default App;
