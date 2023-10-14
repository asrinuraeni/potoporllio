import ButtonSaya from "./ButtonSaya"
function Intro() {
    return (
        <div className="intro text-light">
            <div className="container text-center">
                <img 
                className="Avatar"
                src="data:image/jpeg;base64,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"
                />
            <h1>ASRI NUR AENI</h1>
            <p>ASRI DEVELOPER</p>
            <a href="https://instagram.com/asrinuraeniii" className="social-media">
            <i class="bi bi-instagram"></i>
            </a>

            <a href="#" className="social-media">
            <i class="bi bi-youtube"></i>
            </a>

            <a href="https://github.com/asrinuraeni" className="social-media">
            <i class="bi bi-github"></i>
            </a>
            <div className="row">
                <div className="col">
            <ButtonSaya 
            text="hallo"
            link="https://instagram.com/asrinuraeniii"
            warna="auto"
            />
            </div>
            </div>
            </div> 
        </div>
        
    )
}
export default Intro