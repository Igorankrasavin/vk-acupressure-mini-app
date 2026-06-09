import React from "react";
import { Symptom, Acupoint } from "../data/symptoms";

type Props = {
  symptom: Symptom;
  point: Acupoint;
};

export const PointDetail: React.FC<Props> = ({ symptom, point }) => {
  return (
    <div>
      <h2 style={{ fontSize: 16, marginTop: 0 }}>{point.name}</h2>
      <div style={{ fontSize: 13, color: "#666", marginBottom: 8 }}>
        Симптом: {symptom.name}
      </div>

      {point.image && (
        <div style={{ marginBottom: 8 }}>
          <img
            src={`/images/${point.image}`}
            alt={point.name}
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </div>
      )}

      <div style={{ marginBottom: 8 }}>
        <strong>Где находится:</strong> {point.location_short}
      </div>

      <div style={{ marginBottom: 8 }}>
        <strong>Как работать с точкой:</strong>
        <p style={{ marginTop: 4 }}>{point.instructions}</p>
      </div>

      {point.notes && (
        <div style={{ fontSize: 12, color: "#555" }}>{point.notes}</div>
      )}

      <div style={{ fontSize: 11, color: "#999", marginTop: 12 }}>
        Визуальная часть (некоторые изображения точек) вдохновлена проектом
        SelfPointMassageApp (автор xujk0217, GitHub).
      </div>
    </div>
  );
};
