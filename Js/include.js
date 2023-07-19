function includeHTML() {
    var header = new XMLHttpRequest();
    // var head = new XMLHttpRequest();
    var footer = new XMLHttpRequest();
  
    header.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("header").innerHTML = this.responseText;
      }
    };
  
    // head.onreadystatechange = function () {
    //   if (this.readyState == 4 && this.status == 200) {
    //     document.getElementById("head").innerHTML = this.responseText;
    //   }
    // };
  
    footer.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("footer").innerHTML = this.responseText;
      }
    };
  
    header.open("GET", "./header.html", true);
    header.send();
  
    // head.open("GET", "head.html", true);
    // head.send();
  
    footer.open("GET", "./footer.html", true);
    footer.send();
  }
  
  includeHTML();
  