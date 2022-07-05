import React from 'react';
import styles from './maker.module.css';
import CardForm from "../cardForm/cardForm";
import CardAddForm from "../card_add_form/cardAddForm";

const Maker = ({cards,addCard,deleteCard,changeCard}) => (
   <section className={styles.maker}>
       <h1 className={styles.title}>maker</h1>
        <div className={styles.cards}>
            {
                cards.map(card=>(
                    <CardForm card={card}
                              key={card.id}
                              deleteCard={deleteCard}
                              changeCard={changeCard}
                    />
                ))
            }
            <CardAddForm addCard={addCard}/>
        </div>
   </section>
);

export default Maker;