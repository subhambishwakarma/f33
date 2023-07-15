// Function to get the menu
function getMenu() {
    fetch('menu.json')
      .then(response => response.json())
      .then(data => {
        const menuItems = data.menu;
        const menuContainer = document.getElementById('menu-items');
  
        menuItems.forEach(item => {
          const menuItem = document.createElement('div');
          menuItem.classList.add('menu-item');
          menuItem.textContent = item;
          menuContainer.appendChild(menuItem);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Function to take the order
  function takeOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const burgers = ['Classic Cheeseburger', 'Veggie Burger', 'BBQ Bacon Burger', 'Mushroom Swiss Burger', 'Chicken Burger'];
        const randomBurgers = [];
  
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * burgers.length);
          randomBurgers.push(burgers[randomIndex]);
        }
  
        resolve(randomBurgers);
      }, 2500);
    })
      .then(order => {
        console.log('Order:', order);
        return order;
      })
      .then(order => orderPrep(order));
  }
  
  // Function for order preparation
  function orderPrep(order) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    })
      .then(preparationStatus => {
        console.log('Preparation Status:', preparationStatus);
        return preparationStatus;
      })
      .then(preparationStatus => payOrder(preparationStatus));
  }
  
  // Function to pay the order
  function payOrder(preparationStatus) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    })
      .then(paymentStatus => {
        console.log('Payment Status:', paymentStatus);
        return paymentStatus;
      })
      .then(paymentStatus => thankyouFnc(paymentStatus));
  }
  
  // Function to display "Thank you" message
  function thankyouFnc(paymentStatus) {
    if (paymentStatus.paid) {
      alert('Thank you for eating with us today!');
    }
  }
  
  // Fetch menu on page load
  getMenu();
  