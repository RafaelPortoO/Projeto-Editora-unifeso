//product constructor
class product{
    construtor(name1,name2,name3,name4){
        this.name1 = name1;
        this.name2 = name2;
        this.name3 = name3;
        this.name4 = name4;
    }
}
//UI constructor
class UI{
    addProduct(product){

        const productlist =  document.getElementById('product-list');
        const element = document.getElementById('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>product</strong>: ${product,name1} -
                    <strong>product</strong>: ${product,name2} -
                    <strong>product</strong>: ${product,name3} -
                    <strong>product</strong>: ${product,name4} -
                </div>
            </div>

        `;

      productlist.appendChild(element);
    }

    resetform(){
        document.getElementById('product-form') ,reset();
    }

    deleteProduct(){
       
    }
    showProduct(){

    }
}

//DOM Events
document.getElementById('product-form')
    .addEventListener('submit', function(e){
        const name1 = document.getElementById( 'name1').value;
        const name2 = document.getElementById( 'name2').value;
        const name3 = document.getElementById( 'name3').value;
        const name4 = document.getElementById( 'name4').value;

        const product = new product(name1,name2,name3,name4);

        const UI = target.UI( );


    // Salvar produto
    você . addProduto ( produto ) ;
    você . showMessage ( 'Produto adicionado com sucesso' ,  'success' ) ;
    você . resetForm ( ) ;

    e . preventDefault ( ) ;
} ) ;
