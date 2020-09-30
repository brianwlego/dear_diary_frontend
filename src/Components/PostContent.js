import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../Css/PostContent.css'


class PostContent extends React.Component {

    clickHandler = () => {
        localStorage.setItem("userId", this.props.post.user_id)
    }
    submit = (e) => {
        e.preventDefault()
        this.props.submitHandler()
    }


    render() {
        return (
            <>
                <div className="post-header">
                    <a href={`http://localhost:3001/profile/${this.props.post.user_id}`} >
                    {this.props.post.post_user_url === "" ? 
                        <img id="post" alt="Alt" src="../blank-profile-pic.png" /> :
                        <img id="post" alt="" src={`http://localhost:3000${this.props.post.post_user_url}`} />
                        }
                        <h3 onClick={this.clickHandler}>
                                {this.props.post.user_name}
                        </h3>
                    </a>
                        at {this.props.post.time}
                </div>
                <div className="post-content">
                    {!this.props.clicked ?
                        this.props.post.content :
                        <div>
                            <form onSubmit={this.submit}>
                                <input
                                    type="text"
                                    name="editContent"
                                    value={this.props.editContent}
                                    onChange={this.props.changeHandler}
                                />
                            </form>
                        </div>}
                </div>
            </>
        )
    }
}

export default withRouter(PostContent)