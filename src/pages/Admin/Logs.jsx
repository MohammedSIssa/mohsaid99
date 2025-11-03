import { API } from "../../scripts/globals";
import { useState, useEffect } from "react";

import { fetchWithCache } from "../../scripts/cache";

const Logs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getLogs() {
      try {
        setLoading(true);
        const res = await fetchWithCache(API + "/logs");
        setData(res);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getLogs();
  }, []);

  if (loading) return <h1>Loading logs</h1>;
  if (error) return <h1>Error getting logs</h1>;

  if (data) {
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
            <td dir="ltr"><small>{log.details}</small></td>
            <td>{log.visited}</td>
          </tr>
        ))}
      </table>
    );
  }
};

export default Logs;
