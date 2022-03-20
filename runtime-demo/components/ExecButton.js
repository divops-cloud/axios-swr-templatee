function handleClick() {
    import("../lib/helloModule").then((module) => {
      module.sayHi("hiPara");
    });
  }
  
  document.getElementById("btnMessages").addEventListener("click", handleClick);
  