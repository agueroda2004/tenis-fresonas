import React from "react";
import { useState } from "react";
import { formatter } from "../utils/moneyFormetter";
function UseMoneyCRC(initialValue = 0) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    // Reemplaza todos los caracteres que son sean numeros
    const raw = e.target.value.replace(/\D/g, "");
    // Si hay algun numero lo convierte a numero, si no pone 0
    setValue(raw ? Number(raw) : 0);
  };

  // Formatea el valor usando el formateador que tiene JavaScript
  const formatted = formatter.format(value);

  // Funcion para resetear el valor a 0
  const reset = () => {
    setValue(0);
  };

  return {
    // Numero sin formato
    value,
    // Numero con formato de moneda CRC
    formatted,
    onChange,
    reset,
  };
}

export default UseMoneyCRC;
