import './ProductsBox.css'

const ProductsBox = () => {

     type products={
        img:string,
        name:string,
        price:number
    }

    const products:products[]=[{
        img:'./imgs/img1.svg',name:"Air Jordan 1 Mid Dutch Green",price:1199.99
    },{
        img:'./imgs/img2.svg',name:"Air Jordan 1 High Zoom CMFT Tropical Twist",price: 1049
    },{
        img:'./imgs/img3.svg',name:"Air Jordan 1 Mid Dutch Green",price:1350
    },{
        img:'./imgs/img4.svg',name:"Air Jordan 1 Mid GS Light Smoke Grey",price:1585
    },{
        img:'./imgs/img5.svg',name:"Air Jordan 1 Mid SE Bright Citrus",price:949.99
    },{
        img:'./imgs/img6.svg',name:"Air Jordan 1 Mid Grey Camo",price:999.99
    }]

    return (
        <div className="wrapper-product">
            <h1 className="wrapper-product-title">Os melhores em um só lugar</h1>
            <h2 className="wrapper-product-subtitle">A marca jordan na JordanShoes é a escolha certa para <br />
                os amantes de sneaker que buscam estilo e conforto.
            </h2>
            <div className="products-box">
                {products.map((product,index)=>(
                    <div className="products-box-item" key={index}>
                        <div className="products-box-item-bg">
                            <img src={product.img} alt="Product image" className="products-box-item-bg-img" />
                        </div>
                        <h1 className="products-box-item-name">{product.name}</h1>
                        <h2 className="products-box-item-info">Tenis Air Jordan</h2>
                        <h3 className="products-box-item-price">R${product.price.toFixed(2)}</h3>
                    </div>


                ))}
            </div>

        </div>
    )
}

export default ProductsBox