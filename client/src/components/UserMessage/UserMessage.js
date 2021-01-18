import React from 'react'

export default function UserMessage(props) {
    return (
        <section className="chatbox__user-message">
                <p>{props.content}</p>
        </section>
    )
}
