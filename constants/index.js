export const PAGE_SIZE = 10;

export const API_URL = "https://api.spacexdata.com/v5/launches/query";

export const QUERY_OPTIONS = {
    select: "id name date_utc success upcoming details failures links",
    sort: "date_utc",
};