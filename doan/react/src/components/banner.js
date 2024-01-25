
export const Banner = (props) => {

    return (
        <>
            <div className="container-fluid d-flex align-items-center custom-container">
                <div className="row justify-content-center">
                    <div className="col-md-9 ">
                        <div className="banner">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner ">
                                    <div className="carousel-item active" >
                                        <img src="a1.jpg" className="card-img-top  " />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="a3.jpg" className=" card-img-top " />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="a1.jpg" className=" card-img-top " />

                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}