import ServicesItem from "./ServiceItem"
function Services() {
    return (
        <div className="section bg-warning text-dark">
            <div className="container">
        <h1>Services</h1>
        <div className="row">
        <ServicesItem
        judul="Desain"
        warna="violet"
        deskripsi="Desaign"
        />
        <ServicesItem
        judul="Video Editing"
        warna="violet"
        deskripsi="Video "
        />
         <ServicesItem
        judul="Web Development"
        warna="violet"
        deskripsi="WEB"
        />
         <ServicesItem
        judul="3D Desaign"
        warna="violet"
        deskripsi="3D"
        />
        </div>
        </div>
        </div>
    )
}
export default Services