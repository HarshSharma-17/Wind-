function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "10px" }}>
        Wind 🚀
      </h1>

      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Turn UI Screenshots into Code
      </h2>

      <p
        style={{
          maxWidth: "600px",
          marginBottom: "30px",
          color: "#cbd5e1",
        }}
      >
        Upload UI screenshots or describe your design with text.
        Wind generates clean React + TypeScript code instantly.
      </p>

      <div>
        <button
          style={{
            padding: "12px 24px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>

        <button
          style={{
            padding: "12px 24px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default App;