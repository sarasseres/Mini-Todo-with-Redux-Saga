export const Content = () => {};

export const Header = (props) => {
  return <h1>{props.value}</h1>;
};

export const Card = (props) => {
  return (
    <div class="card">
      <img src={props.image} class="card-img-top" alt="gambar" />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">
          {props.button}
        </a>
      </div>
    </div>
  );
};
