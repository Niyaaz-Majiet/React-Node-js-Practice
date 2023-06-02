import {collection, getDocs, addDoc} from "firebase/firestore";
import {db} from "./firebaseConfig";


export const getAllDocumentsInCollection = (collectionName) => {
    return new Promise(((resolve, reject) => {
        getDocs(collection(db, collectionName))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                resolve({documents: newData});
            }).catch(err => {
            reject({error: true});
        });
    }))
}

export const upsertDocument = (collectionName, data) => {
    return new Promise(async (resolve, reject) => {
        addDoc(collection(db, collectionName), {
            name: data.name,
            email: data.email,
            isSeller: data.isSeller,
            signedUpForNewsFeed: data.signedUpForNewsFeed
        }).then(() => {
            resolve({error: false});
        }).catch(() => {
            reject({error: true});
        })
    })
}

// export const getDocument = (collectionName, documentName) => {
//     return new Promise((resolve, reject) => {
//         const docRef = doc(db, collectionName, documentName);
//         getDoc(docRef).then(docSnap => {
//             if (docSnap.exists()) {
//                 resolve({document: docSnap.data()});
//             } else {
//                 reject({error: true});
//             }
//         }).catch(err => {
//             reject({error: true});
//         })
//     })
// }
