import { useEffect, useState } from "react";
import { Schema } from "@/types/filter";
import { ProductType } from "@/types/product";
import { CategoryType } from "@/types/category";

interface ResponseTypeCategory {
  result: CategoryType[] | null;
  loading: boolean;
  error: string;
}

export function useGetProductCategories(): ResponseTypeCategory {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResult(data.data);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
        setLoading(false);
      }
    })();
  }, [url]);

  return { result, loading, error };
}

export function useGetProductField() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`;
  const [result, setResult] = useState<Schema | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResult(data.data);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
        setLoading(false);
      }
    })();
  }, [url]);

  return { result, loading, error };
}

interface ResponseType {
  result: ProductType[] | null;
  loading: boolean;
  error: string;
}

export function useGetProductBySlug(
  slug: string | string[] | undefined,
): ResponseType {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResult(data.data);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
        setLoading(false);
      }
    })();
  }, [url]);

  return { result, loading, error };
}
