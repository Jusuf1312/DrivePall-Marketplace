///i used this function to play with visibility 
// i mean if content is visible, it hides it. If it's hidden, it makes it visible
function showContact() {
    var contactContent = document.getElementById('contactContent')
    if (contactContent.style.display === 'none') {
      contactContent.style.display = 'block'
    } else {
      contactContent.style.display = 'none'
    }
  }
  ///when this display style property i putted set to 'none', the code inside the if block will be executed
  function showNews() {
    var newsContent = document.getElementById('newsContent')
    if (newsContent.style.display === 'none') {
      newsContent.style.display = 'block'
    } else {
      newsContent.style.display = 'none'
    }
  }
  
  
  
  var cart = []
    var totalAmount = 0
  
    function buyImage(name, price) {
      cart.push({ name, price })
      totalAmount += price
      updateCart()
      console.log(totalAmount)
      document.getElementById('totalAmount').textContent = totalAmount
      // this to tpdate total amount in my account let's say
    }
  //i used .innerHtml set the HTML content inside the cartItems element to an empty string
    function updateCart() {
      var cartItems = document.getElementById('cart-items')
      cartItems.innerHTML = ''
  /// let's add the element li for the art images to the elemnt ul
  /// i used jquery method  here to set the text content of the new created <li> element to include the name and price of the current item from the cart array
      cart.forEach(function(item) {
        var li = document.createElement('li')
        li.textContent = `${item.name} - $${item.price}`
        cartItems.appendChild(li)
        ///this action i used adds each item in the cart as a list item within the unordered list, displaying them one by one
        /// it's like stocking them one by one
      });
    }
  //Here i used updateCart() function updates the cart displayed on the webpage by clearing any existing items and then appending a new <li> element for each item in the cart array
    function checkout() {
      var cart = []
      var totalAmount = 0
      updateCart()
      document.getElementById('totalAmount').textContent = totalAmount // Reset total amount
      alert('Thank you for your purchase!' )
    }
  
    function goToSellPage() {
      window.location.href = 'sell.html'
       // That's a point i didn't reach rn cz i don't know how to make that idea
    }
