import './style.css';
export const Content = () => {};

export const Header = (props) => {
  return <h1>{props.value}</h1>;
};

export const Card = (props) => {
  return (
    <div class="card">
      <img src={props.image} class="card-img-top" alt="gambar" />
      <div class="card-body">
        <h4 class="card-title text-center">{props.title}</h4>
        <p class="text-center text-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button onClick={props.onClick} className="btn btn-dark fw-semibold  px-md-4 mx-auto text-align-right px-3 rounded-0 center-block">
          BUY NOW
          <span className="text-primary2 ms-2">
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

// export const Buttoni = (val) => {
//   return (
//     <button type="button" class="btn btn-outline-secondary">
//       <p>{val.text}</p>
//     </button>
//   );
// };
