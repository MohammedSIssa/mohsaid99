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
      <div className="flex flex-col gap-5">
        {data.map((log, idx) => (
          <div className="flex gap-5" key={idx}>
						<p>{log.user}</p>
						<p>{log.details}</p>
						<p>{log.visited}</p>
					</div>
        ))}
      </div>
    );
  }
};

export default Logs;
