export default function Card() {
  const cardStyle = {
    width: "300px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "white",
    fontFamily: "Arial, sans-serif",
  };

  const imgStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
    border: "3px solid rgb(181, 0, 0)",
  };

  const nameStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  };

  const linksContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  };

  const linkStyle = {
    color: "#0077b5",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const linkHoverStyle = {
    color: "#005582",
  };

  return (
    <div style={cardStyle}>
      <img
        src="https://mexmads.com/wp-content/uploads/2023/03/Pizza_Delivery_136.webp"
        alt="Foto de perfil"
        style={imgStyle}
      />
      <h2 style={nameStyle}>Daniel Sauer</h2>
      <div style={linksContainerStyle}>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={linkStyle}>
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={linkStyle}>
          LinkedIn
        </a>
      </div>
    </div>
  );
}
