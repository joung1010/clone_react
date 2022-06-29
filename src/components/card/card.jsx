import React, {useEffect, useState} from 'react';
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
            color:'Dark',
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
                <Maker cards={cards}/>
                <Preview cards={cards}/>
            </section>
            <Footer/>
        </div>
    );
}

export default Card;