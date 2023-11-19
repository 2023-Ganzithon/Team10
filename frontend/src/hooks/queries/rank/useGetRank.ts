import {
  getEnv3Rank,
  getEnvRank,
  getGov3Rank,
  getGovRank,
  getSocial3Rank,
  getSocialRank,
  getTotal3Rank,
  getTotalRank,
} from "./../../../api/rank/index";
import { useQuery } from "@tanstack/react-query";

export function useGetTotal3Rank() {
  return useQuery({
    queryKey: ["getTotal3Rank"],
    queryFn: async () => getTotal3Rank(),
  });
}

export function useGetEnv3Rank() {
  return useQuery({
    queryKey: ["getEnv3Rank"],
    queryFn: async () => getEnv3Rank(),
  });
}

export function useGetSocial3Rank() {
  return useQuery({
    queryKey: ["getSocial3Rank"],
    queryFn: async () => getSocial3Rank(),
  });
}

export function useGetGov3Rank() {
  return useQuery({
    queryKey: ["getGov3Rank"],
    queryFn: async () => getGov3Rank(),
  });
}

export function useGet3Rank({ slug }: { slug: string }) {
  return useQuery({
    queryKey: ["get3Rank", slug],
    queryFn: () => {
      // const numSlug = parseInt(slug);
      console.log("slug type", typeof slug);
      if (slug === '0') {
        return getTotalRank();
      } else if (slug === '1') {
        return getEnvRank();
      } else if (slug === '2') {
        return getSocialRank();
      }
      return getGovRank();
    },
  });
}

export function useGetTotalRank() {
  return useQuery({
    queryKey: ["getTotalRank"],
    queryFn: async () => getTotalRank(),
  });
}

export function useGetGovRank() {
  return useQuery({
    queryKey: ["getGovRank"],
    queryFn: async () => getGovRank(),
  });
}

export function useGetSocialRank() {
  return useQuery({
    queryKey: ["getSocialRank"],
    queryFn: async () => getSocialRank(),
  });
}

export function useGetEnvRank() {
  return useQuery({
    queryKey: ["getEnvRank"],
    queryFn: async () => getEnvRank(),
  });
}
