// Class sale
class Sale {
    constructor(prod, qty, buy_price, sale_price, total_price, profit) {
        this.prod = prod;
        this.qty = qty;
        this.buy_price = buy_price;
        this.sale_price = sale_price;
        this.total_price = total_price;
        this.profit = profit;
    }
}

// class UI
class UI {
    showAlert(message, className) {
        const p = document.createElement("p");
        p.className = `lead ${className}`;
        p.textContent = message;
        const sumarry = document.getElementById("sumarry");
        sumarry.appendChild(p)
    }
    //   load sale record into the table
    addSaleRecord(sale) {
        const recordSales = document.getElementById('table');
        // Create tr element
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML = `
        <tr>${sale.prod}</th>
      <td class="pt-2">${sale.qty}</td>
      <td class="pt-2" >${sale.sale_price}</td>
      <td class="pt-2" >${sale.total_price}</td>
      <td class="pt-2" >${sale.vAT}</td>
      <td class="pt-2"><a href="" class="delete">X</a></td>
    `;
    recordSales.appendChild(row);
    }

 totalPriceCalc() {
    const total = new Sale(prod,qty,buy_price,sale_price,total_price,profit);
    
   document.querySelector("#total-amount").value=total.total_price;
}

    // delete sale record
    deleteSale(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
      }
    }
}

// ui Vars

const product = document.getElementById('product');
const quantity = document.getElementById('quantity-number');
const selling = document.getElementById('selling-price');
const totalAmount = document.getElementById('total-amount')
// product selection eventListeners
product.addEventListener("change", function (e) {
        let select = this.value;
        let prod_name = this.options[this.selectedIndex].text;

        // event listener to when quantity is changed
        quantity.addEventListener("change", function (e) {
            qty = quantity.value;
            total_price = sale_price * qty;
            totalAmount.value = total_price;
            // showAlertFunct();
            e.preventDefault()
        });

        function display() {
            prod = prod_name;
            qty = quantity.value;
            total_price = sale_price * qty;
            profit = total_price - buy_price;
            showAlertFunct();
        }

        let items_available = 0;

        function showAlertFunct() {
            const ui = new UI();
            ui.showAlert(
                `Quantity:${items_available} Buying Price:${buy_price},Selling Price:${sale_price},Profit Per Unit:${profit}`,
                "success"
            );

        }

        switch (select) {
            case "nokia":
                items_available = 32;
                sale_price = 5500;
                buy_price = 2970;

                display();

                const nokia_sale = new Sale(prod,qty,buy_price,sale_price,total_price,profit);

                selling.value = sale_price;
                totalAmount.value = total_price;
                break;

            case "hp":
                items_available = 12;
                sale_price = 40000;
                buy_price = 26000;

                display();

                const hpLaptop_sale = new Sale(prod,qty,buy_price,sale_price,total_price,profit);

                selling.value = sale_price;
                totalAmount.value = total_price;

                break;

            case "nokia-p":
                items_available = 14;
                buy_price = 2100;
                sale_price = 3200;

                display();

                const nokia_pending = new Sale(prod,qty,buy_price,sale_price,total_price,profit);
                selling.value = sale_price;
                totalAmount.value = total_price;
                break;

            case "cargo-ms":
                noAvailable = 16;
                sale_price = 8500;
                buy_price = 5570;

                display();
                const cargo_sale = new Sale(prod,qty,buy_price,sale_price,total_price,profit);
                selling.value = sale_price;
                totalAmount.value = total_price;
                break;

            case "bulk-sms":
                noAvailable = 55;
                sale_price = 500;
                buy_price = 970;

                display();

                const sms_sale = new Sale(prod,qty,buy_price,sale_price,total_price,profit);
                selling.value = sale_price;
                totalAmount.value = total_price;
                break;
            default:
                break;
        }

        e.preventDefault();
    },
    false
);



// add sale record to table event 
document.getElementById('add').addEventListener('click', (e) => {
    const sale = new Sale(prod,qty,buy_price,sale_price,total_price,profit);
    sale.vAT = 0;

    const ui = new UI();

    ui.addSaleRecord(sale);
    ui.totalPriceCalc();

    e.preventDefault();
});


// delete sale
document.getElementById('table').addEventListener('click', function (e) {
    const ui = new UI();

    ui.deleteSale(e.target);
    
});

// select date from calendar

// reset eventListener
document.querySelector('#reset').addEventListener('click',(e)=>{
    document.getElementById("product-selected").innerHTML = "";
});