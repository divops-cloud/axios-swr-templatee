function handleClick() {
  import("./helloModule").then((module) => {
    module.sayHi("hiPara");
  });
}

document.getElementById("btnMessages").addEventListener("click", handleClick);
