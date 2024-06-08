import Navigation from "./Navigation";

export default function Nav() {
    return (
        <div>
            <Navigation
                logo="/icons/Logo.svg"
                search="/icons/search.svg"
                heartIcon="/icons/Heart.svg"
                cart="/icons/Bag.svg"
                cartTxt="Shopping cart:"
                cartSum={57.12}
            />


        </div>

    )
}

