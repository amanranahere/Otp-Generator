const btn = document.querySelector("button");
const otp = document.querySelector(".otp");

let generateOTP = () => {
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  num3 = Math.floor(Math.random() * 10);
  num4 = Math.floor(Math.random() * 10);

  return `${num1}${num2}${num3}${num4}`;
};

btn.addEventListener("click", () => {
  otp.innerText = generateOTP();
});
