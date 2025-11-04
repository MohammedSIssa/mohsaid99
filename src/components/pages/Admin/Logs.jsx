import { API, DEV_API } from "../../../scripts/globals";
import { useState, useEffect } from "react";

import LoadingLogs from "../../../components/Loaders/LoadingLogs";

import { fetchWithCache } from "../../../scripts/cache";

const Logs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_CALL =
    import.meta.env.MODE !== "development" ? API + "/logs" : DEV_API + "/logs";

  useEffect(() => {
    async function getLogs() {
      try {
        setLoading(true);
        const res = await fetchWithCache(API_CALL);
        setData(res);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getLogs();
  }, [API_CALL]);

  if (loading) return <LoadingLogs />;
  if (error) return <h1>Error getting logs</h1>;
  if (data.length === 0) return <h1>Empty log</h1>;

  if (data.length > 0) {
    return (
      <table dir="ltr">
        <tr>
          <th>Username</th>
          <th>Details</th>
          <th>URL</th>
        </tr>
        {data.map((log, idx) => (
          <tr key={idx}>
            <td>{log.username}</td>
            <td dir="ltr">
              <small>{log.details}</small>
            </td>
            <td>{log.visited}</td>
          </tr>
        ))}
      </table>
    );
  }
};

export default Logs;
