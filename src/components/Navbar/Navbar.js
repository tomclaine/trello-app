import './Navbar.scss'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='btn-add-board'>
        <i className='fa fa-plus icon' /> Add New List
      </div>
      <div className='search-area'>
        <input placeholder='Search something...'></input>
        <button>Search</button>
      </div>
    </nav>
  )
}

export default Navbar