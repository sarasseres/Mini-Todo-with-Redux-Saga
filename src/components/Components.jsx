export const Content = (props) => {
  return (
    props.children
  );
}

export const Container = (props) => {
  return <div className={`container ${props.className}`}>{props.children}</div>;
};

export const Button = (props) => {
  return (
    <button type={props.type} className={`btn ${props.className}`} onClick={props.onClick}>
      {props.value}{props.icon}
    </button>
  );
};