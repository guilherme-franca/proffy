import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/17651443?s=460&u=52faaf0e05c8f52a74c5a30ff1c0c13339c5fd94&v=4" alt="Guilherme"/>
                <div>
                    <strong>Guilherme</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de quimica avançada.
                <br /><br />
                Apaixonado por explodir ciosas em laboratório e por mudar a vida das pessoas através de experiencia.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80.00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;