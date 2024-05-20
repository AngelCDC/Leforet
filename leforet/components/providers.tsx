"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({children}:{children: ReactNode}) {
    return(
    <USCProvider
        mode="payment"
        cartMode="client-only"
        stripe=""
        successUrl="http://localhost:3000/success"
        cancelUrl="http://localhost:3000/error"
        currency="USD"
        billingAddressCollection={true}
        shouldPersist={true}
        language="es-ES"
        >
            {children}
        </USCProvider>
    )
}