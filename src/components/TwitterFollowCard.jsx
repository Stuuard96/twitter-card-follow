import { useState } from 'react'

export const TwitterFollowCard = ({ userName, name, isFollowing }) => {
  const [newIsFollowing, setNewIsFolloswing] = useState(isFollowing)

  const addAt = (userName) => `@${userName}`
  const text = newIsFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClass = newIsFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={`https://unavatar.io/${userName}`}
          alt="avatar de stuard"
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{addAt(userName)}</span>
        </div>
      </header>
      <aside>
        <button
          type="button"
          className={buttonClass}
          onClick={() => setNewIsFolloswing(!newIsFollowing)}
        >
          {text}
        </button>
      </aside>
    </article>
  )
}
