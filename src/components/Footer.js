import React from "react";

function Footer() {
  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
      <footer class="footer">
        <p>Developed by Thalía Berger</p>
        <a href="https://www.linkedin.com/in/thaliaberger/" target="_blank">
          <i class="fa fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/thaliaberger" target="_blank">
          <i class="fa fa-github fa-2x"></i>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
