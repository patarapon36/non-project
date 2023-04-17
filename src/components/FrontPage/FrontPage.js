import './FrontPage.css'

const FrontPage = () => {
    return (
        <section className='navbar'>

            <div className='header'>
                <div className='logo'>
                    <h1>My Logo</h1>
                </div>
                <h1>My header</h1>
            </div>
            <main>
                <h2>About Me</h2>
                <p>Hi, my name is John Doe and I'm a web developer.</p>
                <img src="file://C:/Users/LENOVO/Desktop/test.jpg" alt="example picture"></img>
            </main>
            <footer>
                <p>&copy; 2023 John Doe</p>
            </footer>
        </section>
    )
}

export default FrontPage;