var app = new Vue({
    el: "#app",
    data: {
        articulos: [],
        cart: []
    },
    methods: {
        sortSelect(array) {
            const select = document.getElementById('select')

            if (select.value === '0') {
                return array.sort((a, b) => a.stock - b.stock)
            } else if (select.value === '1') {
                return array.sort((a, b) => a.precio - b.precio)
            } else if (select.value === '2'){
                return array.sort((a, b) => b.precio - a.precio)
            }

        },
        añadirCarro(element){
            if(element.stock <= 0){
                Swal.fire(
                    'no quedan mas, lo sentimos!',
                    'info'
                  )
              }
              else{
                Swal.fire(
                    'Producto añadido correctamente!',
                    
                    'success'
                  )
                  element.stock--
              }
        },
        addCart(element){
            console.log(element)
            const itemCart = this.cart.filter((item) => item.nombre == element.nombre)[0]
            if(itemCart != undefined){
                itemCart.cantidad++
            }
            else{
               const itemCart = {
                   nombre: element.nombre,
                   precio: element.precio,
                   cantidad: 1
               }
               this.cart.push(itemCart)
            }
            element.stock--
        }
    }
    
})

let endpoint = "https://apipetshop.herokuapp.com/api/articulos"
let init = {
    method: 'GET'
}

fetch(endpoint, init)
    .then(response => response.json())
    .then(data => {
        app.articulos = data.response
        console.table(app.articulos)
        
        

    })


    