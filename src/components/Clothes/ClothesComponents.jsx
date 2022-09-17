export const Header = (props) => {
  return <h1>{props.value}</h1>;
};

export const Card = (props) => {
  return (
    <div className="card shadow-lg p-0">
      <img src={props.image} className="card-img-top rounded-0" alt="gambar" />
      <div className="card-body p-0 text-center">
        <h4 className="card-title fw-semibold px-3 mt-4">{props.title}</h4>
        <p className="card-desc normal fw-medium text-secondary px-3 mt-3 mb-4">{props.desc}</p>
        <div className="hr mb-4" />
        <h3 className="fw-bold mb-4">{props.price}</h3>
        <button onClick={props.onClick} className="btn btn-dark fw-semibold w-100 p-3 rounded-0 ">
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
