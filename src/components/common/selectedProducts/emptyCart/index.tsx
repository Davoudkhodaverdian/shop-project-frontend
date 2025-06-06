
const EmptyCart: React.FC = () => {


    return (
        <div className="flex flex-col items-center p-3 my-6">
            <div className="p-3">سبد خرید شما خالی میباشد</div>
            <div>
                <img src="/images/png/empty-cart.png" alt="empty-cart" />
            </div>
        </div>
    )
}

export default EmptyCart;