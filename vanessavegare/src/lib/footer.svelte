<script>
  import capreLogo from "$lib/assets/CapreLogo.webp"

  function handleAnchorClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: "smooth",
    });
  }
</script>

<div id="footer" class="footer">
  <div id="footer">
    <div id="footerContent">
      <div id="copyright">
        <img src={capreLogo} alt="CaproLogo" id="footerLogo" />
        <p>© 2023 Capre</p>
      </div>
      <div id="footerLinks">
        <ul id="linkList">
          <li id="linkItem">
            <a href="/#mainHeader">
              <p>Home</p>
            </a>
          </li>
          <li id="linkItem">
            <a href="/#about">
              <p>About</p>
            </a>
          </li>
          <li id="linkItem">
            <a href="/#listings">
              <p>Listings</p>
            </a>
          </li>
          <li id="linkItem">
            <a href="/#contact">
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
