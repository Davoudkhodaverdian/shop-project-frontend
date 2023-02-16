import React from "react";
import Language from "./language";
import PurchasePreview from "./purchasePreview";

const NecessaryItems: React.FC = () => {

    return (
        <div className="md:flex">
            <PurchasePreview/>
            <Language />
        </div>
    )
}


export default NecessaryItems;