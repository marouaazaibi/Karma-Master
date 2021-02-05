//This function allows to get the users details ,store them into the database and to check the conditions
function signup() {

    var firstName = document.getElementById('firstName').value;
    var veriffirstName = VerifLength(firstName, 5);

    if (veriffirstName) {
        document.getElementById('fistNameError').innerHTML = ''
    } else {

        document.getElementById('fistNameError').innerHTML =
            'First Name must have at least 5 characters';

        document.getElementById('fistNameError').style.color = 'red';
    }

    var lastName = document.getElementById('lastName').value;

    var veriflastName = VerifLength(lastName, 3);

    if (veriflastName) {
        document.getElementById('lastNameError').innerHTML = ''
    } else {

        document.getElementById('lastNameError').innerHTML =
            'Last Name must have at least 3 characters';

        document.getElementById('lastNameError').style.color = 'red';
    }

    var email = document.getElementById('email').value;

    var verifemail = checkEmail(email);
    var verifExistEmail = searchEmailUsers(email)
    if (verifExistEmail) {
        document.getElementById('emailExistError').innerHTML =
            'email already exist';
        document.getElementById("emailExistError").style.color = 'red';
    } else {

        document.getElementById('emailExistError').innerHTML =
            '';
    }
    if (verifemail) {
        document.getElementById('emailError').innerHTML = ''

    } else {
        document.getElementById('emailError').innerHTML =
            'Invalid email';

        document.getElementById('emailError').style.color = 'red';
    }


    var password = document.getElementById('password').value;

    var verifpassword = VerifLength(password, 8);

    if (verifpassword) {
        document.getElementById('passwordError').innerHTML = ''
    } else {

        document.getElementById('passwordError').innerHTML =
            'password must have at least 8 characters';

        document.getElementById('passwordError').style.color = 'red';
    }

    var confirmPassword = document.getElementById('confirmPassword').value;

    if (confirmPassword === password) {
        document.getElementById('confirmpasswordError').innerHTML = ''

    } else {

        document.getElementById('confirmpasswordError').innerHTML =
            'password must match confirm pwd';

        document.getElementById('confirmpasswordError').style.color = 'red';

    }
    var tel = document.getElementById('tel').value;
    if (tel.length === 8) {

        document.getElementById('telError').innerHTML = ''

    } else {

        document.getElementById('telError').innerHTML =
            'tel must have at least 8 characters';

        document.getElementById('telError').style.color = 'red';

    }


    if (veriffirstName && veriflastName && verifemail && verifpassword &&
        (confirmPassword === password) && (tel.length === 8) && !verifExistEmail) {

        var idUser = JSON.parse(localStorage.getItem('idUser') || '10');


        var user = {
            id: idUser,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            tel: tel,
            role: 'user',

        }
        var users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push(user);

        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('idUser', idUser + 1);
        location.replace('index.html');
    }
}
//This function allows to get the product details , store them into the database and to check the conditions
function add() {
    ///get value from input//
    var Name = document.getElementById('Name').value;

    var verifName = VerifLength(Name, 6);
    var verifIfPrExist = searchProduct(Name);

    if (verifIfPrExist) {
        document.getElementById('NameExistError').innerHTML =
            'Product already exist';
        document.getElementById("NameExistError").style.color = 'red';
    } else {

        document.getElementById('NameExistError').innerHTML =
            '';
    }
    if (verifName) {
        document.getElementById("NameError").innerHTML = '';

    } else {
        document.getElementById("NameError").innerHTML =
            'Nama > 6';
        document.getElementById('NameError').style.color = 'red';
    }

    var Price = document.getElementById('Price').value;
    var verifPrice = (Price > 0);
    if (verifPrice) {
        document.getElementById('PriceError').innerHTML = ''
    } else {

        document.getElementById('PriceError').innerHTML
        ' Price must have at least price positf';

        document.getElementById('PriceError').style.color = 'red';
    }

    var Stock = document.getElementById('Stock').value;


    var verifStock = VerifLength(Stock);
    var verifStock = (Stock > 10)
    if (verifStock) {
        document.getElementById('StockError').innerHTML = ''
    } else {

        document.getElementById('StockError').innerHTML =
            ' Stock must have at least  10 characters';

        document.getElementById('StockError').style.color = 'red';
    }

    var Category = document.getElementById('Category').value;

    var verifCategory = VerifLength(Category);
    var verifCategory = (Category.length !== 0)
    if (verifCategory) {
        document.getElementById('CategoryError').innerHTML = ''
    } else {

        document.getElementById('CategoryError').innerHTML =
            ' Category must have not empty';

        document.getElementById('CategoryError').style.color = 'red';
    }

    if (verifName && (verifPrice > 0) && verifStock && verifCategory && !verifIfPrExist) {
        var idProduct = JSON.parse(localStorage.getItem('idProduct') || '1');

        var product = {
            id: idProduct,
            Name: Name,
            Price: Price,
            Stock: Stock,
            Category: Category,
        }
        var products = JSON.parse(localStorage.getItem('products') || '[]');
        products.push(product);

        localStorage.setItem('products', JSON.stringify(products));
        localStorage.setItem('idProduct', idProduct + 1);
        location.replace('Admin.html');
    }
}
//This function allows  to connect to the website
function LogIn() {
    var email = document.getElementById('emailLogin').value;

    var password = document.getElementById('passwordLogin').value;

    var users = JSON.parse(localStorage.getItem('users'));
    var findedUser;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            findedUser = users[i];
        }
    }
    if (findedUser.role === 'admin') {
        localStorage.setItem('connectedUser', JSON.stringify(findedUser));
        location.replace('admin.html')
    } else {
        localStorage.setItem('connectedUser', JSON.stringify(findedUser));
        location.replace('index.html')
    }
}
//This function allows to check  the product exists or not
function searchProduct(x) {

    var products = JSON.parse(localStorage.getItem('products') || '[]');
    var prExist = false;
    for (let i = 0; i < products.length; i++) {
        if (products[i].Name === x) {
            prExist = true;
        }
    }
    return prExist;
}
//This function allows to check  the email of user exists or not
function searchEmailUsers(x) {
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    var usExist = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === x) {
            usExist = true;
        }
    } return usExist;
}
//This function allows you to check the form of an email
function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
//This function allows you to check the length of a character
function VerifLength(ch, nb) {
    return (ch.length > nb);
}
//This function allows to display the product in a dynamic way
function displayProducts() {
    var products = JSON.parse(localStorage.getItem('products'));
    var productTable = `
    <table class="table table-striped">

                                        <tr>
                                        <th>id(position)</th>
										<th>Name</th>
										<th>Price</th>
										<th>Stock</th>
                                        <th>Category</th>
                                        
										
									</tr>`;
    for (let i = 0; i < products.length; i++) {

        var productTable = productTable + `									
                                    <tr>
                                        <td>${products[i].id}</td>
										<td>${products[i].Name}</td>
										${experienceStyle(Number(products[i].Price))}${products[i].Price}</td>
										<td>${products[i].Stock}</td>
										<td>${products[i].Category}</td>
                                        <td>
                                        <button class="btn btn-warning" onclick="displayProductDetails(${products[i].id})">Display</button>

										<button class="btn btn-info" onclick="editProduct(${products[i].id},'products')">Edit</button>
										<button class="btn btn-danger" onclick="deletObjects(${i},'products')">Delete</button>
										</td>
									</tr>
                                `;
    }
    var productTable = productTable + `</table>`;
    document.getElementById('prTable').innerHTML = productTable;
}

