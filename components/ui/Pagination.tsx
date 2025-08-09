'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const getPages = () => {
        const pages = []

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i)
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, '...', totalPages - 1, totalPages)
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, 2, '...', totalPages - 2, totalPages - 1, totalPages)
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
            }
        }

        return pages
    }

    const pages = getPages()

    return (
        <div className="flex items-center justify-center gap-2 py-4">
            <Button
                variant="ghost"
                size="icon"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="bg-white rounded-xl"
            >
                <ChevronLeft className="w-4 h-4" />
            </Button>

            {pages.map((page, index) => (
                typeof page === 'number' ? (
                    <Button
                        key={index}
                        variant={page === currentPage ? "default" : "ghost"}
                        onClick={() => onPageChange(page)}
                        className={cn(
                            "w-10 h-10 rounded-xl bg-white",
                            page === currentPage ? "bg-rose-500 text-white hover:bg-rose-600" : ""
                        )}
                    >
                        {page}
                    </Button>
                ) : (
                    <div key={index} className="bg-white rounded-xl w-10 h-10 flex items-center justify-center text-muted-foreground">
                        {page}
                    </div>
                )
            ))}

            <Button
                variant="ghost"
                size="icon"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="rounded-xl bg-white"
            >
                <ChevronRight className=" w-4 h-4" />
            </Button>
        </div>
    )
}
