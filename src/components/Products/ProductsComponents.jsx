export const Header = (props) => {
  return <h1>{props.value}</h1>;
};

export const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="gambar" />
      <div className="card-body text-center">
        <h4 className="card-title">{props.title}</h4>
        <p className="text-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button onClick={props.onClick} className="btn btn-dark fw-semibold  px-md-4 mx-auto px-3 rounded-0 ">
          BUY NOW
          <span className="text-primary2 ms-2">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

// export const Buttoni = (val) => {
//   return (
//     <button type="button" className="btn btn-outline-secondary">
//       <p>{val.text}</p>
//     </button>
//   );
// };
