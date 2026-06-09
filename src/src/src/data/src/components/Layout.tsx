import React from "react";

type Props = {
  children: React.ReactNode;
  onBack?: () => void;
};

export const Layout: React.FC<Props> = ({ children, onBack }) => {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 12 }}>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 12,
          gap: 8
        }}
      >
        {onBack && (
          <button onClick={onBack} style={{ padding: "4px 8px" }}>
            ← Назад
          </button>
        )}
        <h1 style={{ fontSize: 18, margin: 0 }}>Самомассаж по точкам</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};
