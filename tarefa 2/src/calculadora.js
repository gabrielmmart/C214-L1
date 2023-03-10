const validate =  require('validate.js');
const NumeroConstraint = require('./validate');

const Calculadora = {

    soma(num1, num2){
        const validateNum1 = validate({num1}, NumeroConstraint.numeroConstraint);
        if(validateNum1 !== undefined){
            return 'Error';
        }
        const validateNum2 = validate({num2}, NumeroConstraint.numeroConstraint);
        if(validateNum1 !== undefined){
            return 'Error';
        }
        var resultado = num1 + num2;
        return resultado;
    },

    subtracao(num1, num2){
        const validateNum1 = validate({num1}, NumeroConstraint.numeroConstraint);
        if(validateNum1 !== undefined){
            return 'Error';
        }
        const validateNum2 = validate({num2}, NumeroConstraint.numeroConstraint);
        if(validateNum1 !== undefined){
            return 'Error';
        }
        var resultado = num1 - num2;
        return resultado;
    },

    multiplicacao(num1, num2){
        const validateNum1 = validate({num1}, NumeroConstraint.numeroConstraint);
        if(validateNum1 !== undefined){
            return 'Error';
        }
        const validateNum2 = validate({num2}, NumeroConstraint.numeroConstraint);
        if(validateNum1 !== undefined){
            return 'Error';
        }
        var resultado = num1 * num2;
        return resultado;
    },

    divisao(num1, num2){
        const validateNum1 = validate({num1}, NumeroConstraint.numeroConstraint);
        if(validateNum1 !== undefined){
            return 'Error';
        }
        const validateNum2 = validate({num2}, NumeroConstraint.numeroConstraint);
        if(validateNum1 !== undefined){
            return 'Error';
        }
        var resultado = num1 / num2;
        return resultado;
    },

    quadrado(num1){
        const validateNum1 = validate({num1}, NumeroConstraint.numeroConstraint);
        if(validateNum1 !== undefined){
            return 'Error';
        }

        var resultado = num1 * num1;
        return resultado;
    }

};

module.exports = Calculadora;