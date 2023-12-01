// Construtor do produto
function  Produto ( nome ,  preço ,  ano )  {
    esse . nome  =  nome ;
    esse . preço  =  preço ;
    esse . ano  =  ano ; 
}

//Construtor de IU
function  IU ( )  { }

IU . protótipo . addProduto  =  função ( produto )  
{
    const  listaproduto  =  documento . getElementById ( 'lista de produtos' ) ;
    const  linha  =  documento . criarElemento ( 'div' ) ;
    element.innerHTML  =  `
        ${ produto . nome }
        ${ produto . preço }
        ${ produto . ano }
        <a href="#" class="delete">Excluir</a>
    `;
    product-list . acrescentarFilho ( linha )
};

IU . protótipo . resetForm  =  função  ( )  
{
    documento . getElementById ( 'formulário do produto' ) . reiniciar ( ) ;
}

IU . protótipo . showMessage  =  function  ( mensagem ,  cssClass )  {
    const  div  =  documento . criarElemento ( 'div' ) ;
    divisão . className  =  `alerta alerta- ${ cssClass } ` ;
    divisão . anexarChild ( document.createTextNode ( mensagem ) ) ; _
    //Mostra no DOM
    const  aplicativo  =  documento . querySelector ( '#App' ) ;
    const  formulário  =  documento . querySelector ( '#formulário-produto' ) ;
    //Inserir mensagem na UI
    aplicativo . insertBefore ( div ,  form ) ;
}
IU . protótipo . deleteProduto  =  função ( elemento )  
{
    if ( elemento . nomedaclasse  ===  'excluir' )  {
        elemento . parentElement . remover ( ) ;
    }
}

// Eventos DOM
documento . getElementById ( 'formulário do produto' )
    . addEventListener ( 'enviar' ,  função  ( e ) ) 
    {

        const name1 = document.getElementById( 'name1').value;
        const name2 = document.getElementById( 'name2').value;
        const name3 = document.getElementById( 'name3').value;
        const name4 = document.getElementById( 'name4').value;

        // Cria um novo produto de projeto
        const  produto  =  new  product ( nome ,  preço ,  ano ) ;

        //Cria uma nova UI
        const  ui  =  new  UI ( ) ;

        // Validação do usuário de entrada
        if ( _nome  ===  ''  ||  preço  ===  ''  ||  ano  ===  '' )  
        {
            você . showMessage ( 'Insira dados em todos os campos' ,  'perigo' ) ;
        }

        // Salvar produto
        você . addProduto ( produto ) ;
        você . showMessage ( 'Produto adicionado com sucesso' ,  'sucesso' ) ;
        você . resetForm ( ) ;

        e . preventDefault ( ) ;
    } ;

document.getElementById ( 'lista de produtos' )
    . addEventListener ( 'clique' ,  função ( e ) 
    {
       const  ui  =  new  UI ( ) ;
       
       você .deleteProduct ( e.target ) ; _ _
       você .showMessage ( 'Produto excluído com sucesso' ,  'sucesso' ) ;
       
       e.preventDefault ( ) ;
   
    } ) ;