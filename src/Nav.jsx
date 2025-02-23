function Nav() {
    return (
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li style={styles.li}><a href="#" style={styles.a}>Inicio</a></li>
          <li style={styles.li}><a href="#" style={styles.a}>Donde estamos</a></li>
          <li style={styles.li}><a href="#" style={styles.a}>Contacto</a></li>
        </ul>
      </nav>
    );
}

  
  // Estilos 
  const styles = {
    nav: {
      background: "#333",
      padding: "10px",
    },
    ul: {
      listStyle: "none",
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      padding: "0",
      margin: "0",
    },
    li: {
      display: "inline",
    },
    a: {
      textDecoration: "none",
      color: "white",
      fontSize: "18px",
    },
  };
  
  export default Nav;
  