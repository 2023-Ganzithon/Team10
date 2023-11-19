import { Company3RankType } from "./../../types/rank";
export const getTotal3Rank = async () => {
  return fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/companies/top-companies-preview/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(async (res) => {
      const data: Company3RankType = await res.json();
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getEnv3Rank = async () => {
  return fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/companies/top-companies-preview-env/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(async (res) => {
      const data: Company3RankType = await res.json();
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSocial3Rank = async () => {
  return fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/companies/top-companies-preview-social/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(async (res) => {
      const data: Company3RankType = await res.json();
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getGov3Rank = async () => {
  return fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/companies/top-companies-preview-gov/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(async (res) => {
      const data: Company3RankType = await res.json();
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// total rank

export const getTotalRank = async () => {
  return fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/companies/top-companies/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(async (res) => {
      const data: Company3RankType = await res.json();
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getEnvRank = async () => {
  return fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/companies/top-companies-env/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(async (res) => {
      const data: Company3RankType = await res.json();
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSocialRank = async () => {
  return fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/companies/top-companies-social/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(async (res) => {
      const data: Company3RankType = await res.json();
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getGovRank = async () => {
  return fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/companies/top-companies-gov/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(async (res) => {
      const data: Company3RankType = await res.json();
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
