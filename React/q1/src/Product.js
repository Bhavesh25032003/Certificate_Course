export default function Product() {
    function display() {
      fetch('https://api.restful-api.dev/objects')
        .then((response) => response.json())
        .then((name) => {
            console.log(name);})
        }
    return (
      <div>
        <button onClick={display}>CLICK</button>
      </div>
    );
}
  