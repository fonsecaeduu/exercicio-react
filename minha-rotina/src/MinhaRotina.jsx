import React from 'react';

function MinhaRotina() {
    return (
        <div>
            <h1>Eduardo Fonseca</h1>
            <h3>Minha Rotina</h3>
            <img src="https://christianosantos.com/files/cs1/avatar-homem.jpg" width="150" />
            <p>
                A minha rotina é simples. Consiste em acordar em média 8 da manhã, fazer minha comida, organizar algumas coisas como meu quarto, ir treinar na academia, estudar alguns assuntos e ir à faculdade à noite.
            </p>
            <p><em>“Você vive hoje uma vida que gostaria de viver por toda a eternidade?” -Friedrich Nietzsche</em></p>
            <video width="320" height="240" controls>
                <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
            </video>
            <audio src="https://christianosantos.com/files/cs1/musica01.mp3" autoPlay loop />
        </div>
    );
}

export default MinhaRotina;
