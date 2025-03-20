import "./Footer.css"

export const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href="mailto:tuliobast@gmail.com" target="_blank">
                <img src="https://icongr.am/clarity/email.svg?size=128&color=ffffff" alt="email" />
            </a>
            <a href="https://tuliobast-portfolio.vercel.app/" target="_blank">
                <img src="https://icongr.am/clarity/application.svg?size=128&color=ffffff" alt="twitter" />
            </a>
           
        </div>
        <img src="./img/Logo.png" alt='org' />
        <strong>Powered by tuliobast</strong>
    </footer>
}
