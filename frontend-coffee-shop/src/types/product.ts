export type ProductType = {
    id: number;
    attributes: {
        productName: string;
        slug: string;
        productDescription: string;
        productActive: boolean;
        productPrice: number;
        productOrigin: string;
        productTest: string;
        productIsFeatured: boolean;
        productImage: {
            data: {
                id: number;
                attributes: {
                    url: string;
                }   
            }[]
        };
        category: {
            data: {
                attributes: {
                    slug: string;
                    categoryName: string;
                }
            }
        }
    }
}