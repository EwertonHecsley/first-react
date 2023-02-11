import React from "react";
import './Cards.css'

class Cards extends React.Component {
    render() {
        return (
            <section>
                <img className="card" src="https://avatars.githubusercontent.com/u/114318366?v=4" alt="Foto do perfil" />
                <h1>Ewerton Hecsley</h1>
                <p>Especialista FullStack</p>
            </section>
        )
    }
}

export default Cards