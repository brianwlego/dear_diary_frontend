import React from 'react'
import { withRouter } from 'react-router-dom'
import img from "../Components/blank-profile-pic.png"

function InfoCard(props) {
    const following = () => {
        return props.profileFriends.map(friend => friend.id)
    }
    const friends = () => {
        return props.profileFriends.map(user => {
            return <a href={`http://localhost:3001/profile/${user.id}`} >
                <li>
                    {user.img_url ?
                        <img id="friend-list-img" alt="" src={user.img_url} /> :
                        <img id="friend-list-img" alt="" src={img} />
                    }
                    {user.user_name}
                </li>
            </a>
        })
    }


    return (
        <div id="info-card">
            <div id="about-and-follow">
                {!props.profileUser.img_url ?
                    <img id="profile" alt="" src={img} /> :
                    <img id="profile" alt="" src={props.profileUser.img_url} />
                }
                <h2>{props.profileUser.user_name}</h2>
                {props.profileUser.id !== props.currentUser.id ?
                    <button id="follow-button" onClick={props.followOrUnfollow}>
                        {following().includes(props.currentUser.id) ? 'Unfollow' : 'Follow'}
                    </button >
                    : null
                }
            </div>
            <div id="user-info">
                <h4>Contact</h4>
                <p>email: {props.profileUser.email}</p>
                <h4>Birthday</h4>
                <p>{props.profileUser.birthday}</p>
            </div>
            <div id="friends">
                <h4>Friends</h4>
                <ul>{friends()}</ul>
            </div>
        </div >
    )
}

export default withRouter(InfoCard)