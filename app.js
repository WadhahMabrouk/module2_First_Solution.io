

angular.module('shoppingListApp', [])

.controller('ToBuyController', ToBuyController)

.controller('AlreadyBoughtController', AlreadyBoughtController)

.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCtrl = this;

  toBuyCtrl.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuyCtrl.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCtrl = this;

  boughtCtrl.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [
    { name: 'cookies', quantity: 10 },
    { name: 'chocolates', quantity: 5 },
    { name: 'apples', quantity: 8 },
    { name: 'milk', quantity: 2 },
    { name: 'bread', quantity: 3 }
  ];

  var alreadyBoughtItems = [];

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };

  service.buyItem = function (index) {
    var item = itemsToBuy.splice(index, 1)[0];
    alreadyBoughtItems.push(item);
  };
}
