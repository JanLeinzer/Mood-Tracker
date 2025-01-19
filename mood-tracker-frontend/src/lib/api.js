const API_URL = 'http://localhost:3000';

export const fetchEntries = async () => {
  const response = await fetch(`${API_URL}/moods`);
  return await response.json();
};

export const createEntry = async (entry) => {
  const response = await fetch(`${API_URL}/moods`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry)
  });
  return await response.json();
};

export const deleteEntry = async (id) => {
  await fetch(`${API_URL}/moods/${id}`, {
    method: 'DELETE'
  });
};