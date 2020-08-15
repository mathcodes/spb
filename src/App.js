import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Components
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import Tabs from "./components/Tabs";
import Search from "./components/Search";
import Settings from "./components/Settings";
import Details from "./components/Details";
import { v4 as uuid } from "uuid";
import "./App.css";

// Other Stuff
import MenuTabs from "./assets/js/MenuTabs";
import Library from "./components/Library";

const App = (props) => (
    <BrowserRouter>
        <Hero
            header={[
                <Logo key={uuid()} />,
                <div
                    key={uuid()}
                    className="navbar is-fixed-top"
                    style={{ backgroundColor: "#48c774" }}>
                    <Tabs tabs={MenuTabs} />
                </div>,
            ]}
            body={
                <>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/library" component={Library} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/Details" component={Details} />
                </>
            }
        />
    </BrowserRouter>
);

export default App;
