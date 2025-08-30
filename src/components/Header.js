
import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import "./Header.css";

export default function Header({ region, setRegion }) {
  const filters = ["All", "Asia", "Europe"];
  const [show, setShow] = useState(false);

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h4 className="fw-bold">Countries</h4>

      {/* Desktop filters */}
      <div className="filters d-none d-md-block">
  {filters.map((cat) => (
    <Button
      key={cat}
      variant="link"
      className={`filter-btn ${region === cat ? "active" : ""}`}
      onClick={() => setRegion(cat)}
    >
      {cat}
    </Button>
  ))}
</div>

{/* Mobile dropdown menu */}
<div className="d-md-none">
  <Dropdown show={show} onToggle={() => setShow(!show)}>
    <Dropdown.Toggle variant="light" id="dropdown-basic" onClick={() => setShow(!show)}>
      <List size={24} />
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {filters.map((cat) => (
        <Dropdown.Item
          key={cat}
          className={`filter-item ${region === cat ? "active" : ""}`}
          onClick={() => {
            setRegion(cat);
            setShow(false);
          }}
        >
          {cat}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
</div>

    </div>
  );
}

