var app = new function() {
  this.item = document.getElementById('products');
  this.products = [];

  
  
  this.FetchAll = function() {
    var data = '';

    if (this.products.length > 0) {
      for (i = 0; i < this.products.length; i++) {
        data += '<tr>';
        data += '<td>'+(i+1)+". " + this.products[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
        data += '</tr>';
      }
    }

    this.Count(this.products.length);
    return this.item.innerHTML = data;
  };

  this.Add = function () {
    item = document.getElementById('add-product');
    var product = item.value;
    if (product) {
      this.products.push(product.trim());
      item.value = '';
      this.FetchAll();
    }
  };

  this.Edit = function (product) {
    var item = document.getElementById('edit-product');
    item.value = this.products[product];
    document.getElementById('edit-box').style.display = 'block';
    self = this;

    document.getElementById('save-edit').onsubmit = function() {
      var product = item.value;

      if (product) {
        self.products.splice(product, 1, product.trim());
        self.FetchAll();
        CloseInput();
      }
    }
  };

  this.Delete = function (product) {
    this.products.splice(product, 1);
    this.FetchAll();

  };

  this.Count = function(data) {
    var item   = document.getElementById('counter');
    var name = 'Products';

    if (data) {
        if(data ==1){
            name = 'Product'
        }
      item.innerHTML = data + ' ' + name ;
    } 
    else {
      item.innerHTML = 'No ' + name;
    }
  };
  
}

app.FetchAll();

function CloseInput() {
  document.getElementById('edit-box').style.display = 'none';
}
