import "./QuienesSomos.css"
function QuienesSomos() {
    return (
        <>
            <div className="about-section">
                <h1>Sobre nosotros</h1>
                <p>Some text about who we are and what we do.</p>
            </div>

            <h2 style={{ textAlign: 'center' }}>Nuestro Equipo</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="/martin.jpg" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Martín Perez</h2>
                            <p className="title">CEO y Founder de MarCo</p>
                            <p>La clave del éxito es la constancia.</p>
                            <p>martinp10105@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="/w3images/team2.jpg" alt="Mike" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Alexis Bursztyn</h2>
                            <p className="title">Founder de DePhishing</p>
                            <p>Nada llega por sí solo.</p>
                            <p>alebur10@gmail.com.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuienesSomos;
