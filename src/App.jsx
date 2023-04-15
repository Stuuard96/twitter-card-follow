import { TwitterFollowCard } from './components/TwitterFollowCard'
import './app.css'

export const App = () => {
  const users = [
    {
      name: 'Stuard Quiroz C',
      userName: 'stuuard96',
      initialIsFollowing: true
    },
    {
      name: 'Miguel Angel Duran',
      userName: 'midudev',
      initialIsFollowing: false
    },
    {
      name: 'David Elias',
      userName: 'davidelias',
      initialIsFollowing: true
    },
    {
      name: 'Jorge',
      userName: 'jorgeucano',
      initialIsFollowing: false
    }
  ]

  return (
    <section className="app">
      {users.map((user, idx) => (
        <TwitterFollowCard {...user} key={idx} />
      ))}
    </section>
  )
}
