import "../css/button.css";
const Button = (data) => {
  return (
    <div className="button-global">
      <button>{data.text}</button>
    </div>
  );
};
export default Button;
