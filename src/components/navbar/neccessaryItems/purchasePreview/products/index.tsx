import { useAppSelector } from "../../../../../app/hooks";
import { getStrapiImage } from "../../../../../app/lib/media";
import { RootState } from "../../../../../app/store";
import MinusPlus from "../../../../home/products/buymanager/minusPlus";
import PageLink from "./pageLink";

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
            <PageLink />
            {
                number === 0 ? (<div className="p-3">شما هیچ محصولی انتخاب نکرده اید</div>) :
            <>
                <div className="p-3">تعداد کالا: {number}</div>
                <ul className="p-5 max-h-[400px]  overflow-y-auto shadow-inner">
                    {
                        shoppingBag?.map(item => (
                            <li key={item.id} className="flex py-3">
                                <div className=" ">
                                    <img className="max-h-[100px]" src={getStrapiImage(item.image?.data, 'thumbnail')} />
                                </div>
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
            </>
            }
        </div>

    )
}
export default Products;