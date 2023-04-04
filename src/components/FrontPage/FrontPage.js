import './FrontPage.css'

const FrontPage =()=>{
    return(
        <section className='navbar'>
            <div className='logo'>
                <h1>My Logo</h1>
            </div>
            <ul className='unlist'>
                <li><a href='#'>home</a></li>
                <li><a href='#'>about</a></li>
                <li><a href='#'>blog</a></li>
                <li><a href='#'>contact</a></li>
            </ul>
        </section>
    )
}

export default FrontPage;