//This function allows to delete a defined product
function deleteObject(x, T) {
    var objects = JSON.parse(localStorage.getItem(T) || '[]');
    objects.splice(x, 1);
    localStorage.setItem(T, JSON.stringify(objects));
    location.reload();

}

//This function of display User
function displayUsers() {
    var users = JSON.parse(localStorage.getItem('users'));

    var usersTable = `
    <table class="table table-striped">

                                        <tr>
                                        <th>id(position)</th>
                                        <th>firstName</th>
                                        <th>lastName</th>
                                        <th>email</th>
                                        <th>tel</th>
                                        <th>password</th>
                                        <th>confirmPassword</th>
                                        
                                    </tr>`;
    for (let i = 0; i < users.length; i++) {

        var usersTable = usersTable + `									
                                    <tr>
                                        <td>${users[i].id}</td>
                                        <td>${users[i].firstName}</td>
                                        <td>${users[i].lastName}</td>
                                        <td>${users[i].email}</td>
                                        <td>${users[i].tel}</td>
                                        <td>${users[i].password}</td>
                                        <td>${users[i].confirmPassword}</td>
                                        <td>
                                        
                                        <button class="btn btn-success" onclick="displayUserDetails(${users[i].id})">Display</button>
                                        <button class="btn btn-info" onclick="editUser(${users[i].id},'users')">Edit</button>
          
                                        <button class="btn btn-danger" onclick="deletObjects(${i},'users' )">Delete</button>
                                       
                                        </td>'
                                    </tr>
                                `;
    }
    var usersTable = usersTable + `</table>`;
    document.getElementById('usTable').innerHTML = usersTable;
}
//This function allows you to delete a defined user
function deleteUsers(x) {
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    users.splice(x, 1);
    localStorage.setItem('users', JSON.stringify(users));
    location.reload();

}
//This delete function is defined in the global
function deletObjects(x, T) {
    objects = JSON.parse(localStorage.getItem(T) || '[]');
    objects.splice(x, 1);
    localStorage.setItem(T, JSON.stringify(objects));
    location.reload();
}
///This function allows to search in an array the identity of an object in the global
function searchById(x, T) {
    var objects = JSON.parse(localStorage.getItem(T) || '[]');

    var obj;
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].id === x) {
            obj = objects[i];
        }
    }
    return obj;

}
//Function of edit Product
function editProduct(x) {
    var pr = searchById(x, 'products');
    var editForm = `
   
							<div class="col-md-12 form-group">
								<input type="text" class="form-control" id="editPrice" name="name" value=${pr.Price} placeholder="Price" >
                            </div>
                            <span id="verifPriceError1"></span>
                            <div class="col-md-12 form-group">
								<input type="text" class="form-control" id="editStock" name="name" value=${pr.Stock} placeholder="Stock" >
                            </div>
                            <span id="verifStockError1"></span>

							<div class="col-md-12 form-group">
								<button type="submit" value="submit" onclick="validateedit(${pr.id})" class="primary-btn">Edit product</button>

                                </div>`;
    document.getElementById('editForm').innerHTML = editForm;
}
//Function of edit user
function editUser(x) {
    var us = searchById(x, 'users');
    var editFormUser = `
                                <div class="col-md-12 form-group">
								<input type="text" class="form-control" id="editTel" name="name" value=${us.tel} placeholder="Stock" >
                                    </div>
                                   
                        
                                 <div class="col-md-12 form-group">
                                 <input type="password" class="form-control" id="editPassword" name="name" value=${us.password} placeholder="Password">
                           </div>
                           
                                 <div class="col-md-12 form-group">
                           <input type="password" class="form-control" id="editConfirmPassword" name="name" value=${us.confirmPassword} placeholder="Confirm Password" >
                          </div>
                         
    <div class="col-md-12 form-group">
								<button type="submit" value="submit" onclick="validateEdit(${us.id})" class="primary-btn">Edit user</button>
                            </div>`;
    document.getElementById('editFormUser').innerHTML = editFormUser;
}
//This function is used to validate the edition of new prices and stock and to update
function validateedit(id) {

    var newPrice = document.getElementById('editPrice').value;
    var newStock = document.getElementById('editStock').value;


    var products = JSON.parse(localStorage.getItem('products') || '[]');
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {

            products[i].Price = newPrice;
            products[i].Stock = newStock;
        }
    }
    localStorage.setItem('products', JSON.stringify(products));
    location.reload();
}

