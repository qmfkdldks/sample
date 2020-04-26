import Component from "./component";
import withDataLoading from "../../lib/withDataLoading";

function mapDataToProps({ data, ...others }) {
  return <Component categories={data.categories.edges} {...others} />;
}

export default withDataLoading(mapDataToProps);
