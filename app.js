// app.js

// Define the shoppingListApp module
angular.module('shoppingListApp', []);

// Define the ToBuyController
angular.module('shoppingListApp').controller('ToBuyController', ToBuyController);

// Define the AlreadyBoughtController
angular.module('shoppingListApp').controller('AlreadyBoughtController', AlreadyBoughtController);

// Define the shopping list service
angular.module('shoppingListApp').service('ShoppingListCheckOffService', ShoppingListCheckOffService);


// ToBuyController
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCtrl = this;

  // Get the items to buy from the service
  toBuyCtrl.items = ShoppingListCheckOffService.getItemsToBuy();

  // Buy an item
  toBuyCtrl.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  };
}


// AlreadyBoughtController
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCtrl = this;

  // Get the already bought items from the service
  boughtCtrl.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}


// ShoppingListCheckOffService
function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var itemsToBuy = [
    { name: 'cookies', quantity: 10 },
    { name: 'chocolates', quantity: 5 },
    { name: 'apples', quantity: 8 },
    { name: 'milk', quantity: 2 },
    { name: 'bread', quantity: 3 }
  ];

  // List of already bought items
  var alreadyBoughtItems = [];

  // Get the items to buy
  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  // Get the already bought items
  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };

  // Buy an item
  service.buyItem = function (index) {
    var item = itemsToBuy.splice(index, 1)[0];
    alreadyBoughtItems.push(item);
  };
}
