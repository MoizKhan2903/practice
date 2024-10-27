let form = document.querySelector('form')
let select = document.querySelector('select')
let input = document.querySelector('input')
let ul = document.querySelector('ul')
let container = document.querySelector("#container");
let navbar = document.querySelector('nav')

const fun = (e) => {
    e.preventDefault();
   let li = document.createElement('li')
   li.className = "list-group-item rounded-0"
   let h1 = document.createElement('h1')
   h1.innerText = select.value;
   let p = document.createElement('p')
   let btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.className = "btn btn-danger btn-sm float-end rounded-0";


   if(input.value < 75){
p.innerText = ("Bhagg BSDK")
   }
   else{
    p.innerText = ("Eligible for Exams")
   }

   li.appendChild(h1)
   li.appendChild(p)
   li.appendChild(btn)
   ul.appendChild(li)
   form.reset();
}
const Removebtn = (e) => {
if (e.target.className === "btn btn-danger btn-sm float-end rounded-0")
    ul.removeChild(e.target.parentElement)
};

ul.addEventListener("click", Removebtn)

form.addEventListener("submit", fun);

