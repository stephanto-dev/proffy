import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/50119865?s=460&u=ff65460c8a8d1b4927da801670ad7ae7564bba94&v=4" alt="" />
                <div>
                    <strong>Vinicius Stephanto</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nam atque, eveniet repudiandae tempora ullam animi. Aliquam sequi fugiat, consectetur laudantium quod temporibus perferendis commodi et, ratione tenetur tempora. <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vero doloribus libero, blanditiis dicta quidem, veniam repellendus quod nobis ullam ut porro fugiat.
        </p>

            <footer>
                <p>
                    Preço/Hora
                <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="" />
                Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;