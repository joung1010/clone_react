import React, {useCallback, useEffect, useState} from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './card.module.css';
import {useLocation, useNavigate} from "react-router-dom";
import Maker from "../maker/maker";
import Preview from "../preview/preview";

const Card = ({authService,FileInput,database}) => {
    const navigate = useNavigate();
    const state = useLocation().state;
    const [userId,setUserId] = useState(state.userId);
    const [cards,setCards] = useState({});

    const deleteCard = useCallback((card) => {
        setCards(cards => {
            const cardItemn = {...cards}
            delete cardItemn[card.id];
            return cardItemn;
        });
        database.removeCard(userId,card);
    },[cards]);

    const createOrUpdateCard = useCallback( (card) => {
        setCards(cards => {
            const cardItemn = {...cards}
            cardItemn[card.id] = card;
            return cardItemn;
        });
        database.writeCard(userId,card);
    },[cards]);

    const handleLogout = () => {
        authService.logout()
            .then(() => navigate("/"));
    };
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setUserId(user.uid);
            } else {
                navigate("/");
            }
        });
    },[userId,authService,navigate]);
    useEffect( () => {
        if (!userId) {
            return;
        }
         const stopSync = database.readCard(userId, (cards) => {
            setCards(cards);
        });
        return () => stopSync(); 
    },[userId,database]);

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