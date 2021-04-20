import React from "react";

export default function SidebarItem({ name, active, handleClick }) {
  return (
    <button className={`sidebarItem ${active ? "active" : ""}`}
    onClick={handleClick}
    >{name}
    
    </button>
  );
}
