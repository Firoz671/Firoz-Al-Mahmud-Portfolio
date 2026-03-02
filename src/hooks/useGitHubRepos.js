import { useState, useEffect } from 'react';

export function useGitHubRepos(username) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchRepos = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();
                if (isMounted) {
                    // Filter to show repositories that aren't forks and have a description
                    const filteredRepos = data.filter(repo => !repo.fork);
                    setRepos(filteredRepos);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                    setLoading(false);
                }
            }
        };

        fetchRepos();

        return () => {
            isMounted = false;
        };
    }, [username]);

    return { repos, loading, error };
}
