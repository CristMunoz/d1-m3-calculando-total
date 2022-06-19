function calcular(){
    let qty = document.getElementById("quantity").value;
    let prc = document.getElementById("price").getAttribute("value");
    let clr = document.getElementById("color").value;
    parseInt(quantity);
    parseInt(price);
    let total = qty*prc
    document.getElementById("total").innerHTML = total.toLocaleString("es-CL", {style: "currency", currency: "CLP"})
    document.getElementById("cantidad").innerHTML = qty;
    document.getElementById("box-color").style.backgroundColor = clr;
}

