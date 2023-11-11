export const getCompanyDetail = async (id: number) => {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/companies/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (res) => {
      const data = await res.json();
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
