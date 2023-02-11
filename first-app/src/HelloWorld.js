import React from "react";

class HelloWorld extends React.Component {
    render() {
        const nomes = ['Ewerton', 'Hecsley', 'Martins', 'Nunes', 'Benjamim'];
        const notas = [10, 8, 5, 6, 10];

        return (
            <div className="App">
                <p>New Hello World!</p>
                <h3>Meu Primeiro Projeto em React</h3>
                {nomes.map((nome) => <p>Bem-vindo {nome}</p>)}
                {notas.map((nota) => <p>{nota >= 6 ? 'Aprovado' : 'Reprovado'}</p>)}
                {notas.filter((nota) => nota <= 5)}
            </div>
        )
    }
};

export default HelloWorld