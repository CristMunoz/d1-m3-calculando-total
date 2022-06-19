function calcular(){
    var qty = document.getElementById("quantity").value;
    var prc = document.getElementById("price").getAttribute("value");
    var clr = document.getElementById("color").value;
    parseInt(quantity);
    parseInt(price);
    var total = qty*prc
    document.getElementById("total").innerHTML = total.toLocaleString("es-CL", {style: "currency", currency: "CLP"})
    document.getElementById("cantidad").innerHTML = qty;
    document.getElementById("box-color").style.backgroundColor = clr;
}

