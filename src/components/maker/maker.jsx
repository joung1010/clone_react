import React from 'react';
import styles from './maker.module.css';
import CardForm from "../cardForm/cardForm";
import CardAddForm from "../card_add_form/cardAddForm";

const Maker = ({cards,addCard,deleteCard,changeCard,FileInput}) => (
   <section className={styles.maker}>
       <h1 className={styles.title}>maker</h1>
        <div className={styles.cards}>
            {
                Object.keys(cards).map(key=>(
                    <CardForm FileInput={FileInput}
                              card={cards[key]}
                              key={key}
                              deleteCard={deleteCard}
                              changeCard={changeCard}

                    />
                ))
            }
            <CardAddForm FileInput={FileInput}
                         addCard={addCard}

            />
        </div>
   </section>
);

export default Maker;