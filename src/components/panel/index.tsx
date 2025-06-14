"use client";
import useAuth from "@/fundamental/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";


const Panel: React.FC = () => {

    const { user, loading } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (!loading && !user) {
            router.replace("/");
        }
    }, [user]);

    return (
        <div>
               {user && <h3 className="p-3">پنل کاربری {(user?.firstName ? `${user?.firstName} ${user?.lastName} ` : '')}</h3>}
        </div>
    )
}
export default Panel;
