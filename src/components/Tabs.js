import React from "react";
import { v4 as uuid } from "uuid";

//tabs prop should not be null
export default ({ tabs }) => (
    <div className="tabs is-boxed is-fullwidth">
        <ul>
            {tabs.map((tab) => (
                <li key={uuid()}>
                    <a href={tab.href}>{tab.text}</a>
                </li>
            ))}
        </ul>
    </div>
);
