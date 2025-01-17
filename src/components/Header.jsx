const Header = () => {
  const headerStyle = {
    background:
      "linear-gradient(90deg, rgba(29,78,216,1) 0%, rgba(21,153,87,1) 100%)",
    color: "#fff",
    paddingTop: "180px",
    paddingBottom: "80px",
    textAlign: "center",
  };

  return (
    <header style={headerStyle}>
      <h1 className="text-5xl font-bold" style={{ fontFamily: "Poppins" }}>
        Welcome to <span className="text-green-500">MEDPOST</span>
      </h1>
      <p className="mt-4 text-2xl ml-4 mr-4" style={{ fontFamily: "Poppins" }}>
        Mastering Medical School: Essential Tips and Insights for Success
      </p>
    </header>
  );
};

export default Header;
