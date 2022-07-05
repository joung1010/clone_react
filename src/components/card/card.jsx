import React, {useCallback, useEffect, useState} from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './card.module.css';
import {useNavigate} from "react-router-dom";
import Maker from "../maker/maker";
import Preview from "../preview/preview";

const Card = ({authService}) => {
    const navigate = useNavigate();
    const [cards,setCards] = useState([
        {
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
        {
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
        {
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
    ]);
    const addCard = useCallback( (card) => {
        const cardItems = [...cards,card];
        setCards(cardItems);
    },[cards]);

    const deleteCard = useCallback(({id}) => {
        const cardItemn = [...cards].filter(card => card.id !== id);
        setCards(cardItemn);
    },[cards]);

    const changeCard = useCallback( (card) => {
        const cardItemn = [...cards].map(item => {
            if (item.id === card.id) {
                return  {...card};
            }
            return item;
        });
        setCards(cardItemn);
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
                        addCard={addCard}
                        deleteCard={deleteCard}
                       changeCard={changeCard}
                />
                <Preview cards={cards}/>
            </section>
            <Footer/>
        </div>
    );
}

export default Card;