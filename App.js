const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hww"),
    React.createElement("h1", {}, "Hww"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hww"),
    React.createElement("h1", {}, "Hww"),
  ]),
]);

//const heading = React.createElement("h1", { id: "heading" }, "Hello");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