//This function is used to validate the edition of new tel,newPassword and newConfirmPassword and to update
function validateEdit(id) {

    var newTel = document.getElementById('editTel').value;
    var newPassword = document.getElementById('editPassword').value;
    var newConfirmPassword = document.getElementById('editConfirmPassword').value;

    var users = JSON.parse(localStorage.getItem('users') || '[]');
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {

            users[i].tel = newTel;
            users[i].password = newPassword;
            users[i].confirmPassword = newConfirmPassword;

        }
    }
    localStorage.setItem('users', JSON.stringify(users));
    location.reload();
}
// This function makes  to check the conditions of the edition of new prices and of stock and to make the update
function validateedit(id) {

    newPrice = document.getElementById('editPrice').value;
    if (newPrice > 0) {
        document.getElementById('verifPriceError1').innerHTML = '';
    } else {
        document.getElementById('verifPriceError1').innerHTML = ' Edit Price no valid';
        document.getElementById('verifPriceError1').style.color = 'red';
    }
    newStock = document.getElementById('editStock').value;
    if (newStock > 10) {
        document.getElementById('verifStockError1').innerHTML = '';
    } else {
        document.getElementById('verifStockError1').innerHTML = 'Edit Stock no valid';
        document.getElementById('verifStockError1').style.color = 'red';
    }

    if ((newPrice > 0) && (newStock > 10)) {

        var products = JSON.parse(localStorage.getItem('products') || '[]')
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products[i].Price = newPrice;
                products[i].Stock = newStock;
            }
        }
        localStorage.setItem('products', JSON.stringify(products));
        location.reload();
    }
}
// Functions of displayProduct (display the  information for a product in another page when you click
// on the didsplay button )
function displayProductDetails(id) {
    localStorage.setItem("idPr", id);
    location.replace("display-product.html");
}
function displaySearchedProducts() {
    var idPr = localStorage.getItem("idPr");
    var searchedPr = searchById(Number(idPr), "products");
    document.getElementById("prName").innerHTML = searchedPr.Name;
    document.getElementById("prPrice").innerHTML = searchedPr.Price;
    document.getElementById('prStock').innerHTML = searchedPr.Stock
    document.getElementById('prCategory').innerHTML = searchedPr.Category
}
// Functions of displayUser (display the  information for a user in another page when you click
// on the display button )
function displayUserDetails(id) {
    localStorage.setItem("idUs", id);
    location.replace("display-user.html");
}
function displaySearchedUsers() {
    var idUs = localStorage.getItem("idUs");
    var searchedUs = searchById(Number(idUs), "users");

    document.getElementById("usName").innerHTML = searchedUs.firstName + "" + searchedUs.lastName;
    document.getElementById("usTel").innerHTML = searchedUs.tel;
    document.getElementById("usEmail").innerHTML = searchedUs.email;
}
//This function allows  to insert administrators and simple users 
//(the email and password attributes to be used in the login function)
function insertAdmins() {

    var users = JSON.parse(localStorage.getItem('users') || '[]');
    var admin1 = { id: 1, firstName: 'Abderrahmen', lastName: 'Masmoudi', email: 'admin1@admin.tn', password: '123456', role: 'admin' };
    var admin2 = { id: 2, firstName: 'chams', lastName: 'hamza', email: 'admin2@admin.tn', password: '123456', role: 'admin' };
    var admin3 = { id: 3, firstName: 'taha', lastName: 'khnis', email: 'admin3@admin.tn', password: '123456', role: 'admin' };

    users.push(admin1);
    users.push(admin2);
    users.push(admin3);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('adminAdded', 'true');
}
//Function allows to modify the header page (addition of a connected User)
function setHeader() {
    var connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    document.getElementById('connectedUserName').innerHTML =
        connectedUser.firstName + ' ' + connectedUser.lastName;
}

