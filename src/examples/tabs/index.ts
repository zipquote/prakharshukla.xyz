import type {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';

export const template: SandpackPredefinedTemplate = 'react';

export const files: SandpackFiles = {
  '/App.js': `
import React, { useState } from "react";
import "./styles.css";

const TABS = [
  { id: "tab-1", label: "Tab 1", content: "Content for Tab 1" },
  { id: "tab-2", label: "Tab 2", content: "Content for Tab 2" },
  { id: "tab-3", label: "Tab 3", content: "Content for Tab 3" },
];

function Tabs({ tabs, initialTab = "tab-2" }) {
  const [activeId, setActiveId] = useState(initialTab);

  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <div className="tab">
      <div className="tab-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={tab.id === activeId ? "pill active" : "pill"}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-pane">{activeTab.content}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="wrapper">
      <h1>Basic Tabs Example</h1>
      <Tabs tabs={TABS} initialTab="tab-2" />
    </div>
  );
}
`.trim(),
  '/styles.css': `
* {
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  margin: 0;
  padding: 16px;
  background: #020617;
  color: #e5e7eb;
}

.wrapper {
  max-width: 480px;
  margin: 0 auto;
}

.tab {
  margin-top: 1.5rem;
}

.tab-nav {
  margin-bottom: 0.75rem;
}

.pill {
  padding: 4px 8px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  margin-right: 2px;
  background: azure;
  cursor: pointer;
}

.pill.active {
  background-color: aquamarine;
}

.tab-pane {
  border: 1px solid black;
  padding: 1rem;
  background-color: white;
  color: #111827;
}
`.trim(),
};

export const activeFile = '/App.js';
