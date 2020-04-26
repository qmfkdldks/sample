import Spinner from "../components/spinner";

export default function withDataLoading(Component) {
  return ({ loading, data, ...others }) =>
    loading || !data ? <Spinner /> : <Component data={data} {...others} />;
}
