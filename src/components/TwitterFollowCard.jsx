import { useState } from 'react'

export const TwitterFollowCard = ({ userName, name, initialIsFollowing }) => {
  const [isFollowing, setIsFolloswing] = useState(initialIsFollowing)

  const addAt = (userName) => `@${userName}`
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClass = isFollowing
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
          onClick={() => setIsFolloswing(!isFollowing)}
        >
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