/////////////////////////////////////////
function displayShopProducts() {


    var products = JSON.parse(localStorage.getItem('products'));
    var productTable = ``

    for (let i = 0; i < products.length; i++) {

        var productTable = productTable + `									
        <div class="col-lg-4 col-md-6">

        <div class="single-product">
            <img class="img-fluid" src="img/product/tabl1.jpg" alt="">
            <div class="product-details">
                
                <h6>${products[i].Name}</h6>
                <div class="Price">
                    <h6>${products[i].Price}</h6>
                    <h6>${products[i].Stock}</h6>
                    <h6>${products[i].Category}</h6>
                </div>
                </div>

               <div class="col-md-12 from-group">
    <button type="submit" value="submit" class="primary-btn" onclick="goToReservation(${products[i].id})">Reserve</button>   
          
    </div>
                </div>
                </div>
       `;
        document.getElementById('shopId').innerHTML = productTable;
    }
}
//button allows  to reserve a product via the function displayShopProducts
function goToReservation(id) {
    localStorage.setItem('idPrToReserve', id);
    location.replace('reservation.html');
}
//this function allows to display the reserved product with these details
function displayProductToReserve() {
    var idPr = localStorage.getItem("idPrToReserve");
    var searchedPr = searchById(Number(idPr), "products");
    document.getElementById('prToReserveName').innerHTML = searchedPr.Name;
    document.getElementById('prToReservePrice').innerHTML = searchedPr.Price + 'DT';
    document.getElementById('prToReserveStock').innerHTML = searchedPr.Stock + ' ' + 'pieces'
}
// function that validates the product reservation
function validateReservation() {
    var qty = document.getElementById('prToReserveQty').value;
    var idPr = localStorage.getItem("idPrToReserve");
    var searchedPr = searchById(Number(idPr), "products");
    if ((Number(qty) <= Number(searchedPr.Stock)) && (Number(qty) > 0)) {

        var connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
        var idOrder = JSON.parse(localStorage.getItem("idOrder") || "1");

        var order = {
            id: idOrder,
            qty: qty,
            idPr: idPr,
            idUser: connectedUser.id
        }
        var orders = JSON.parse(localStorage.getItem("orders") || "[]");
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
        localStorage.setItem("idOrder", idOrder + 1);

        var products = JSON.parse(localStorage.getItem("products") || "[]");
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === Number(idPr)) {
                products[i].Stock = Number(products[i].Stock) - Number(qty);
            }
        }
        localStorage.setItem("products", JSON.stringify(products));
        location.replace('cart.html')

    } else {
        document.getElementById('qtyError').innerHTML = 'Invalid Quantity';
        document.getElementById('qtyError').style.color = 'red';
    }
}

