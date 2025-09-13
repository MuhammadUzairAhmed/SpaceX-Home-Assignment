import styles from "@/styles/Home.module.css";

const buildPageList = (page, totalPages, neighbors = 1) => {
    if (!totalPages || totalPages <= 1) return [];

    const wanted = new Set([1, totalPages]);
    for (let p = page - neighbors; p <= page + neighbors; p++) {
        if (p >= 1 && p <= totalPages) wanted.add(p);
    }

    const sorted = Array.from(wanted).sort((a, b) => a - b);

    const result = [];
    for (let i = 0; i < sorted.length; i++) {
        const curr = sorted[i];
        const prev = sorted[i - 1];
        if (i > 0 && curr - prev > 1) result.push("…");
        result.push(curr);
    }
    return result;
};

export default function Pagination({ page, totalPages, onChange }) {

    const pages = buildPageList(page, totalPages, 1);
    if (!pages.length) return null;

    return (
        <nav className={styles.pagination} aria-label="pagination">
            <button
                className={styles.page_btn}
                onClick={() => onChange(Math.max(1, page - 1))}
                disabled={page <= 1}
                aria-label="Previous Page"
            >
                ‹ Prev
            </button>

            <ul className={styles.page_list}>
                {pages.map((p, idx) =>
                    p === "…" ? (
                        <li key={"ellipsis-" + idx} className={styles.page_ellipsis}>…</li>
                    ) : (
                        <li key={p}>
                            <button
                                className={p === page ? styles.page_btn_active : styles.page_btn}
                                aria-current={p === page ? "page" : undefined}
                                onClick={() => onChange(p)}
                            >
                                {p}
                            </button>
                        </li>
                    )
                )}
            </ul>

            <button
                className={styles.page_btn}
                onClick={() => onChange(Math.min(totalPages, page + 1))}
                disabled={page >= totalPages}
                aria-label="Next Page"
            >
                Next ›
            </button>
        </nav>
    );
}


// expose for Jest-only unit tests
export const __testables = { buildPageList };