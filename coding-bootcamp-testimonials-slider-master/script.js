let sliderOne = document.getElementById('slider-1');
let sliderOne1 = document.getElementsByClassName("slider-1");
let sliderOne2 = document.getElementsByClassName("slider-2");
let sliderTwo = document.getElementById('slider-2');
let iconPrev = document.getElementById('icon-prev');
let iconNext = document.getElementById('icon-next');
let quoteText1 = document.getElementById('quote-text1');
let quoteText2 = document.getElementById('quote-text2');
let quoteName = document.getElementById('quote-name');
let role = document.getElementById('role');
let quoteName2 = document.getElementById('quote-name2');
let role2 = document.getElementById('role2');
let img1 = document.getElementById('tanya');
let img2 = document.getElementById('john');
let content1 = document.createTextNode("data-aos: fade-left");


iconNext.addEventListener("click", nextSlider);
iconPrev.addEventListener("click", Back);
function nextSlider(){
  quoteText1.setAttribute('style', 'white-space: pre;');
  
  quoteText1.textContent = "“ If you want to lay the best foundation \r\n";
  quoteText1.textContent += "possible I’d recommend taking this \r\n";
  quoteText1.textContent += "course. The depth the instructors go into \r\n";
  quoteText1.textContent += "is incredible. I now feel so confident about \r\n";
  quoteText1.textContent += "starting up as a professional developer. ”\r\n";
  quoteName.textContent = "Tanya John";
  role.textContent = "Junior Frontend Developer";
  img1.src = "images/image-john.jpg";
  
}
  function Back(){
  quoteText1.setAttribute('style', 'white-space: pre;');
  
  quoteText1.textContent  = "“ I’ve been interested in coding for a while \r\n";
  quoteText1.textContent += "but never taken the jump, until now. I\r\n";
  quoteText1.textContent += "couldn’t recommend this course enough.\r\n";
  quoteText1.textContent += "I’m now in the job of my dreams and so\r\n";
  quoteText1.textContent += "excited about the future. ”\r\n";
  quoteName.textContent  = "Tanya Sinclair ";
  role.textContent = "UX Engineer";
  img1.src = "images/image-tanya.jpg";
} 

