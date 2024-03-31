import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <Link to='/login' >
          <button>Director</button>
          <button>Teacher</button>
          <button>Student</button>
        </Link>
    </div>
  )
}

export default Home