    // export const SortProductByDiscount = (products) => {
    //     products.sort((a,b) => {
    //         return (b.price - b.salePrice) - (a.price - a.salePrice);
    //     })
    //     const newSaleProducts = products.slice(0, 5);
        
    //     return handlePercentDiscount(newSaleProducts);
    // }

    export const handlePercentDiscount = (products) => { 
        const newList = products.map(product => {
            const percentDiscount = 100 - Math.round(product.salePrice * 100 / product.price) ;
            return {...product, percentDiscount: percentDiscount}
        })
        return newList;
    }