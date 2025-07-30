<script>
  import capreLogo from "$lib/assets/CapreLogo.webp";

  function hamburgerFunc() {
    var x = document.getElementById("navlist2");
    var v = document.getElementById("mainHeader");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      v.style.display = "block";
      x.style.display = "block";
    }
  }
</script>

<div id="mainHeader" class="header">
  <div class="mainHeader">
    <a href="/" id="capreLogo">
      <img id="capreHeader" src={capreLogo} alt="capreLogo" />
    </a>
    <div class="headerWords">
      <h2 class="headerText">Vanessa Vega</h2>
      <p class="headerText">DRE 02227468</p>
      <a href="tel:+1-909-746-9872" class="headerText">(909)746-9872</a>
    </div>

    <a href="#0;" id="hamDiv" on:click={hamburgerFunc}>
      <div id="hamburger1"></div>
      <div id="hamburger2"></div>
      <div id="hamburger3"></div>
    </a>
  </div>

  <ul id="navlist" class="navlist">
    <li class="navitems">
      <a class="navText" href="/#about">About</a>
    </li>
    <li class="navitems">
      <a class="navText" href="/#listings">Listings</a>
    </li>
    <li class="navitems">
      <a class="navText" href="/#contact">Contact</a>
    </li>
  </ul>
  <ul id="navlist2" class="navlist">
    <li class="navitems">
      <a class="navText" href="/#about" on:click={hamburgerFunc}>About</a>
    </li>
    <li class="navitems">
      <a class="navText" href="/#listings" on:click={hamburgerFunc}>Listings</a>
    </li>
    <li class="navitems">
      <a class="navText" href="/#contact" on:click={hamburgerFunc}>Contact</a>
    </li>
  </ul>
</div>