//reserved order basket
function basket() {
    var connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    var orders = JSON.parse(localStorage.getItem("orders") || "[]");
    var myOrders = [];
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].idUser === connectedUser.id) {
            myOrders.push(orders[i]);
        }

    }
    console.log('Here my orders', myOrders);
    //static part of table
    var orderTable = `<table class="table">
    <thead>
        <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th>Action</th>
        </tr>
    </thead>
  

    <tbody>`;
    var sum = 0;
    for (let i = 0; i < myOrders.length; i++) {
        var pr = searchById(Number(myOrders[i].idPr), 'products');
        var totalPrPrice = Number(pr.Price) * Number(myOrders[i].qty);
        sum = sum + totalPrPrice;
        //dynamic part of table
        orderTable = orderTable +
            `<tr>
      <td>
          <div class="media">
              <div class="d-flex">
                  <img src="img/cart.jpg" alt="">
              </div>
              <div class="media-body">
                  <p>${pr.Name}</p>
              </div>
          </div>
      </td>
      <td>
          <h5> ${pr.Price} DT</h5>
      </td>
      <td>
      ${myOrders[i].qty}
      </td>
      <td>
          <h5>${totalPrPrice}</h5>
      </td>

      <td>
      <button class="btn btn-danger" onclick="deleteOrder(${searchObjectPosition(myOrders[i].id, 'orders')}, ${myOrders[i].id})">Delete</button>
      <button class="btn btn-success" onclick="editOrder(${(myOrders[i]).id})"> Edit </button>

  
      </td>

  </tr>`;
    }

    orderTable = orderTable + `
    <tr class="bottom_button">
    <td>
    </td>
    <td>
  
    </td>
    <td>
  
    </td>
    <td>
  
    </td>
  </tr>
  <tr>
    <td>
  
    </td>
    <td>
  
    </td>
    <td>
        <h5>Subtotal</h5>
    </td>
    <td>
        <h6> ${sum}DT</h6>
    </td>
  </tr>
  
  </tbody>
  </table>`;

    document.getElementById('orderTable').innerHTML = orderTable;
}
//Function find the position of the object in a generic way used in the delete button for the cart

