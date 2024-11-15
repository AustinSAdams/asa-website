import { db } from "./firebaseConfig";
import { collection, addDoc } from 'firebase/firestore';

export async function sendEmailToFirebase({ name, email, message, timestamp }){
    try{
        const emailCollection = collection(db, 'emails');
        const docRef = await addDoc(emailCollection, {
            name,
            email,
            message,
            timestamp,
        });
    }catch(err) {
        throw new Error("Unable to send email");
    }
}