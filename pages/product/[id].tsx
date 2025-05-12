import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Product } from "@/type/product";
import { Suspense, lazy } from "react";
import Skeleton from "@/components/Skeleton";
const ProductInfo = lazy(() => import("@/components/ProductInfo"));
const ProductImage = lazy(() => import("@/components/ProductImage"));

type SingleProductProps = {
  product: Product | null;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products: Product[] = await response.json();
    const paths = products.map((p) => ({
      params: { id: p.id.toString() },
    }));
    return {
      paths,
      fallback: "blocking",
    };
  } catch (err) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export const getStaticProps: GetStaticProps<SingleProductProps> = async (
  context
) => {
  try {
    const id=context.params?.id;
    const response=await fetch(`https://fakestoreapi.com/products/${id}`);
    if(!response.ok){
      return{
        props:{
          product:null
        }}}
    const product=await response.json();
    return{
      props:{product},
      revalidate:600
    }
    
  } catch (err) {
    return{
      props:{product:null}
    }
  }
};

const SingleProductPage = ({ product }: SingleProductProps) => {
  if (!product)
    return (
      <div className="flex justify-center text-4xl font-bold text-gray-400 mt-25">
        Product Not Found!
      </div>
    );
  if (
    !product ||
    !product.title ||
    !product.image ||
    !product.price ||
    !product.description
  ) {
    return <Skeleton />;
  }
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description " content={product.description} />
        <meta property="og:image" content={product.image} />
      </Head>
      <Suspense fallback={<Skeleton />}>
        <div className="max-w-5xl mx-auto  px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ProductImage product={product} />
            <ProductInfo product={product} />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default SingleProductPage;
