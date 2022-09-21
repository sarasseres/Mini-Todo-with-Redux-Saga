import { useSelector } from "react-redux";

const Member = (props) => {
   return (
      <div className="col-lg-3 col-sm-8 col-10 rounded-4 overflow-hidden p-0 shadow mb-5">
         <div className="card p-4">
            <img className="rounded-4" src={require(`../../assets/images/about/${props.image}`)} alt="Irham Muhammad Shidiq" />
            <h5 className="mt-4 text-primary2 fw-semibold">{props.name}</h5>
            <p className="mt-1 mb-4 fw-semibold">{props.position}, Asal dari {props.address}</p>
            <p className="normal mb-2 text-secondary">{props.desc}</p>
         </div>
         <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href={props.linkedin}>
            <i className="fa-brands fa-linkedin-in me-3"></i>
            Linkedin
         </a>
         <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href={props.github}>
            <i className="fa-brands fa-github me-3"></i>
            Github
         </a>
         <a target="_blank" rel="noreferrer" className="btn btn-primary2 text-white fw-medium rounded-0 w-100 py-25" href={props.instagram}>
            <i className="fa-brands fa-instagram me-3"></i>
            Instagram
         </a>
      </div>
   )
}

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
    const members = useSelector(state => state).members;

    return (
        <div className="container mt-5 team">
            <div className="row">
                <div className="col text-center mb-md-5 mb-4">
                    <h3 className="fw-bolder">Meet the Team</h3>
                </div>
            </div>
            <div className="row gap-lg-5 justify-content-center">
               { members.map((member, id) => 
                  <Member image={member.image} name={member.name} position={member.position} address={member.address} desc={member.desc} linkedin={member.linkedin} github={member.github} instagram={member.instagram} key={id} />
               ) }
            </div>
        </div>
    );
};