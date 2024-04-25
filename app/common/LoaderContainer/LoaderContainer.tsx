import { Loader } from "../Loader/Loader";
import { LoaderContainerProps } from "./types";

export function LoaderContainer({
  isLoading,
  children,
}: LoaderContainerProps) {
  return isLoading
    ? <Loader />
    : <>{children}</>
}