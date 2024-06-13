'use client'
import RecipeNav from "@/components/recipeNav"

export default function Layout({
                                 children,
                               }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"mx-auto md:w-1/2"}>
      <RecipeNav/>
      {children}
    </div>
  );
}