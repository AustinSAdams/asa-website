import { db } from "./firebaseConfig";
import { collection, addDoc } from 'firebase/firestore';

export async function sendEmailToFirebase({ name, email, message, timestamp }){
    try{
        const emailCollection = collection(db, 'emails');
        const docRef = await addDoc(emailCollection, {
            name: name,
            email: email,
            message: message,
            timestamp: timestamp,
            acknowledged: false,
        });
    }catch(err) {
        throw new Error("Unable to send email");
    }
}