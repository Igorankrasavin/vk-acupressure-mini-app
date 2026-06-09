import React from "react";
import { Symptom } from "../data/symptoms";

type Props = {
  symptom: Symptom;
  onSelectPoint: (pointId: string) => void;
};

export const SymptomPoints: React.FC<Props> = ({
  symptom,
  onSelectPoint
}) => {
  return (
    <div>
      <h2 style={{ fontSize: 16, marginTop: 0 }}>{symptom.name}</h2>
      <p>{symptom.description}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {symptom.points.map((point) => (
          <li key={point.id} style={{ marginBottom: 8 }}>
            <button
              onClick={() => onSelectPoint(point.id)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "8px 10px",
                borderRadius: 6,
                border: "1px solid #ddd",
                background: "#f8f8f8"
              }}
            >
              <div style={{ fontWeight: 600 }}>{point.name}</div>
              <div style={{ fontSize: 12, color: "#666" }}>
                {point.location_short}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
