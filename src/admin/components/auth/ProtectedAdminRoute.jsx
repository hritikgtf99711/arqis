"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      router.replace("/admin/login");
    } else {
      setIsChecking(false);
    }
  }, [router]);
  if (isChecking) return null;
  return <>{children}</>;
}
