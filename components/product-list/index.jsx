import Component from "./component";
import withDataLoading from "../../lib/withDataLoading";

function mapDataToProps({ data }) {
  return <Component products={data.products.edges} />;
}

export default withDataLoading(mapDataToProps);
