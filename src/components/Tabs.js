import React from "react";
import { v4 as uuid } from "uuid";

<<<<<<< HEAD
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
=======
const Tabs = ({ tabs }) => (
    <div className="tabs is-boxed is-fullwidth">
        <ul>
            {tabs
                ? tabs.map((tab) => (
                      <li key={uuid()}>
                          <a href={tab.href}>{tab.text}</a>
                      </li>
                  ))
                : null}
        </ul>
    </div>
);

export default Tabs;
>>>>>>> origin/master
