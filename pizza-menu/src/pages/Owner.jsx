import { useState } from 'react';

export default function Owner() {
    const [movies] = useState([
        'Matrix',
        'Jurassic World',
        'Batman',
        'Chappie',
        'Venom'
    ]);

    return (
        <div>
            <header style={styles.header}>
                <h2>Sobre mí</h2>
            </header>

            <main style={styles.main}>
                <section style={styles.profile}>
                    <img
                        src="https://avatars.githubusercontent.com/u/107516686?v=4"
                        alt="Foto del owner"
                        style={styles.image}
                    />
                    <h3>Daniel Sauer</h3>
                    <p>📧 danielsauer2000@gmail.com</p>
                    <p style={styles.descriptionBox}>
                        Soy desarrollador fullstack con formación en Ingeniería en Telemática. Me interesa el desarrollo de software como una forma de crear soluciones claras, útiles y bien estructuradas. A lo largo de mi formación y experiencia, he trabajado en proyectos académicos y profesionales que me han permitido fortalecer mis habilidades técnicas y aprender a colaborar en equipo, adaptándome a distintos retos. Disfruto aprender cosas nuevas, mantenerme actualizado y aportar con responsabilidad en cada etapa del desarrollo. Busco seguir creciendo en entornos donde se valore la calidad, el aprendizaje y el trabajo bien hecho.
                    </p>
                </section>

                <section style={styles.movies}>
                    <h4>🎬 Mis películas favoritas</h4>
                    <ul style={styles.movieList}>
                        {movies.map((movie, index) => (
                            <li key={index} style={styles.movieItem}>
                                🎥 {movie}
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

            <footer style={styles.footer}>
                <p>© 2025 Daniel Sauer</p>
            </footer>
        </div>
    );
}

const styles = {
    header: {
        backgroundColor: '#1c1c1c',
        color: '#fff',
        padding: '1rem',
        textAlign: 'center'
    },
    main: {
        padding: '2rem'
    },
    profile: {
        textAlign: 'center',
        marginBottom: '2rem'
    },
    image: {
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        marginBottom: '1rem'
    },
    descriptionBox: {
        backgroundColor: '#f9f9f9',
        padding: '1.5rem',
        borderRadius: '12px',
        maxWidth: '800px',
        margin: '1rem auto',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'justify',
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#333'
    },
    movieList: {
        listStyle: 'none',
        padding: 0,
        marginTop: '1rem'
    },
    movieItem: {
        backgroundColor: '#f9f9f9',
        padding: '0.5rem 1rem',
        marginBottom: '0.5rem',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    footer: {
        backgroundColor: '#f0f0f0',
        padding: '1rem',
        textAlign: 'center',
        marginTop: '2rem'
    }
};
