import Link from "next/link";
import { useAppSelector } from "@/fundamental/hooks";
import { RootState } from "@/fundamental/store";

import CalculatePrice from "../calculatePrice";
import EmptyCart from "./emptyCart";
import MinusPlus from "@/components/common/products/buymanager/minusPlus";

const Products: React.FC = () => {

    const shoppingBag = useAppSelector((state: RootState) => state.shoppingBag);
    const getNumberShoppingBag = (shoppingBag: any) => {
        let num = 0;
        shoppingBag.map((item: any) => { num = num + item.number });
        return num;
    }

    let number = getNumberShoppingBag(shoppingBag);
    return (
        <div>
            {
                number === 0 ? <EmptyCart /> :
                    <div className="my-6">
                        <div className="p-3">تعداد کالا: {number}</div>
                        <ul className="p-5 max-h-[400px]  overflow-y-auto shadow-inner ">
                            {
                                shoppingBag?.map(item => (
                                    <li key={item.id} className="flex py-3 border-b">
                                        <Link href={`/products/${item.slug}`}>
                                            <div className=" overflow-hidden">
                                                <img className="max-h-[100px] hover:scale-110 transition cursor-pointer" src={item.image[0]} />
                                            </div>
                                        </Link>
                                        <div className="flex flex-col">
                                            <div className="mt-2 ">
                                                {item.name}
                                            </div>
                                            <div className="mt-2">
                                                {item.price} {'تومان'}
                                            </div>
                                            <MinusPlus item={item} />
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        {number !== 0 && <CalculatePrice />}
                    </div>
            }
        </div>

    )
}
export default Products;