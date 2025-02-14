import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {
    // state
    const [search, setSearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    //endpoint
    const loadData = async () => {
        let response = await fetch("http://localhost:4000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();
        setFoodItem(response[0]);
        setFoodCat(response[1]);
        //console.log(response[0],response[1]); //use for debugging

    }

    useEffect(() => {
        loadData()
    }, []) //here empty but if we want element change load then mention dependency of state for which the element is attached
    // empty means on first load

    return (
        <div>

            <div><Navbar /></div>
            <div>   <div id="carouselExampleFade" className="carousel slide carousel-fade  " style={{ "objectFit": "contain !important" }} data-bs-ride="carousel"  >

                <div className="carousel-inner" id="carousel">
                    <div className='carousel-caption' style={{ zIndex: "10" }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                            {/*<button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg" className="d-block w-100 carousel-img" style={{ filter: "brightness(70%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/5971874/pexels-photo-5971874.jpeg" className="d-block w-100 carousel-img" style={{ filter: "brightness(70%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640773.jpg&fm=jpg" className="d-block w-100 carousel-img" style={{ filter: "brightness(70%)" }} alt="..." />
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
            </div></div>
            <div className='container'>
                {
                    foodCat.length !== 0
                        ? foodCat.map((data) => {
                            return (<div className='row mb-3'>
                                <div key={data._id} className='fs-3 m-3'>
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {foodItem.length !== 0
                                    ?
                                    foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
                                        .map(filterItems => {
                                            return (
                                                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'> {/*need to keep multiple of 3*/}
                                                    <Card foodItem={filterItems}
                                                        options={filterItems.options[0]}
                                                        
                                                    ></Card>
                                                </div>
                                            )
                                        }
                                        ) : <div>No such data found</div>}
                            </div>

                            )
                        })
                        : ""
                }




            </div>

            <div><Footer /></div>

        </div>
    )
}
