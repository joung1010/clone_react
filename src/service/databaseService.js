import {getDatabase, ref, set, remove, child, get} from "firebase/database";

class DatabaseService {
    constructor(app) {
        this.database = getDatabase(app);
    }

    writeCard(userId, card) {
        set(ref(this.database, `${userId}/cards/${card.id}`), {
            ...card,
        });
    }

    removeCard(userId, card) {
        remove(ref(this.database, `${userId}/cards/${card.id}`));
    }

    async readCard(userId, setCarad) {
        const dbRef = ref(this.database);
        const snapshot = await get(child(dbRef, `${userId}/cards`));
        const value = snapshot.val();
        value && setCarad(value);


    }

}

export default DatabaseService;