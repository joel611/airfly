export const listBase = async () => {
  const response = await fetch('https://api.airtable.com/v0/meta/bases', {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
    },
  });

  return await response.json();
};

export const getBase = async (id: string) => {
  const response = await fetch(`https://api.airtable.com/v0/meta/bases/${id}/tables`, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
    },
  });
  return await response.json();
};
