//rfce
function Home() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <div
          style={{
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Seja Bem Vinde</h2>
          <p>Expresse aqui seus pensamentos!</p>
        </div>
        <div
          style={{
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="https://i.imgur.com/VpwApCU.png" alt="" width="400px" />
        </div>
      </div>
    </div>
  );
}

export default Home;
