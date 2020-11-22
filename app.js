(function () {
    'use strict';

    var factory2 = new ShoppingListService();

    angular.module('ControllerAsApp', [])
        .controller('ShoppingListController1', ShoppingListController1)
        .controller('ShoppingListController2', ShoppingListController2)
        .factory('ShoppingListFactory', ShoppingListFactory);

    ShoppingListController1.$inject = ['ShoppingListFactory'];

    function ShoppingListController1(ShoppingListFactory) {
        var list1 = this;

        var shoppingList = ShoppingListFactory();

        list1.item = shoppingList.getItems();

        list1.removeItem = function (index) {
            shoppingList.removeItem(index);
        };
    }

    ShoppingListController2.$inject = ['ShoppingListFactory'];

    function ShoppingListController2(ShoppingListFactory) {
        var list2 = this;

        var shoppingList = ShoppingListFactory();

        list2.item = shoppingList.getBoughtItems();
    }

    function ShoppingListService() {
        var service = this;

        var items = [
            {
                name: 'Кока-кола',
                quantity: 7
            },
            {
                name: 'Яйця',
                quantity: 23
            },
            {
                name: 'Шоколодка',
                quantity: 99
            },
            {
                name: 'Чай',
                quantity: 1
            },
            {
                name: 'Молоко',
                quantity: 12
            },
             {
                name: 'Картопля',
                quantity: 23
            },
             {
                name: 'Цукор',
                quantity: 111
            },
             {
                name: 'Капуста',
                quantity: 1222
            },
        ];
        var items2 = [];

        service.removeItem = function (itemIndex) {
            items2.push(items[itemIndex]);
            items.splice(itemIndex, 1);
        };

        service.getItems = function () {
            return items;
        };

        service.getBoughtItems = function () {
            return items2;
        };
    }

    function ShoppingListFactory() {
        var factory = function () {
            return factory2;
        };
        return factory;
    }

})();