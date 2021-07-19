import "./style.css";
import jwt from "jsonwebtoken";

function decodeJWT() {
  let jwtInput = document.getElementById("jwt");
  let jwtResult = document.getElementById("decoded");
  jwtResult.value = JSON.stringify(jwt.decode(jwtInput.value), null, 2);
}
