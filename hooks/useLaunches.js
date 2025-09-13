import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, QUERY_OPTIONS } from "@/constants";

export function useLaunches(page = 1, pageSize = 10) {
    const [docs, setDocs] = useState([]);
    const [meta, setMeta] = useState({ page: 1, totalPages: 1, hasNextPage: false, hasPrevPage: false });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        (async () => {
            try {
                setLoading(true);
                setError(null);

                const body = {
                    query: {},
                    options: {
                        ...QUERY_OPTIONS,
                        page,
                        limit: pageSize,
                    },
                };

                const res = await axios.post(API_URL, body);
                if (res?.data) {
                    const { docs = [], page: p = 1, totalPages = 1, hasNextPage = false, hasPrevPage = false } = res.data || {};

                    setDocs(docs);
                    setMeta({ page: p, totalPages, hasNextPage, hasPrevPage });
                }

            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();

    }, [page, pageSize]);

    return { docs, ...meta, loading, error };
}