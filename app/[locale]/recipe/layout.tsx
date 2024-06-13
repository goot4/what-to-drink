'use client'
import RecipeNav from "@/components/recipeNav"

export default function Layout({
                                 children,
  params: {locale}
                               }: Readonly<{
  children: React.ReactNode;
  params: {locale:string}
}>) {
  return (
    <div className={"mx-auto md:w-1/2"}>
      <RecipeNav locale={locale}/>
      {children}
    </div>
  );
}