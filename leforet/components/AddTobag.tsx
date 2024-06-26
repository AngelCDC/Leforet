"use client";


import { urlFor } from "@/app/sanity";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";

export interface ProdcutCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any;
}

export default function AddToBag({
    currency, 
    description, 
    name, 
    price, 
    image
}: ProdcutCart){
    const {addItem, handleCartClick} = useShoppingCart();
    const product ={
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        id: name,
    };
    return <Button onClick={()=> {
        addItem(product), handleCartClick();
    }}>
        Add To Cart</Button>
}