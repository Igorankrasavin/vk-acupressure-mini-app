import React, { useState } from "react";
import { symptoms, Symptom, Acupoint } from "./data/symptoms";
import { Layout } from "./components/Layout";
import { SymptomList } from "./components/SymptomList";
import { SymptomPoints } from "./components/SymptomPoints";
import { PointDetail } from "./components/PointDetail";

type Screen =
  | { name: "symptoms" }
  | { name: "symptomPoints"; symptomId: string }
  | { name: "pointDetail"; symptomId: string; pointId: string };

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>({ name: "symptoms" });

  const currentSymptom: Symptom | null =
    screen.name === "symptomPoints" || screen.name === "pointDetail"
      ? symptoms.find((s) => s.id === screen.symptomId) || null
      : null;

  const currentPoint: Acupoint | null =
    screen.name === "pointDetail" && currentSymptom
      ? currentSymptom.points.find((p) => p.id === screen.pointId) || null
      : null;

  const goToSymptoms = () => setScreen({ name: "symptoms" });

  const goToSymptomPoints = (symptomId: string) =>
    setScreen({ name: "symptomPoints", symptomId });

  const goToPointDetail = (symptomId: string, pointId: string) =>
    setScreen({ name: "pointDetail", symptomId, pointId });

  return (
    <Layout onBack={screen.name === "symptoms" ? undefined : goToSymptoms}>
      {screen.name === "symptoms" && (
        <SymptomList symptoms={symptoms} onSelect={goToSymptomPoints} />
      )}

      {screen.name === "symptomPoints" && currentSymptom && (
        <SymptomPoints
          symptom={currentSymptom}
          onSelectPoint={(pointId) =>
            goToPointDetail(currentSymptom.id, pointId)
          }
        />
      )}

      {screen.name === "pointDetail" && currentSymptom && currentPoint && (
        <PointDetail symptom={currentSymptom} point={currentPoint} />
      )}
    </Layout>
  );
};

export default App;
