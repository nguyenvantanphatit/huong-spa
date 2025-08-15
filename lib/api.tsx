const API_BASE_URL = 'http://localhost:1337/api'
// product.interface.ts

export interface Category {
    id: number;
    documentId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
}

export interface Image {
    id: number;
    url: string;
}

export interface Product {
    id: number;
    documentId: string;
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    category: Category;
    image: Image;
    isNew: boolean;
    name: string;
}

export interface ProductListResponse {
    data: {
        data: Product[];
        meta: Record<string, unknown>;
    };
    categories: {
        data: Category[];
        meta: Record<string, unknown>;
    };
    meta: {
        pagination: Pagination;
    };
}

export interface Pagination {
    page: number;
    limit: number;
    pageCount: number;
    total: number;
}


// Lấy danh sách sản phẩm
export async function fetchProducts(): Promise<ProductListResponse> {
    try {
        const response = await fetch(`${API_BASE_URL}/products/all`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: { revalidate: 300 },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ProductListResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

// Lấy chi tiết sản phẩm theo slug
export async function fetchProductBySlug(slug: string): Promise<Product> {
    try {
        const response = await fetch(`${API_BASE_URL}/products/slug/${slug}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: { revalidate: 300 },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();

        // Lấy đúng sản phẩm từ API
        const product = json?.data?.product?.data;
        if (!product) {
            throw new Error("Product not found in API response");
        }

        return product as Product;
    } catch (error) {
        console.error("Error fetching product details:", error);
        throw error;
    }
}

export async function fetchPa(page = 1, limit = 10): Promise<ProductListResponse> {
    try {
        const response = await fetch(
            `${API_BASE_URL}/products/all?page=${page}&limit=${limit}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                next: { revalidate: 300 },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ProductListResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}



export function formatDate(timestamp: string | null): string {
    if (!timestamp) return "Chưa xác định"

    const date = new Date(timestamp)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const monthNames = [
        "tháng 1", "tháng 2", "tháng 3", "tháng 4", "tháng 5", "tháng 6",
        "tháng 7", "tháng 8", "tháng 9", "tháng 10", "tháng 11", "tháng 12"
    ]

    return `${day} ${monthNames[month - 1]}, ${year}`
}


export function stripHtmlTags(html: string): string {
    if (typeof window !== 'undefined') {
        const doc = new DOMParser().parseFromString(html, 'text/html')
        return doc.body.textContent || ''
    } else {
        return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim()
    }
}


export function formatDateShort(timestamp: string | null): string {
    if (!timestamp) return "Chưa xác định"

    const date = new Date(timestamp)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    return `${day}.${month}.${year}`
}
