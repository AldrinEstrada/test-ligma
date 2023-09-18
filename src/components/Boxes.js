import "./boxes.css";

function Boxes() {
  function handleInnerClick(event) {
    const element = event.target;
    element.style.backgroundColor = "blue";
  }

  function handleOuterClick(event) {
    const element = event.currentTarget;
    setTimeout(function () {
      element.style.backgroundColor = "purple";
    }, 2000);
  }

  return (
    <div className="outer" onClick={handleOuterClick}>
      <div className="inner" onClick={handleInnerClick}></div>
    </div>
  );
}

export default Boxes;
