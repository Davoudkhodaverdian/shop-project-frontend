"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Product from "@/fundamental/models/product";
import PaginationCmp from "@/components/common/paginationCmp";
import productTotal from '@/components/common/products/products.json';

const PageManagement: React.FC<{ products: Product[], pageTopRef: React.RefObject<HTMLDivElement | null> }> = ({ products, pageTopRef }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const perPage = parseInt(searchParams.get("per-page") || "10");

    // The entire data is fetched from the backend, and pagination is implemented client-side
    const paginatedData = products;
    const countPage = productTotal && Math.ceil(productTotal?.length / perPage);
    // console.log('products', { products })
    useEffect(() => {
        if (paginatedData?.length === 0) {
            const params = new URLSearchParams(searchParams.toString());
            params.set('page', '1');
            params.set('per-page', "10");
            router.push(pathname + '?' + params, { scroll: false });
        }
    }, [paginatedData]);

    return (
        <PaginationCmp countPage={countPage} pageTopRef={pageTopRef} />
    )
}
export default PageManagement;
