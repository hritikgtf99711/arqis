
"use client";
import { useEffect, useState } from "react";
import { usePathname, useParams, useRouter } from "next/navigation";
import Header from "@/admin/components/header/Header";
import LeftSidebar from "@/admin/components/header/LeftSidebar";
import RightSidebar from "@/admin/components/header/RightSidebar";
import { ToastContainer } from "react-toastify";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  const isLoginPage = pathname === "/admin/login";
  const hasProjectId = Boolean(params?.id);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!isLoginPage && !token) {
    } else {
      setIsChecking(false);
    }
    document.body.className = "admin-body";
  }, [isLoginPage, router]);

  // ⚠️ Prevent rendering until login check completes
  // if (!isLoginPage && isChecking) return null;

  return (
    <>
      {!isLoginPage && (
        <>
          <Header
            onLogout={() => {
              localStorage.removeItem("adminToken");
              router.replace("/admin/login");
            }}
          />
          <LeftSidebar />
          {hasProjectId && <RightSidebar projectId={params.id} activeSlug={params.slug} />}
        </>
      )}

      <ToastContainer position="top-right" autoClose={1000} />

      <main
        className={
          !isLoginPage
            ? `px-[50px] ${hasProjectId ? "ml-[80px] mr-[80px]" : "ml-[80px]"}`
            : ""
        }
      >
        
        {children}
      </main>
    </>
  );
}


// "use client";

// import Header from "@/admin/components/header/Header";
// import LeftSidebar from "@/admin/components/header/LeftSidebar";
// import RightSidebar from "@/admin/components/header/RightSidebar";
// import { ToastContainer } from "react-toastify";
// import { usePathname, useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";


// export default function AdminLayout({ children }) {
//   const pathname = usePathname();
//   const params = useParams();
//   const router = useRouter();

//   const isLoginPage = pathname === "/admin/login";
//   const hasProjectId = Boolean(params?.id);

//   const [checking, setChecking] = useState(true);

//   // useEffect(() => {
//   //   if (isLoginPage) return;

//   //   const validateToken = async () => {
//   //     const token = localStorage.getItem("adminToken");
//   //     if (!token) {
//   //       router.replace("/admin/login");
//   //       return;
//   //     }

//   //     try {
//   //       const res = await fetch(`${BASE_ADMIN}validate-token`, {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       });

//   //       if (!res.ok) throw new Error("Invalid token");
//   //       setChecking(false);
//   //     } catch (err) {
//   //       localStorage.removeItem("adminToken");
//   //       router.replace("/admin/login");
//   //     }
//   //   };

//   //   validateToken();
//   // }, [isLoginPage, router]);


//     useEffect(() => {
//     if (isLoginPage) return;

//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       router.replace("/admin/login");
//     }
//   }, [isLoginPage, router]);

//   useEffect(() => {
//     document.body.className = "admin-body";
//   }, []);

//   // if (checking) {
//   //   return <p className="text-center text-white mt-10">Checking authentication...</p>;
//   // }

//   return (
//     <>
//       {!isLoginPage && (
//         <Header
//           onLogout={() => {
//             localStorage.removeItem("adminToken");
//             window.location.href = "/admin/login";
//           }}
//         />
//       )}

//       {!isLoginPage && <LeftSidebar />}
//       {!isLoginPage && hasProjectId && (
//         <RightSidebar projectId={params.id} activeSlug={params.slug} />
//       )}

//       <ToastContainer position="top-right" autoClose={1000} />

//       <main
//         className={
//           !isLoginPage
//             ? `px-[50px] ${hasProjectId ? "ml-[80px] mr-[80px]" : "ml-[80px]"}`
//             : ""
//         }
//       >
//         {children}
//       </main>
//     </>
//   );
// }