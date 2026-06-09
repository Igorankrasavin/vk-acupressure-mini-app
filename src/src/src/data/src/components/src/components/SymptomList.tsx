import React from "react";
import { Symptom } from "../data/symptoms";

type Props = {
  symptoms: Symptom[];
  onSelect: (symptomId: string) => void;
};

export const SymptomList: React.FC<Props> = ({ symptoms, onSelect }) => {
  return (
    <div>
      <p style={{ marginTop: 0 }}>
        Выберите симптом, с которым вы хотите поработать.
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {symptoms.map((symptom) => (
          <li key={symptom.id} style={{ marginBottom: 8 }}>
            <button
              onClick={() => onSelect(symptom.id)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "8px 10px",
                borderRadius: 6,
                border: "1px solid #ddd",
                background: "#f8f8f8"
              }}
            >
              <div style={{ fontWeight: 600 }}>{symptom.name}</div>
              <div style={{ fontSize: 12, color: "#666" }}>
                {symptom.description}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
