import React from "react";
import { v4 as uuid } from "uuid";

const Tabs = ({ tabs }) => (
    <div className="tabs is-boxed is-fullwidth">
        <ul>
            {/* {tabs
                ? tabs.map((tab) => (
                      <li key={uuid()}>
                          <a href={tab.href}>{tab.text}</a>
                      </li>
                  ))
                : null} */}
            <li>
                <a href="/search">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="/library">
                    <i className="fa fa-list" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="/settings">
                    <i className="fa fa-cog" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="/logout">
                    <i class="fas fa-sign-out-alt" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    </div>
);

export default Tabs;
