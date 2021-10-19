import { FC } from 'react'
import Link from 'next/link'

const FallBackBlock: FC = () => (
  <div className="fallback-wrapper">
    <span>Page not available</span>
    <br />
    <Link href="/dashboard">
      <a>Go back to dashboard</a>
    </Link>
    
    <style jsx>{`
      .fallback-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(100vh - 100px);
      }

      .fallback-wrapper span,
      .fallback-wrapper a {
        font-family: 'Lato';
        text-align: center;
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default FallBackBlock
