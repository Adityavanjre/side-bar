import { useGlobalContext } from './src/context'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars></FaBars>
      </button>
      <button className="btn" onClick={openModal}>
        Show more
      </button>
    </main>
  )
}
export default Home
