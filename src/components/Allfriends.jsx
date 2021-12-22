import React, { useEffect, useState } from 'react';
import FriendCard from './FriendCard.jsx';
import { onAuthStateChanged } from "firebase/auth";
import { db, auth, storage } from "../firebase";
import { collection, getDocs } from '@firebase/firestore';


function Allfriends() {
    const [activeUser, setActiveUser] = useState("");
    const [friends, setFriends] = useState([]);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setActiveUser(user.uid);
        }
    })
    const getFriends = async () => {
        const friends = await getDocs(collection(db, "friends", activeUser, "friendlist"));
        friends.forEach((doc) => {
            setFriends((prev) => {
                return [...prev, doc.id]
            })
        });
    }

    useEffect(() => {

        let isMounted = true;
        if (isMounted) {
            setFriends([])
            if (activeUser) {
                getFriends();
            }
        }
        return () => { isMounted = false };

    }, [activeUser])
    return (
        <div className="friends" style={{ width: "100%", padding: "0.2rem" }}>
            <h3 style={{ fontSize: "2rem", textAlign: "center", margin: "2rem" }}>My Friends</h3>
            {friends.length == 0 ?<p style={{fontSize:"14px",textAlign:"center",color:"#6a6969"}}>No friends to show here</p>:null}
            {friends.map((val, i) => {
                return <FriendCard val={val} key={i} />
            })}
        </div>
    )
}

export default Allfriends
