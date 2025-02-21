import { useState } from "react";

function Tabs() {
    const tabs = ["Home", "About", "Contact"];
    const [activeTab, setActiveTab] = useState("Home");

    function handleTabClick(tab) {
        setActiveTab(tab)
    }

    return (
        <div>
            <div>
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        style={{
                            backgroundColor: activeTab === tab ? "lightblue" : "white",
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div>
                {/* Display content based on activeTab */}
                <p>Content for {activeTab}</p>
            </div>
        </div>
    );
}

export default Tabs;