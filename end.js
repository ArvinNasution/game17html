function showResult() {
    document.getElementById("question").innerHTML = "Quiz Selesai!";
    document.getElementById("score").innerHTML = "Skor Anda: " + score;
    document.querySelector('button').style.display = "none";
  
    var socialMedia = document.createElement("p");
    socialMedia.innerHTML = "Bagikan skor Anda ke media sosial:";
    socialMedia.style.fontWeight = "bold";
    document.body.appendChild(socialMedia);
  
    var socialIcons = document.createElement("ul");
    socialIcons.innerHTML = `
      <li><a href="https://www.facebook.com/sharer.php?u=example.com&quote=Skor saya dalam quiz sejarah Indonesia adalah ${score}!"><img src="facebook-icon.png" alt="Facebook"></a></li>
      <li><a href="https://twitter.com/intent/tweet?url=example.com&text=Skor saya dalam quiz sejarah Indonesia adalah ${score}!"><img src="twitter-icon.png" alt="Twitter"></a></li>
      <li><a href="https://www.linkedin.com/shareArticle?url=example.com&title=Skor saya dalam quiz sejarah Indonesia adalah ${score}!"><img src="linkedin-icon.png" alt="LinkedIn"></a></li>
    `;
    socialIcons.style.display = "flex";
    socialIcons.style.justifyContent = "center";
    socialIcons.style.gap = "10px";
    document.body.appendChild(socialIcons);
  }
  
  showResult();