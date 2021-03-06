import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.push('/dashboard'), 2000)
  })

  return (
    <div className="home-wrapper">
      <span>Redirecting to dashboard page...</span>

      <style jsx>{`
        .home-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100vh;
        }
      `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Lato', san-seriff;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
    </div>
  )
}

export default Home
