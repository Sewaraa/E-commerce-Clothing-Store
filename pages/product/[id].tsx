import { GetStaticPaths, GetStaticProps } from "next";
import { products } from "@/data/products";
import Head from "next/head";
import { Product } from "@/type/product";
import { Suspense, lazy } from "react";
import { resolve } from "path";
import Skeleton from "@/components/Skeleton";
const ProductInfo = lazy(() => import("@/components/ProductInfo"));
const ProductImage = lazy(() => import("@/components/ProductImage"));
type SingleProductProps = {
  product: Product | null;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((p) => ({
    params: { id: p.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<SingleProductProps> = async (
  context
) => {
  const { id } = context.params as { id: string };
  const product = products.find((p) => p.id === id) || null;
  return {
    props: { product },
  };
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
