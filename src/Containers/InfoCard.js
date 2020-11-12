import React from 'react'
import { withRouter } from 'react-router-dom'
import img from "../Components/blank-profile-pic.png"

class InfoCard extends React.Component {

    following = () => {
        return this.props.profileFriends.map(friend => friend.id)
    }
    friends = () => {
        return this.props.profileFriends.map(user => {
            return <a href={`https://notfcebook.herokuapp.com/profile/${user.id}`} >
                <div className="friend-li">
                    {user.img_url ?
                        <img id="friend-list-img" key={user.id} alt="" src={user.img_url} /> :
                        <img id="friend-list-img" key={user.id} alt="" src={img} />
                    }
                    <p>{user.user_name}</p>
                </div>
            </a>
        })
    }

    render() {
        return (
            <div id="info-card">
                <div id="about-and-follow">
                    {!this.props.profileUser.img_url ?
                        <img id="profile-pic" alt="" src={img} /> :
                        <img id="profile-pic" alt="" src={this.props.profileUser.img_url} />
                    }
                    <h2>{this.props.profileUser.user_name}</h2>
                    {this.props.profileUser.id !== this.props.currentUser.id ?
                        <button id="follow-button" onClick={this.props.followOrUnfollow}>
                            {this.following().includes(this.props.currentUser.id) ? 'Unfollow' : 'Follow'}
                        </button >
                        : null
                    }
                </div>
                <div id="user-info">
                    <h4>Contact</h4>
                    <p>email: {this.props.profileUser.email}</p>
                    <h4>Birthday</h4>
                    <p>{this.props.profileUser.birthday}</p>
                </div>
                <div id="info-card-friends-wrapper">
                    <h4>Friends</h4>
                    <div id="info-cards-friends">{this.friends()}</div>
                </div>
            </div >
        )
    }

}

export default withRouter(InfoCard)