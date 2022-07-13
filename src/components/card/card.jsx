import React, {useCallback, useEffect, useState} from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './card.module.css';
import {useNavigate} from "react-router-dom";
import Maker from "../maker/maker";
import Preview from "../preview/preview";

const Card = ({authService,FileInput}) => {
    const navigate = useNavigate();
    const [cards,setCards] = useState({
        '1': {
            id:'1',
            name:'Mason',
            company:'Quintet Systems',
            role:'Software Engineer',
            email : 'joung4342@gmail.com',
            description:'go for it',
            color:'Light',
            fileName :'mason',
            fileURL:null
        },
        '2': {
            id:'2',
            name:'Bob',
            company:'User',
            role:'Software Engineer',
            email : 'bob@user.com',
            description:'I love it',
            color:'Dark',
            imageURL:'null',
            fileName :'Bob',
            fileURL:null,
        },
        '3': {
            id:'3',
            name:'Chris',
            company:'User',
            role:'Software Engineer',
            email : 'Chris@user.com',
            description:'',
            color:'Colorful',
            fileName :'Chris',
            fileURL:null,
        },
    });

    const deleteCard = useCallback((card) => {
        setCards(cards => {
            const cardItemn = {...cards}
            delete cardItemn[card.id];
            return cardItemn;
        });
    },[cards]);

    const createOrUpdateCard = useCallback( (card) => {
        setCards(cards => {
            const cardItemn = {...cards}
            cardItemn[card.id] = card;
            return cardItemn;
        });
    },[cards]);

    const handleLogout = () => {
        authService.logout()
            .then(() => navigate("/"));
    };
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            user || navigate("/");
        });
    });

    return (
        <div className={styles.card}>
            <Header logout={handleLogout}/>
            <section className={styles.list}>
                <Maker cards={cards}
                        addCard={createOrUpdateCard}
                        deleteCard={deleteCard}
                       changeCard={createOrUpdateCard}
                       FileInput={FileInput}
                />
                <Preview cards={cards}/>
            </section>
            <Footer/>
        </div>
    );
}

export default Card;