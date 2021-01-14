let var1 = [];
let var2 = [];

const addData = () => {
    const var1Output = document.getElementById("box1");
    const var2Output = document.getElementById("box2");
    var1.push(document.getElementById("var1").value);
    var2.push(document.getElementById("var2").value);
    var1Output.innerHTML = var1.join("<br/>");
    var2Output.innerHTML = var2.join("<br/>");
    //clear our input fields
    document.getElementById("var1").value = "";
    document.getElementById("var2").value = "";
    document.getElementById("corellation")
        .innerHTML = getPearsonCorrelation(var1, var2).toString();
};
const clearData = () => {
    var1 = [];
    var2 = [];
};
