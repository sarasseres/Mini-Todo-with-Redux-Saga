export const History = () => {
    return (
        // <div className="container" >
        //     <div className="row" >
        //         <div className="col-5" >
        //             <img src={require("../../assets/images/about/store.jpg")} className="card-img-top" alt="Store" />
        //         </div >
        //         <div className="col-6" >
        //             Column
        //         </div >
        //     </div >
        // </div >
        <div className="container mt-5">
            <div className="row gap-5 justify-content-center align-items-center">
                <div className="col-lg-5 px-0">
                    <img src={require("../../assets/images/about/store.jpg")} className="card-img-top" alt="Store" />
                </div>
                <div className="col-lg-5 p-0 mt-md-4">
                    <h3 className="mb-4 fw-bolder">Sejarah Toko Bhevin</h3>
                    <p className="normal">Toko Bhevin didirikan oleh lima developer pada Senin, 5 September 2022. Tujuan didirikan toko online ini
                        adalah untuk menjembatani User atau Customer untuk membeli sebuah produk tanpa harus ke tempatnya langsung, karena faktor jarak jauh
                        atau pada saat kondisi yang tidak memungkinkan.</p>
                </div>
            </div>
        </div >
    );
};

export const Team = () => {
    return (
        <div className="container mt-5 team">
            <div className="row">
                <div className="col text-center mb-md-5 mb-4">
                    <h3 className="fw-bolder">Meet the Team</h3>
                </div>
            </div>
            <div className="row gap-lg-5 justify-content-center">
                <div className="col-lg-3 col-sm-8 col-10 rounded-4 overflow-hidden p-0 shadow mb-5">
                    <div className="card p-4 pb-5">
                        <img className="rounded-4" src={require("../../assets/images/about/irham-sm.jpg")} alt="Irham Muhammad Shidiq" />
                        <h5 className="mt-4 fw-semibold">Irham Muhammad Shidiq</h5>
                        <h6 className="mb-3 fw-semibold">Leader</h6>
                        <p className="normal">Asal dari Bogor</p>
                        <small className="small text-secondary">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat quae ea quam corporis."</small>
                    </div>
                    <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href="https://www.linkedin.com/in/irham-muhammad-shidiq/">
                        <i className="fa-brands fa-linkedin-in me-3"></i>
                        Linkedin
                    </a>
                    <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href="https://github.com/irhamshidiq">
                        <i className="fa-brands fa-github me-3"></i>
                        Github
                    </a>
                    <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href="https://www.instagram.com/irhamshidiq7/">
                        <i className="fa-brands fa-instagram me-3"></i>
                        Instagram
                    </a>
                </div>
                <div className="col-lg-3 col-sm-8 col-10 rounded-4 overflow-hidden p-0 shadow mb-5">
                    <div className="card p-4 pb-5">
                        <img className="rounded-4" src={require("../../assets/images/about/fitra-sm.jpg")} alt="Fitra Ari Pradhana" />
                        <h5 className="mt-4 fw-semibold">Fitra Ari Pradhana</h5>
                        <h6 className="mb-3 fw-semibold">Member</h6>
                        <p className="normal">Asal dari Bandung</p>
                        <small className="small text-secondary">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat quae ea quam corporis."</small>
                    </div>
                    <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href="/">
                        <i className="fa-brands fa-linkedin-in me-3"></i>
                        Linkedin
                    </a>
                    <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href="/">
                        <i className="fa-brands fa-github me-3"></i>
                        Github
                    </a>
                    <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href="https://www.instagram.com/fitraari3/">
                        <i className="fa-brands fa-instagram me-3"></i>
                        Instagram
                    </a>
                </div>
                <div className="col-lg-3 col-sm-8 col-10 rounded-4 overflow-hidden p-0 shadow mb-5">
                    <div className="card p-4 pb-5">
                        <img className="rounded-4" src={require("../../assets/images/about/saras-sm.jpg")} alt="Dewi Saraswati" />
                        <h5 className="mt-4 fw-semibold">Dewi Saraswati</h5>
                        <h6 className="mb-3 fw-semibold">Member</h6>
                        <p className="normal">Asal dari Bekasi</p>
                        <small className="small text-secondary">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat quae ea quam corporis."</small>
                    </div>
                    <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href="https://www.linkedin.com/in/dewi-saraswati/">
                        <i className="fa-brands fa-linkedin-in me-3"></i>
                        Linkedin
                    </a>
                    <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href="/">
                        <i className="fa-brands fa-github me-3"></i>
                        Github
                    </a>
                    <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href="/">
                        <i className="fa-brands fa-instagram me-3"></i>
                        Instagram
                    </a>
                </div>
                <div className="col-lg-3 col-sm-8 col-10 rounded-4 overflow-hidden p-0 shadow mb-5">
                    <div className="card p-4 pb-5">
                        <img className="rounded-4" src={require("../../assets/images/about/adedaudhasan-sm.jpg")} alt="Ade Daud Hasan" />
                        <h5 className="mt-4 fw-semibold">Ade Daud Hasan</h5>
                        <h6 className="mb-3 fw-semibold">Member</h6>
                        <p className="normal">Asal dari Majalengka</p>
                        <small className="small text-secondary">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat quae ea quam corporis."</small>
                    </div>
                    <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href="/">
                        <i className="fa-brands fa-linkedin-in me-3"></i>
                        Linkedin
                    </a>
                    <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href="/">
                        <i className="fa-brands fa-github me-3"></i>
                        Github
                    </a>
                    <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href="https://www.instagram.com/adedaudhasan/">
                        <i className="fa-brands fa-instagram me-3"></i>
                        Instagram
                    </a>
                </div>
                <div className="col-lg-3 col-sm-8 col-10 rounded-4 overflow-hidden p-0 shadow mb-5">
                    <div className="card p-4 pb-5">
                        <img className="rounded-4" src={require("../../assets/images/about/adeilham-sm.jpg")} alt="Ade Ilham" />
                        <h5 className="mt-4 fw-semibold">Ade Ilham</h5>
                        <h6 className="mb-3 fw-semibold">Member</h6>
                        <p className="normal">Asal dari Bogor</p>
                        <small className="small text-secondary">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat quae ea quam corporis."</small>
                    </div>
                    <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href="https://www.linkedin.com/in/ade-ilham">
                        <i className="fa-brands fa-linkedin-in me-3"></i>
                        Linkedin
                    </a>
                    <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href="/">
                        <i className="fa-brands fa-github me-3"></i>
                        Github
                    </a>
                    <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href="/">
                        <i className="fa-brands fa-instagram me-3"></i>
                        Instagram
                    </a>
                </div>
            </div>
        </div>
    );
};