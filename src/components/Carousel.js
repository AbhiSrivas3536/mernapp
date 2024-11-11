import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade " style={{"objectFit":"contain !important" }} data-bs-ride="carousel"  >

                <div className="carousel-inner" id="carousel">
                    <div className='carousel-caption' style={{zIndex:"10"}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://media.istockphoto.com/id/1070730232/photo/homemade-cheeseburger-sliders-with-tomato.jpg?s=612x612&w=0&k=20&c=qq2PY83lb8KqomJPYJ97zcni7j44Phh30mY5Vx9cnXw=" className="d-block w-100 carousel-img" style={{ filter:"brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/id/42/500/400" className="d-block w-100 carousel-img" style={{ filter:"brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/id/225/500/400" className="d-block w-100 carousel-img" style={{ filter:"brightness(30%)" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
