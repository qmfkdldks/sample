import Component from "./component";
import withDataLoading from "../../lib/withDataLoading";

function mapDataToProps({ data }) {
  return <Component {...data.shop} />;
}

export default withDataLoading(mapDataToProps);