function searchObjectPosition(id, T) {
    var objects = JSON.parse(localStorage.getItem(T) || "[]");
    var index;
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].id === id) {
            index = i;
        }
    }
    return index;
}
//Function allows to delete an order
function deleteOrder(position, id) {

    var order = searchById(Number(id), 'orders');
    var qty = order.qty;
    var products = JSON.parse(localStorage.getItem("products") || "[]");
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === Number(order.idPr)) {
            products[i].Stock = products[i].Stock + Number(qty);
        }
    }
    localStorage.setItem('products', JSON.stringify(products));
    deleteObject(position, 'orders');

}
//the click on this button allows  to go from the current page to the page (reservation.html)

function goToReservation(id) {
    localStorage.setItem('idPrToReserve', id);
    location.replace('reservation.html');
}
//This function allows you to search for the product category by clicking on the search icon after the entered button
function searchPr(e) {
    var key = e.keyCode;
    if (key == 13) {
        var categoryToSearch = document.getElementById('categoryToSearch').value;
        localStorage.setItem('Category', categoryToSearch);
        location.replace('result.html');
    }
}

///function allows to display the reserved and searched product by category

function displayProductsByCategory() {

    var products = JSON.parse(localStorage.getItem('products'));
    var Category = localStorage.getItem('Category');
    var searchProducts = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].Category === Category) {
            searchProducts.push(products[i]);
        }
    }
    var productTable = ``
    for (let i = 0; i < searchProducts.length; i++) {

        var productTable = productTable + `									
        <div class="col-lg-4 col-md-6">

        <div class="single-product">
            <img class="img-fluid" src="img/product/tabl1.jpg" alt="">
            <div class="product-details">
                
                <h6>${searchProducts[i].Name}</h6>
                <div class="Price">
                    <h6>${searchProducts[i].Price}</h6>
                    <h6>${searchProducts[i].Stock}</h6>
                   
                </div>
                </div>

               <div class="col-md-12 from-group">
    <button type="submit" value="submit" class="primary-btn"  onclick="goToReservation(${products[i].id})">Reserve</button>   
          
    </div>
                </div>
                </div>
       `
        document.getElementById('result').innerHTML = productTable;
    }
}
//editOrder

function editOrder(id) {
    var Order = searchById(id, 'orders');

    var editFormOrder = `
   
							<div class="col-md-12 form-group">
								<input type="Number" class="form-control" id="editQuantity" name="name" value=${Order.qty} placeholder="qty"  >
                            </div>
                            <span id="qtyEditError"></span>
                    
				<div class="col-md-12 form-group">
                <button type="submit"onclick="validateEditOrder(${Order.id})" value="submit" class="primary-btn">Edit Order</button>
                </div>`;
    document.getElementById('editFormOrderHtml').innerHTML = editFormOrder;
}

//validateEdit Order allows to validate the product edition after the modification of the quantity of reserved product
function validateEditOrder(id) {
    var newQty = document.getElementById("editQuantity").value;
    var order = searchById(id, "orders");
    var product = searchById(Number(order.idPr), "products");
    var diff = Number(newQty) - order.qty;
    if (product.Stock < diff) {
        document.getElementById("qtyEditError").innerHTML = "Invalid Stock";
        document.getElementById("qtyEditError").style.color = "red";
    } else {
        // update order
        var orders = JSON.parse(localStorage.getItem("orders") || "[]");
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].id === id) {
                orders[i].qty = Number(newQty);
            }
        }
        localStorage.setItem("orders", JSON.stringify(orders));
        // update product stock
        var products = JSON.parse(localStorage.getItem("products") || "[]");
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === Number(order.idPr)) {
                products[i].Stock = products[i].Stock - Number(diff);
            }
        }
        localStorage.setItem("products", JSON.stringify(products));

        location.reload();
    }
}
//ordersNbr
function ordersNbr() {
    var connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    var orders = JSON.parse(localStorage.getItem('orders') || '[]');
    OrderNbr = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].idUser === connectedUser.id) {
            OrderNbr += 1;
        }
    }

    document.getElementById('OrderNbr').innerHTML = ' ( ' + OrderNbr + ' )';

}
////////////////
function experienceStyle(exp) {

    if (exp >= 10 && exp <= 12) {
        alert(exp)
        var expStyle = `<td class='red'>`;
    } else if (exp >= 5 && exp < 10) {

        var expStyle = `<td class='green'>`;


    } else {

        var expStyle = `<td class='orange'>`;

    }
    return expStyle
}



