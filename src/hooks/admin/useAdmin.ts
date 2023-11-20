import { ERC721 } from "@prisma/client";
import { useEffect, useState } from "react";
import Axios, { AxiosError } from "axios";
import { useToast } from "@chakra-ui/react";

export const useAdmin = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const [data, setData] = useState<ERC721[]>();
  const [error, setError] = useState<any>();

  const toast = useToast();

  const refetch = async () => {
    try {
      setLoading(true);
      const AxiosResponse = await Axios.get("/api/nft");
      setData(AxiosResponse.data);
      setIsError(false);
      setError(null);
    } catch (e) {
      if (e instanceof AxiosError) {
        setIsError(true);
        setError(e);
      }
    } finally {
      setLoading(false);
    }
  };

  const createMutation = async (payload: ERC721) => {
    try {
      const AxiosResponse = await Axios.post("/api/nft/seed-nft", payload);
      setIsFetch(true);
      setIsError(false);
      setError(null);
      return toast({
        status: "success",
        title: "Created Metadata",
        description: "Success Created Metadata . . .",
      });
    } catch (e) {
      if (e instanceof AxiosError) {
        setIsError(true);
        setError(e);
        toast({
          status: "error",
          title: "Error Created NFT",
          description: `${e.response?.data.message}`,
        });
      }
    } finally {
      setIsFetch(false);
    }
  };

  const updateMutation = async (id: string, payload: ERC721) => {
    try {
      setIsFetch(true);
      const AxiosResponse = await Axios.put(`/api/nft/seed-nft/${id}`, payload);
      setIsError(false);
      setError(null);
    } catch (e) {
      if (e instanceof AxiosError) {
        setIsError(true);
        setError(e);
        toast({
          status: "error",
          title: "Error Created NFT",
          description: `${(e.status, e.message)}`,
        });
      }
    } finally {
      setIsFetch(false);
    }
  };

  const deleteMutation = async (id: string) => {
    try {
      setIsFetch(true);
      const AxiosResponse = await Axios.put(`/api/nft/seed-nft/${id}`);
      setIsError(false);
      setError(null);
    } catch (e) {
      if (e instanceof AxiosError) {
        setIsError(true);
        setError(e);
        toast({
          status: "error",
          title: "Error Created NFT",
          description: `${(e.status, e.message)}`,
        });
      }
    } finally {
      setIsFetch(false);
    }
  };

  useEffect(() => {
    refetch();
  }, [createMutation]);

  return {
    isLoading,
    isFetch,
    refetch,
    isError,
    error,
    data,
    createMutation,
    updateMutation,
    deleteMutation,
  };
};
