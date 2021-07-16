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
            // const price = formatPrice(product.price)
            // const salePrice = formatPrice(product.salePrice)


            return {...product, percentDiscount: percentDiscount}
        })
        return newList;
    }

    export const formatPrice = (price) => {
        const formatter = new Intl.NumberFormat('vi')
        return formatter.format(price)
    }

    export const getFirstCharacterUser = (name) => {
        const arrCharacter = name.split('')[0]
        return arrCharacter
    } 
    