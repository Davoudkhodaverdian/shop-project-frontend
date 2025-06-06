import Link from "next/link";
import { useAppSelector } from "@/fundamental/hooks";
import { RootState } from "@/fundamental/store";
import addComma from "@/fundamental/addComma";

const CalculatePrice: React.FC = () => {
    const shoppingBag = useAppSelector((state: RootState) => state.shoppingBag);
    const getPriceShoppingBag = (shoppingBag: any) => {
        let price = 0;
        shoppingBag.map((item: any) => { price = price + item.number * item.price });
        return price;
    }

    let price = getPriceShoppingBag(shoppingBag);

    return (
        <div className="p-3">
            <div>مبلغ قابل پرداخت {addComma(price)} تومان</div>
            <div className="mt-8">
            <Link href={'/cart'} className="transition-all p-3  rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1">
                    ثبت سفارش
            </Link>
            </div>
        </div>
    )
}

export default CalculatePrice;