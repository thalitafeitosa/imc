function calcularImc(){
    event.preventDefault();
    let mPeso = Number(peso.value);
    let mAltura = Number(altura.value);
    let imc = (mPeso / (mAltura * mAltura)).toFixed(1);

    if(mPeso == 0){
        alert("Peso inválido");
        return;
    }

    if(mAltura == 0){
        alert("Altura inválida");
        return;
    }



    if (imc < 18.5 ) {
        alert("Você eatá abaixo do peso, seu IMC é : " + imc);
    }else if (imc  >= 18.5  && imc < 24.9 ) {
        alert("Você esta no peso ideal, seu IMC é : " + imc);
    }else if (imc >= 24.9 && imc < 29.9) {
        alert("Você esta acima do peso, seu IMC é : " + imc);
    }else if (imc >= 29.9 && imc <= 34.9) {
        alert("Você esta com grau 1 de obesidade, seu IMC é : " + imc);
    }else if (imc >= 34.9 && imc < 39.9) {
        alert("Você esta com grau 2 de obesidade, seu IMC é : " + imc);
    }else {
        alert("Você esta com grau 3 de obesidade, seu IMC é : " + imc);
    }

}