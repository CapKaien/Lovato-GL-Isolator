import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/footer">Footer</Link>
    </nav>
  )
}

export default Nav