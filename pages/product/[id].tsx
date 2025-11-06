import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Product } from "@/type/product";
import { Suspense, lazy } from "react";
import Skeleton from "@/components/Skeleton";
const ProductInfo = lazy(() => import("@/components/ProductInfo"));
const ProductImage = lazy(() => import("@/components/ProductImage"));
import { sampleData } from "@/data/sampleData";

type SingleProductProps = {
  product: Product | null;
};

// ✅ الخطوة 1: تحديد المسارات من البيانات المحلية
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sampleData.map((p) => ({
    params: { id: p.id.toString() },
  }));

  return {
    paths,
    fallback: false, // لأن كل المنتجات محلية، ما في داعي للـ blocking
  };
};

// ✅ الخطوة 2: جلب بيانات المنتج من sampleData بدل الـ API
export const getStaticProps: GetStaticProps<SingleProductProps> = async (
  context
) => {
  const id = context.params?.id;
  const product = sampleData.find((p) => p.id.toString() === id);

  if (!product) {
    return {
      props: { product: null },
    };
  }

  return {
    props: { product },
  };
};

// ✅ الخطوة 3: صفحة عرض المنتج
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
        <meta name="description" content={product.description} />
        <meta property="og:image" content={product.image} />
      </Head>

      <Suspense fallback={<Skeleton />}>
        <div className="max-w-5xl mx-auto px-4 py-8 pt-[90px]">
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