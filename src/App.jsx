import './app.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

export const App = () => {
  return (
    <section className="app">
      <TwitterFollowCard
        isFollowing
        name={'Stuard Quiroz C'}
        userName={'stuuard96'}
      />
      <TwitterFollowCard
        isFollowing={false}
        name={'Miguel Angel Duran'}
        userName={'midudev'}
      />
      <TwitterFollowCard
        isFollowing
        name={'David Elias'}
        userName={'davidelias'}
      />
      <TwitterFollowCard
        isFollowing={false}
        name={'Jorge'}
        userName={'jorgeucano'}
      />
    </section>
  )
}
