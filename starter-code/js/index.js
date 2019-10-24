 function deleteItem(e) {


 }

 function getPriceByProduct(itemNode) {
   let priceStr = itemNode.innerText; // document.querySelectorAll(".product-row span")[1].innerText;
   priceStr.splice(0, 1);
   let price = parseFloat(priceStr);
   console.log(price);
   return price;
 }


 function updatePriceByProduct(productPrice, index) {

 }

 function getTotalPrice() {
   // Executes if "Calculate Prices" is clicked
   let unitPrice = getPriceByProduct();
   let unitQuantity = createQuantityInput();

   //document.getElementsByClassName("btn-success").onclick =

   // 
 }

 function createQuantityInput() {
   const quantityInput = document.querySelectorAll("input");
 }

 function createDeleteButton() {

 }

 function createQuantityNode() {

 }

 function createItemNode(dataType, itemData) {

 }

 function createNewItemRow(itemName, itemUnitPrice) {
   const newItemRow = document.createElement("div");

 }

 function createNewItem() {

 }

 window.onload = function () {
   var calculatePriceButton = document.getElementById('calc-prices-button');
   var createItemButton = document.getElementById('new-item-create');
   var deleteButtons = document.getElementsByClassName('btn-delete');

   calculatePriceButton.onclick = getTotalPrice;
   createItemButton.onclick = createNewItem;

   for (var i = 0; i < deleteButtons.length; i++) {
     deleteButtons[i].onclick = deleteItem;
   }
 };