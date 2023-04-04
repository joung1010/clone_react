import { ref, set, remove,onValue } from "firebase/database";

class DatabaseService {
    constructor(firebaseDatabase) {
        this.database = firebaseDatabase;
    }

    writeCard(userId, card) {
        set(ref(this.database, `${userId}/cards/${card.id}`), {
            ...card,
        });
    }

    removeCard(userId, card) {
        remove(ref(this.database, `${userId}/cards/${card.id}`));
    }

     readCard(userId, setCarad) {
         const stopSync= onValue(ref(this.database, `${userId}/cards`), (snapshot => {
             const value = snapshot.val();
             value && setCarad(value);
         }));
         return  stopSync;
    }

}

export default DatabaseService;