setTimeout(() => {
    var typed = new Typed('#typed', {
        strings: ["Hi, I´m <span>Guillermo</span>, I'm passionate about technology, graduated as a computer technician and student of web programming, since I was little I've always loved technology,Since I was 15 years old, I knew that I wanted to dedicate myself to topics that had to do with technology, even though what called me the most was computing, I set up my first computers alone, and installed my operating systems, after graduating, I wanted to continue learning , and I liked the markup language with html and css, so I decided to get into some development, and here I am, doing web development, although I wouldn't mind being fullstack, I hope you like my skills and we share tastes."],
        typeSpeed: 1,
        showCursor: false

        // backSpeed: 100,
        // loop: true
      });
}, 1000);

let info = document.querySelector(".info-me")
console.log(info)

  var typed2 = new Typed('#typed2', {
    strings: ["GUILLERMO FIGUERAS"],
    typeSpeed: 50,
    showCursor: false,

    // backSpeed: 100,
    // loop: true
  });

setTimeout(() => {
    var typed3 = new Typed('#typed3', {
        strings: ["DEVELOPER AND INFORMATIC"],
        typeSpeed: 50,
        showCursor: false

        // backSpeed: 100,
        // loop: true
      });
}, 1000);
