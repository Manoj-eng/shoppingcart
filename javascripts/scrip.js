function loadProducts() {
	$.get('javascripts/products.json', function(data) {
		var output='';
		for(var i in data.products) {
			output += '<div class="col-sm-6 col-md-4">'
					+ '<div class="thumbnail">'
					+ '<span class="itemid">' + data.products[i].id + '</span>'
					+ '<img class="prods" src="' + data.products[i].image + '" alt="my">'
					+ '<div class="caption">'
					+ '<h3 class="name">' + data.products[i].title + '</h3>'
					+ '<p class="price">' + (data.products[i].price).toFixed(2) + ' $</p>'
					+ '<h3 class="category">' + data.products[i].category + '</h3>'
					+ '<h3 class="description">' + data.products[i].description + '</h3>'
					+ '<p><a href="#" class="btn btn-success buy" role="button">ADD TO CART</a></p>'
					+ '</div></div></div>';
		}

		$('#products').html(output);
		
	});
}

function displayCart() {
	var cartArray = americo_shoppingCart.listCart();
	var output = '';
	for(var i in cartArray){
		output += '<tr class="singleProduct"><td class="prodImage"><img class="img-responsive" src="' + cartArray[i].prods + '" alt=""></td>'
		+ '<td class="text-center amountPods">' + cartArray[i].count + '</td>'
		+ '<td class="singleProd">' + cartArray[i].price + '&nbsp;:-</td>'
		+ '<td class="totalProd">' + cartArray[i].total + '&nbsp;:-</td></tr>'
		+ '<td class="deleteItem"><a id="removeItem" data-id="' + cartArray[i].id + '" href="#!" class="btn btn-danger btn-xs" role="button">Delete Item</a></td>'
		+ '<td class="addItem"><a id="removeOneItem" data-id="' + cartArray[i].id + '" href="#!" class="btn btn-primary btn-xs" role="button">Remove(-1)</a></td>'
		+ '<td class="addItem"><a id="addItem" data-id="' + cartArray[i].id + '" href="#!" class="btn btn-success btn-xs" role="button">Add(+1)</a></td></tr>';
    }
    $('span.cartTotal').html(americo_shoppingCart.totalCart());
}






    
var obj = {};

		obj.addITemToTheCart = function(id, name, price, image, count) {
			for(var i in cart) {
				if( cart[i].id === id) {
					cart[i].count += count;
					saveCart();
					return;
				}
			}
			var item = new Item(id, name, price, image, count);
			cart.push(item);
			saveCart();
		};

		
		obj.removeAllItemFromCart = function(id) { 
			for(var i in cart) {
				if( cart[i].id === id) {
					cart[i].count --;
					if(cart[i].count === 0) {
					
					}
					break;
				}
			}
			saveCart();
		};

		// obj.removeAllItemFromCart = function(id) { 
		// 	for (var i in cart) {
		// 		if(cart[i].id === id) {
		// 			break;
		// 		}
		// 	}
		// 	saveCart();
		// };

		obj.clearCart = function () {
			cart = [];
			saveCart();
		};

		obj.countCart = function () {
			var totalCount = 0;
			for (var i in cart) {
				totalCount += cart[i].count;
			}
			return totalCount;
		};

		obj.totalCart = function () {
			var totalCost = 0;
			for (var i in cart) {
				totalCost += cart[i].price * cart[i].count;
			}
			return totalCost.toFixed(2);
		};

		obj.listCart = function () {
			var cartCopy = [];

			for (var i in cart) {
				var item = cart[i];
				var itemCopy = {};
				for( var p in item) {
					itemCopy[p] = item[p];
				}
				itemCopy.total = (item.price * item.count).toFixed(2);
				cartCopy.push(itemCopy);
			}

			return cartCopy;
		};


    

