import React from "react"

export default function Carousel() {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousal" style={{ maxHeight: "500px"}}>

            <div className="carousel-inner" id="carousal">

                <div className="carousel-item active" style={{ maxHeight: "500px"}}>
                    <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..." style={{ filter: 'brightness(30%)' }} />
                </div>
                <div className="carousel-item" style={{ maxHeight: "500px"}}>
                    <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" alt="..." style={{ filter: 'brightness(30%)' }} />

                </div>
                <div className="carousel-item" style={{ maxHeight: "500px"}}>
                    <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100" alt="..." style={{ filter: 'brightness(30%)' }} />

                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <div className="carousel-caption" style={{ zIndex: "10" }}>
                <form className="d-flex" style={{}}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-danger" type="submit">Search</button>
                </form>
            </div>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}