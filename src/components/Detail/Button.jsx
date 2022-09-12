const Button = (props) => {
  return (
    <button>
      {props.value}
    </button>
  );
}

const Button2 = (props) => {
  return <button>{props.value}</button>;
};

export default Button;