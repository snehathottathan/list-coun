/**
 * Componet for list countries
 */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../Redux/countriesSlice";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./CountryList.css";

export default function CountryList({ region }) {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.countries);
  const [visible, setVisible] = useState(8);

  useEffect(() => {
    if (status === "idle") dispatch(fetchCountries());
  }, [status, dispatch]);

  const filtered =
    region === "All" ? data : data.filter((c) => c.region === region);

  return (
    <div className="county-list">
      <Row>
        {filtered.slice(0, visible).map((country, i) => (
          <Col key={i} lg={6} className="mb-3">
            <Card className="shadow-sm country-card h-100">
              <Row className="g-0 align-items-center">
                <Col xs={4}>
                  <div className="img-wrapper">
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="img-fluid"
                    />
                  </div>
                </Col>
                <Col xs={8}>
                  <Card.Body>
                    <Card.Title>{country.name}</Card.Title>
                    <Card.Text>{country.region}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

      {visible < filtered.length && (
        <div className="text-center mt-3">
          <Button
            className="load-more-btn"
            onClick={() => setVisible((v) => v + 8)}
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
}
