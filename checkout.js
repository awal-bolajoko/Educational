// window.addEventListener('load', () => {
//   const loader = document.getElementById('loader');
//   loader.style.display = 'none';

//   document.querySelector('.checkout-container').classList.add('animate-fade-in');
// })
function confirmPayment() {
      const message = encodeURIComponent(
        "Hello, I just made a payment to EDUCATIONAL WORLD Ltd. For a book pls confirm. THANK YOU"
      );
       const whatsappNumber = "2349138386859";
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`);
    }