import React from "react";
import Buymanager from "./buymanager";

interface Props { item: any }

const DetailsProducts: React.FC<Props> = ({ item }) => {

    const { name, description, image } = item.attributes;

    return (
        <div className="shadow border border-gray-300 p-10 m-10 rounded ">
            <div>
                <img className="max-h-[500px] my-2" src={image?.data} />
            </div>
            <div>{name}</div>
            <div className="flex md:flex-row flex-col p-3"><Buymanager item={{ ...item.attributes, id: item.id }} /></div>
            <div>توضیحات:
                <section dangerouslySetInnerHTML={{ __html: description } as any}></section>
            </div>
        </div>
    )

}

export default DetailsProducts;